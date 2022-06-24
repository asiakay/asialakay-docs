---
slug: debugging-web3-react-frontend-application
authors: asiak
title: Debugging Web3 React Frontend Application
tags: [react, dev, solidity, web3, ethersjs]
---



Hey! 86% finished but I need help to get unstuck. Maybe another set of eyes can help me figure out what's missing here. 

As expected, the testnet shows that the smart contract, `WavePortal.sol` ...
<!--truncate-->

- Has been deployed   
- Has been funded 
- Has the functionality to store waves and messages
```JavaScript
    function getAllWaves() public view returns (Wave[] memory) {
    return waves;
 ```
    -   `const [allWaves, setAllWaves] = useState([]);`


As expected, the users of the React frontend application 
- Can connect to MetaMask
- Send transactions to the testnet smart contract 
    - Reads transactions (waves & messages) 
```JSX
const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();


        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let wavesCleaned = [];
        waves.forEach(wave => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          });
        });
```

And outputs to UI  

```JSX 
 {allWaves.map((wave, index) => {
          return (
            <div key={index} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px" }}>
              <div>Address: {wave.address}</div>
              <div>Time: {wave.timestamp.toString()}</div>
              <div>Message: {wave.message}</div>
            </div>)
```
    - Writes transactions (waves & messages) 
```JSX
            /*
         * Stores our data in React State
         */
        setAllWaves(wavesCleaned);
      } 
```

The console shows that the cooldown period seems to be working - it didn’t let me execute the wave and message before the 15 mins. 

The unexpected behavior is that the contract is 
- not paying out a winner 
- Only interacting between the same “from” and “to” addresses instead of randomly picking a new “to” address.

`npx hardhat run scripts/deploy.js --network rinkeby`

Outputs: 
```Bash
Deploying contracts with account:  0x1eD6025c5c6859337bFbe15Cd64b30FF88962605
Account balance:  214671596264291184
WavePortal address:  0x14Ec28bD84D953cA01E66cA67e79Df81D462dbE8
```
But…

`npx hardhat run scripts/run.js `

Outputs: 
```Bash
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Contract balance: 0.1
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 has waved
0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 has won the prize!
0x70997970c51812dc3a010c7d01b50e0d17dc79c8 has waved
Contract balance: 0.0999
```

What stands out is that:
- between the `run.js` and `deploy.js`, the contract addresses are not the same
- `deploy.js` shows the account balance of the contract deployer but not the contract balance 
- `run.js` shows the contract balance before and after the random prize

To fix the inconsistency, in deploy.js I tried:
- adding `console.log("Contract Balance: ", waveContract.getBalance);` to get the contract balance 

- redeployed contract 
1. 
```Bash
(base) @mbp my-wave-portal %npx hardhat run scripts/deploy.js --network rinkeby
Compiled 1 Solidity file successfully
Deploying contracts with account:  0x1eD6025c5c6859337bFbe15Cd64b30FF88962605
Account balance:  201594362804189060
WavePortal address:  0x99F800E7DA5748bddB17ADe162d57CF91953888F
```
2. updated (WavePortal) contractAddress in react app

3. updated ABI data 


---

Upgrading smart contracts

WHAT?
Upgrading smart contracts "allows you to iteratively add new features to your project, or fix any bugs you may find in production" 

Isn't that the beautiful thing about the blockchain? The idea that once it's there it can't be changed? What's there to prevent hackers from being malicious? 

"Whenever you deploy a new contract using deployProxy in the OpenZeppelin Upgrades Plugins, that contract instance can be upgraded later. By default, only the address that originally deployed the contract has the rights to upgrade it."

How is this done? 

1. Install the Hardhat Upgrades plugin (if using hardhat)
`npm install --save-dev @openzeppelin/hardhat-upgrades`

2. configure Hardhat to use the @openzeppelin/hardhat-upgrades plugin
```JSON
// hardhat.config.js
...
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
...
module.exports = {
...
};
```

3. create a script to deploy the contract using `deployProxy`
```JavaScript
// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
  await box.deployed();
  console.log('Box deployed to:', box.address);
}

main();
```

4. deploy the upgradeable contract
`npx hardhat run --network localhost scripts/deploy_upgradeable_box.js`
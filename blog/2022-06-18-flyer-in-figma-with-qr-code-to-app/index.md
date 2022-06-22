---
slug: flyer-in-figma-with-qr-code-to-app
authors: asiak
title: UX/UI Software Development Project for Earth Day Everyday Bottle Drive Fundraiser
tags: [ux/ui, dev, projects, react, figma]
---
## Intro ##

About a year ago, I came across a problem solving framework for solving JavaScript coding challenges. It's pronounced oy - chee and uses the letters O.I.C.E. to help remember the framework by using an acronym.  

Traditionally, the framework's acronym stands for the following:

- O: outcome 
- I: input
- C: conditions/concerns/complexities 
- E: examples/edge cases 

I've found that with some tweaking, the framework can be useful in other areas beyond solving coding challenges. 

For example, when moderating a session on a topic, it has proven to be a useful way to: 
- 1) keep the conversation on track 
- 2) summarize what's already been said (helping to avoid circular conversations) 
- 3) find/maintain focus on the desired outcome  

:::info
For more information on the O.I.C.E. framework, check out the Medium.com article 
[What’s OICE? Oh that’s niceee…
A Setup Framework to Technical Interviews and White Boarding](https://medium.com/@gsuppy/whats-oice-oh-that-s-niceee-1f4e5c9081ff) 
:::

## Project Planning ##

### Outcome ### 
Print flyer that: 
- Thanks employees for participating
- Presents qr code link to web application

Web application that: 
- Provides update on fundraiser
- Presents survey asking for input on next actions & suggestions
  
### Inputs: ### 
- Designed & printed flyer 
- QR code linking flyer to application 
- Info on what the funds are going towards 
- Info on how many items have been recycled
- Info on how much has been raised so far
- Form with: 
    - radio inputs allowing users to vote to continue the fundraiser
    - radio inputs allowing users to vote for a goal amount 
    - textarea to share comments, questions, and suggestions
    - submit button to handle form processing


### Concerns/Conditions: ### 
UX/UI should:
- Thank users for participation
- Reiterate the purpose of the fundraiser
- Be accessible to employees only
- Display the qr code large enough to be scanned easily


### Examples/EcoSystem/Tooling: ### 
Content
- [How to Write a Fundraiser Update](https://www.gofundme.com/c/fundraising-tips/update)


Technical Tools
- [Figma](https://www.figma.com/)
- [EPS to SVG Converter](https://cloudconvert.com/eps-to-svg)
- [Remove the background from images for free](https://www.adobe.com/express/feature/image/remove-background)
- [Create React App](https://create-react-app.dev/)
- [CSS Gradient Text Generator](https://www.cssportal.com/css-text-gradient-generator/)
- [CSS Gradient Background Generator](https://cssgradient.io/)
- [Chakra UI](https://chakra-ui.com/)
- [How to format dates in ReactJS](https://codesource.io/how-to-format-dates-in-reactjs/)
- [QR Code & Barcode Scanner](https://apps.apple.com/us/app/qr-code-barcode-scanner/id1048473097)
- [GitHub: code hosting platform for version control and collaboration](https://github.com/) 
- [Vercel: platform for frontend frameworks and static sites](https://vercel.com/docs)

---
## Project Development Log ## 

### Creating the UX & UI ###
- Met with reresentative stakeholders to discuss desired project outcomes and completion dates
- Designed the flyer in Figma using a [community template](https://www.figma.com/community/file/986663869082824557) with recommended print flyer dimensions (2100 x 2800)  
- Then for the web application, created a basic UI prototype in Figma 
- Next, created a new React Application 
`npx create-react-app bottle-drive-fundraiser`
- Manually installed ChakraUI 
    - With NPM `npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6`
    - Set up the `ChakraProvider` at the root of the application in `index.js`
        - 1. Imported `ChakraProvider` component
        - 2. Wrapped `ChakraProvider` at the root of the app
    - Installed Chakra UI icons 
        - `npm i @chakra-ui/icons`
        - imported selected icons in `App.js`
        - Used the `boxSize` prop to change the icon sizes
    - Created a React component for the form, `Form.js`  
        - For backend form processing and integration with third-party services (in this case, slack), installed [formspree](https://formspree.io/) with command `npm install @formspree/react`
        - added import statement, `import { useForm } from '@formspree/react';` to `Form.js` 
        - using React [useForm hook](https://react-hook-form.com/api/useform/) and event listeners to handle the change in form data's state.
        - Imported `Form.js` to the top of `App.js`
    - Created and imported `form.css` to access styles for form
    - ~~Installed Chakra UI Buttons~~
        - ~~`npm i @chakra-ui/button`~~
    - Added current date to application with Moment Library
    `npm install --save moment` [package info](https://www.npmjs.com/package/moment)
    - Uploaded to GitHub Repo
    - Deployed web application to Vercel for hosting
    - Created qr code linking to web application with the [QR Code & Barcode Scanner](https://apps.apple.com/us/app/qr-code-barcode-scanner/id1048473097) app on iphone.
    - Added qr code to flyer  


### Print Flyer Design minus QR Code ### 
![Thank You For Recycling](./Thanks%20for%20Recycling%20-%20Draft.jpg)

### Web Application Screenshot ###
![Web Application Screenshot](./bottle-drive-update%402x.jpg)

## Conclusion
As is, the deployment functions as expected, but there is more to be done. Will be following up this post with a documentation post on testing the web application for user accessibilty.  




<!-- 

NEXT STEPS: 
Test Accessibility

create UX Case Study
https://uxplanet.org/ux-portfolio-case-study-template-plus-examples-from-successful-hires-86d5b0faa2d6 -->

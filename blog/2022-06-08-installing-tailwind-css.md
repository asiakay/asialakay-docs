

"Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js."


`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

OUTPUTS:
```Bash
Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
```

"Add the paths to all of your template files in your tailwind.config.js file."

```JSON
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

"Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file."

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

"Run your build process with `npm run start`."








REFERENCES:
[Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)
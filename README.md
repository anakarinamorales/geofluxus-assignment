# Introduction

This is a code assignment using NextJS, TypeScript, Ant Design and the default ESLint rules from NextJS.

The app is a dahsboard that shows some data based on a select option.

# Behaviour/design choices I've made

For this assignment, I choose to initially have the app data as a constant. For that, I created a data type that matches what I found in the design. [This](https://github.com/anakarinamorales/geofluxus-assignment/blob/develop/src/utils/constants.ts#L50) is the current structure.

I also built a simple express server that works as an API endpoint, but I didn't plug it to the app in this version.

I choose to use as much as I could from Ant Design features and components. For that, I have a theme file that changes the Layout componet to be as in the design - I had to use some rules with ` !important` , but I kept them as minimal as possible for our own safety (and sanity).

Since I also had available the designs for the full report dashboard, I tried to prepare most of my current components to work with the full report version. They'll need some tweaks, but most of it will be just getting the remaining data and showing it in the component.

Now, about some design choices: some things on the design had no consistency (primary texts with different colors across pages, no consistent gap between report items). So, I took the liberty and picked the most common occurrence of each style for each type of element and used it across the app (we like consistency).

# Running the project

## Getting Started

Navigate to the repository folder and install the dependencies. You need to have node installed.

```bash
cd geofluxus-assignment
npm i
```

Now run the dev server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

## TODO

-   [ ] Change Select font style to match design
-   [ ] Change Text font style using the Layout component
-   [ ] Use pages router insted of app router, otherwhise we need to have ` use client` on our page because of ` ant design` package.
-   [ ] Add tests
-   [ ] Use report data from express server inside ` server` folder - or test ` msw` for that instead.
-   [ ] Add import order to lint rules
-   [ ] Fix lint command

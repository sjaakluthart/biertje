# Biertje

This project is an intake assignment for [Oberon](https://www.oberon.nl/). It allows the user to find a nearby brewery based on a postcode area. It uses [Postcode API](https://www.postcodeapi.nu) to find the city by postcode and displays all breweries for that city. The application also displays a list of beers from those breweries and allows the user to filter the list based on beer style.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

View the project on [GitHub pages](https://sjaakluthart.github.io/biertje/).

## Patterns used

This project consists of a [React](https://reactjs.org/) frontend with a [Redux](https://redux.js.org/) state container.

### Components

All components are as small or 'dumb' as possible, most of them have only one job. Render a list or a list item for example. This might be a little overkill for this project but this works quite well for larger applications. All components that use state data live in their own folder and have their own container component.

### Redux state

This project uses the ['ducks'](https://github.com/erikras/ducks-modular-redux) pattern. All the application's features are bundled in a single 'duck'. This way they are isolated from the rest of the application and can be bundled in an external module. A duck should only contain `action types`, `action creators`, `selectors` and a `reducer`. [Async action creators](https://github.com/reduxjs/redux-thunk) should live in a `operations` directory.

### Directory structure

- `assets` Application assets
- `components` React components
- `ducks` Redux ducks
- `operations` Operations, one file for each duck. In most cases a component will only have to import one of these methods.
- `app.jsx` React entry point. This file should contain any wrapper components like a router.
- `beers.json` and `breweries.json` Raw data. These are added to the Redux state with operations.
- `index.js` Entry point for [Create React App](https://github.com/facebook/create-react-app)
- `reset.css` Provides a blank canvas for application styles, see https://meyerweb.com/eric/tools/css/reset/
- `root-reducer.js` Combines all the duck reducers in a single `root` reducer.
- `store.js` Redux store setup
- `styles.css` Application styles

## Improvements

- Add more breweries and beers.
- Add a geolocation lookup based on postcode.
- Implement loaders for API requests.
- Add empty states.
- Connect `breweries` and `beers`. View all beers by a brewery for example.
- Add better styles for larger screens.

## Attribution

This project uses vector images from [the Noun Project](https://thenounproject.com/).

- [Beer by Smalllike from the Noun Project](https://thenounproject.com/icon/2239607/)
- [Clock by sasicreatives from the Noun Project](https://thenounproject.com/icon/2262057/)
- [Location by sasicreatives from the Noun Project](https://thenounproject.com/icon/2262016/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run eslint`

Run eslint. You will see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Deploy the project git GitHub pages.

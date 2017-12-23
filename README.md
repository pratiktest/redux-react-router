# redux-react-router

## What does this app do?

* this application is a very basic bare bone setup for getting started with redux and react
* webpack configures this application to serve from index.jsx in production
* webpack configures this application to server from /public/index.html in dev mode using webpack-dev-server
* this application has basic react router setup using browserRouter to route between two pages
* it includes basic redux todo app setup from redux official website. This app just emits actions and listens.
* app does not have any presentational components
* to view output do to developer tools of your browser and view the console output

## how to run
* npm install
* npm run build .. this will run webpack --config webpack.config.js and build bundle.js
* npm run start ..this will start express server -> node /server/index.js
* npm run devstart .. this will start webpack-dev-server and will send back bundle.js. Note webpack-dev-server will create its own internal bundle.js which will not be placed in output folder

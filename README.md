# Life Quality Data (OECD)
## Description
Life Quality Data is a web application which shows data of OECD countries.

It's powered by React and uses the official OECD API.

## Instructions
1. Clone or download the repository and run `npm install` to get the required dependencies.
2. Run `npm start` to start local server.

If you want to build for production: `npm run build`

## Live
You can check a live demo at this link: https://life-quality-data.firebaseapp.com/.

## How it works
The app is coded in [React](https://facebook.github.io/react/) and uses [react-router](https://github.com/ReactTraining/react-router) for routing.

[jvectormap](https://github.com/bjornd/jvectormap) provides the world map and countries' data is retrieved with a GET request to the [OECD API](https://data.oecd.org/api/).

## Disclaimer
This project is **not** affiliated with OECD itself.

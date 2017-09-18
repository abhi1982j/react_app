# Project Emerald

## Quick Start: 
### Local Development

In the Terminal or equivalent program, navigate to the folder which you want the files to be, and then run the following commands.

```
git clone https://github.com/abhi1982j/react_app.git
cd react_app
npm install
npm run dev
```
Finally, open up your browser and go to http://localhost:9999


## Environments

### Sapient Environment
Sapient QA : http://mkqa.sapient.com:3333/
Sapient DEV: http://10.207.16.148:3333/
Sapient CI : http://10.207.16.159:3333/
NOTE: to access Sapient Environment , you should be on Sapient Netowrk (or VPN).

### Michael Kors Environment
MK SIT : http://sit1.michaelkors.com/
NOTE: to access MK Environment , you should be on MK Netowrk (or Sparkred VPN).


## Features:
- ~~isomorphic~~ [**universal**](https://medium.com/@ghengeveld/isomorphism-vs-universal-javascript-4b47fb481beb#.4x2t3jlmx) Rendering
- [**Redux**](https://github.com/reactjs/redux) Predictive state containers.
- Server-side rendering with [**React Router**](https://github.com/reactjs/react-router) 2.x. Having server-side rendering allows you to pre-render the initial state of your components when a user (or search engine crawler) requests a page.
- Integrating Redux with React Router with ~~Redux Simple Router~~ [React Router Redux](https://github.com/reactjs/react-router-redux)
- Asynchronous Data Fetching on server-side rendering
- Server side authentication + Redirecting for components
- Hot reloading using [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr)
- Time travel using [**Redux-Devtools Chrome Extension**](https://github.com/zalmoxisus/redux-devtools-extension)
- [**Webpack**](https://github.com/webpack/webpack) for both development and production bundles. It's (in my opinion) the best bundler for JS, CSS, LESS, images, and lots more!
- [**CSS Modules**](https://github.com/css-modules/css-modules) allows for modular and reusable CSS. Say goodbye to conflicts (most of them) and global scope

- **Unit Tests** with webpack, karma, jsdom, mocha, & sinon
  - Reducers
  - Components
  - Synchronous and Asynchronous Actions

- Express 4.x server with a ton of middleware



### Why Redux

- a single store
- state being read-only (you have to express an intent to mutate being creating actions)
- mutations written as pure functions

make it very fun and easy to write **predictable** code! There's a ton of reasons why, but you should head to the [Redux docs](http://redux.js.org/index.html) to dive in!

Or if you are more of a *visual learner* watch the free egghead video series narrated by the creator of redux:

1. [Getting Started](https://egghead.io/series/getting-started-with-redux)
2. [Building Idiomatically](https://egghead.io/series/building-react-applications-with-idiomatic-redux)

### Data Flow

```Experience Assembler  -> API Aggregator -> ENDECA / ATG```

### A simplistic representation of data flow from server to client is:

```
Express app.use() receives a request
-> Calls a pre-built webpack file for the server
-> Runs matching of routes in react-router for server
-> Makes async data fetching request
-> Renders Route component to string
-> Construct HTML file (with Meta, Link tags using helmet)
-> Browser receives html file with initial state
-> Client side React.JS kicks in and initializes with given state
```

### Unit Tests

Testing with:
- `karma` as test runner
  - `karma.conf.js` for the main karma configuration (it has webpack configurations)
  - `tests.webpack.js` which is the single entry file. It uses `webpack`'s require API to find all the files we need that have a `-test.js` suffix.
- `mocha` as the test framework
- `jsdom` as my test environment

```bash
#### Run test once
npm test

#### Run in watch mode
npm test:watch
```
Unit tests for async (redux) actions, reducers, and components.

## Local Development

Development is a breeze. Once you have installed all your dependencies all the configuration is done for you. using simple The process is outlined below
```
1. Checkout the respective branch from mk-web repo
2. Execute ‘npm install’
3. To start the server execute ‘npm run server ENV_<XX>’ , where XX could be CI, QA, DEV or SIT , for SIT you should be on MK VPN
4. Update API-Aggregator URL in line #17 in mk-web\server\config\appConfig.js
5. Access the following URL in the browser. http://localhost:3333/
```

## Build and Deployment
```
1. Checkout/Update the respective branch from mk-web repo
2. Execute ‘npm install’ or 'npm update'
3. for Build execute : 'npm run build'
4. Copy the following artifcates to create a packet : package.json, compiled, public, server, node_modules, pm2config.json
5. kill the existing mk-web pm2 process
6. execute below command to start the server : pm2 start --env 'development' pm2config.json
7. Access the following URL in the browser. http://ipaddressofenv:3333/
```

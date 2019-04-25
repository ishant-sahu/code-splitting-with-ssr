import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as syncRoute from '../src/routes/sync-routes';

const data = window.__INITIAL_DATA__;
delete(window.__INITIAL_DATA__);
const splitPoints = window.splitPoints || [];

const renderApp = () => {
  const App = require("../src/components/App").default;
  ReactDOM.hydrate(
    <BrowserRouter>
    <App data={data} />
  </BrowserRouter>,
  document.getElementById("root")
  );
};



if(splitPoints.length == 0) 
  renderApp();
else{
  Promise.all(splitPoints.map(chunk => syncRoute[chunk].loadComponent()))
  .then(() => {
    renderApp();
  });
}


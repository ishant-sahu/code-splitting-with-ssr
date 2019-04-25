import express from "express";
import React from "react";
import cors from "cors";
import { renderToString } from "react-dom/server";
import { matchPath, StaticRouter } from "react-router-dom";
import App from "../src/components/App";
import serialize from "serialize-javascript";
import webpackAssets from '../assets.json';
var path = require('path')
var favicon = require('serve-favicon');


import routes from "../src/routes/routes";
const app = express();

app.use(cors());
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static("dist"));

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then(response => {
      const data =
        response && response.data && response.data.items
          ? response.data.items
          : null;
      const context = {
        splitPoints: [], // Create an empty array
      };
         
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App data={data} />
        </StaticRouter>
      );
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
          </head>

          <body>
            <div id="root">${markup}</div>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            <script>window.splitPoints=${JSON.stringify(context.splitPoints)}</script>
            <script src=${webpackAssets.main.js}></script>
            
          </body>
        </html>
      `);
    })
    .catch(next);
});

app.listen(4500, () => {
  console.log("listening at 4500");
});

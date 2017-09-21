import Express from 'express';
import compression from 'compression';

import bodyParser from 'body-parser';
import path from 'path';


import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Initialize the Express App
const app = new Express();
/*eslint-disable no-undef*/
if (process.env.NODE_ENV === 'development') {
/*eslint-disable no-undef*/
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import reducers from '../client/reducers';

import routes from '../client/routes';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, './client')));





const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="${process.env.NODE_ENV === 'production' ? '/client/styles.css': '/styles.css'}">
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.script.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? '/client/vendor.js' : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? '/client/app.js': '/app.js'}'></script>
      </body>
      </body>
    </html>
  `;
};

const store = createStore(reducers, applyMiddleware(thunk));

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });

  Promise.all(promises).then(() => {
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>)
    res
      .set('Content-Type', 'text/html')
      .status(200)
      .end(renderFullPage(content, store.getState()));
      })
      .catch((error) => next(error));
  });

// start app
app.listen(8000, (error) => {
  if (!error) {
    console.log(`Mii is running on port: ${8000}!`); // eslint-disable-line
  }
});

export default app;

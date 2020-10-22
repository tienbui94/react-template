import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import loadable from 'utils/loadable';

import './App.css';

const HomePage = loadable(() => import('pages/HomePage'));
const NotFoundPage = loadable(() => import('pages/NotFoundPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - AVI ReactJS Skeleton"
        defaultTitle="AVI ReactJS Skeleton"
      >
        <meta name="description" content="AVI ReactJS Skeleton application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'redux/configureStore';
import App from './App';
import 'sanitize.css/sanitize.css';

import * as serviceWorker from './serviceWorker';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

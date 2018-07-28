/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import CreateStore from './Store/Store';
import Routes from './Config/Routes';
import registerServiceWorker from './registerServiceWorker';

const store = CreateStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

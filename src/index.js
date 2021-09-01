import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './client/components/App';
import techniqueReducer from './client/components/store/reducers.js';

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

function createReduxStore() {
  const store = createStore(techniqueReducer, enableReduxDevTools);
  return store;
}

ReactDOM.render(
  <Provider store={createReduxStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

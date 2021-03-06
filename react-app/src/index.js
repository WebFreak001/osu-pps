import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { fetchMappersData } from 'reducers/mappers';
import { fetchMapsData } from 'reducers/mapsData';
import { fetchMetadata } from 'reducers/metadata';

import './index.css';
import App from 'components/App';
import { store } from 'reducers';

store.dispatch(fetchMappersData());
store.dispatch(fetchMapsData());
store.dispatch(fetchMetadata());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

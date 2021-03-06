import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import mapsData from 'reducers/mapsData';
import metadata from 'reducers/metadata';
import mappers from 'reducers/mappers';

const rootReducer = combineReducers({
  mapsData,
  metadata,
  mappers,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__({
          stateSanitizer: state =>
            state.mapsData.data.length
              ? {
                  ...state,
                  mapsData: { ...state.mapsData, data: '<<LONG_BLOB>>' },
                }
              : state,
        })
      )
    : applyMiddleware(thunk)
);

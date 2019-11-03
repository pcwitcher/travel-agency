import {combineReducers, createStore} from 'redux';
import tripList from '../data/trips.json';

import globalReducer from './globalRedux';
import filtersReducer from './filtersRedux';

// define initial state and shallow-merge initial data
const initialState = {
  trips: tripList,
  countries: {},
  regions: {},
  subregions: {},
  tags: {},
  filters: {
    searchPhrase: '',
    tags: [],
    duration: {
      from: 1,
      to: 14,
    },
  },
};

// define reducers
const reducers = {
  filters: filtersReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const combinedReducers = combineReducers(reducers);

// merge all reducers with globalReducer
const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { createStore, applyMiddleware } from 'redux';
import search from './reducers/search';
import thunk from 'redux-thunk';

const store = createStore(
  search,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;

import { createStore, applyMiddleware } from 'redux';
import search from './reducers/search';
import thunk from 'redux-thunk';

const store = createStore(
  search,
  applyMiddleware(thunk)
);

export default store;

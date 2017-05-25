import { combineReducers } from 'redux';
import results from './results';
import search from './search';

const rootReducer = combineReducers({
  results,
  search
});

export default rootReducer

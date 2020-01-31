import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const rootReducers = combineReducers({
  books,
  filter,
});

export default rootReducers;

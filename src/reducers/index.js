// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import books from './books';

const rootReducers = combineReducers({
  books,
});

export default rootReducers;

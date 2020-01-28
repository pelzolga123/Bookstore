import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './component/App';
import rootReducer from './reducers/index';

const BOOKS = {
  books: [
    {
      id: 0,
      title: 'Test One',
      category: 'Sci-Fi',
    },
    {
      id: 1,
      title: 'Test Two',
      category: 'Fantasy',
    },
  ],

};

const store = createStore(rootReducer, BOOKS);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

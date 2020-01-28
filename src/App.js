import React from 'react';
import './App.css';
import BookList from './component/booklist';
import BooksForm from './component/BooksForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;

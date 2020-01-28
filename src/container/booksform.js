import React from 'react';

const category = ['Action', 'Classic', 'Drama', 'Fantasy', 'Sci-Fi', 'Legend'];
const options = category.map(item => <option key={item}>{item}</option>);

const BooksForm = () => (
  <div>
    <form>
      <input type="text" placeholder="Title" />
      <select>{options}</select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BooksForm;

import React from 'react';

const category = ['Action', 'Classic', 'Drama', 'Fantasy', 'Sci-Fi', 'Legend'];
const options = category.map(item => <option key={item}>{item}</option>);

const BooksForm = () => (
  <div>
    <form className="input-group">
      <input className="w-50" type="text" placeholder="Title" />
      <select className="custom-select ml-3">{options}</select>
      <button type="submit" className="btn btn-primary ml-2">Add Book</button>
    </form>
  </div>
);

export default BooksForm;

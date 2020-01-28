import React from 'react';

const BookList = () => (
  // design a table.
  <div className="main">
    <h1>Bookstore</h1>
    <table>
      <thead>
        <th>Book name</th>
        <th>Book category</th>
      </thead>
      <tbody>{rows}</tbody>
    </table>

  </div>
);

export default BookList;

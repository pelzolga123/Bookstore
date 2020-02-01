import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr className="book-container">
    <th className="book-category">{book.category}</th>
    <th className="book-title">{book.title}</th>
    <th className="remove-book">
      <button type="button" onClick={handleRemoveBook}>Remove Book</button>
    </th>
  </tr>
);
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
};

export default Book;

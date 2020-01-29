import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <th scope="col">{book.id}</th>
    <th scope="col">{book.title}</th>
    <th scope="col">{book.category}</th>
    <th>
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

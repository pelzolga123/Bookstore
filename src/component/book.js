import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <th scope="col">{book.id}</th>
    <th scope="col">{book.title}</th>
    <th scope="col">{book.category}</th>
  </tr>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;

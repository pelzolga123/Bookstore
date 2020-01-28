import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { id, title, category } = props;
  return (
    <tbody>
      <th scope="col">{id}</th>
      <th scope="col">{title}</th>
      <th scope="col">{category}</th>
    </tbody>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';

const BookList = props => {
  const { book } = props;
  return (
    <div className="main">
      <h1>Bookstore</h1>
      <table className="table">
        <thead className="thead-dark">
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
        </thead>
        <tbody>{book}</tbody>
      </table>

    </div>
  );
};


BookList.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string,
      Title: PropTypes.string,
      Category: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default BookList;

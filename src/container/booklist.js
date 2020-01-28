import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../component/book';

const BookList = props => {
  const { books } = props;
  return (
    <div className="main">
      <h1>Bookstore</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>{books.map(book => <Book key={book.id} book={book} />)}</tbody>
      </table>

    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});


BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number,
      Title: PropTypes.string,
      Category: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(BookList);

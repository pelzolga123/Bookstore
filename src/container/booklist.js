/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../component/book';
import { removeBook } from '../actions/index';

class BookList extends React.Component() {
  constructor(props) {
    super(props);
    this.handleBookRemove = this.handleBookRemove.bind(this);
  }

  handleBookRemove(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  render() {
    const { books } = this.props;
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
          <tbody>{books.map(book => <Book handleBookRemove={() => this.handleRemoveBook(book)} key={book.id} book={book} />)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.number,
      Title: PropTypes.string,
      Category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../component/book';
import { removeBook, filterBook } from '../actions';
import CategoryFilter from '../component/categoryFilter';
import filtered from '../helper/filter';


class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book);
  }

  handleFilterChange(e) {
    const { filterBook } = this.props;
    filterBook(e.target.value);
  }

  render() {
    const { books, filter } = this.props;
    return (
      <div className="main">
        <div className="border-header">
          <div className="outer-header">
            <div className="header">
              <h1 className="main-header">Bookstore CMS</h1>
              <span>BOOKS</span>
              <div>
                <CategoryFilter handleFilterChange={this.handleFilterChange} />
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <tbody>{filtered(books, filter).map(book => (<Book key={book.id} book={book} handleRemoveBook={() => this.handleRemoveBook(book)} />))}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterBook: filter => dispatch(filterBook(filter)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

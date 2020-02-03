import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import options from '../helper/options';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleBookChange = this.handleBookChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }

  handleBookChange(e) {
    const names = e.target.name;
    this.setState({
      [names]: e.target.value,
    });
  }

  handleBookSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const book = { ...this.state, id: Math.floor(Math.random() * 100) };
    createBook(book);
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="new-book">
        <span> ADD NEW BOOK </span>
        <form className="input-group" onSubmit={this.handleBookSubmit}>
          <input required name="title" value={title} onChange={this.handleBookChange} className="w-50" type="text" placeholder="Title" />
          <select name="category" value={category} onChange={this.handleBookChange} className="custom-select ml-3">
            <option defaultValue>Choose...</option>
            {options}
          </select>
          <button type="submit" className="btn btn-primary ml-2">ADD BOOK</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);

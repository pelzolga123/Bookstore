import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';


const category = ['Action', 'Classic', 'Drama', 'Fantasy', 'Sci-Fi', 'Legend'];
const options = category.map(item => <option key={item} value={item}>{item}</option>);

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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleBookSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook(title, category);
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div>
        <form className="input-group">
          <input value={title} onChange={this.handleBookChange} className="w-50" type="text" placeholder="Title" />
          <select value={category} onChange={this.handleBookChange} className="custom-select ml-3">
            <option defaultValue>Choose...</option>
            {options}
          </select>
          <button type="submit" className="btn btn-primary ml-2">Add Book</button>
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

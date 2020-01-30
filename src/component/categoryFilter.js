import React from 'react';
import PropTypes from 'prop-types';


const category = ['Action', 'Classic', 'Drama', 'Fantasy', 'Sci-Fi', 'Legend'];
const options = category.map(item => <option key={item} value={item}>{item}</option>);

const CategoryFilter = props => {
  const { handleBookChange } = props;
  return (
    <div>
      <select onChange={handleBookChange} className="custom-select ml-3">
        <option value="All_Books">All Books</option>
        {options}
      </select>
    </div>
  );
};


CategoryFilter.propTypes = {
  handleBookChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

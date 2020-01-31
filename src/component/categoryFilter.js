import React from 'react';
import PropTypes from 'prop-types';
import options from '../helper/options';


const CategoryFilter = props => {
  const { handleFilterChange } = props;
  return (
    <div>
      <select onChange={handleFilterChange} className="custom-select ml-3">
        <option value="All_Books">All Books</option>
        {options}
      </select>
    </div>
  );
};


CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

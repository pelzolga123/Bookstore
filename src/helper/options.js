import React from 'react';

const category = ['Action', 'Classics', 'Drama', 'Fantasy', 'Sci-Fi', 'Legend'];
const options = category.map(item => <option key={item} value={item}>{item}</option>);

export default options;

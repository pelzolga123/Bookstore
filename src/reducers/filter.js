const filterBooks = (state = 'All_Books', action) => {
  switch (action.type) {
    case 'FILTER_BOOK':
      return action.filter;
    default:
      return state;
  }
};

export default filterBooks;

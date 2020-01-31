const filtered = (books, filter) => {
  if (filter === 'All_Books') {
    return books;
  }
  return books.filter(book => book.category === filter);
};

export default filtered;

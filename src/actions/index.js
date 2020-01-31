const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

const filterBook = filter => ({
  type: 'FILTER_BOOK',
  filter,
});

export { createBook, removeBook, filterBook };

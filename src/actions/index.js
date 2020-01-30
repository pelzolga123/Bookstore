const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

const filterBook = book => ({
  type: 'FILTER_BOOK',
  payload: book,
});

export { createBook, removeBook, filterBook };

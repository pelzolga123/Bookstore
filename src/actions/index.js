const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book.id,
  title: book.title,
  category: book.category,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

export { createBook, removeBook };

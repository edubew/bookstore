const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';

const initialState = {
  books: [],
};

// Add Reducers
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state.books,
        books: action.payload,
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

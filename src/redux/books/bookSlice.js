import { v4 as uuidv4 } from 'uuid';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fTVe6hSKCBLfTOyQqdDN/books';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const FETCH_BOOKS = 'bookstore/books/fetchBooks';

const initialState = [];

// Add Reducers
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return action.payload;

    case `${FETCH_BOOKS}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    id: uuidv4(),
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

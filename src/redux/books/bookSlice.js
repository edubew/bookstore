import { createAsyncThunk } from '@reduxjs/toolkit';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fTVe6hSKCBLfTOyQqdDN/books';

const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
const FETCH_BOOKS = 'bookstore/books/fetchBooks';

const initialState = [];

// Add Reducers
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return state.concat(action.meta.arg);

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
      return state.filter((book) => book.item_id !== action.payload.id);
    default:
      return state;
  }
}

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const response = await fetch(BOOKS_URL);
  const data = await response.json();
  return data;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(BOOKS_URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json',
    },
  });
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${BOOKS_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return { id };
});

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  try {
    const response = await axios.get(BOOKS_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  try {
    await axios.post(BOOKS_URL, {
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (err) {
    return Promise.reject(err);
  }
})

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${BOOKS_URL}/${id}`)
});

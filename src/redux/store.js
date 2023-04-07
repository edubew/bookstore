import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

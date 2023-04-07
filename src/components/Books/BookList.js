import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputBook from './InputBook';
import Book from './Book';
import { fetchBooks } from '../../redux/books/bookSlice';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const addedBooks = useSelector((state) => state.books);

  return (
    <div>
      {addedBooks.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
        />
      ))}
      <InputBook />
    </div>
  );
};

export default BookList;

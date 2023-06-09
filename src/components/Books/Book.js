import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/bookSlice';

const Book = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();

  const deleteBook = () => dispatch(removeBook(id));

  return (
    <article className="book__container">
      <div className="book__content">
        <small>Fictional</small>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="cta__container">
          <button type="submit">Comments</button>
          <button type="submit" onClick={deleteBook}>
            Remove
          </button>
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="progress__container">
        <div className="circle" />
        <div className="percentage">
          <h1>98%</h1>
          <p>Completed</p>
        </div>
      </div>
      <div className="update__container">
        <p className="current__chapter">CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="submit" className="progress__btn">
          UPDATE PROGRESS
        </button>
      </div>
    </article>
  );
};

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

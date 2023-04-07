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
      <small>Fictional</small>
      <h2>{title}</h2>
      <p>{author}</p>
      <div className="cta__container">
        <button type="submit">Comments</button>
        <button type="submit" onClick={deleteBook}>Remove</button>
        <button type="submit">Edit</button>
      </div>
    </article>
  );
};

export default Book;

// Book.defaultProps = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   id: PropTypes.string,
// };

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

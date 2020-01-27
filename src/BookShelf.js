import React from "react";
import ListBooks from "./ListBooks";
import PropTypes from "prop-types";
/*
This is a stateless functional component because this components does not keep track of internal state.
*/

const BookShelf = props => {
  const { category, allBooks } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{category}</h2>
      <ListBooks onChangeBookShelf={props.onChangeBookShelf} books={allBooks} />
    </div>
  );
};

BookShelf.propTypes = {
  allBooks: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
};
export default BookShelf;

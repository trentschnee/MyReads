import React from "react";
import ListBooks from "./ListBooks";

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
export default BookShelf;

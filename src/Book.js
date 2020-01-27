import React from "react";
import SelectBook from "./SelectBook";
import PropTypes from "prop-types";

/*
This is a stateless functional component because this components does not keep track of internal state.
*/

const Book = props => {
  const { title, authors, imageLinks } = props.book;
  const thumbnail = imageLinks ? imageLinks.thumbnail : "";
  const authorIs = authors ? authors.join(" & ") : "";
  const { book } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + thumbnail + ")"
          }}
        ></div>
        <SelectBook book={book} onChangeBookShelf={props.onChangeBookShelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authorIs}</div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
};
export default Book;

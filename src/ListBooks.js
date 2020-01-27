import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

/*
This is a stateless functional component because this components does not keep track of internal state.
*/

const ListBooks = props => {
  /**This variable displays an updated list of the books with their associated shelf if there is no books prop.
   * The books prop is the default prop the BookShelf component calls.
   * Therefore, this variable will return a different object, depending on the component it is called from.**/
  const books = props.books
    ? props.books
    : props.queriedBooks.map(queriedBook => {
        props.allBooks.map(foundBook => {
          if (foundBook.id === queriedBook.id) {
            queriedBook.shelf = foundBook.shelf;
          }
          return foundBook;
        });
        return queriedBook;
      });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books &&
          books.map((book, index) => (
            <Book
              onChangeBookShelf={props.onChangeBookShelf}
              key={book.id}
              book={book}
            />
          ))}
      </ol>
    </div>
  );
};

ListBooks.propTypes = {
  onChangeBookShelf: PropTypes.func.isRequired,
  books: PropTypes.array,
  queriedBooks: PropTypes.array,
  allBooks: PropTypes.array
};

export default ListBooks;

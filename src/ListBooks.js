import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class ListBooks extends Component {
  render() {
    /**This variable displays an updated list of the books with their associated shelf if there is no books prop.
     * The books prop is the default prop the BookShelf component calls.
     * Therefore, this variable will return a different object, depending on the component it is called from.**/
    const books = this.props.books
      ? this.props.books
      : this.props.queriedBooks.map(queriedBook => {
          this.props.allBooks.map(foundBook => {
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
                onChangeBookShelf={this.props.onChangeBookShelf}
                key={book.id}
                book={book}
              />
            ))}
        </ol>
      </div>
    );
  }
}
ListBooks.propTypes = {
  books: PropTypes.array.isRequired
};

export default ListBooks;

import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class ListBooks extends Component {
  render() {
    const { books } = this.props;
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

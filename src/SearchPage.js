import React, { Component } from "react";
import ListBooks from "./ListBooks";
import SearchBooksBar from "./SearchBooksBar";
import * as BooksAPI from "./BooksAPI";
class SearchPage extends Component {
  state = {
    queriedBooks: []
  };
  searchBooks = query => {
    BooksAPI.search(query).then(results => {
      if (results) this.setState({ queriedBooks: results });
      else {
        this.setState({ queriedBooks: [] });
      }
    });
  };
  render() {
    const {allBooks} = this.props;
    const {queriedBooks} = this.state;
    return (
      <div>
        <SearchBooksBar searchBooks={this.searchBooks} />
        {this.state.queriedBooks.error ? (
          <div className="search-books-results">
            <p>No results found.</p>
          </div>
        ) : (
          <ListBooks
            onChangeBookShelf={this.props.onChangeBookShelf}
            queriedBooks={queriedBooks}
            allBooks={allBooks}
          />
        )}
      </div>
    );
  }
}
export default SearchPage;

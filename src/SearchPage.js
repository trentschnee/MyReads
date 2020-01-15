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
    // BooksAPI.search((query)
    // .then(this.setState(({

    // })))
    // )
  };
  render() {
    return (
      <div>
        <SearchBooksBar searchBooks={this.searchBooks} />
        {this.state.queriedBooks.error ? (
          <div className="search-books-results">
            <p>No results found.</p>
          </div>
        ) : (
          <ListBooks books={this.state.queriedBooks} />
        )}
      </div>
    );
  }
}
export default SearchPage;

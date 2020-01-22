import React, { Component } from "react";
import { Link } from "react-router-dom";
class SearchBooksBar extends Component {
  state = {
    query: ""
  };
  onInputChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
    this.props.searchBooks(value);
  };
  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}
export default SearchBooksBar;

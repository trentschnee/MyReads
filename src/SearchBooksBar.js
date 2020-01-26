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
    const {query} = this.state;
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">

          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}
export default SearchBooksBar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SearchBooksBar extends Component {
  // Create a state called query. This will be whatever we input into the search bar.
  state = {
    query: ""
  };
  /*This method will set the query state with whatever value is provided.
  It will then call the searchBooks prop, which invokes the searchBooks method from the SearchPage component.*/
  onInputChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
    this.props.searchBooks(value);
  };
  render() {
    const { query } = this.state;
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
SearchBooksBar.propTypes = {
  searchBooks: PropTypes.func.isRequired
};
export default SearchBooksBar;

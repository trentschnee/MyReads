import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
class SelectBook extends Component {
  state = {
    changeValue: ""
  };
  componentDidMount() {
    BooksAPI.get(this.props.book.id).then(book => {
      this.setState({ changeValue: book.shelf });
    });
  }
  handleBookShelfChange = event => {
    const { value } = event.target;
    const book = this.props.book;
    this.props.onChangeBookShelf(book, value);
    this.setState({ changeValue: value });
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.changeValue}
          onChange={this.handleBookShelfChange}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default SelectBook;

import React, { Component } from "react";
import PropTypes from "prop-types";
class SelectBook extends Component {
  state = {
    changeValue: ""
  };
  componentDidMount() {
    return this.props.book.shelf === undefined
      ? this.setState({ changeValue: "none" })
      : this.setState({ changeValue: this.props.book.shelf });
  }
  handleBookShelfChange = event => {
    const { value } = event.target;
    const book = this.props.book;
    this.props.onChangeBookShelf(book, value);
    this.setState({ changeValue: value });
  };
  render() {
    const {changeValue} = this.state;
    return (
      <div className="book-shelf-changer">
        <select
          value={changeValue}
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

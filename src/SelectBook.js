import React, { Component } from "react";
import PropTypes from "prop-types";
class SelectBook extends Component {
  // This state holds the value of the shelf the book is associated with.
  state = {
    changeValue: ""
  };
  /**
  This method will change the shelf value to "none" if the value is undefined.
  If a value is defined, it will change the shelf value to the one passed from the Book component via props.  
  **/

  componentDidMount() {
    const { book } = this.props;
    return book.shelf === undefined
      ? this.setState({ changeValue: "none" })
      : this.setState({ changeValue: book.shelf });
  }
  /**This method is called when the selection value changes.
    It will call the onChangeBookShelf prop, which invokes the handleChangeShelf method defined in the App.
    Lastly, this method will set the state to the changeValue state to the shelf that has been selected.
   **/
  handleBookShelfChange = event => {
    const { value } = event.target;
    const book = this.props.book;
    this.props.onChangeBookShelf(book, value);
    this.setState({ changeValue: value });
  };
  render() {
    const { changeValue } = this.state;
    return (
      <div className="book-shelf-changer">
        <select value={changeValue} onChange={this.handleBookShelfChange}>
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

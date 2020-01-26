import React, { Component } from "react";
import SelectBook from "./SelectBook";
class Book extends Component {
  render() {
    const { title, authors, imageLinks } = this.props.book;
    const thumbnail = imageLinks ? imageLinks.thumbnail : "";
    const authorIs = authors ? authors.join(" & ") : "";
    const {book} = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + thumbnail + ")"
            }}
          ></div>
          <SelectBook
            book={book}
            onChangeBookShelf={this.props.onChangeBookShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authorIs}</div>
      </div>
    );
  }
}

export default Book;

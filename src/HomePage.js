import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
class HomePage extends Component {
  render() {
    const {allBooks} = this.props;
    const bookShelfCategories = [
      {
        name: "Currently Reading",
        key: "currentlyReading"
      },
      {
        name: "Want To Read",
        key: "wantToRead"
      },
      {
        name: "Read",
        key: "read"
      }
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookShelfCategories.map(category => (
              <BookShelf
                category={category.name}
                onChangeBookShelf={this.props.onChangeBookShelf}
                allBooks={allBooks.filter(
                  book => book.shelf === category.key
                )}
                shelf={category.name}
              />
            ))}
          </div>
        </div>
        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </div>
    );
  }
}
export default HomePage;

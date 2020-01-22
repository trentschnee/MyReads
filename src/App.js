import React from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import SearchPage from "./SearchPage";
import * as BooksAPI from "./BooksAPI";
import { Route, Link } from "react-router-dom";
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

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    showSearchPage: false
  };
  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        allBooks: books
      });
    });
  };
  componentDidMount() {
    this.getBooks();
  }

  handleChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
    });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              allBooks={this.state.allBooks}
              onChangeBookShelf={this.handleChangeShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {bookShelfCategories.map(category => (
                    <BookShelf
                      category={category.name}
                      onChangeBookShelf={this.handleChangeShelf}
                      allBooks={this.state.allBooks.filter(
                        book => book.shelf === category.key
                      )}
                      shelf={category.name}
                    />
                  ))}
                </div>
              </div>
              <Link to="/search" className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>
                  Add a book
                </button>
              </Link>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

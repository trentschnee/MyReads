import React from "react";
import "./App.css";

import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    allBooks: []
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
            <HomePage
              onChangeBookShelf={this.handleChangeShelf}
              allBooks={this.state.allBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

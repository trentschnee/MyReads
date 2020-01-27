import React from "react";
import "./App.css";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  // This state hold all books in an array.
  state = {
    allBooks: []
  };
  // The getBooks method will get all books via the API and store it in our allBooks state.
  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        allBooks: books
      });
    });
  };
  // componentDidMount is invoked immediately after the component is mounted. This will call our getBooks method.
  componentDidMount() {
    this.getBooks();
  }
  // This method will update the Books api and then update our allBooks state after.
  handleChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
    });
  };
  render() {
    const { allBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              allBooks={allBooks}
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
              allBooks={allBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

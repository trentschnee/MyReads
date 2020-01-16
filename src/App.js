import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./BookShelf";
import SearchPage from "./SearchPage";
import * as BooksAPI from "./BooksAPI";
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
    // TODO: update the state of the book selected to the state
    BooksAPI.update(book, shelf).then(resp => {
      console.log(resp);
      this.getBooks();
    });
  };
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onChangeBookShelf={this.handleChangeShelf} />
        ) : (
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
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;

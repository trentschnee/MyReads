# MyReads Project

MyReads is a simple web application which allows anyone to interactively add or remove books to a bookshelf.

## Installing

Clone the GitHub repository to your directory of choice. Then install all dependencies by running the following command:

```
$ git clone https://github.com/trentschnee/reactnd-project-myreads-starter.git
$ cd reactnd-project-myreads-starter
$ npm install
$ npm start
```

## Running

Run the development server with live reload by running the following command:

```
$ npm start
```
If for some reason a browser doesn't open after you run the command, http://localhost:3000 is the link your development server.

## Building

Build the MyReads project for production by running the following command:

```
$ npm run build
```

## Backend Server

Udacity provides a Backend server for you to develop with. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License

This project is licensed under the MIT License - see the LICENSE file for details

import React, {Component} from 'react';
import Book from './Book';
class ListBooks extends Component{
    render(){
        return(
<div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.books.map((book, index)=><Book key={index} book={book}/>)}
                    </ol>
                  </div>

        )
    }
}
export default ListBooks;
import React, {Component} from 'react';
import ListBooks from './ListBooks';
class BookShelf extends Component{
    render(){
        const { category, allBooks } = this.props;
        return(<div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <ListBooks books={allBooks} />
      </div>)
    }
}
export default BookShelf;
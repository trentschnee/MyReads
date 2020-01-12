import React, {Component} from 'react';
class BookShelf extends Component{
    render(){
        const { category } = this.props;
        return(<div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        
      </div>)
    }
}
export default BookShelf;
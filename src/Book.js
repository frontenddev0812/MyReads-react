import React, {Component} from 'react'

class Book extends Component {
    render () {
        return (
            <div className="book" id={this.props.book.id}>
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'}` }}></div>
                            <div className="book-shelf-changer">
                              <select
                              onChange={(e) => this.props.changeShelf(this.props.book, e.target.value)
                              }
                              value={this.props.currentShelf}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title || "no title available"}</div>
                          <div className="book-authors">{this.props.book.authors || "unknown author"}</div>
                        </div>
        ); 
    }
}

export default Book; 
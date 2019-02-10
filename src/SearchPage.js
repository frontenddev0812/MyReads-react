import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';



class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    query : '', 
    searchedBooks : [],
  }
}


  updateQuery = (query) => {
    this.setState({
      query : query
    })
    this.searchedBooks(query);
  }

  clearBooks = () => {
    this.setState({ searchedBooks : []})
  }

  searchedBooks = (query) => {
    if (query) {
    BooksAPI.search(query).then((resp) => {
      if (resp.error) {
        this.clearBooks(); 
        alert('There are no results that match your current search. Please try again.')
        this.clearBooks(); // calling the clearbooks function fixes a bug that shows searched books again after popup message.
      } else {
        return this.setState({searchedBooks : resp})
      }
    })
} else {
  return this.clearBooks();
}
}

    render () {
      return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/"><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                placeholder="Search by title, author, or genre"
                value ={this.state.query}
                onChange={(e) => this.updateQuery(e.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.searchedBooks.map(filteredBook => (
                  <li key={filteredBook.id}>
                  <Book 
                  book={filteredBook}
                  changeShelf = {this.props.changeShelf}
                  />
                  </li>
                ))
              }
              </ol>
            </div>
        </div>
        ); 
    }
}


export default SearchPage; 
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'; 
import MainPage from './MainPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
    state = {
    books: [],
    }

  componentDidMount() {
    this.fetchBooks()
  }

    fetchBooks = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({books: books})
      })
    }
  
  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks()
    })
  }

  render() {
    return (
      <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" render = {() => (
        <MainPage
          books= {this.state.books} 
          changeShelf= {this.changeShelf}
        />
      )}/>
      <Route exact path="/search" render= {() => (
        <SearchPage
          books= {this.state.books} 
          changeShelf= {this.changeShelf}
        />
      )}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default BooksApp

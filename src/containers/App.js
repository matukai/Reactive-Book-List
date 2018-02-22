import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import NameTag from '../components/NameTag'
import Test from '../components/Test';


import { getBooksFromFakeXHR } from '../lib/books.db';
import BookListAppTitle from '../components/BookListAppTitle';
import BookList from './bookList/index';
import BookFilterInput from '../components/BookFilterInput';


class App extends Component {

  constructor() {
    super();

    this.state = {
      bookListArr: [],
      findBook: ''
    }
  }

  componentDidMount() {
    getBooksFromFakeXHR()
      .then(bookListArr => {
        this.setState({ bookListArr })
      })
  }

  findLeBook(event) {
    const searched = event.target.value;
    //console.log(searched)
    this.setState({ findBook : searched })
  }

  //where components are invoked
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NameTag name="BOOKS:" />

        <BookFilterInput userInput={this.findLeBook.bind(this)} />
        <BookList books={this.state.bookListArr} findBook={this.state.findBook} />

      </div>
    );
  }
}

export default App;

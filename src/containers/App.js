import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import NameTag from '../components/NameTag'
import Test from '../components/Test';


import {getBooksFromFakeXHR} from '../lib/books.db';
import BookListAppTitle from '../components/BookListAppTitle';
import BookList from './bookList/index';

class App extends Component {

  constructor() {
    super();

    this.state = {
     bookList: []
    }
  }

componentDidMount() {
  getBooksFromFakeXHR()
  .then(bookList => {
    this.setState({bookList})
  })
}


  //where components are invoked
  render() {
    return (
      <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> 
      
        <NameTag name="BOOKS:"/>
        <Test title=""/>
        <BookList books={this.state.bookList} />

      </div>
    );
  }
}

export default App;

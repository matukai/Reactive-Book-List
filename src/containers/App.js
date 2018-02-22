import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import NameTag from '../components/NameTag'
import Test from '../components/Test';


import { getBooksFromFakeXHR, addBookToFakeXHR } from '../lib/books.db';
import BookListAppTitle from '../components/BookListAppTitle';
import BookList from './bookList/index';
import BookFilterInput from '../components/BookFilterInput';
import NewBookForm from '../components/NewBookForm';

class App extends Component {

  constructor() {
    super();

    this.state = {
      bookListArr: [],
      findBook: '',
      newBook: {
        title: '',
        author: ''
      }
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
    this.submitHandler = this.submitHandler.bind(this)

  }

  componentDidMount() {
    getBooksFromFakeXHR()
      .then(bookListArr => {
        this.setState({ bookListArr })
      })
  }

  findLeBook(event) {
    const searched = event.target.value;
    this.setState({ findBook: searched });
  }

  handleChangeTitle(event) {
    const userInput = event.target.value;
    //console.log('HANDLE CHANGE TITLE -----------',userInput)
    // this.setState({ newBook: Object.assign({}, this.state.NewBook, { title: userInput }) });
    //console.log(this.state)
    // this.setState({
    //   newBook: {
    //     title: event.target.value
    //   }
    // })
    this.setState({
      newBook : {...this.state.newBook, title:event.target.value}
    })


  }

  handleChangeAuthor(event) {
    const userInput = event.target.value;
    //console.log('HANDLE CHANGE AUTHOR -----' , userInput)
    // this.setState({ newBook: Object.assign({}, this.state.NewBook, { author: userInput }) });
    //console.log(this.state)
    // this.setState({
    //   newBook: {
    //     author: event.target.value
    //   }
    // })

    this.setState({
      newBook : {...this.state.newBook, author:event.target.value}
    })

  }

  submitHandler(event) {
    event.preventDefault();
    console.log('hey')
    console.log(this.state.newBook)
    addBookToFakeXHR(this.state.newBook)
    .then(result => {
      console.log(result)
      this.setState({
        bookListArr: result
      })
    })
    // addBook({title: this.state.newBook.title, author: this.state.newBook.author})
  }

  // addBook(book) {
  //   addBookToFakeXHR(book)
  //   .then(result => {
  //     this.setState({})
  //   })
  // }



  //where components are invoked
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NameTag name="BOOKS:" />

        <NewBookForm inputTitle={this.handleChangeTitle} inputAuthor={this.handleChangeAuthor} submitHandler={this.submitHandler}/>

        <br />

        <BookFilterInput userInput={this.findLeBook.bind(this)} />

        <BookList books={this.state.bookListArr} findBook={this.state.findBook} />



      </div>
    );
  }
}

export default App;

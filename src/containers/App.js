import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import NameTag from '../components/NameTag'
import {connect} from 'react-redux';
import { getBooks } from '../Actions/bookListActions';
import BookList from './bookList/index';


//import Test from '../components/Test';
//import BookListAppTitle from '../components/BookListAppTitle';
//import BookFilterInput from '../components/BookFilterInput';
//import NewBookForm from '../components/NewBookForm';


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBooks()
  }

  //where components are invoked
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NameTag name="BOOK List:"/>

        <BookList books={this.props.bookList}/>

        {/* <NewBookForm inputTitle={this.handleChangeTitle} inputAuthor={this.handleChangeAuthor} submitHandler={this.submitHandler} /> */}

       

        {/* <BookFilterInput userInput={this.findLeBook.bind(this)} /> */}

        {/* <BookList books={this.state.bookListArr} findBook={this.state.findBook} /> */}

      </div>
    );
  }
}

//from store methods
const mapStateToProps = state => {
  console.log('MAPSTATETOPROPS' , state)
  return {
    bookList: state.bookListReducer.books
    
  }
}


//methods
const mapDispatchToProps = dispatch => {
  //console.log(dispatch)
  //console.log(getBooks)
  return {
    getBooks: () => {
      dispatch(getBooks())
    },
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default ConnectedApp











// TWO WAYS OF REASSIGNIG STATE FOR REACT

// this.setState({ newBook: Object.assign({}, this.state.newBook, { title: userInput }) })

// this.setState({
//   newBook: { ...this.state.newBook, author: event.target.value }
// })
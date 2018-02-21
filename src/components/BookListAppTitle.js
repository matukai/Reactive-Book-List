import React from 'react';
import {booksFromFakeDB, getBooksFromFakeXHR, addBookToFakeXHR, getBookByIdFromFakeXHR} from '../lib/books.db';

class BookList extends React.Component {
  constructor(props) {
    super(props)

    //this.fetchTitles = this.fetchTitles.bind(this);
  }

  fetchTitles(){
    //this.setState({title: data});

    getBooksFromFakeXHR()
    .then(result => {
      console.log(result)
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state}</h3>
      </div>
    )
  }

// class BookListTitle extends React.Component {
//   constructor(props) {
//     super(props);

//   }

// }

}

export default ({name}) => {
  return (
    <div>{name}</div>
  )
}
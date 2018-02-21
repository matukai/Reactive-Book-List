import React from 'react';
import {getBooksFromFakeXHR, addBookToFakeXHR, getBookByIdFromFakeXHR} from '../lib/books.db';

class BookList extends React.Component {
  constructor(props) {
    super(props)
    //this.state = {books: []};
    //this.fetchTitles = this.fetchTitles.bind(this);
  }

  fetchTitles(){
    //this.setState({title: data});
    getBooksFromFakeXHR()
    .then(result => {
      console.log(result)
    })
  }

  // render() {
  //   return (
  //     <div>
  //       <h3>{this.title}</h3>
  //     </div>
  //   )
  // }

// class BookListTitle extends React.Component {
//   constructor(props) {
//     super(props);

//   }

// }













}
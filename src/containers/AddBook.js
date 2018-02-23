import React from 'react';
import Component from 'react';
import BookListActions from '../Actions/bookListActions';
import Connect from 'react-redux';


class AddBook extends Component {
  constructor(props) {
    super(props);

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

  findLeBook(event) {
    const searched = event.target.value;
    this.setState({ findBook: searched });
  }

  handleChangeTitle(event) {
    const userInput = event.target.value;
    this.setState({ newBook: Object.assign({}, this.state.newBook, { title: userInput }) })
    // this.setState({
    //   newBook : {...this.state.newBook, title:event.target.value}
    // })
  }

  handleChangeAuthor(event) {
    const userInput = event.target.value;
    this.setState({ newBook: Object.assign({}, this.state.newBook, { author: userInput }) })
    // this.setState({
    //   newBook : {...this.state.newBook, author:event.target.value}
    // })
  }

  submitHandler(event) {
    event.preventDefault();
    addBookToFakeXHR(this.state.newBook)
      .then(result => {
        this.setState({
          bookListArr: result
        })
      })
  }

render() {
  return (
    
  )
}




}
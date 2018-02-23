import { getBooksFromFakeXHR } from '../lib/books.db';
export const GET_BOOKS = 'GET_BOOKS';


export const getBooks = () => {

  let bookList = [{
    _id : 1,
    title : 'Talion: The Revenant from DB',
    author : 'Michael A. Stackpole'
  },
  {
    _id : 2,
    title : 'Ready Player One from DB',
    author : 'Ernest Cline'
  },
  {
    _id : 3,
    title : 'Enders Game from DB',
    author : 'Orson Scott Card'
  }
]

  // getBooksFromFakeXHR()
  // .then(listOfBooks => {
  //   console.log('XHR', listOfBooks)
  //   bookList.push(listOfBooks);
  // })

  return {
    type: 'GET_BOOKS',
    books: bookList
  }
}


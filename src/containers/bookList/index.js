import React from 'react';
import BookListItem from '../../components/bookListItems';
// import BookFilterInput from '../../components/BookFilterInput';


const BookList = ({ books , findBook }) => {
  //console.log(findBook)
  // console.log('BOOKS BEFORE RETURN' , books)
  // console.log(books)
  return(
    
    <div>
      {
        books
      //   .filter(book => {
      //     //console.log('BOOK TITLE' , book.title);
      //     //console.log('INDEXOF' , book.title.indexOf(findBook))
      //     //console.log(book.title.indexOf(findBook))
      //   return(
      //     book.title.indexOf(findBook) !== -1 ||
      //     book.author.indexOf(findBook) !== -1
      //   );
      // })
        .map((book) => {
          
            return(
              <BookListItem 
                key = { book._id } 
                title = { book.title } 
                author = { book.author }
              />
            )
          })       
      }
    </div>
  )
}
export default BookList;
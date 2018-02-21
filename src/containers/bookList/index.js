import React from 'react';
import BookListItem from '../../components/bookListItems';

const BookList = ({ books }) => {
  return(
    <div>
      {
        books.map((book) => {
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


const initialState = {
  books: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_BOOKS':
    console.log('ZZZZZZZZ',state)
      const updatedBooks = state.books.concat(action.books);
      //console.log(updatedBooks)
      return state = {books: updatedBooks}

      default:
      return state
  }
}
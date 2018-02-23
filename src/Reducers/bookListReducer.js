import {ADD_TODO} from '../Actions/bookListActions';



const initialState = {
  books: []
}



export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      action.todo.nextId = state.nextIdd;
      const updatedTodos = state.todos.concat(action.todo);
      return {...state, todos: updatedTodos, nextId: state.nextId + 1}
    case 'GET_BOOKS':
      const updatedBooks = state.books.concat(action.books);
      console.log(updatedBooks)
      return state = {books: updatedBooks}

      default:
      return state
  }
}
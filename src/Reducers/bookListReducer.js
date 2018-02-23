import {ADD_TODO} from '../Actions/bookListActions';



const initialState = {
  nextId: 4,
  todos: [{
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
}



export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      action.todo.nextId = state.nextIdd;
      const updatedTodos = state.todos.concat(action.todo);
      return {...state, todos: updatedTodos, nextId: state.nextId + 1}

      default:
      return state
  }
}
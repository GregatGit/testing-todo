import { ADD_TODO } from '../actions'

const init = [
  { todo: 'Buy Lunch', done: false },
  { todo: 'Clean Shoes', done: false },
]

export default function reducer_todos(state = init, action) {

  switch (action.type) {
    case ADD_TODO:
        return [...state, action.payload]      
 
    default:
      return state
  }
}

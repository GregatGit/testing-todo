import { ADD_TODO, DELETE_TODO, TODO_DONE } from '../actions'

const init = [
  { todo: 'Buy Lunch', done: false },
  { todo: 'Clean Shoes', done: false },
]

export default function reducer_todos(state = init, action) {

  switch (action.type) {
    case ADD_TODO:
        return [...state, action.payload]      
    
    case DELETE_TODO:
      const deleteState = [...state]
      deleteState.splice(action.payload, 1)
      return deleteState

    case TODO_DONE:
      const doneState = [...state]
      doneState[action.payload].done = true 
      return doneState

    default:
      return state
  }
}

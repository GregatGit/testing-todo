export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TODO_DONE = 'TODO_DONE'

export function todoDone(index) {
  return {
    type: TODO_DONE,
    payload: index
  }
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    payload: index
  }
}

export function addTodo(name) {
  const newTodo = {todo: name, done: false}
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}
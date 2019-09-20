export const ADD_TODO = 'ADD_TODO'

function addTodo(name) {
  const newTodo = {todo: name, done: false}
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}
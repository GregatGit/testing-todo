import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, todoDone } from '../actions'

const TodoList = ( {todos, deleteTodo, todoDone }) => {
  const handleDone = index => {
    todoDone(index)
  }
  const handleDelete = index => {
    deleteTodo(index)
  }
  return (
    <div>
    <ul>
    {todos
      ? todos.map((todo, index) => {
         return !todo.done ? (
            <li 
              key={index}
            >
              {todo.todo}
              <button onClick={() => handleDelete(index)}>❌</button>
              <button onClick={() => handleDone(index)}>✔</button>
            </li>
          ) :
          <li 
              key={index}
            >
              <strike>{todo.todo}</strike>
              
              <button onClick={() => handleDelete(index)}>❌</button>
            </li>
        })
      : <li>You have no todos on your list</li>}
  </ul>
    </div>
  )
}

export default connect(null, { deleteTodo, todoDone } )(TodoList)

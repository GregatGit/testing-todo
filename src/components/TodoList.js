import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import { deleteTodo } from '../actions'

const TodoList = ({ todos, deleteTodo }) => {
  const handleDone = index => {
    console.log(index)
  }
  const handleDelete = index => {
    deleteTodo(index)
  }
  return (
    <div data-test="todoList">
      Todo List
      <ul>
        {todos
          ? todos.map((todo, index) => {
              return <li 
                  key={index}
                >
                  {todo.todo}
                  <button onClick={() => handleDone(index)}>✔</button>
                  <button onClick={() => handleDelete(index)}>❌</button>
                </li>
            })
          : <li>You have no todos on your list</li>}
      </ul>
      <AddTodo />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { deleteTodo })(TodoList)

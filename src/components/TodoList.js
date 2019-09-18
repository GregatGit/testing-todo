import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => {
  return (
    <div data-test="todoList">
      Todo List
      <ul>
        {todos
          ? todos.map((todo, index) => {
              return <li key={index}>{todo.todo}</li>
            })
          : null}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TodoList)

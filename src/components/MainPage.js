import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'


const MainPage = ({ todos }) => {
  return (
    <div data-test="todoList">
      <h1>TODO LIST</h1>
      <TodoList todos={todos}/>
      <AddTodo />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(MainPage)

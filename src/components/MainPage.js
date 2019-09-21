import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'


const MainPage = ({ todos, deleteTodo, todoDone }) => {
  return (
    <div data-test="todoList">
      <h3>Todo List</h3>
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

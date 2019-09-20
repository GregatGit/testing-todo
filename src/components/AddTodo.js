import React, { useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('')

  const handleChange = e => {
    setTodo(e.target.value)
  }
  const handleAddTodo = () => {
    addTodo(todo)
  }
  return (
    <div data-test="AddTodo">
      <h2>ADD TASK TO LIST</h2>
      <label>Todo (3 to 20 characters):</label>

      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="3"
        maxLength="20"
        size="20"
        onChange={handleChange}
      />
      <h3>{todo}</h3>
      {todo.length > 2 ? <button onClick={handleAddTodo}>ADD TODO</button> : 'must be 3 chars long'}
    </div>
  )
}

export default connect(null, { addTodo })(AddTodo)

import React from 'react'

const AddTodo = () => {
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
      />
    </div>
  )
}

export default AddTodo

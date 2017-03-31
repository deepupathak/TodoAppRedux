import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <header>
      <h1>Todo List</h1>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input type="text" placeholder="Type here to add new tasks" ref={node => {
          input = node
        }} />
      </form>
    </header>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
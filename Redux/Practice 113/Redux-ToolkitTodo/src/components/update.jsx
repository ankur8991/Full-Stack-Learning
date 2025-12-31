import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice.js'

const UpdateTodo = ({ todo, setInput }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    // First remove the todo, then fill the main input and focus it
    dispatch(removeTodo(todo.id))
    setInput(todo.text)
    const el = document.getElementById('todo-input')
    if (el) el.focus()
  }

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
    >
      Update
    </button>
  )
}

export default UpdateTodo
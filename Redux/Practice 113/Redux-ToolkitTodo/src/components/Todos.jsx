import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice.js'
import UpdateTodo from './update'


const Todos = ({ setInput }) => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
    <div>Todos - Your tasks</div>
    <ul className="list-none" >
    {todos.map((todo) => (
        <li 
        className="mt-4 flex justify-between 
        items-center bg-zinc-800 px-4 py-2 rounded " 
        key={todo.id} >

            <div className='text-white' >{todo.text}</div>
            <div className="flex items-center gap-2">
              <UpdateTodo todo={todo} setInput={setInput} />
              <button 
                className=" bg-red-500 border-0 
                focus:outline-none hover:bg-red-600
                text-md text-white px-4 py-2 rounded-md text-sm " onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </div>
        </li>
    ))}
    </ul>
    </>
  )}

export default Todos

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Features/Todo/todoSlice.js'    

export const store = configureStore({
  reducer: todoReducer,
})
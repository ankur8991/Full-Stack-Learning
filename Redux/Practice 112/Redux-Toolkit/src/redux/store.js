import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },

});
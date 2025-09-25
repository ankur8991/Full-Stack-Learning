import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.mjs";

let a = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();
const port = 3000;

//simple route
app.get("/", (req, res)=> {
    const todo = new Todo({title: "This is my First ever Todo", desc: "Description of this todo", isDone: false, days: Math.floor(Math.random()*45 + 5*Math.random())})
    todo.save();
    res.send("Hello World from EXpress.js srver");
});

 app.get("/find", async(req, res)=> {
   let todo = await Todo.findOne({})
    res.json({title: todo.title, desc: todo.desc })
});

// start server 
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
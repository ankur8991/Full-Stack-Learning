const express = require('express')
const app = express()

const UserRouter = require("./routes/users")
app.use("/users", UserRouter)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

const now = new Date(Date.now());

app.use(express.static("public"))

app.use((req, res, next) => {
   console.log(now.toLocaleDateString()); 
   console.log(now.toLocaleTimeString()); 
   console.log(now.toLocaleString()); 
    next();
})

app.get( '/about', (req, res) => {
    res.send("HEllo about");
})

app.get( '/contant', (req, res) => {
    res.send("HEllo contant");
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})


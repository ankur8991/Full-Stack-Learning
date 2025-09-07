
const express = require('express')
const blog = require('./routes/blog')  
const shop = require('./routes/shop') 

const app = express()
const port = 3000

app.use(express.static("public")) 
app.use('/blog',blog)  
app.use('/shop',shop)  

app.get('/', (req, res) => {
    console.log("HEy its a get request")
    res.send('Hello World2!')
})

app.post('/', (req, res) => {
    console.log("HEy its a Post request")
    res.send('Hello World post request checkS BY Public folder its HTML files!')
})

app.put('/', (req, res) => {
    console.log("HEy its a put request")
    res.send('Hello World  request checkS BY Public folder its HTML files!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



app.get("/index", (req , res) => {
    console.log("HEy its a get request by index file")
    res.sendFile('templates/index.html', {root: __dirname})
})




app.get("/api" , (req, res) => {
    console.log("Hey its index")
    res.json({ a: 1, b: 2, c: 3 , d: 4, name: ["ANkur", "vikur"] } )
})

const { Socket } = require('dgram')
const express = require('express')
const http = require('http')   // ye in-built module hai express.js ka.
const path = require('path')
const { Server } = require('socket.io')

const app = express() // ye server banaya hai hmne express se.
const server = http.createServer(app) // or uss app server ko http server me daal diya convert kr diya.
const io = new Server(server) // jo server hmne http ki madadt se banaya tha usko hmne socket.io wale Server se connect krva diya or yha pr hm keh skte hai ki hmnne apne server ko socket.io se connect krva diya (Connection stablished krva diya)

app.use(express.static(path.resolve('public'))) // Middleware ki madadt se reslove krdiya path ko ye static files ko serve krne k liye hai. jo bhi public folder ke andar hoga wo accessible hoga browser se.

app.get('/', (req, res, next) => {
    res.sendFile('index.html')
})


io.on('connection', (socket) => {  // isse hmne connection established krvaya hai.
    socket.on("messageFromFrontend", (msg)=>{
        io.emit("messageFromBackend", `${socket.id} : ${msg} `)
    })
})



server.listen(5000, () => {         // kyuki hmne apne server ko http server mai daal diya hai isliye hm usko app ko nhi server ko listen krengai.
    console.log(`Server is listening on http://localhost:5000`)
})       
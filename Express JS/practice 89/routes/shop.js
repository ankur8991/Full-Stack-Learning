const express = require('express')
const router = express.Router()



// define the home page route
router.get('/', (req, res) => {
    res.send('This Shop Home page can be writen from route folder contains shop.js file because our api sturcture is manage way not get anything unorgaized or messy so we use this apporach!')
})

// define the about route
router.get('/aboutshop', (req, res) => {
    res.send('About shop page write from shop.js file contains in route folder!')
})
//http://localhost:3000/shop/aboutshop  isko aboutshop ko access krne ke liye hmne ye use kra hai.

module.exports = router
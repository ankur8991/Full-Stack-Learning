const express = require('express')
const router = express.Router()



// define the home page route
router.get('/', (req, res) => {
    res.send('This BLog can be writen from route folder contains blog.js file because our api sturcture is manage way not get anything so unorgaized or messy!')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About blog page write from blog.js file contains in route folder!')
})

router.get('/blogcontent/:slug', (req, res) => {
     res.send(`fetch the blog content for ${req.params.slug}`)
})

module.exports = router
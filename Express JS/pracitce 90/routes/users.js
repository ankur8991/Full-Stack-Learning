const express = require('express')
const router  = express.Router()


// Route level-middleware 
router.use((req, res, next) => {
    console.log("Ye Hmare middleware ki trf se check kra ja raha hai");
    next();
})

router.get('/', (req, res) => {
    res.send("THis Text/Content serves uses Routers concepts and where to from in routes folder contains users.js file")
})

module.exports = router;
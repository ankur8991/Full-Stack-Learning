const express = require('express')
const mongoose = require('mongoose')
const Employee = require("./modules/Employe.js")

const app = express()
const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/company')

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random()* (arr.length - 1))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'} )
})

app.get('/generate', async (req, res) => {
    // Generate random data 
     // Delete all data and set only new 10 data everytime we can clicked the button.
    await  Employee.deleteMany({})

    let randomNames = ["ANkur", "Chandan", "Amit", "shudanshu", "Shivam", "Satyam", "Sikarwar", "Adaitya Prakash", "Punky" ]
    let randomLang = ["Python", "Rust", "C++", "javaScript", "Solidity", "GO", "Java", "Flutter", "SWift", "Kotlin" ]
    let RandomCities = ["NewZeland", "USA", "India", "Japan" , "Canada", "France", "Germany", "Italy", "Switzerland", "Austria"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
//     Math.floor(Math.random() * (max - min + 1)) + min
              // min = lowest value jo tu chahta hai
              // max = highest value jo tu chahta hai
            salary: Math.floor(Math.random() * (22000 - 16000 + 1)) + 16000,
            language: getRandom(randomLang),
            city: getRandom(RandomCities),
            isCEO: Math.random() > 0.5?true:false
        })
        console.log(e)
         await e.save()
    }

    res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
    console.log(`Example app listening at http://Localhost:${port}`)
})

// Callback is always a function 
// callback function whose we can pass only reference not call that function because we can call that function the declartion time of the hod function like this --> callback(name) and the callback function is a function passed as an argument to another function here the printName is the callback function.
// HOD(hod) Higher order function is a takes an another function(says as callback function).

/* example : 1 synchronous task
function hod(name, callback){   // callback is just a function or nothing else Here we knows that function as a parameter passes so their name we can says anything else here.
    callback(name)    // here we can call the callback function on the hod function.
}

function printName(name) {
    console.log("hello", name)
}

hod('Ankur kumar sharma', printName)   // hod function can takes two things as a parameter first is name second one is callback function whose we can pass only reference not call that function because we can call that function the declartion time of the hod function like this --> callback(name) and the callback function is a function passed as an argument to another function here the printName is the callback function.
*/

/* example : 2 synchronous task
function calculate(a, b, callback){
    return callback(a, b)
}

function sum(a, b){
    return a+b
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a*b
}

function divide(a, b){
    return a/b
}

console.log( calculate(3, 4, sum))
console.log( calculate(4, 3, subtract))
console.log( calculate(3, 4, multiply))
console.log( calculate(4, 3, divide))
*/


// Asynchronous task by callback 
/*
console.log('Data start to fetching...')

function fetchData(callback) {
    setTimeout(() => {
        callback()
        console.log('Fetching done or Fullied of the data')
    }, 2000);
}

function ProcessData(){
    console.log("Processing to fetching the data from server")
}

fetchData(ProcessData)

console.log("Some other tasks...")
*/



// Another example Async 
/*
function getData(data, callback){
    setTimeout(() => {
        console.log(data)
        if(callback){
            callback()
        }
    }, 2000);
}

console.log('Fetching first data...')
getData('1st data', ()=>{
    console.log('Fetching second data...')
    getData('2nd data', ()=>{
        console.log('Fetching third data...')
        getData('3rd data', ()=>{
            console.log('Fetching fourth data...')
            getData('4th data')
        })
    })
})
*/


// We can work on the async in JS to creat these using XMLhttpRequest() function or these cannot be runs at the node module these runs on the browser part.
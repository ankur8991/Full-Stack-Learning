// Here we can noticed that the first line of the code runs completely then runs another line of code Task 2  and after two lines of the code runs the third one is for loop very big 40000 console so we can try to say that the big one code runs first then runs their niche codes of the lines they big task is block the lines of the code niche level code of the line then futher continues goes that's is called synchronous programming.
/*
console.log('Task phla')
console.log('Task dusra')

for (let i = 0; i < 400; i++) {
    console.log('Task', i)
    
}

console.log('Task thisra')
console.log('Task choutha')
console.log('Task pachvaa')
*/


// Here we can use the setTimeout() function to runs the big task within after the executed after that 4 seconds here the big tasks cannot block the code of the niche level of the code of the line of big task and that is called as the asynchronous Programming.
/*
console.log('First task')
setTimeout(()=>{
    for (let i = 0; i < 4000; i++) {
        console.log('Task', i)        
    }
}, 4000)           // 1000ms --> 1 sec , Here the 4000 ms --> 4 sec.
console.log('Second task')
console.log('Third task')
*/


/*
setTimeout(() => {
    console.log("Task 1")
}, 4000);

setTimeout(() => {
    console.log("Task 2")
}, 2000);

setTimeout(() => {
    console.log("Task 3")
}, 3000);
*/

// Why Do We Get a Promise Instead of Data? because of API calls Are Asynchronous in nautre.
/*
let result = fetch('https://jsonplaceholder.typicode.com/users')  // they gives us the promise of the data is comes true.
console.log(result) // We can handle their output of the data with using somes promise .then chaining , callback, callback hell but we can uses in production await async so why we learnt about promise chaining, callback, callback hell over the async await first due to understanding or knowledge of asynchoronus programming.

console.log('After the call of API some task cannot stopped due to asynchoronous of the nature of API call')
*/

/*
async function getData(){
    let result = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(await result.json())   // We can convert the response of the data comes from json format into the object readable format of the data to use the json() method apply on the response of the data.
}

getData()
*/


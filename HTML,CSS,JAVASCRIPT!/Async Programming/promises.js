/* these the promise we can create here the is dummy not works in the real life scenario because it the way we can create the promise using new keyword only for learning purpose not more then info we deal in real life with promise outcomes handles in to the backend system.
let p1 = new Promise((resolve, reject)=>{               // here the Promise() function hod object types that's why we can assign as the new keyword where they taks as another function and they another function they takes in the Promise function also takes two more callback function called as mostly Resolved , and Reject and the first one is resolve the function and another one is reject functionality takes.
//    resolve('data fetched successfully')              // here we can write any data type like string, object, array, number etc.
   reject('Mai tumse pyar nhi krti hun')
})

console.log(p1)
*/

/*
let promise = new Promise((resolve, reject)=>{
   console.log('this is a promise')
//    resolve({
//     name:"Ankur kumar sharma"
//    })

   reject("Something went wrong")
})

console.log(promise)
*/

/* this is not efficient way to handle the promise response and reject because of the reject condtion true when they can popup some with error lines of the browser code.
promise.then((res)=>{       // here .then() method to use we can find what data comes and we can sees.
     console.log(res)
})

promise.catch((err)=>{        // For the reject promise we can held the catch() method to reject query.
      console.log(err)
})
*/


/* this is the correct way to handle the respoonse and reject way and more efficient.
promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
    */


/* Here we can create fake the promise due to some practice of the code on handled the resposne and reject from the backend.
let p2 = new Promise((resolve, reject)=>{
   setTimeout(() => {
    resolve({
        name:"Ankur kumar sharma"
    })
   }, 3000);
})

console.log(p2)


p2.then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.log(err)
})
    */

// Here we can create the fake API using Promise object to sees how to handle their response and reject of promise.
/*
function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
             resolve({
            name:"Ankur kumar sharma"
        })
        }, 3000);
    })
}

function fetchData2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
             resolve({
            age:21
        })
        }, 3000);
    })
}

let result = fetchData()
console.log(result)

let result2 = fetchData2()
console.log(result2)


// These called as the promise chaining.
result.then((response)=>{
    console.log(response)
    result2.then((response2)=>{
           console.log(response2)
    })
})
*/


/*

let response = fetch('https://jsonplaceholder.typicode.com/users')
response.then(data => {
    console.log(data)   
}).catch(err => {
    console.log(err)
})

*/
// JavaScript Object.
/*
const user = {
    name: "ANkur",
    age: 20,
    isStudent: true
}

console.log(user)
*/

// JavaScript JSON.
/*
const json = {
    "name": "ANkur",         // always wrapped in double quotes not in single quotes of both compulsory key and value.
    "age": 20,
    "isStudent": true
}

console.log(json)
*/

// In JSON we can takes these things like "Number, String, Null, Boolean, Object, Array" datatypes can takes and allow.
// JSON was more strict as compare to JS syntax of literal object.
// Function, undefined, date JSON can never takes these things or don't allow these things in the JSON.

// JSON as a string with using ` ` backticks so if we convert it's again string to json format then we use these code of line ```JSON.parse(StringJson)```
/*
const StringJson = `{
    "name": "ANkur",         
    "age": 20,
    "isStudent": true
}`

console.log(StringJson)
let Json = JSON.parse(StringJson)
console.log(Json)
let newStringJson = JSON.stringify(Json)        // Again Json to string convert the code of line Here the JSON can provide us to a method where we can easily push the our new string converted JSON to an string to JSON.
console.log(newStringJson)
*/



// https://jsonplaceholder.typicode.com/users





// let response = fetch('https://jsonplaceholder.typicode.com/users')   // Without await use JS run the code line by line that's why they the data does not comes at the time before the data comes the lower line of code runs that's why the ouput is of the API fetch is 'Promise {<pending>}' this because the data we can fetch from another server comes within uncertain time that's why they give us promise with pending status.
// console.log(response) // that problem can be solved by the function wrapped of these code.

/*
async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(await response.json())   // We knows that the response we taken from server of backend in JSON format so we convert our response of data in json format with the help of JS pre-built json() method these step can takes lot's of time so we also use await keyword.
}

fetchData()
*/
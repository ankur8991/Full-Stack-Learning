# All about async programming

## Synchoronous v/s Asynchronous:

- Synchronous code runs line by line. Each operation must complete before the next one starts.

- Asynchronous code can start a task and move on without waiting for it to finish.

- Asynchronous code execution allows to execute next instructions (code) immediately and doesn't block the flow.

- JavaScript is by default Synchoronous in nature & Single threaded.

```
console.log('task 1')
console.log('task 2')
console.log('task 3')
```

```
console.log('Start')
setTimeout(() => {
    console.log('Async Task Done')
}, 2000)
console.log('End')
```

## Why Do we Get a Promise Instead of Data?

```js
let data = fetch('https://jsonplaceholder.typicode.com/users')
console.log(data)          // 👉 It logs a Promise, not actual data
```
- You get a Promise -- not the real data -- because the data isn't ready yet.

### 1️⃣ Problem samjho – data turant available nahi hota

**Once we can call the server to get the data from the server it takes some times**

Example:

```Browser → Internet → Server → Database → Response```

These process cannot works instant.

Posibilities :
- 100ms takes.
- 1 second takes.
- 5 seconds takes.

**that's why JavaScript doesn't  data sends instantly.**

### 2️⃣ JavaScript ka solution → Promise

JavaScript say's:
- Data doesn't available instant, but in future data comes.

that's why JS return:
```Promise```

Promise is just a palceholder of the future value comes from where you get's fetched.

### 3️⃣ Simple example
```js
function getData(){
    return 'hello'
}

let result = getData()
console.log(result)
```

Output:
```hello```

Yaha data **immediately mil gaya**

### 4️⃣ Ab async example
```js
function getData(){
    setTimeout(()=>{
        return "hello"
    }, 2000)
}

let result = getData()
consple.log(result)
```

Output:
```undefined```

Kyu?

Kyuki ```setTimeout``` later run hota hai.

Function khatam ho gaya before data mile.

### 5️⃣ Promise ka use
Is problem ko solve krne ke liye **Promise use hota hai.**

Example:
```js 
function getData(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve('hello')
        }, 2000)
    })
}

let result = getData()
console.log(result)
```

Output:
```Promise {<pending>}```

Iska mtlb:
```data abhi process ho raha hai```


### 6️⃣ Promise ka structure
Promise ke 3 states hote hain:

```
1. Pending
2. Fulfilled
3. Rejected
```

Example flow:
```
Request → Pending
Success → Fulfilled
Error → Rejected
```

### 7️⃣ Data kaise milega phir?
```.then()``` use krke.

```js
getData().then(data=>{
    console.log(data)
})
```

Output:
```hello```

### 8️⃣ Real API example
```js
fetch('https://jsonplaceholder.typicode.com/users')
```

Return krta hai:
```Promise```

Isliye:
```js 
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))
```

Flow:
```
fetch() → Promise
      ↓
.then() → response
      ↓
res.json() → Promise
      ↓
.then() → data
```

### 9️⃣ Same kaam async/await se
```js
async function getUsers() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const data = await res.json()

  console.log(data)

}

getUsers()
```

```await``` basically **Promise resolve hone ka wait krta hai**

Step by step:

**Step 1**
```const res = await fetch(url)```

```fetch()``` promise return krta hai.
```await``` wait krta hai jab tak response na aajye.

**Step 2**
```const data = await res.json()```

```res.json()``` bhi promise return krta h.
isliye fir ```await``` mtlb jha vi hme lgega ki yha pr ye time le skta hai km hone m wha pr hm await ka use krte hai kyuki data ko json formate m convert krne liye kuch time lgta hai isliye with the help of json() pre-built method of JS.

**Step 3**

```console.log(data)```

Ab acutal data mil gya.

**```.then() vs async/await```**

```.then()```

```js
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
```

```async/await```
```js
const res = await fetch(url)
const data = await res.json()
```

***async/await = promises ko handle karne ka clean syntax***

## fetch() me 2 bar await kyu lagate hain?

```js
const res = await fetch(url)
const data = await res.json()
```

Ek hi bar kyu nhi?

### 1️⃣ fetch() kya return karta hai
Jab hm likhte h :
```js
const res = await fetch(url)
```

```fetch()``` **direct data return nhi krta h**

ye return krta h:

```
Promise → Response object
```

Example:
```js
const res = await fetch("https://jsonplaceholder.typicode.com/users")

console.log(res)
```

Output:
```
Response {body: ReadableStream, status: 200, headers: ...}
```

Important:

```
Response object me actual JSON data nhi hota
```
Usme **Stream hoti hai.**

### 2️⃣ Server data stream me bhejta hai
Internet me data chunks / stream me aata hai.

Example:
```
Server
   ↓
chunk1
chunk2
chunk3
```

Browser ko:
- Data receive krna.
- assemble krna.
- Parse krna.

Isliye **extra step lagte hai.**

### 3️⃣ res.json() kya karta hai
```js
const data = await res.json()
```

```res.json()``` ka kaam hai:

```
ReadableStream → JSON object
```

Matlab:
1. stream read karega.
2. pura data assemble karega.
3. JSON parse karega.

Isliye ye bhi **promise return krta h**

### 4️⃣ Isliye 2 promises hote hain

Flow:
```
fetch()
   ↓
Promise → Response object
   ↓
res.json()
   ↓
Promise → Actual JSON data
```

Isliye:

```
const res = await fetch(url)   // promise #1
const data = await res.json()  // promise #2
```

### 5️⃣ Visual flow

```
Frontend
   ↓
fetch()
   ↓
Promise
   ↓
Response Object
   ↓
res.json()
   ↓
Promise
   ↓
Actual Data
```

```
fetch()
   ↓
Response object
   ↓
res.json()
   ↓
Actual JSON data
```

```
fetch() gives Response
res.json() gives Data
```


#### API calls are Asynchronous

- Fetching data takes time (maybe 5000ms, 2sec, or more).
- javaScript doesn't want to stop everything and wait (it's single-threaded).
- So instead, it gives you a Promise, saying:
     "I'll give you the data later, once it arrives."

## Summary All of that
- JavaScript is a single-threaded. That means it does one thing at a time or 1 task at a time it can performs.

- Suppose you want to fetch user data from a server. It takes 2 seconds. if we wait normally, the whole app freezes. Users can't click or scroll that's why we can learnt about callback, promises, Async/Await due to overcomes these problem.

```
         Callbacks (XMLhttpRequest)
            |
            V
         Promises (fetch)
            |
            V
         Async Await (fetch with good syntax)
```

### 1) Callback and Callback Hell

- Here the callback is the function only not nothing more and callback the is the where we can passes the HOD(Higher order function) passes another function.

- Using callback function the we can achieve the Asynchornous programming nature in JavaScript(JS) where the we can handle the asynchornous tasks using callback function.

```js
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
```

### 2) Promises
- A Promise is a special object in JavaScript that represents a task that will finish in the future.

- A Promise has 3 states:
- Pending - Still waiting.
- Resolved(fulfilled) - task completed.
- Rejected - something went wrong.

```js
let promise = new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve("Phone Delivered Successfully")
   } )
});

promise
      .then(result => console.log(result))
      .catch(error => console.log(error))
```
- resolve and reject are callbacks provided by JavaScript.


### 3) async await:
- async / await helps you write asynchronous code in a cleaner, more readable way -- almost like it's synchronous.

- **async**: Makes a function always return a Promise.
- **await**: Pause inside an `async` function until the Promise is rsolved.

```js
async function getData() {
   try{
      const response = await fetch('https://api.example.com/data')
      const data = await response.json()
      console.log(data)
   } catch (error) {
      console.log(error)
   }
}

getData()
```

- Code outside the async funciton continues immediately.
- Code inside the async function pauses at await.
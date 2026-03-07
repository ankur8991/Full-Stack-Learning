/*
Imperative foreach v/s Declarative foreach
Imperative map v/s Declarative map
Imperative filter v/s Declarative filter
Imperative reduce v/s Declarative reduce
Imperative every v/s Declarative every
Imperative find v/s Declarative find
Sort

*/


// Imperative programming  --> ek ek step btaye hai ki konse step kesa perform krna hai.
/*
let arr = [1, 2, 3, 4, 5]
let double = []

for(i =0; i<arr.length; i++){
    double.push(arr[i]*2)
    console.log(double)
}
*/

// Declarative programming --> Phle se JS m jo built in cheeze hai unhee use krna hai (What do you want only focus).
/*
let arr = [1, 2, ,3, 4, 5]

// let double = arr.map(function(elem){
//     return (elem*2)      // hme pta hai return krne pr map method hme new array return krta hai.
// })

let double = arr.map(elem=>elem*2)      // 'Fatarrow' function ka use krke hm simple bina return ke vi new array reeturn krwa skte hai bina retrun kareye apne arrow function ke andar se esa isliye hua kyuki jb hm arrow function m => iss arrow ke baad { //logic } iske andar logic likhte hai curly bracese ke andar to jb hm curly braceses na lagaye to hme new array retrun krne ke liye logic ke andar return krne ki jrurart nhi hai bss itna hi jo code m vi dekh skte hai hm.

console.log(double)
*/

// Functional Programming is a part declaratvie programming(What do you want) functional programming is the way to do programming in mantiable code and enhanced our code or optimized and they cannot restricted our to do imperative porgramming they can do in good manner.

// Pure Functions********* 
/*  --> A function is  pure if:
     . It returns the same output for the same input.
     . It doesn't cause side effects(like console.log(), alert() in between function or like modifiying external variables or DOM).
*/
/* Pure function
function sum(a, b){
    return a + b
}

let result = sum(1, 5)
console.log(result)
*/

/* Impure function
function sum2(a,b){
    let sum2 = a+b
    console.log(sum2)    // Side effect in function that's why they can impure function.
}

sum2(1, 4)

let count = 0
function increment() {
    count++           // modifies external state or shared state.
}

increment()
*/


/* 2. Immutability ----> Do not modify existing data. Instead, return new copies.
// In Functional Programming --> Says kuch kuch cheeze to totolly immutable hai jaise String but but kuch kuch cheeze mutable hai jaise array, object in functional programming says sab ko as a immtable hi use krengai or newArr or NewObj return krengai ye hi final rule hai functional programming ka bss itnaa hi.

Only String is immutable we can do to change in real string so we cann't due to immutability of string but but we can change original array, object they are mutable but in Functional programming says that we can cannot change in string , array & object Immutability works.


*/

// String 
/*
let str = 'Ankur'

str[0] = "Z"
let zeroind = str[0]
console.log(zeroind)
console.log(str)
*/

// Array
/*
let arr = [1, 2, ,3, 4, 5]
arr[0] = 100
console.log(arr)
*/

// Object
/*
let obj = {
    name: 'ANkur kumar sharma',
    age: 20
}

function replaceName(name){
//    obj.name = name             // yha pr original object m change hogya hai to functional programming yha pr avoid hogi hai Immutable wali isliye niche wala follow karengai.

      let newObj = {...obj, name}    // baki phle ki cheez same raehgai baki ki bss copy m name change hoga esa isliye hua kyuki hmne phle ke pure obj ke copy kra fir hmne ek or parameter pss kr diya name jo dharshata hai ki uss particluar object m se sirf name ko change krdo yha fuunctional programming follow ho rhi hai.
      return newObj
}

let NewReplacedObj = replaceName('Ankur')
console.log(NewReplacedObj)
console.log(obj)     // Original object m koi change nhi hua h sirf copy object jo h NewObj usme change hua hai sirf yehi Functional programming hai.
*/


/*
const list = ['alu', 'gobi', 'kaddu']     // const keyword add krna allow krta hai array m lekin vo bss uss particular array ek element ko change nhi krne deta hai.

function addItem(item){
    // list.push(item)        // They can change into the original array that's way they can override the functional programming.
    const newList = [...list, item]  // Here in FP we can copy our list of array in newList and also new item can add and we know that every time we can make new copy we returend whole the thing.
    return newList
}

console.log(list)
let newList = addItem('began')
console.log(newList)
*/

/*
let arr = ["alu", "gobi", "kaddu"]

function removeLastItem(arr){
   let newArr =  arr.slice(0, -1)
    // let newArr =  arr.slice(0, arr.length-1)
   return newArr
}

let newarr = removeLastItem(arr)
console.log(newarr)
console.log(arr)
*/

// 3. Declarative ----> Describe what should be done, not how.

/* 4. Avoid Shared State ----> Shared mutable state can lead to bugs, especially in async or parallel systems.

// ❌ Shared State (Bad)***
let total = 0 
function addAmount(amount) {
    total += amount
    return amount
}

let a = addAmount(4)
console.log(a)
let b = addAmount(4)
console.log(b)
console.log(total)


// ✅ Avoid shared state*****
/*
function add(a, b){
    return a + b
}

let result = add(2, 5)
console.log(result)
*/

/* 5. Avoid Side Effect ----> Side effects are anything a function does outside iys scope (API call, DOM update, modifying global vars).
// ❌ Side Effect****
function LogMessage(msg) {
    console.log(msg)          // Side Effect: Interacts with console.
}

LogMessage('This is side effect example')

// ❌ Side Effect****
function capitalizeFirstLetter(str) {
    let newStr = str.charAt(0).toUpperCase() + str.slice(1)
    // console.log(newStr)       // ye hai side Effect BOM(Browser object model) kyuki hm BOW se interact kr rahe hai yha pr function ke andar isliye.
    return newStr            // Isliye hm side effect ko function ke andar nhi krte hai kyuki isse bugs rise hote hai or BOM ko hm function ke andar avoid krte hai isliye hmne yha pr return kra hai.
}

let newStrr = capitalizeFirstLetter("hello")
console.log(newStrr)

// ✅ No Side Effect******
function getGreeting(name) {
   return `Hello, $(name)`
}
*/



/*
6. Reuse or Compose Logic  ----> Build small reusable functions and compose them togther.

// Build / create the username example.
// Here three different logics are being used:
//
// 1. Concatenating '@'
// 2. Converting the string to lowercase
// 3. Removing spaces
//
// Sometimes we may not need all three logics together.
// For example, in some cases we may only need two of them.
//
// So instead of writing all the logic in a single line,
// a better approach is to separate each logic into its own function.
//
// After creating separate functions, we can compose them
// together wherever they are needed.
//
// This makes the code more reusable, flexible, and easier to maintain.

let name = 'Ankur kumar sharma'

function  createUsername(str){   
     console.log("@"+str.toLowerCase().replaceAll(' ', ''))
}

createUsername(name)

const toLower = str => str.toLowerCase()             // we know that in fatarrow function we cannot uses {} to without return write in that {} curly braceses we get by default returned value or what we works on.
const removeSpaces = str => str.replaceAll(' ', '')
const atTheRate = str => '@' + str

let str = 'Ankur kumar sharma'
let result = atTheRate(removeSpaces(toLower(str)))       // these function used in another's function called as compose and also knows as 'Classical Compose'.
console.log(result)
*/


/*
7. Don't Iterate (Imperatively) ----> Avoid for, while, etc. Use map, filter, reduce.

// ❌ Imperative Style.
let evens = []
for(let n of [1, 2, 3, 4]) {     // here n = arr[i] in the array value.
   if(n % 2 === 0) evens.push(n)
}

console.log(evens)


// ✅FP (Declarative) Style****
const evens = [1, 2, 3, 4].filter(n => n%2 === 0)

console.log(evens)
*/


/*
8. Loose Coupling ----> Coupling refers to how dependent one piece of code is on another Loose couping means less dependent, keep functions and modules independent & how times function dependent on another that's more complex to debug and also code is not good enough readable or maintable.

*/
// ❌Tightly Coupled*****
/*
function getUser(){
    fetch('https://www.example.com/user')       // In future the API endpoint changed so we changes manully all the api endpoint in each function that's why we can same endpoint create an variable.
}

function getProducts(){
    fetch('https://www.example.com/product')
}

function getReviews(){
    fetch('https://www.example.com/reviews')
}
*/


// ✅ Loose Coupled*****
/*
let endPoint = 'https://www.example.com'


function getUsers(endpoint){
    fetch(`${endpoint}/user`)
}

function getProducts(endpoint){
    fetch(`${endpoint}/product`)
}

function getReviews(endpoint){
    fetch(`${endpoint}/eviews`)
}

getUsers(endPoint)
getProducts(endPoint)
getReviews(endPoint)
*/


// ✅ Slightly More Loose Coupled*****
/*
let endPoint = 'https://www.example.com'

function fetchData(endpoint, route){
    fetch(`${endpoint}/${route}`)
}

fetchData(endPoint, user)
fetchData(endPoint, product)
fetchData(endPoint, reviews)
*/


// ✅ Another More Loose Coupled*****
/*
let endPoint = 'https://www.example.com'

function fetchData(fn){       // here the function fetchData is HOF and we put as a parameter knows as function called callback function.
    let endPoint = 'https://www.example.com'
    fn(endPoint)
}


function getUser(endPoint){
    fetch(`${endPoint}/user`)
}

function getProduct(endPoint){
    fetch(`${endPoint}/porduct`)
}

function getReviews(endPoint){
    fetch(`${endPoint}/reviews`)
}

fetchData(getUser)  // here we knows that fetchData function holds endpoint but fetchData function also holds callback function where our endpoint holds that and endpoint actual settled by the function getUser so that's by we pass as a argument in fetchData function getUser function.
fetchData(getProduct)
fetchData(getReviews)
*/


// Another Example of the Loose Coupled Called as a Notification System.
// ❌Tightly Coupled*****
/*
let user = {
    name: "Ankur",
    email: "kumarankur3454@gmail.com",
    phone: 958739,
    WhatsApp: 'Ankur_8991'
}

function sendEmail(user){
    console.log("OTP send to Email: ", user.email)
}

function sendPhn(usr){
    console.log("OTP sends through SMS by phone number: ", usr.phone)
}

function sendWpMsg(usr){
    console.log("OTP sends through SMS by whatsApp app: ", usr.WhatsApp)
}


sendEmail(user)
sendPhn(user)
sendWpMsg(user)
*/


// ✅ Loose Coupled*****
/*
let user = {
    name: "Ankur",
    email: "kumarankur3454@gmail.com",
    phone: 958739,
    WhatsApp: 'Ankur_8991'
}

function SendOTPDummy(msg, sendTo){
      console.log(`${msg}: ${sendTo}`)
}

SendOTPDummy("OTP send to Email ", user.email)
SendOTPDummy("OTP sends through SMS by phone number ", user.phone)
SendOTPDummy("OTP sends through SMS by whatsApp app ", user.WhatsApp)
*/


// ✅ Perfect and mostly uses Loose Coupled*****
/*
let user1 = {
    name: "Ankur",
    email: "ankur@gmail.com",
    phone: 958739,
    WhatsApp: 'Ankur_8991'
}

let user2 = {
    name: "xyz",
    email: "xyz@gmail.com",
    phone: 78898,
    WhatsApp: 'xyz_4757'
}


function sendEmail(user){
    console.log("OTP send to Email: ", user.email)
}

function sendPhn(usr){
    console.log("OTP sends through SMS by phone number: ", usr.phone)
}

function sendWpMsg(usr){
    console.log("OTP sends through SMS by whatsApp app: ", usr.WhatsApp)
}


function sendMessage(user, OTPFunction){ // the main motive to build the function is overall called any function through these function that's why we in between pass these functions.
    console.log("Since Your are authorized")  
    OTPFunction(user)      // here the SendEmail, sendPhn, sendWpMSg functions called in by through these function and we use these function object or their properties that's why we pss as a argument object variable name 'user'.
}

sendMessage(user1, sendEmail)
sendMessage(user2, sendEmail)
*/


/*
9. First-Class & Higher-Order Functions

. first-Class: Function can be stored in variables, and passed another function, and returned.
. Higher-Order: Function that take other functions as a arguments or return them. 

Note:
- All Callbacks are first-class functions, but not all first-class functions are callbacks.
- All higher order functions are first class function but not all first-class functions are higher order functions or callback function.

                ┌───────────────────────────────┐
                │      First Class Functions    │
                │                               │
                │   ┌───────────────┐           │
                │   │ Higher Order  │           │
                │   │  Functions    │           │
                │   │               │           │
                │   │   ┌────────┐  │           │
                │   │   │Callback│  │           │
                │   │   │Function│  │           │
                │   │   └────────┘  │           │
                │   └───────────────┘           │
                │                               │
                └───────────────────────────────┘

*/

// first class, callback, higer order function
/*
function greetHello(){    // these two function greetHello and greetNamaste function is called the first-class function.
    return "Hello"
}

function greetNamaste(){
    return "Namaste"
}

// Here the greetWithName() function is the higher order function because of the greetWithName function in takes another function as a parameter that's why is called as the Higher order function & the function is passed through the higher order function called as the callback function.
function greetWithName(fn, name){   // here we can pass as an argument function knows as the fn name so the fn() called not even hardcoded mean manully defined function name so now we can daynamically called function by the time of the function invoked.
    return fn() + " " + name            
}

let result = greetWithName(greetHello ,"Ankur kumar sharma")   // We knows that when we return the funtion main logic we get new things that we on the works that's why we held in the new variable.
console.log(result)
*/

/*
let fun = function func(){    // here the func function is called as the first class function because of the func function stored in the variable fun and returned in the HOD function as a callback function and also passed in the invoked time of the HOD function as a variable name fun so here the fun treat as the function name now the variable name.
    console.log("func1 is called")
}

function HOD(cf){
  return cf
}

let result = HOD(fun)
result()
*/
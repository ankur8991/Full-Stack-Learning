// Question : How would you compose multiple functions to transform data step-by-step? Scenario: You're preparing user input before storing it. (Expected knowledge: Function composition, chaining, pipe or compose logic.)

// chaining example : reverse string.
/*
let str = "AnkuR"
let reverseString = str.split('').reverse().join('')
console.log(reverseString)
*/

// Compose Example : add number.
// let add2 = (num) => {
//     return num + 2
// }

/*
let add2 = num => num + 2
let multiply5 = num => num*5
let subtract10 = num => num - 10

// let result = add2(5)
// console.log(result)

let result = subtract10(multiply5(add2(6)))     // this called as classic compose. here the add2 value add the vlaue we passed by 2 and then those resulted add2 value get by multiply5() function then those operate our function according then subtract10() function get those add2(), and mutiply5() methods answer operate the value of these then subtract10 gets the final answer.
console.log(result)          // here is the main problem if functions works more and more that's why so looks messy and not code our readable that's why we avoid using these code written that's why we create a compose function using rest operator where works only dynamically added all the function.
*/


/*  ----> Good practice of the code to written using compose and pipe Utilities functions.    

let add2 = num => num + 2
let multiply5 = num => num*5
let subtract10 = num => num - 10

// function compose(fun1, fun2, fun3, val){       // here is not good practice to do functions in compose like to uses reduce as method because of the in future any more add new function to do manully change in these function or at the call time of the function.
//     fun1(fun2(fun3(val)))           // here the function runs as the Right to left that's why here the compose classic not pipe concepts.
// }


// Compose --> Right to left 
// Pipe --> Left to right

function compose(...fns){          // here we can add all the functions dynamically not manully limited function passes by the hard code in the above Example of the code & here the ...fns function called as the rest operator because of their works compose all the function not spread that's why we call is as the rest operator.
    return function(val){
    return  fns.reduceRight((acc, currFn)=>{
        return currFn(acc)
    }, val)
    }
}

function pipe(...fns){         
    return function(val){
    return  fns.reduce((acc, currFn)=>{
        return currFn(acc)
    }, val)
    }
}


/1/ let result = compose(subtract10, multiply5, add2)   // return top function in the compose function return the function that's return the value of the function its contains that why we held this in new variable called result and then result invoked as the function call and pass the value of the initial value we recieve in the compose function.
// console.log(result(6))

let result1 = compose(subtract10, multiply5, add2)(6)  // short simple way to write the /1/ in these manner.
let result2 = pipe(subtract10, multiply5, add2)(6)
console.log(result1)
console.log(result2)


*/





// Question : How do you implement your own version of .map() function on arrays?
// Here we noticed the these all three functions has repeated works of the code only the logic is differnet.
/*

let arr = [1,2,3,4,5,6]

function square(arr){
    let ouputArr = []
    for (let i = 0; i < arr.length; i++) {
       ouputArr.push(arr[i] * arr[i])
    }
    return ouputArr
}


function cube(arr){
    let ouputArr = []
    for (let i = 0; i < arr.length; i++) {
       ouputArr.push(arr[i] * arr[i] * arr[i])
    }
    return ouputArr
}

function diameter(arr){
    let ouputArr = []
    for (let i = 0; i < arr.length; i++) {
       ouputArr.push(2 * arr[i])
    }
    return ouputArr
}

let resultArr = square(arr)
console.log(resultArr)
let resultCube = cube(arr)
console.log(resultCube)
let resultDiameter = diameter(arr)
console.log(resultDiameter)
*/



/*
let arr = [1,2,3,4,5,6]

let squareLogic = (r) =>{
   return r*r
}

let cubeLogic = (r) => {
    return r*r*r
}

let diameterLogic = (r) => {
    return 2 * r
}

let Calculate = function Calculate(LogicFn){
    let ouputArr = []
    for (let i = 0; i < arr.length; i++) {
       ouputArr.push(LogicFn(arr[i]))
    }
    return ouputArr
}

Array.prototype.ownMap =  Calculate         // Here we put our method in the array of prototype and we knows that array prototype has a all prebuilt method so where we can put the our method.
let result = arr.ownMap(diameterLogic)
console.log(result)
*/

// let squareArr = Calculate(arr, squareLogic)
// console.log(squareArr)
// let cubeArr = Calculate(arr, cubeLogic)
// console.log(cubeArr)
// let diameterArr = Calculate(arr, diameterLogic)
// console.log(diameterArr)


// MAP method.
// let diameterarr = arr.map(diameterLogic)
// console.log(diameterarr)




// Question : What is a pure function, and why is it useful in uI rendering?
/*
Answer : A pure function is a function that always produces the same output for the same input and does not cause any side effects.

In UI rendering, pure functions are useful because they make the UI predictable and consistent. If the state or props do not change, the UI will render the same result every time. This helps developers write cleaner, easier-to-test, and more maintainable code.

Pure function:
function add(a, b) {
  return a + b
}

Same input → same output.

UI me bhi:
function Greeting({name}) {
  return <h1>Hello {name}</h1>
}

Agar name = "Rahul" hai
to UI hamesha same render hoga.
*/
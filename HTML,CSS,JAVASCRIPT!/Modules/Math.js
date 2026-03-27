// CommonJS 
/* We can only one time exports in CommonJS by default exports says so that problem to overcame we sends data int the form of object and array so that the whole data exports in one time using CommonJS by default exports and imports.
let name = 'Ankur'
let age = 21

module.exports = name
module.exports = age
*/

// CommonJS
/*
let name = 'Alpha'
let age = 21

module.exports = {
    name,
    age
}
*/


// CommonJS functions exports.
/*
function sum(a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

module.exports = {
    sum,
    sub
}
*/


// ES6 Modules (Default Export), Make sure You're Using type: "module" in node.js
/*
function sum(a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

// export default sum    // Here in ES6 we can exports the function sum reference.

export default {          // If in ES6 default exports does by the default exports and remember we can passes the function references of the functions so that in import time we can easily import by the full of object not we can destructures by the default exports its restrication in the ES6 JavaScript.
    sum,
    sub
}
*/



// Named Exports in Es6.
/*
function sum(a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

function mul(a, b){
    return a*b
}

export function divide(a, b){     // these export can takes in the exports in named object formate means when we can exports the function in the using in the export keyword in the function name before then it can exports in the named exports and exports in the object formate so we can imports these funciton so we can uses the destrucutres formate in the import times of object destructures due to exports moves in the object fomate exports that's why we can imoprts in the destructures in the object formate.
    return a/b
}

function modulo(a, b){
    return a%b
}

export{
    sum,
    sub,
    mul
}

export {modulo}
*/
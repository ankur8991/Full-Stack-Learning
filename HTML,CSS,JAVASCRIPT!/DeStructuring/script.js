// Destructuring is a JavaScript expression used to unpack values from arrays or properties from objects into distict variables.

/*
let student = {
    name: 'Ankur sharma',
    streetAddress: 'Main road nangla',
    isMarried: false
}



 let name = student.name
 let add = student.streetAddress
 let ismarried = student.isMarried

console.log(name)
console.log(add)
console.log(ismarried)


console.log(student.name)
console.log(student['streetAddress'])
console.log(student.isMarried)


// Destructuring in object we can put the same  key name in the time of destructures position not matters here.
let { name, streetAddress, isMarried } = student 
console.log(name)
console.log(streetAddress)
console.log(isMarried)
*/



/*
let person = {
    name: 'Ankur kumar sharma',
    streetAddress: 'Main road Nangla',
    isMarried: false,
    address:{
        city: 'Noida',
        pincode: 201305
    }
}


console.log(person.address.pincode)

// Destructuring.
let { address: { pincode } } = person
console.log(pincode)
*/


// Array
/*
let arr = [1, 2, 3, 4]

consle.log(arr[0], arr[1], arr[3]) // this is not to good practice.

// Destructuring in array.
let [a, b, c] = arr
console.log(a, b, c)
*/

// Destructuring Arrays: this is only with the position values places in the array not thier name exact sames.

// Basic Destructuring.
/*
const numbers = [1, 2, 3]
const [ first, second, third ] = numbers

console.log(first, second, third)
*/



// Destructuring with Rest operator.
/*
const arr = [1, 2, 3, 4, 5]
const [a, b, ...rest] = arr          // rest means packs other values.
console.log(a, b, rest)
*/


// Default Values.
/*
let [ a, b, c, d=556] = [5, 10, 15]
console.log(a, b, c, d)
*/



// Skip array items.
/*
let [, , c, , e] = [1, 2, 3, 4, 5]
console.log(c, e)
*/

// Swap 
/*
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b)
*/


// Nested array Destructuring
/*
let [ a, , , d ] = [1, 2, 3, [5, 6]]
let [ x, y ] = d
console.log(a)
console.log(d)
console.log(x, y)
*/


// More short or efficient way to write the Nested array  Destructuring.
/*
let [ a, , , [ x, y, z] ] = [1, 2, 3, [4, 5, 6]]
console.log(a)
console.log(x, y, z)
*/

 
// Destructuring with objects : Here not they works on the differnet in the names in the object present but here not the array like position matters.

// Basic destructuring
/*
let obj = {
    name: 'Ankur',
    age: 21
}

let {name, age} = obj
console.log(name, age)
*/

// destructuring with rest operator
/*
let person = {
    name: 'Ankur',
    age: 21,
    address: 'Noida',
    isMarried: false
}

let {name, age, ...OtherInfo} = person
console.log(name, age, OtherInfo)
*/

// Default values
/*
let {name, age=19} = {
    name: 'Ankur',
    age: 21
}

console.log(name, age)
*/


// Renaming Variables.
/*
let { name: fullName } = {           // here we can change the name of key to name to fullName by using this method in destructured timed like name: fullName.
    name: 'Ankur'
}

console.log(fullName)
*/


// Nested object destructuring 
/*
let obj = {
    name: 'Ankur kumar sharma',
    age: 21,
    address: {
        city: 'Noida',
        pincode: 3431355,
        arr : [1, 2, 3, 4, 5]
    }
}

let { 
    name: fullName,        // Rename to name to fullName.
    age,
    address: {pincode: code, arr:[a, b]},           // Destructures the obj object present further object address or pincode to code rename we can changes here or in obj present further object address present array where we can also those array we can destructures.
    // address: {pincode: code, [a, b, c, d]},  here we cannot destructures like object in array because of syntax error mean we cannot use object destructes in array we uses like these arr:[a, b ,c, d, e].
    address: fullAddress          // address to fullAddress rename.
}  = obj

// let {pincode, city} = address

console.log(fullName)
console.log(age)
console.log(fullAddress)
console.log(code)
console.log(a, b)
*/



// Array destructurig in function parameters.

/*
function sum([a, b]){       // here we can passes the arr that's why one variable holds the whole array not their values of the array and second one b variable takes nothing undefinded that's why we can use the destructuring like simple a, b to [a, b].
    console.log(a, b)      
    console.log(a + b)
} 

// let a = 10 , b = 5
// console.log(a, b)
let arr = [10, 5]
// sum(arr[0], arr[1])       // here we can passes the array values that's why the function holds that simply not full to the array can takes futher above function writtens.
sum(arr)                 // here we can passes the arr that's why one variable holds the whole array not their values of the array and second one b variable takes nothing undefinded that's why we can use the destructuring.
*/


// Object destructuring in function parameters.
/*
function greet({name, age}){
    console.log(`Hello ${name}, your age is ${age}`)
}


let obj = {
    name: 'Ankur sharma',
    age: 21
}


// greet(obj.name, obj.age)  // If we can passes the obj by own defined name and age like these traditonal method.
greet(obj)  // Or if we passes like only obj full of the obj then function takes the name, age as a arguments then they first variables like name above takes the whole object not separately takes name and age that's why we can use the destructuring the function section like function greet(name, age) to function greet({name, age}) destrurcturing using these we can now use the whole obj their key and values according to our desires only not full of the and shorted.
*/






// Question 1  : Output is : { '0': 1, '1': 2, '2': 3 }.
/*
const arr = [1, 2, 3]
const obj = { ...arr }
console.log(obj)
*/

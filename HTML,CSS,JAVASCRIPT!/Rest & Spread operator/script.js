/*
let arr = [1, 2, 3, 4, 5]
console.log(arr)     // [ 1, 2, 3, 4, 5 ] simple without spread operator they can formed in packed value.
console.log(...arr)   // 1 2 3 4 5  with spread operator they cannot more in exsist in packed formate or we can says that they can in unpacked formate of the given array.
*/


// Spread array
/*
let arr = [1, 2, 3, 4, 5]
let newArr = [...arr, 21, 35, 5453, 'Ankur']
console.log(newArr)
*/


// Here we can change copy the reference not actual copy because when we can copy the arr to new variable copyArr then we can change only in the copyArr item one another push 5 then it can change original array or copyArr both of these so here we can copy the reference the arr memory address.
/*
let arr = [1, 2, 3, 4]
let copyArr = arr
copyArr.push(5)
console.log(copyArr)
console.log(arr)
*/


// Shallow Copy ----> here we can change in copied array not affect in original array due to shallow copy.
/*
let arr = [1, 2, 3, 4]
let copyArr = [...arr]
copyArr.push(5)
console.log(copyArr)
console.log(arr)
*/



// Merge two arrays
/*
let arr1 = ['captain',  'ankur' ]
let arr2 = ['ironman', 'spiderman']

let mergeArr = [...arr1, ...arr2]
console.log(mergeArr)
*/


// Spread String
/*
let str = 'Ankur kumar sharma'
console.log(str)             // OutPut : Ankur kumar sharma
console.log(...str)       // OutPut : A n k u r   k u m a r   s h a r m a
*/


// let convert string to array using spread operator
/*
let str = 'Ankur kumar sharma'
let arr = [...str]
console.log(arr)
*/


// Spread in function calls
/* 
let users = ['Ankur', 'chandan', 'stym']

function consoleThreeUsers(user1, user2, user3){
    console.log(user1)
    console.log(user2)
    console.log(user3)
}

// consoleThreeUsers('alpha', 'beetaa', 'Gamma')
// consoleThreeUsers(users)    // OutPut : [ 'Ankur', 'chandan', 'stym' ] undefined undefined
consoleThreeUsers(...users)
*/


// Obj with spread operator
/*
let obj = {
    name: 'Ankur',
    age: 21,
    Passion: 'badmossssshiiiii',
    city: 'Noida'
}

let objCopy = {
    ...obj,
    age: 21.5,
    Passion: 'Microsoft Employed'
}

console.log(objCopy)
*/



// Merge two objects
/*
let obj1 = {
    name: 'Ankur kumar sharma',
    age: 21
} 

let obj2 = {
    name2: "zzzz",
    age2: 20
}

let mergeObject = {
    ...obj1, ...obj2
}

console.log(mergeObject)
*/


// Rest operator ----> rest with function parameter operation.
/*
function sum(...arr) {
    let sumResult = arr.reduce((acc, curr) => {
        return acc + curr
    })
    return sumResult
}

let output = sum(1, 2, 3, 8, 948, 845, 4987)
console.log(output)
*/


// Destructring in rest operator
/*
let arr = ["Ankur", "chandan", "satyam", "shudhanshu"]     

// let [user1, user2] = arr   // mtlb hm yha pr existing arr m uske item lete hai apne hisab sejo hme chiye hote hai or naam kuch vi de skte hai destruct krte time hm.
// console.log(user1, user2)       // user1 can hold first item of the arr and user2 can hold the second item of the array we can assign the same equal to side where they can take the items.

let [user1, ...otherUsers] = arr
console.log(user1, otherUsers)
*/


// Rest with Destructring object
/*
let obj = {
    name: 'Ankur',
    age: 21,
    city: 'Noida',
    passion: 'coding'
}

let {name, age, ...otherKeys} = obj
console.log(name)
console.log(age)
console.log(otherKeys)
*/

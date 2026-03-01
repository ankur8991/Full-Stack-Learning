// Procedural programming.
/*
let arr = [1, 2, 3, 4, 5, 6]
let result = [];
for (let i = 0; i < arr.length; i++) {  // here we goes i < arr.length not like this i <= arr.length because the index always one less then of then the value present in the arr counting starting with 1.
  result.push(arr[i] + 1);          // a[i] = value of the arr exact present in the arr.
}

console.log(result)


// Functional programming.
arr.map(x => x+1)      // here the value of the arr present in the x value of the present in the x parameter in the map method of the array.
console.log(result)
*/

/* Imperative Paradigm(HOW) --> Procedural - procedure / functions ==> no structure in procedure with function programming.

function consoleEnd(){
    console.log("Program is end")
}

let num = 10
function checkNumber(xyz) {
    if(xyz === 0) consoleZero()
   else if(xyz>0) positive()
        else negative()

}

function positive(){
    console.log("Number is positive")
        consoleEnd()

}

function consoleZero(){
    console.log("number is zero")
        consoleEnd()

}

function negative(){
    console.log("number is negative")
        consoleEnd()

}


checkNumber(num)  // yha call krte time actual value jo h num ye variable se same hona chiyee na ki function m jo as a parameter pass hora hai.
*/


/* Imperative Paradigm(HOW) --> structured - sequence(if, else), iterate.

function checkNumber(xyz){
    if(xyz === 0){
        console.log("Number is zero")
    }else if(xyz > 0){
        console.log("Number is positive")
    } else{
        console.log("number is negative")
    }

    console.log("Program is end")
}

checkNumber(10)
*/


// Function programming
/*
function sum(a, b){
    return a+b
}

let result = sum(1, 5)
console.log(result)


let arr = [ 1, 2, 3, 4, 5]

function DoubleNum(num){
   let newArr = num.map(elem=>{
       return elem*2
    })
    return newArr
}

let result = DoubleNum(arr)
console.log(result)
console.log(arr)      // Original array can't change here due to we can return newArr in the above map() method.
*/




// Object oriented programming
/*
let obj = {
    // singleton object = here we can't create the instance but in object oriented we can.
}


class Car{
    constructor(name, life){
        this.name = name
        this.life = life
    }

    start(){
        console.log("starting the car")
    }

    stop(){
        console.log("stop the car")
    }
}


let toyota = new Car('forturane', 60)
console.log(toyota)
toyota.start()
toyota.stop()
*/



// Event-Driven Programming.
/*
function ConsoleClick(){
    console.log('I Am clicked')
}
 */


// Asynchronus Programming
/*
setTimeout(() => {
    console.log("Phla iska khela khtm")
}, 1000)

setTimeout(function(){
    console.log("Fir iska khela khtm")
}, 2000)

setTimeout(() => {
    console.log("Iska khela nhi iska to km hi tamam krdo")
}, 3000);
*/
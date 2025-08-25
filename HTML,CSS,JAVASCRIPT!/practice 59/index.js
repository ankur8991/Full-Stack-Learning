/*
Create a Faulty calculator using JavaScript

this faulty calculatordoes  following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follow:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times.

*/
let random = Math.random();
console.log(random)
let a = prompt("Enter the First number")
let c = prompt("Enter operation")
let b = prompt("Enter the Second number")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if(random > 0.1){
    //Perform Correct Calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    //perform  Wrong Calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
console.log("Script.js initializing")

// let boxes = document.getElementsByClassName("box")   //First Approach by getElementByClassName
let boxes = document.querySelector(".container").children
console.log(boxes)


function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}


Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})



/*
a + r (b-a)  
here we Can generate the Rando color b/w (a and b) Which can be used by in our funntion and r is Math.random() Which we to generate the random number
and a is 0 and b is 255 value `color: rgb(255, 0, 0)` that value will explain alots of and b value.
a + r (b-a)  --> 0 + Math.random()* 255 And that random number Generater will we Generate the random the value between 0 to 255 that why we can use
0 to 255 rgba value because of starting value of color in rgba and Ending value in at fixes number (0 to 255).
And this {0 + math.random()* 255} can generate the floating number not the integer number that way we can the Math.ceil() funcation that is generate 
the integer value bigger than just one forward value of Floating number So, the Final value of Function is ~Math.ceil(0 + math.random()* 255)~.
*/          
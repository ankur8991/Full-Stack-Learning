console.log("Hello Bhai")

/* By getElementsByClassName use Case of CSS property.

 let boxes = document.getElementsByClassName("box")
 console.log(boxes)
 boxes[2].style.backgroundColor = "blue"
*/

/*
 By getElementById use Case of CSS property.

 document.getElementById("red").style.backgroundColor = "yellow"  
 Yeh ek particular id ko select krna isliye jruri h kyuki vo ek particluar instance ko select krta hai after inserting and new elememt it will remains added CSS property to that type but in other hands byClassName not be Added that type CSS after inserting new element.
*/

//  By querySelector and querySelectorAll use Case of CSS property.
document.querySelector(".box").style.backgroundColor = "lightpink"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "lightpink"
})

document.getElementsByTagName("div")

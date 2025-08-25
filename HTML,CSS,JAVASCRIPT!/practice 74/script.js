let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b> WLCM  Here we Can Learns together JavaScript And Create Our Future 🕉️</b>"
})

button.addEventListener("contextmenu" , () => {
        alert = ("Don't HAck Us By Right Click PleasE 😂")
})

document.addEventListener("keydown" , (e) => {
    console.log( e, e.key, e.keyCode)
})



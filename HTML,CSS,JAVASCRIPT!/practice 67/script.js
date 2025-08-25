console.log("Hello World")

console.dir(document)

document.body

document.body.childNodes
NodeList(5) [text, div.container, text, script, text]

document.body.childNodes[0]
// #text

document.body.childNodes[1]
   /* <div class="container">
        <div class="box">Box1</div>
        <div class="box">Box2</div>
        <div class="box">Box3</div>
        <div class="box">Box4</div>
        <div class="box">Box5</div>
    </div>  */

let cont = document.body.childNodes[1]   // Here we can use to div.container all-over Elements contains in div.container with the help of cont.

cont.firstChild
// #text
                        // --> Here boths of  firstchild and lastchild text rply becuz of  they cannot contains any at starting and ending Elements
cont.lastChild
// #text

cont.firstElementChild     // Here they can rply div.container first Element by the use of firstElementChild and their output is --
// <div class="box">Box1</div>

cont.lastElementChild   
/* <div class="box">Box5</div> */

cont.lastElementChild.style.color = "darkblue"; //Here we can use CSS as an Edit of JavaScript.

//Use of ParentElement in And their outtput will be returns div.containers all-over.
cont.firstElementChild.parentElement

// Here he will returns also div.container with the help of this DOM conditions.
document.body.firstElementChild

//Now these DOM writien lines executes and Shows the final ouptut is --
document.body.firstElementChild.childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

//Here he can only returns the div.container -- Elements and more the #text and comments.
document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[0]
/* <div class="box">Box1</div> */

document.body.firstElementChild.children[1]
/* <div class="box">Box2</div> */

document.body.children
HTMLCollection(2) [div.container, table]

document.body.children[1]
//Here the output will be shows table.

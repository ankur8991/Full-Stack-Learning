# DOM Event Concepts

## 0. document.querySelector() (Element Select Karna)

document.querySelector() ka use HTML se kisi element ko select karne ke
liye hota hai.

Ye CSS selector ke through element select karta hai.

Example HTML:

``` html
<div id="box" class="container">Hello</div>
```

JS:

``` js
let element = document.querySelector("#box");  
console.log(element);
```

Important Points:

-   "#id" → id select karta hai\
-   ".class" → class select karta hai\
-   "tagname" → tag select karta hai\
-   Ye sirf FIRST matching element return karta hai

Agar multiple elements select karne ho:

``` js
let items = document.querySelectorAll(".item");
```

Simple line: document.querySelector() = HTML se element pakadne ka
tarika

------------------------------------------------------------------------

## 1. addEventListener() (Event Attach Karna)

addEventListener() ka use kisi element par event lagane ke liye hota
hai.

Syntax:

``` js
element.addEventListener("eventName", function);
```

Example:

``` js
let button = document.querySelector("#btn");

button.addEventListener("click", function(){
    console.log("Button Clicked");
});
```

Important Points:

-   "click" → event type\
-   function → kya action perform hoga\
-   Ek hi element par multiple events laga sakte ho\
-   Third parameter (true/false) se capturing control kar sakte ho

Simple line: addEventListener() = element par event lagane ka tarika

------------------------------------------------------------------------

## 2. Parent--Child Relationship (DOM Tree Concept)

HTML ek tree structure hota hai.

Example:

``` html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

Yaha:

-   div = Parent
-   button = Child

Agar child pe event lagega, wo parent tak ja sakta hai (bubbling).

JS se parent access karne ke liye:

``` js
let child = document.getElementById("child");

console.log(child.parentElement); // parent div milega
```

Important: - Elements ek dusre ke andar hote hain. - Isi wajah se events
travel karte hain.

------------------------------------------------------------------------

## 3. event.target (Sabse Important Concept)

event.target batata hai:

Actual click kaha hua.

Example:

``` html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

``` js
document.getElementById("parent").addEventListener("click", function(event){
    console.log(event.target);
});
```

Agar button click karega:

Output:

```{=html}
<button id="child">
```
Click Me
```{=html}
</button>
```
Even though event parent pe laga hai, target batayega ki click actually
button pe hua.

Simple line: event.target = jis element pe user ne click kiya

------------------------------------------------------------------------

## 4. stopPropagation() (Event ko upar jaane se rokna)

Normally kya hota hai?

Child click → Parent bhi trigger hota hai (bubbling)

Example:

``` js
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function(){
    console.log("Parent clicked");
});

child.addEventListener("click", function(event){
    console.log("Child clicked");
});
```

Button click karega to output:

Child clicked Parent clicked

Ab agar parent ko trigger nahi hone dena:

``` js
child.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Child clicked");
});
```

Ab output:

Child clicked

Simple line: stopPropagation = event ko parent tak jaane se rok deta hai

------------------------------------------------------------------------

## 5. preventDefault() (Default browser behavior rokna)

Example: Form submit

``` html
<form id="form">
  <button type="submit">Submit</button>
</form>
```

Normally: Submit → Page reload ho jata hai.

Agar reload rokna ho:

``` js
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submitted but page reload nahi hua");
});
```

Simple line: preventDefault = browser ka default behavior rok deta hai

Common cases: - Form submit - Anchor tag navigation - Right click menu

------------------------------------------------------------------------

## Final Quick Summary

document.querySelector() = HTML se element select karna\
addEventListener() = element par event lagana\
Parent--Child = HTML elements ek dusre ke andar\
event.target = Actual click kaha hua\
stopPropagation = Event ko parent tak jaane se roko\
preventDefault = Browser ka default action roko
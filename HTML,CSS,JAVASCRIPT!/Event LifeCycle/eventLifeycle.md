# Event LifeCycle

------------------------------------------------------------------------

# 1️⃣ DOM Tree Structure

## 🌳 DOM Tree Diagram

                        document
                            │
                           html
                     ┌───────────────┐
                    head            body
                                       │
                                  div#parent
                                       │
                                  button#child

------------------------------------------------------------------------

## 🧠 Explanation

### document

-   Top level object
-   Pure webpage ka root

### html

-   `<html>` tag
-   head aur body ka parent

### head

-   Metadata (title, meta, link, script)

### body

-   Visible UI content

### div#parent

-   Container element

### button#child

-   Leaf node (if no children inside)

------------------------------------------------------------------------

## 🔗 DOM Relationships

-   **Parent Node** → Jo element kisi ko contain kare\
-   **Child Node** → Jo element kisi ke andar ho\
-   **Sibling Node** → Same parent share karne wale elements

------------------------------------------------------------------------

# 2️⃣ Event Propagation

## 🔄 Phases of Event Propagation

    Capturing Phase   →   Target Phase   →   Bubbling Phase
    Top → Down            Actual Click        Bottom → Up

------------------------------------------------------------------------

## 🟢 Capturing Phase (Top → Down)

Active when:

``` js
addEventListener("click", handler, true)
```

Flow:

    document → html → body → parent → child

------------------------------------------------------------------------

## 🎯 Target Phase

-   Jis element par actual click hua

------------------------------------------------------------------------

## 🔵 Bubbling Phase (Default)

Flow:

    child → parent → body → html → document

Stop bubbling:

``` js
event.stopPropagation()
```

------------------------------------------------------------------------

# 3️⃣ Capturing vs Bubbling Code Example

``` js
let grandparent = document.querySelector('.grand-parent')
let parent = document.querySelector('.parent')
let child = document.querySelector('.child')

grandparent.addEventListener('click', function(){
    alert("grand-parent clicked")
})

parent.addEventListener('click', function(){
    alert("parent clicked")
})

child.addEventListener('click', function(){
    alert("child clicked")
})
```

------------------------------------------------------------------------

# 4️⃣ Event Object Deep Understanding

``` js
grandparent.addEventListener('click', function(event){
   console.log(event)
})
```

## Important Points

-   "click" = event type
-   event = browser created object
-   Type:

``` js
typeof event // "object"
```

Browser internally does:

1.  Detect click\
2.  Create event object\
3.  Call handler(eventObject)

Useful Properties:

-   event.type
-   event.target
-   event.currentTarget
-   event.stopPropagation()
-   event.preventDefault()

------------------------------------------------------------------------

# 5️⃣ event.target vs event.currentTarget vs this

``` js
parent.addEventListener('click', function(event){
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(this)
})
```

### event.target

-   Actual clicked element

### event.currentTarget

-   Jahan listener laga hai

### this

-   Normal function → same as currentTarget
-   Arrow function → window object

------------------------------------------------------------------------

# 6️⃣ stopPropagation vs stopImmediatePropagation

## stopPropagation()

-   Stops further propagation to parent elements

## stopImmediatePropagation()

-   Stops:
    -   Further propagation
    -   Other listeners on same element

------------------------------------------------------------------------

# 7️⃣ Event Delegation

## Definition

Event Delegation is a technique where a single event listener is
attached to a parent element to manage events of its child elements
using event bubbling and event.target.

------------------------------------------------------------------------

## ❌ Without Delegation

``` js
container.childNodes.forEach((elements)=>{
    elements.addEventListener('click', ()=>{
        console.log(elements.innerText)
    })
})
```

Performance issue ❌

------------------------------------------------------------------------

## ✅ With Delegation

``` js
let container = document.querySelector('.container')

container.addEventListener('click', function(event){
    let targetElem = event.target
    if(targetElem.classList.contains('box')){
        console.log(targetElem.textContent)
    }
})
```

Benefits:

-   One listener only
-   Works for dynamic elements
-   Better performance

------------------------------------------------------------------------

# 🔥 Core Concepts Final Summary

-   Click natural browser behavior hai
-   addEventListener sirf reaction setup karta hai
-   Event always starts from clicked element
-   Bubbling default hota hai
-   Capturing manually enable karna padta hai
-   Event object browser create karta hai
-   Delegation = Parent listener + Bubbling + event.target

------------------------------------------------------------------------

# 🧠 One Line Master Summary

Event hamesha jahan click hota hai waha se start hota hai, DOM tree me
travel karta hai, aur jahan listener milta hai waha code execute hota
hai.

# All About Event Handling

## 🚀 1) Event Handling hota kya hai?

Simple language me:

Jab user UI ke sath interact krta hai aur hm us interaction par koi function chalate hain = event handling

Jaise:
- button click.
- input typing.
- mouse hover.
- form submit.
- key press.
- scroll.
- drag drop.

Example:

```jsx
<button onClick={handleClick}>Click</button>
```

Yaha user click karega --> ```handleClick``` chalega.

## 🧠 2) Sabse basic syntax

```jsx
function App() {
    function handleClick() {
        alert("Button clicked")
    }

    return <button onClick={handleClick}>Click Me</button>
}
```

**Flow samajh:**
1. Function define kiya.
2. JSX me pass kiya.
3. Click pe function run.

⚠️ Important:

```onClick={handleClick}```
Ye sahi hai ✅

```onClick={handleClick()}```

Ye galat hai ❌

Kyu? Kyuki second wala render hote hi call ho jayega.

## 🎯 3) Inline event handlers

shortcut way:

```jsx
<button onClick={()=> alert("button clicked")}>
Click
</button>
```

Ye chhote logic ke liye best hai.

## ⚡ 4) Parameters pass karna

Agar argument dena ho:

```jsx
function App() {
    function greet(name) {
        alert(`Hello ${name}`)
    }

    return <button onClick={()=> greet("Ankur")}>Click</button>
}
```

Why arrow function?

Agar ye likh diya:

```jsx
onClick={greet("Ankur")}
```
to instantly call ho jayega.

Arrow function call ko delay krta hai jb tak event trigger na ho.

## 🧩 5) Event Object

React har event handler me ek object deta hai as a parameter and we can write their name with any letter or words.

```jsx
function App() {
    function handleClick(e) {
        console.log(e)
    }

    return <button onClick={handleClick}>Click</button>
}
```

Ye ```e``` hota hai event object.

Isme useful cheeze hoti hain:

```jsx
e.target
e.type
e.preventDefault()
e.stopPropagation()
```

## 6) Input event handling

Most common:

```jsx
function App() {
    function handleChange(e) {
        console.log(e.target.value)
    }

    return <input onChange={handleChange} />
}
```

samjhe:

- user type karega
- ```onChange``` tigger
- Current value ```e.target.value```


## 🧠 7) Controlled components

React me mostly input ko state se control krte hain.

```jsx
import { useState } from "react"

function App() {
    const [name, setName] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }


return (
    <>
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
    </>
);
}
```

## 🧱 9) Form submit handling

Default browser refresh ko rokne ke liye:

```jsx
function App() {
    function handleSubmit(e) {
        e.preventDefault()
        alert("Form submitted")
    }

    return (
        <form onSubmit={handleSubmit}>
        <button type="submit">Send</button>
        </form>
    );
}
```

```preventDefault()``` kya karta?

Browser ka default action rok deta hai.

Example:
- form refresh
- link navigation
- checkbox default toggle

React docs me ye highly recommended hai forms ke liye.

## 10) Event Bubbling / Propagation

```jsx
function App() {
    return (
        <div onClick={() => console.log("parent)}>
        <button onClick={() => console.log("Button")}>
        Click
      </button>
    </div>
    )
}
```

Button click karne pe output:

```txt
Button
Parent
```

Kyun?

Event child se parent tak bubble krta hai.

Isko bolte hain:

**event propagation / bubbling**

## 🛑 11) stopPropagation()

Agar bubbling rokni ho:

```jsx
function App() {
    function handleButtonClick(e) {
        e.stopPropagation()
        console.log("Button")
    }

    return (
        <div onClick={() => console.log("Parent")}>
      <button onClick={handleButtonClick}>
        Click
      </button>
    </div>
    )
}
```
Ab output:

```
Button
```

Bas.

Parent nhi chalega.


## 🎯 12) Passing event handlers as props

Real-world React me bahut use hota hai.

**Parent**

```jsx
function App() {
    function handleClicked() {
        alert("Clicked")
    }

    return <Button onPress={handleClick} />
}
```

**Child**

```jsx
function Button({ onPress }) {
    return <button onClick={onPress}>Click</button>
}
```

Ye reusable component pattern hai.

## 13) Synthetic Events (React ka magic)

React browser ke nativ events ko wrap krta hai.

Is wrapper ko bolte:

**SyntheticEvent**

Benefit:
- cross-browser compatible.
- same API everywhere.
- performance optimized.

Hm normally differnce feel nhi karengai, but internally React ye use krta hai.


## ⚡ 14) Event delegation (React internal optimization)

React har element pe alag listener nhi lagata.

Instead:

root level pe listener lagata hai
fir decide krta hai kis component ka event tha

Isse performance improve hoti hai

Ye large apps me bahut useful hai.

## 15) State updates inside event handlers

```jsx
function Counter() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
        {count}
        </button>
    );
}
```

yaha event handling + state update combine hua.

ye sabse common pattern hai.

## ⚠️ 16) Stale closure issue

Kabhi kabhi async code me old state milti hai.

```jsx
setTimeout(() => {
    console.log(count)
}, 1000);
```

Agar count update hua tbh bhi old value aa skti hai.

Isko solve krte hai:
- functional updates.
- refs.
- ```useEffectEvent``` advanced hook

Example:

```setCount(prev => prev + 1)```

## 🚨 18) Biggest mistakes

**❌ Mistake 1**

```jsx
onClick={handleClick()}
```

**❌ Mistake 2**

```jsx
<button onClick="handleClick">
```

HTML nhi hai React h.

**❌ Mistake 3**

State directly modify krna

```jsx
count = count + 1
```

**✅ Correct**

```jsx
setCount(count + 1)
```

## 19) Real project examples

**Delete item**

```jsx
<button onClick={() => deleteTodo(id)}>
 Delete
 </button>
 ```

**Search input**

```jsx
<input onChange={(e) => setSearch(e.target.value)} />
```

**React me event handling JSX props ke through hoti hai jaise ```onClick```, ```onChange```, ```onSubmit```. Hum function reference pass krte hai jo user interaction pe execute hota hai. React internally SyntheticEvent use krta hai for cross-browser compatiblity and supports bubbling, caputring, capturing, preventDefault, and stopPropagation.**
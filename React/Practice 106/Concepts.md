# Event handling in React

1) Defination

Event handling in React : React component ke ander user actions (like click, input, submit, keypress, etc.) ko catch krna or unke response mein logic chalana - through functions called *event handlers*. React ka event system DOM events jaisa hi hai lekin kuch syntax/behavioral aur ek *syntheticEvent* wrapper use krta hai jo cross-browser consistency aur performance help krta hai.

2) Key Concepts

a) Handlers ko pass krna hota hai, call nhi - ```onClick={handleClick}``` not ```onClick={handleClick()}``` 
We can passing a function as a prop in event handle but not the call function in between event handlers.

b) camelCase event names: React mein ```onClick```, ```onChange```, ```onSubmit``` etc. (lowercase HTML attributes nhi.)

c). SyntheticEvent - React wrapper around native events for cross-browser consistency, historically pooled but React 17+ mein event pooling removed on web. Agar React <17 use kr rahe ho toh pooling ka effect samajhna zaroori tha.

 c, point explaination :
  
  Browser apne events deta hai:
  - Click
  - keypress
  - mousemove
  - input 
  - submit

  But har browser thoda alag behave krta hai.

  React bolta:

  "Main sab browser ke events ko ek uniform jaisa bana dunga."

  Toh React apna SyntheticEvent banata hai jo native event ko wrap krta hai.

  Iska fyda:
  - Cross-browser consistency.
  - Same API (e.target, e.type...) har browser me kaam kare.

  Pooling ka matlab = React ek hi SyntheticEvent object ko reuse krta tha.

  ⚠️ React <17 ke time:

  Jab tum button click krte the:

  1. React SyntheticEvent banata tha.
  2. Tumhare handler ko deta tha.
  3. Handler khatam hote hi → React us event object ko empty kr deta tha.
  4. Wahi object next event ke liye use krta tha.

  Isko event pooling kehte the.

  🧨 Problem kya hota tha?

```
  function handleClick(e) {
  setTimeout(() => {
    console.log(e.target); // ❌ React <17 → NULL/MISSING
  }, 2000);
}
```

kyoki React handler khatam hote hi event clear kr deta tha.

tab tumhe likhna padta tha:

```e.persist(); // pooling disable```


  “React 17+ mein event pooling removed”

  React ne bola:

  *Pooling se jyada confusion hoti hai. Modern browser fast hain. chalo pooling hata dete hain*

  React 17 ke baad:

  - SyntheticEvent object fresh banta hai
  - Clear nahi hota
  - Reuse nahi hota
  - Async code me perfectly kaam karta hai

  Example (React 17+):

  ```
  function handleClick(e) {
  setTimeout(() => {
    console.log(e.target); // ✔ Works fine
  }, 2000);
}
```

New behavior = Safe, simple, no pooling, no persist()

✔ “React wrapper around native events”

React ek standardized event object deta hai taaki har browser me event same behave kare.

✔ “Historically pooled”

React <17 event objects ko har event ke baad recycle kar deta tha

→ Jisse asynchronous usage fail ho jata tha

→ Developer ko e.persist() likhna padta tha.

✔ “React 17+ mein event pooling removed”

- Ab har event fresh object hai

- Ab async code me event access safe hai

- Ab e.persist() ki zaroorat nahi

✔ “Agar React <17 use kar rahe ho toh pooling ka effect samajhna zaroori tha”

- Kyoki old versions me:

- Event auto-null ho jata tha

- Async code fail ho jata tha

- Event reuse hota tha

- Confusion hoti thi

d). Declaration handlers inside components - handlers component scope se porps/state access kr lete hain (functional hooks ya class ```this.state```). 

  d, point explain :

  React ke event handlers component ke ander likhe jaate hain, isliye unko us component ki sab cheezien (state + props) seedhe mil jaati hain.

  React me hm event handler (like ```onClick```, ```onChange```, etc.) Component ke ander hi define krte ho.
   
  Aur kyuki wo function component ke ander hai, usko automatic access milta hai :

  - Component ki state.
  - Component ke props.
  - Compnent ke varibales.
  - Component ke functions.

  Matlab handler bilkul "ghar ke ander ka banda" hai.

  Isliye usko ghar ki sab cheezein easily mil jaati hain.

  “React mein event handlers component ke andar hote hain, isliye wo directly us component ki state aur props ko access kar sakte hain.”

  ✔ Example (Functional component)

  ```
  function Counter({ step }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + step);  // 🟢 state + props dono accessible
  }

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}
```

Yaha kya ho raha hai:

- ```handleClick()``` component ke andar defined hai.

- Isliye:
   - ```count``` (state) mil gaya
   - ```setCount``` mil gaya
   - ```step``` (props) mil gaya

Koi extra binding, searching, passing ki zarurat nahi.

Handler ko sab kuch seedha mil jaata hai.

✔ Example (Class component)

```
class Toggle extends React.Component {
  state = { on: false };

  handleToggle = () => {
    this.setState({ on: !this.state.on }); // 🟢 direct access
    console.log(this.props.label);         // 🟢 direct access
  };

  render() {
    return (
      <button onClick={this.handleToggle}>
        {this.state.on ? "ON" : "OFF"}
      </button>
    );
  }
}
```

Yaha bhi:

- Handler component ke andar hai
- Isliye ```this.state``` aur ```this.props``` dono mil jaate hain

Declarative means:

Tum React ko bata diya “Yeh button click pe ye function chalana hai.”
Baaki listener attach karna, cleanup karna — sab React khud karta hai.

Event handlers = wo functions jo kisi event hone par chalaye jaate hain.

Aap jab UI mein koi action karte ho — jaise:

- Button Click krna.
- Input field me type krna.
- Mouse layna.
- Form submit krna.

To React ko batana padta hai:

"Bhai, jab ye event ho, tab ye function chalana."

🟢 Ye jo function hota hai — usko “Event Handler” kehte hain.

⭐ Example :

```
function App() {

  function handleClick() {
    console.log("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}
```

Yaha:

- onClick = event

- handleClick = event handler (function)

Jab button click hoga → React handleClick function ko run karega.

⭐ Why called “handler”?

Kyuki ye function event ko handle karta hai.

Event = “Button clicked”

Handler = “Ab kya karna hai jab button click ho?”

Handler ka kaam:

- State update karo

- API call karo

- UI change dikhao

- Something print karo


**Basic examples**
 
Functional component(recommended - hooks)

```
// src/components/Counter.js
import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick(e) {
      // e is a SyntheticEvent (React wraps the native event)
      e.preventDefault(); // e.g., to stop from navigation
      setCount(c => c + 1);
    }

    return (
       <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
    );
}
```

Notes : ```onClick={handleClick}``` pass kr rahe hain - agar parenthese lagaoge to function immediatly run ho jayega.


**Passing arguments to handlers**

```<button onClick={(e) => handleDelete(e, id)}>Delete</button>```

Ya better - avoid inline arrow in render if performance matters, instead perbind or use ```useCallback``` to memoize.

**preventDefault / stopPropagation**

- ```e.preventDefault()``` - default browser behaviour rokne ke liye (form submit ka page reload etc.) MDN spec jaisa behave krta hai.

- ```e.stopPropagation()``` - event bubbling rokne ke liye (rarely needed).

**Event delegation & where React attaches handlers**

React doesn't attach listener to every DOM node; it delegates at a root-level (implementation detail changed across versions). Practical effect: event ordering, native vs synthetic differences and stopPropagation() interactions can vary. For latest behaviors, refer official docs.

*Event Delegation = ek parent element pe single event listener lagao, aur wo child events ko handle kare.*

*React ek hi root element (jaise document ya React root) par event listener attach karta hai.*

*Aur baki sari events ko SyntheticEvent system ke through handle karta hai.*

**JavaScript vs React (Side-by-Side Comparison)**

| Concept                      | JavaScript                          | React                                       |
| ---------------------------- | ----------------------------------- | ------------------------------------------- |
| **Where listeners attach?**  | Jahan tum lagao (button, div, etc.) | Mostly **root-level** (delegation)          |
| **Event delegation?**        | Manually implement karna padta hai  | Auto-handled by React                       |
| **Event type?**              | Native Event                        | SyntheticEvent (React wrapper)              |
| **stopPropagation behavior** | Pure browser behavior               | Kabhi minor differences (version dependent) |
| **Event pooling**            | Nahi                                | React <17 me tha, 17+ me removed            |
| **Control**                  | Low-level                           | High-level, predictable, consistent         |
| **Performance**              | Bohot listeners = slow              | 1 root listener = fast                      |


| Feature             | Native Event                          | SyntheticEvent (React)                   |
| ------------------- | ------------------------------------- | ---------------------------------------- |
| Origin              | Browser (DOM API)                     | React library                            |
| Behavior            | Browser-dependent, inconsistent       | Perfectly consistent across browsers     |
| Structure           | Different browsers → different fields | Same structure everywhere                |
| Works with          | addEventListener                      | onClick, onChange, onSubmit…             |
| Event pooling       | ❌ Nahi                                | ✔ React <17 me tha, React 17+ me removed |
| Propagation         | Browser controlled                    | React controls + wraps                   |
| Delegation          | Tumhe manually karna                  | React internally karta hai               |
| Performance control | Tum par depend                        | React optimized                          |


- Keyboard: use onKeyDown / onKeyUp, avoid onKeyPress.

- Focus: use onFocus / onBlur.

- Pointer: use pointer events (supports mouse + touch + pen).

- Accessibility: clickable div mat banao, real <button> use karo, aria-* attributes lagao.

# input tag 

jab ```<input>``` me user kuch likhta hai, ```onChange``` event fire hota hai. Hum uski value ko ```event.target.value``` se nikal lete hain.

✔ Example (single input)
```
function App() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange={handleChange}
      />

      <p>Name: {name}</p>
    </div>
  );
}
```

👉 Simple words:

- Input me change hota hai → ```handleChange``` call hota hai
- Event se value milti hai → ```setName``` me store karte ho

⭐ 2. Multiple input fields ko ek hi handleChange se kaise handle karte hain?

⚡ Trick:

Har input ko name="" attribute do.

phir ek handleChange me:

```
setFormData({
  ...formData,
  [event.target.name]: event.target.value
});
```

⭐ Example: (multiple inputs with ONE handleChange)

```
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter age"
      />

      <p>{JSON.stringify(formData)}</p>
    </div>
  );
}
```

⭐ Simple words me Explanation:

✔ Step 1:

Har input ko ek unique name do:

```
name="name"
name="email"
name="age"
```

✔ Step 2:

Jab user type karega → handleChange chal jayega.

✔ Step 3:

- ```event.target.name``` → konsa input hai
- ```event.target.value``` usme kya value likhi

✔ Step 4:

Ek hi handleChange se saare inputs update ho jayenge.

⭐ Final Easy Summary

- Single input → handleChange = value read karo, state me daalo.

- Multiple inputs → inputs ko ```name=""``` do.

- Ek hi handleChange → ```[event.target.name]``` se correct feild update hogi.


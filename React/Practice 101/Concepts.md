# About State in ReactJS 
 
👉 Phle "State" ka Concept samajhna chiye - kyuki 
Hooks(like useState, useEffect) sirf ek tarika hai state aur lifecycle ko handle krne ka.

Matlab:

- State ek concepts hai (React ka core idea)
- Hooks ek tool hai (Jo React ne diya state handle krne ke liye functional compponents me)

**State in React**

*🔹 1. State kya hoti hai?*

State React component ke ander ek data storage hoti hai jo UI ko control krti hai.

Jab bhi state change hoti hai → component re-render hote hai → UI update hota hai.

UI Sirf state ke according dikhai deta hai.

✅ Correct way (using React state):

```
import { useState } form 'react';

function Counter() {
    const [count , setCount] = useState(0);

    return (
        <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    );
}
```

❌ Wrong:

```
import { useState } form 'react';

function Counter() {
    let a = 0;

    return (
        <div>
           <p>{count}</p>
            <button onClick={() => {a + 1}}>Update COunt</button>
        </div>
    );
}
```


Ab jab ```setCount()``` call hota hai → React firse render karrta hai → updated count dikhta hai.

*🔹 2. State kaam kaise karti hai internally?*

A. Jab components first time render hote hai, React state ke initial value ko store krta hai.

B. Jab ```setState``` (ye ```setCount```) call hota hai:
- React purani state ko compare krta hai.
- Agar change mila → component ko re-render krta hai.

C. Re-render ke baad updated value dikhai deti hai.

**React ka magic:** Ye sab efficiently karta hai *using Virtual DOM diffing* — taaki performance best rahe ⚡

*🔹 3. State immutable hoti hai ❗*

Matlab - hm directly state variabl ko change nhi kr skte.

❌ Wrong:
```count = count + 1;```

✅ Correct:
```setCount(count + 1);```

Reaact sirf ```setCount`` ke through hi change track krta hai.

*🔹 4. Types of State*

(a) Local State

👉 Jo ek component ke ander use hoti hai.

Example: input form , toogle button, counter.

```
const [isOpen, SetIsOpen] = useState(false);
```

(b) Lifted State

👉 Jab 2 components ko same data chahiye hota hai , to state ko unke **common parent**
me le jaate hain.

Isse kehte hain **Lifting State Up**.

Example:

```
// Parent component me state rakhi jati hai
const [selectedUser, setSelectedUser] = useState(null);
```

(c) Derived State

👉 Jab koi state dusri sate se calculate hoti hai.

Example:
```
const [items, setItems] = useState([10 ,20 , 30]);
const total = items.reduc((a, b) => a+b, 0); //derived state
```

🔹 5. setState asynchronous hoti hai.

React performance ke liye **multiple state updates ko batch** karta hai.

Matlab ```setState``` ke turant baad staate updated nhi milti.

Example:

```
setCount(count + 1);
console.log(count); // abhi purani value print karega.
```

👉 Yes bhai, ye code bilkul kaam karega!
UI me counter badhega har click pe — koi dikkat nahi.
Sirf console.log(count) ka output ek render peechhe hoga.

Explained:

Jab hm ye likhte hai:
```
const [count, setCount] = useState(0);
```

React ek "snapshot' banataa hai us moment ka - aur wo snapshot se UI render karta hai.

Jab hm button dabata hai:

```
setCount(count + 1);
```

is line ka matlab hota hai:

React , please schdule an update with ```count + 1.```

**Yaani immedaitely value change nhi hoti, React ek update queue me daal deta hai - aur jab component re-render hota hai, tab nayi value milti hai.**

*console.log(count) turant run hota hai*

Jab ```setCount``` line execute hoti hai, uske baad waali line (```console.log(count)```) **Same render cycle me** chalti hai.

Aur us time pe React ne abhi UI ko re-render nhi kiya hota.

👉 Isliye ```console.log(count)``` purani value print karta hai.

***Pura code HandleClick  hooks ke saath***

```
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Inside handler:", count);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
```

Solution:
```
setCount(prev => prev + 1);
```
Yahaan prev hamesha latest value hoti hai (React ne jo internally rakhi hai).
To ye situation me console.log me bhi correct data milega.

*🔹 6. Multiple states ek sath rakh sakte ho*

```
const [user, setUser] = useState({ name: "Ankur", age: 22 });

setUser(prev => ({ ...prev, age: prev.age + 1 }));
```

👉 Har state variable independent hota hai.
Tu chaahe to ek object me bhi store kr skta hai ye alg-alg bana skta hai.

*Some important Questions*

1. What is state in React?
- State is an object that determines how a component renders and behaves.

2. Differnce between state and props?
- State →internal (companent ek ander).
- Props → external (parent se aati hai).

3. Why is state immutable?
- Direct mutation se React ko pata chalta ki re-render karna hai.

4. What happens when state changes?
- React re-renders the component and updates the Virtual DOM.

5. Can we use state in class components?
- Yes (using ```this.state```), but in modren React we use hooka like ```useState```.

*🔹  State Management in Large Apps*

Agar project bada ho jaye aur multiple components ek hi state use krte ho - tab hm use kr skte hai:

- Context API.
- Redux Toolkit.
- Zustand.
- Recoil.

Ye tools global state management ke liye hote hain.

# About Hooks

*🔹 1. Hooks kya hote hain?*

**React Hooks ek tarike ke special funtions** hote hain jo functional components ko **Extra powers** dete hain - jaise:

- State handle krna(useState).
- Lifecycle methods use karna (useEffect)
- Ref handle karna (useRef)
- Context use karna (useContext)
- Complex state logic handle karna (useReducer)
- Ya khud ke custom reusable logic likhna (custom hooks)

👉 Phele funcitonal componentss "stateless" hote the (sirf UI dikhata tha).

Hooks ke baad - functional components bhi **class components jiasa full control** le skte hain.

*🔹 2. Hooks kyu aaye?*

Pehle React ke 2 types ke components hote the:

1. Class reuse Components → state + lifecycle methods rakhta the.

2. Functional Components → sirf render karte the.

Problem yeh thi:

- Code reuse krne mushkil(same logic bar-bar likhna padta).
- Complex lifecycle methods.
- Classes ka syntax confusing tha (this binding, etc.)

🧠 Solution: React Hooks — simple functions jo functional components ko class ke jitni power dete hain.

*🔹 3. Hooks ke Rules*

1. Hooks ko top-level pe likho
→ kabhi bhi loop, condition, ya nested function ke andar nahi likhna.

2. Hooks sirf Functional Component ya Custom Hook me hi use karo → Class component me nahi chalega.

3. Custom hooks “use” se start hone chahiye → e.g., ```useFetch()```, ```useCounter()```, etc.

🧩 (a) useState — for managing state

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
```

🧠 useState ek array return karta hai:

- pehla value: state variable
- doosra: setter function

# ⚛️ Virtual DOM

🔹 1️⃣ Pehle “DOM” samajh lo

DOM (Document Object Model) = Browser ke ander HTML ka structure.

Jaise hm HTML likhte hai:

```
<div>
  <h1>Hello World</h1>
  <p>Welcome to React!</p>
</div>
```

Browser isse ek DOM tree me convert karta hai:

```
div
 ├── h1
 └── p
```

Ab agr hm ```h1``` tag change karega, browser ko poora page ka DOM dobara calculate krna padta hai.

(ye heavy operation hota hai 😩).

🔹 2️⃣ Problem kya hai “Real DOM” me?

Real DOM slow hai - kyuki agarr ek chhoti cheez change hoti hai, to browser ko poora tree re-render krna padta hai.

Example:

- Tere app me 1000 items ka list hai

- Sirf ek item update hua

- Browser ko pura 1000 ka structure re-draw karna padta hai ❌

👉 Ye performance degrade karta hai.

🔹 3️⃣ React ka Jadoo — “Virtual DOM” ✨

React ne bola:

"Main ek virtual copy bana lunga real DOM ki memory me(JavaScript object ke form me)."

Ye Copy hoti hai Virtual DOM

🔹 4️⃣ Kaise kaam karta hai Virtual DOM (Step-by-Step)

Soch le:

1. React ek Virtual DOM banata hai (memory me ek JS object jaisa structure).
2. Jab state ya props change hoti hai → React ek new Virtual DOM banata hai.
3. React old Virtual DOM aur new Virtual DOM ko compare karta hai (using Diffing Algorithm).
4. Sirf jo parts change hue hain, unko real DOM me update karta hai (ye step “Reconciliation” kehlata hai).

💡 Is process se browser ko unnecessary re-render nahi karna padta —
sirf chhoti si “patch” apply hoti hai.

🔹 5️⃣ Ek Simple Example:

Suppose:

```
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

Step-by-step kya hota hai:

1. Initially React virtual DOM me banata hai:

```
<h1>Counter: 0</h1>
```

2. Tu button dabata hai → ```count = 1```

3. React ek new Virtual DOM banata hai:

```
<h1>Counter: 1</h1>
```

4. React dono compare karta hai:
 ```
 Old: <h1>Counter: 0</h1>
New: <h1>Counter: 1</h1>
```

Difference mila sirf text me “0 → 1”

5. React real DOM me sirf wahi change karta hai
✅ Pure page ko re-render nahi karta.

🔹 6️⃣ Why Virtual DOM is Fast?
| Without Virtual DOM            | With Virtual DOM                       |
| ------------------------------ | -------------------------------------- |
| Browser updates the whole page | React updates only changed parts       |
| Expensive and slow             | Lightweight and optimized              |
| Manual DOM manipulation needed | Automatic via diffing & reconciliation |


# All About State

## 1) Sabse pehle — State kya hai?

Simple line:

**State = component ki memory**

Matlab component ko jo data yaad rakhna hai render ke beech, wo state me rakha jata hai or ye component ka internal data hota hai jisko hm change kr skte trigger pr render pr lekin external data jo h props through bheja jata hai vo read only hota hai usko m change nhi kr skte hai render ke time.

Example : 
```const [count, setCount] = useState(0)```

Yaha:
- ```count``` = current value mtlb ye variable jo hme useState hook ke andar milta hai or ye ek array return krta hai useState hook jisme ye variable ko hm destruturce krte hai or uss variable ki initial value ko hm ```useState(yaha set krte hai)```.

- ```setCount``` = ye vi hme useState hook ke andar milta hai or ye function return krta hai array m jisko vi hm destructure krte time hm lelete hai useState hook ke andar se or ye function change krta hai uss variable ki value ko jo hmne useState hook ke andar se destructure krte time liya tha array mai se or iss function ka ye hi km hai ki ye uss variable ki value ko change krega developer ke desire ke hisab se.

```js
const [count, setCount] = useState(0)
const [name, setName] = useState("")
const [isOpen, setIsOpen] = useState(false)
const [loading, setLoading] = useState(true)
```

React in sabko alag alag save krta hai.

Matlab memory me kuch aisa:
```js
[
  0,
  "",
  false,
  true
]
```

So component ko yaad rehta hai:
- count kitna hai.
- input me kya likha.
- modal open hai ya close.
- selected tab kaunsa hai.
- loading true hai ya false.

## 2) Normal variable kyu use nahi kar sakte?

### Local variable vs state

**Local variable**

```let count = 0```

Har render pe reset:

```0```

**State**

```const [count, setCount] = useState(0)```

Har render pe previous saved value:

```0 -> 1 -> 2 -> 3```

Agar hm kare:

```let count = 0```

aur click pe:

```count++```

to variable change ho jayega.

But UI nhi change hoga.

kyu?

Kyuki React ko pata hi nhi laga ki kuch change hua.
React sirf tab re-render krta hai jab:

- state change ho.
- props change ho.
- parent re-render ho.

React docs bhi yehi bolti hain:

local variables render ke baad persist nahi karte aur render trigger bhi nahi karte.

## 3) JavaScript DOM approach vs React

**Vanilla JS me**

```js
const btn = document.querySelector("button")
const text = document.querySelector("h1")

let count = 0

btn.addEventListener("click", () => {
  count++
  text.innerHTML = count
})
```

Yaha hm khud manullay 3 kaam kr rahe hai:
1. DOM select.
2. event attach.
3. DOM update.

Matlab:

“what changed” bhi hm bata raha hai
aur
“UI me kaise reflect hoga” bhi hm bata raha hai

**React me kya hota hai?**

React me:
```js
const [count, setCount] = useState(0)

<button onClick={() => setCount(count + 1)}>
  Increase
</button>

<h1>{count}</h1>
```
Yaha hm bs **data change** kr rahe hai.

React khud:
- Component function dubara run krta hai.
- new JSX generate krta hai.
- old JSX se compare krta hai.
- sirf changed DOM update krta hai.

Is process ko bolte hain:

**Re-render → Diffing → DOM Commit**

## 4) Sabse deep concept — UI state ka “result” hota hai

Ye React ka goldan rule hai:

**UI = f(state)**

Matlab UI state ka function hai.

Agar:
```count = 0```

to UI:
```<h1>0</h1>```

Agar:
```count = 5```

to UI:
```<h1>5</h1>```

Matlab React me hm directly UI manipulate nhi krte.
Hm bas **source of truth (state)** change krte hai.
UI automatically uska output hota hai.
yehi reason hai React scalabe hai mtlb data change UI change means state change UI changes.

## 5) “setState karte hi UI kaise change ho jata hai?”

Ye actual internal flow hai:

Maan le :
```setCount(count + 1)```

**Step-by-step internal flow**

Step 1: React update queue me daalta hai

React turant DOM touch nhi krta.

Wo bolta hai:

"Okay bhai next render me count new value hoga"

Step 2: Component function dubara call hota hai

**Counter()**

fir se run hota hai.

Ab:

**count = 1**

milta hai.

Step 3: New JSX snapshot banta hai

Old:

```jsx
<h1>0</h1>
```

New:

```jsx
<h1>1</h1>
````

Step 4: React compare karta hai.

Isko bolte hain **Virtual DOM diffing** 

React compare krta hai:

- kya same hai.
- kya change hua.

Sirf ye line changed:

```jsx
<h1>0</h1> → <h1>1</h1>
```

Step 5: Real DOM minimal update

Bas wahi text node update hota hai.

Pure page ko refresh nahi karta.

Isi wajah se fast lagta hai.

## 6) React me DOM manually select kyu nahi karte?

Kyuki React ke paas already UI ka complete blueprint hota hai.

hm JSX likhte hai:

```jsx
<h1>{count}</h1>
```

React ke liye ye ek **declarative rule** hai:

"Always h1 me current count dikhao"

Ab whenever state changes, React rule ko dubara evaluate krta hai.

Tu manually:

```js
innerHTML
querySelector
appendChild
removeChild
```

ye sab nahi karta.

## 7) Declarative vs Imperative

**Vanilla JS = Impearative**

hm bol rahe hai:

button pakdo
event lagao
text change karo

Matlab HOW to update

**React = Declarative**

hm bol raha hai:

“UI should always reflect count”

Matlab **WHAT UI should look like**

How React khud decide karta hai.

Yahi React ka sabse bada power hai.

## 8) State snapshot concept (deep understanding)

Ye advanced concept hai.

State normal variable jaisi feel hoti hai but actually:

har render me state ki ek snapshot copy milti hai.

Example:

```
setCount(count + 1)
console.log(count)
```

Aksar log expect karte hain next value print ho.

But old value aati hai.

Kyu?

Kyuki ```setCount()``` current variable ko mutate nahi karta.

Ye bahut important line hai:

```setCount()``` current render ki value change nahi karta
sirf **next render request** karta hai.

Matlab:

```setCount(1)```

iska matlab ye nahi:

```count = 1```

balki iska actual meaning:

**“React bhai, next render me count ko 1 kar dena”**

```js
setCount(count + 1)
console.log(count)
```

Maan le current render me:

```js
count = 0
```

To React internally isko aise dekhta hai:

```js
setCount(0 + 1)
console.log(0)
```

Output:

```0```

**UI next render me 1 ho jayegi.**

Kyuki current render ka count freeze snapshot hota hai.

New state next render me milti hai.

Yahi React state ka most confusing but most important concept hai.

## Some other topics


 Why Do We Need State?

 Dynamic UI.

 Example: In a counter button :

 - without state, UI won't update when clicked.
 - With State, UI will update when clicked.

```js
     useState(0)
         |
         |
         v
         [] 
        /  \
       /    \
      v      v
   variable  setter Function
   (count)   (setCount)
```

syntax & destructuring:

```const [count, setCount] = useState(0)```

- **State variable:** A state variable is a special variable in React that holds data that channges over time and should trigger a re-render of the component when it changes.

- **State update function:** Requests React to update the state and re-render the component, Ensure changes are tracked by React's internal system.

Note : Never modify state directly (count = count + 1 ❌). Direclty mutating the variable won't trigger re-render.

```const [count, setCount] = useState(0)``` isme hm const isliye use krte hai kyuki accidental changes se bachne ke liye kyuki most of the time we cannot change by the setCount function we changes the by the value of the count place that's why we const we can use due to direclty not changes the value of count place variable if we can const leads to get the error why would you changes the variable of count place they can assigns by the const keywords that why we can changes always the variable of the count place by setCount function.


**Initial State Possiblities** --> Mtlb hm state mai vi number, string, boolean(primitive values) use krte hai or Complex values vi jaise object, array ye vi hm use krte hai state mai or ye sb hm normal variable mai use krte hai vese hi isme vi krte hai use state mai.

- Primitive values(number, string, boolean).
- Complex values(object, array).


**Updating State:**

- Direct updates:

```setCount(count + 1)```

- Functional updates (when depending on previous state):

```setCount(prev => prev + 1)```

- Updating arrays & objects (use spread operator, immutability concept).
- Common mistakes: mutating directly (push, user.age =22).

Note: Never modify state directly (count = count + 1 ❌). Directly mutating the variable won't trigger re-render.


### How React components are rendered and updated

- **State Declaration:** Components in React mamange their data using "state". In functional components, this is typically done using the useState hook.

- **Updating State:** When an event occurs(e.g., a user clicks a button, data is fetched), you use the state's update function(e.g., setCount) to change the state value.

- **Re-rendering:** When the state is updated using its setter function, React detects this change. It then queues re-render of the component where the state was updated, and any child components that depend on that state.

- **UI Update:** During the re-render, React re-executes the component's render logic It compares the new virtual DOM tree with the previous one and efficiently updates the necessary parts of the acutal DOM to reflects the new state. this ensures that the UI accurately displays the current state values.

### Memory (Storage)

- Each component instance has its own independent state, even if it's the same component used multiple times.

**Why it Works like this?**

- React doesn't attach state to the component function itself mtlb component ke instance jitne vi hm banate hai usse state personally attached hota hai na ki pure ke pure component ke instance ke sath state attached hota hai jaise example hmne component banaya Card.jsx file mai card component banaya to isse attached nhi hoga state vo attached hoga state jitne vi hm iss card components ke instance / bhut jagah card use kra usse instances khete hai to uss case m instances ke sath ek ek instances ke sath ye attached hojyega state.
- Instead, React keeps a state "bucket" for each component instance in the tree.
- When React re-renders, it matches components using thier position in the tree and gives them back thier own state memory.


### Keyed Components
- If you render components in a list:
```jsx
{items.map(item => <Counter key={item.id} />)}
```

- React uses the key prop to decide which state belongs to which component mtlb isse key se hme ye pta chalta hai ki konse component ka kya key hai or isse agr sare component ke key alg alg hai to sab component ke states vi alg alg hote hai isliye hi hm key ka use krte  hai agr hm key nhi dete hai to sare component ka state same hojyega jisse hme pta h ki jb sab ka state same hota hai to sare component ek jaise hi behave krne lgte hai or isse but esa hota nhi h reality m pr in future UI m bugs aa skte hai.

- If key changes --> React treats it as a new component with a fresh state.


### Common pitfalls

**1. Async Nature of State Updates**

- Updating state doesn't happen immediately. React schedules it and re-renders later.

```jsx
const [count, setCount] = useState(0)

const handleClick = () => {
  setCount(count + 1)
  console.log(count)    // Will log old value, not update first
}
```

- Mtlb yha pr phle synchornous task phle chl jyega old value ke sath jaise click kra to sync task m console hoga 0 or UI m hoga 1 async task jo h vo fir se click krega to sync wala old value ke sath console hoga 1 or UI m hoga 1.

**Iska solution h fucntional update:**

```jsx
const [count, setCount] = useState(0)

const handleClick = () => {
    setCount((prevCount) => {
      prevCount = prevCount + 1
      console.log(prevCount)
      return prevCount
    })
}
```

**Iska ek or Solution h jo h useEffect hook se**

```jsx
 useEffect(()=>{
  console.log(count)
 }, [count])       // dependencey array leta hai jo hme btata hai kiski value change hone pr kya change hoga.
```



2. **Batching of Updates**

- React batches multiple state updates in the same event to improve performance (avoids unnecessary re-renders).

```jsx
const [count, setCount] = useState(0)

const handleClick = () => {
  setCount(count + 1)  // 1
  setCount(count + 1)  // 2
  setCount(count + 1)  // 3   hm soch rahe hai ki ek hi click m  ye 3 value render krega UI m lekin ye 1 hi krega kyuki react batching ka concept use krta hai.
}
```

**To iss chiz ko solve krne ke liye hm 1 click m 3 pr UI ko dikhana chahte hai to hm functional update krengai**

```jsx
setCount((prev)=>{return prev + 1}) // 1
setCount((prev)=>{return prev + 1}) // 2
setCount((prev)=>{return prev + 1}) // 3
setCount(prev=>prev + 1) // 4 hm yha pr ek click m hi 4 render hoga UI m kyuki ye current value pr km krta hai.
```

Here, count will increase only by 1, not 3(because React batches them, and each line uses old count).

### How React schedules It?

When you call setState:

- React adds the update to an internal queue.
- React waits until the current event handler finishes(so it can batch multiple updates).
- Then React decides when to re-render the component.
- During render, React reconcils (diffs) the new virtual DOM with the older DOM updates only what changed.
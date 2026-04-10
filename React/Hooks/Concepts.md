# All About Hooks

- Phle jb react class based hoti thi tbh or baad mai jb kuch time baad ye functional based m react convert hui to bhut sare features hme react mai class ki madadt se access krne padh rahe the isliye fir react ne kuch in-built functions diye jine hm direct apne km ko krne ke liye use krte hai unka andar ka algorithm hme likhne ki jrurt nhi h bss hme direct use krna hai to unn pre-built functions ko hi hm hooks kehte hai react mai jaise useState, useEffect etc.

- Hooks are one of the most powerful features in React.
- They were introduced in React 16.8 to let us use state and lifecycle methods inside functional components - without writing a class.

**Before hooks:**

- Functional components were stateless.
- We used class component for state and lifecycle.

**After hooks:**
- Functional components can now manage state, handle side effects, and reuse easily.


## What is a Hook?

- A hook is a special function provided by React.
- It lets you "hook intp" React features like state, lifecylce, context, refs, etc.
- Hooks must start with "use" (e.g., useState, useEffect).

**Rules of Hooks:**

- Only call hooks at the top level of your component(not inside loops/conditions).
- only call hooks from:
- React function components.
- Custom hooks.

**Commonly Used Built-in Hooks**
- useState.
- useEffect.
- useRef.
- useReducer.
- useMemo.
- useCallback.
- useLayoutEffect.
- useContex.

## useEffect Hook

- If useState is for managing state, then useEffect is for managing side effect in React means without UI render side works all called as side effect like console.log, alert, API call, or what we can do when our website UI firstly render then what tasks we can do in our website.

- A side effect means any code that affects somehing outside React's render cycle.

- Examples:

- Fetching data from an API.
- Setting up event listeners (like resize, scroll).
- Working with timers (setInterval, setTimeout).
- Updating the browser's DOM or title manually.

- Normally, React components should only return UI, but side effects let us interact with the outside world.
- useEffect is a React hook that lets us perform side effects in functional components.

```jsx
useEffect(function, [])
```

```jsx
useEffect(() => {
    // side effect code here
    return () => {
        // cleanup code (optional)
    };
}, [dependencies]);     // the dependencies array can contain those state those change to gets triggers then our useEffect function wirte logic gets run like we can write in dependencies array count variable state name count then those time count state gets changed that time useEffect function logic gets runs.
```

- **If we cannot gets wirte an dependency array like empty array then those useEffect function logic gets runs every state changes that is pointed note that's why empty dependencies array [], we can write for only one times runs their code of logic we can wirte in the useEffect function and then we can write dependency array to those state vairable names to gets changes only to runs useEffect wirte in function logic like we can write in dependencies array count state variable then that's time count state changes that time they can runs useEffect hook function logic runs.**


```jsx
function App() {
    const [count, setCount] = useState(0)
    const [decVal, setdecVal] = useState(0)

    useEffect(()=>{
        console.log("Side effect call in these function")
    }, [count, decVal])  // empty array runs only one time on mount of our useEffect, and count state changes that time they can runs that time useEffect function inside logic and the decVal state changes that time they can runs their inside code of logic on side effect that's time they can changes the state.
}

return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{
        setCount(count + 1)
    }}>Increment<button>
    <h1>{decVal}</h1>
    <button onClick={()=>{
        setCount(count - 1)
    }}>Increment<button>
    </>
)
```
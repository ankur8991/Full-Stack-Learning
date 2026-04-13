# All About Conditional Rendering

- React doesn't have if/else statement inside JSX.
- Instead, we use conditional rendering to decide what to show.
- Conditional rendering means displaying UI elements based on certain conditions or states.


## Using if/else:

```jsx
function App() {
    const isLoggedIn = true;

    if(isLoggedIn) {
        return <h1>Welcome back!</h1>
    }
    return <h1>Please login</h1>
}
```

React components can return differnet JSX depending on logic.

Note: Don't trying to use if inside JSX tags -- it is not allowed.


## Using Ternary Operator(Inline Rendering)

Syntax:

```jsx
condition ? <ComponantA /> : <ComponentB />
```

Example:

```jsx
function App() {
    const isLoggedIn = true;

    return (
        <div>
        {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In firstly</h1>}
        </div>
    )
}
```

Note : Avoid complex ternaries with multiple ? : ? : ? -- it reduces readability.


** this code have multiple ternaries that so confusing.**

```jsx
function App() {

    const option = 'd'

  return (
      <>
      <h1>
        {
            option === 'a'
            ?
            <h1>Component A</h1>
            :
            (
                option === 'b'
                ?
                <h1>Component B</h1>
                :
                (
                    
                    option === 'c'
                    ?
                    <h1>Component C</h1>
                    :
                    (
                        
                        option === 'd'
                        ?
                        <h1>Component D</h1>
                        :
                        <h1>Other component</h1>
                    )
                )
            )
        }
      </h1>
    }
```


## Logical AND (&&) Operator

```jsx
SYNTAX:

condition && <Component />
```

```jsx
EXAMPLE:

function Notification({ hasMessage }) {
    return (
        <div>
        {hasMessage && <p>You have new messages!</p>}
        </div>
    )
}
```

Note:
- If the condition is true --> it renderss the element.
- If false --> renders nothing.
- Use Case --> When you only want to show something(not alternate options).


## Conditional Rendering With Variables

```jsx
function Dashboard({ option }) {
    let content;

    if(option === "a") {
        content = <ComponentA />
    } else if (option === "b") {
        content = <ComponentB />
    } else {
        content = <ComponentC />
    }

    return <div>{content}</div>
}
```

- Store JSX in a variable.
- Helps keep return statement clean and readable mtlb Conditional rendering with variable isliye use krna chiye kyuki hme JSX ko clean & Readable rakhna chiye or jo vi logic wagera hai vo hme phle hi perform krvana hai.

## Conditional CSS or ClassName

```jsx
function Button({ isActive }) {
    return (
        <button className={isActive ? "btn-active" : "btn-inactive"}>
        Click Me
        </button>
    );
}
```

## Conditional Rendering with state

```jsx
import { useState } from "react"

function ToggleMessage() {
    const [show, setShow] = useState(true)


return (
    <div>
    <button onClick={() => setShow(!show)}>
    {show ? "Hide" : "Show"} Message
    </button>
    {show && <p>This is a secret message!</p1>}
    </div>
)
}
```

## Returning null (Hide Completely)

```jsx
function Alert({ show }) {
    if(!show) return null
    return <div ClassName="alert">This is an alert!</div>
}
```

- Returning null means "render nothing".
- Common in modal or popup components.

## Advanced: Conditional Components

```jsx
function Layout({ type }) {
    const Component = type === "home" ? HomePage : AboutPage
    return <Component />
}
```

- You can ever conditionaly select components themselves.
- Useful for routing-like patteerns or dynamic layouts.


## Using switch Statement

When we have 3 or more conditions, if/else becomes messy. That's when switch makes your code cleaner and more readable.

```jsx
function StatusMessage({ status }) {
    switch (status) {
        case "loading" :
            return <p>Loading...</p>

    case "success":
        return <p>Data loaded successfully ✅</p>

    case "error":
        return <p>Something went wrong ❌</p>

    default:
         return <p>Idle state...</p>
    }
}
```

## Using Mapping (Object Lookup)

For even more elegant and scalable conditional rendering -- you can use object maps to store your UI patterns.

```jsx
function StatusMessage({ status }) {
    const statusMap = {
        loading: <p>Loading...</p>
        success: <p>Data loaded successfully ✅</p>
        error: <p>Something went wrong ❌</p>
    };

    return statusMap[status] || <p>Idle state...</p>
}
```

## Common Mistakes

- Writing if inside JSX --> use ternary or logical AND.
- Nesting too many ternaries --> makes code unreadable.
- Forgetting to handle "else" case --> empty UI.
- Using == instead of === --> unexpected behavior.
- Forgetting retrun null --> cause unnecessary rendering.


## Tips
- Extract conditional logic into small functions.
- Keep JSX clean -- logic outside, UI inside.
- Prefer readability over compactness.
- For multiple conditions, use switch or mapping.
# All About List Rendering

## What is List Rendering?

List Rendering means displaying multiple items (like data from an array) in JSX.

We use javaScript's .map() method to loop through data and return JSX elements.

```jsx
function NameList() {
    const name = ["John", "Alpha", "karan"]

    return (
        <ul>
        {name.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
    );
}
```

## Why we use .map() in React

React works with immutable UI updates, and .map() creates a new array without modifying the original.

JSX can embed JavaScript expressions inside { }, so we can directly use array.map() in our JSX return.

**Why we cannot Use ForEach() loop instead of map()?**

```
 because of the forEach loop cannot return any values so they cannot return any array that's why they can not be followed immutable rule of React that's why we can not use ForEach() loop instead of .map() function and the ForEach() loop only display(console only) the items of present in array and we apply on that array to forEach() loop.
```


## Differnet Types of Arrays to Render?

**(A) Normal Array**

```jsx
const fruits = ["John", "Alpha", "karan"]
```

```jsx
<ul>
   {fruits.map((name, i)=> (<li key={i}>{name}</li>))}
</ul>
```

**(B) Array of Objects**

```jsx
const users = [
    {id: 1, name: "john", age: 23},
    {id: 2, name: "Deo", age: 24},
    {id: 3, name: "karan", age: 22}
]

<ul>
   {users.map(user => (
    <li key={user.id}>
    {user.name} - {user.age} years old
    </li>
   ))}
</ul>
```


**(C) Array of Arrays**

```jsx
const data = [
    ["HTML", "CSS", "JavaScript", "React"],
    ["NODE", "MongoDB", "Express"]
]


<div>
    {data.map((group, index) => (
        <ul key={i}>
        {group.map((item, j) => (
            <li key={j}>{item}</li>
        ))}
        </ul>
    ))}
</div>
```

## Rendering Components with .map()

Instead of inline JSX, create a reusable component.

```jsx
function UserCard({ user }) {
    return <li>Name is {user.name} and age is {user.age}</li>
}

function UserList() {
    const users = [
        { id: 1, name: "John", age: 22},
        { id: 2, name: "Deoryl", age: 24},
    ]

    return (
        <ul>
           {users.map(user => <UseCard key={user.id} user={user} />)}
        </ul>
    );
}
```


## Conditional Rendering with Mapping

You can also conditionally show elements during map.

```jsx
{users.map(user => 
    user.age > 18 && <p key={user.id}>{user.name}</p>
)}
```

```jsx
{users.map(user => (
    <p key={user.id}>{user.age > 18 user.name : "Too young"}</p>
))}
```


## Common Mistakes 

- Mistake 1: Forgetting return when using curly braces in arrow function:

```jsx
// Wrong
{items.map(item => { <li>{item}</li> })}

// Correct
{items.map(item => <li>{item}</li> )}
// OR
{itema.map(item => { return <li>{item}</li> })}
```

- Mistake 2: Not using key prop like ```<div key={user.id}>``` or ```<div key={index}>```.
- Mistake 3: Mutating the original array before mapping.
- Mistake 4: Returning multiple root elements inside .map() without wrapping (use <></>) fragments means when we returns multiple items in the map inside function then we can firstly wrap by the fragments.
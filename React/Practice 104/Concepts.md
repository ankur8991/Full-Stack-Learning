# Conditional Rendering?

React mein conditional rendering ka mtlb hota hai, "Koi cheez screen pe dikhani hai ya nhi, yeh condition ke basis pe decide krta hai."

Exactly wese hi jaise hum normal programming languages (if/else) mein krte hai.

🎯 Why Conditional Rendering is Important?

Projects mein har jagah use hota hai —

✔ Login/logout buttons.

✔ Loader dikhane jab data aa raha ho.

✔ Error messages.

✔ Private routes.

✔ Based on user role (admin/user) different UI.

✔ Tabs, filters, dropdowns.

✔ Dynamic dashboards.

🧠 React mein Conditional Rendering ke Common Ways

1️⃣ If / Else

```
if(isLoggedIn) {
    return <Dashboard />
} else {
    return <Login />
}
```

Use Case: Auth pages.


2️⃣ Ternary Operator (Most Common)

```
{isLoading ? <LoadingSpinner /> : <ProductList />}
```

Use Case: Data load hote time loader dikhana.


3️⃣ Logical AND (&&)
```
{error && <p style={{color: "red"}}>{error}</p>}
```

Use Case:
- Error message.
- Optional UI.

Note : Agar left side true hai tabhi right side render hota hai.


4️⃣ Logical OR (||)

```
{userName || "Guest"}
```

Use Case:
- Default value show krna.

5️⃣ Switch Case

Multiple conditions ke liye:

```
switch(status){
    case "loading":
    return <Loading />
    case "success" :
    retrun <Success />
    case "error"
    return <Error />
    default:
    return null
}
```

Use Case:
- Payment status.
- Order status.
- API states.


6️⃣ Early Return (Most clean & preferred)

```
if(!data) return <Loading />
return <Dashboard data={data} />
```

Use Case:
- Cleaner code.
- Less nested JSX.


🧩 Best Practices

✔ Avoid nested ternaries (very bad)

✔ Use meaningful variable names (isLoading, hasError, isLoggedIn)

✔ Extract logic outside JSX

✔ Use early return to avoid else

✔ Keep UI pure, logic separate

Conditional rendering is not just a React concept - it's UI decision making in react.


# list rendering 

⭐ What is List Rendering?

React mein jab humein multiple items ko UI me dikhana hota hai (like Todo List, Products, Users, Comments), toh hum list rendering use karte hain.

Matlab:

“Ek array ke data ko map karke UI me show karna = List Rendering”

⭐ Why List Rendering is Important?

Har real project me hoga:

✔ Todo list

✔ Product list (e-commerce)

✔ Chat messages

✔ Table rows

✔ User list

✔ Notifications

✔ Cards, grids, menus

Yeh sab list rendering ki help se banta hai.

⭐ React me List Rendering kaise hota hai?

Sabse important method:

👉 map() method

React me JSX return karne ke liye hum map() ka use karte hain.

🔥 Basic Example (Very Important)

Suppose tumhare paas ek array hai:

```
const fruits = ["Apple", "Banana", "Mango" ];
```

List render karne ke liye:

```
return (
  <ul>
    {fruits.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```
Yahi list rendering hai.


⭐ Why use map(), not for loop?

React me map is better because:

✔ map() directly JSX return karta hai

✔ Clean and functional programming style

✔ Easy to read

✔ Less code

✔ React optimise kar leta hai

For loop se messy code hota hai.

⭐ Real Example: Todo List Rendering

Array of objects (best practice)

```
const todos = [
  { id: 1, text: "Study React" },
  { id: 2, text: "Go Gym" },
  { id: 3, text: "Buy Milk" }
];
```

Render:
```
return (
  <div>
    {todos.map((todo) => (
      <p key={todo.id}>{todo.text}</p>
    ))}
  </div>
);
```


⭐ Conditional List Rendering

Agar list empty ho:
```
{todos.length === 0 ? (
  <p>No todos available</p>
) : (
  todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
)}
```


⭐ Why We Use key in List Rendering?

✅ 1. To help React identify each item uniquely

When you render a list using ```.map()```, React needs to know:

- Which item is added

- Which item is removed

- Which item is updated

React can’t understand this on its own.

👉 The ```key``` acts as a unique identity of each item.

⭐ 2. To improve performance

Without a unique key:

- React will re-render the ENTIRE LIST again

- Even if only one item changed

With key:

- React re-renders only that specific item

- This makes UI fast and efficient


⭐ 3. Prevents UI bugs (especially in dynamic lists)

If you add/delete items and no key is given:

❌ Wrong item gets updated
❌ Wrong item gets removed
❌ Input fields lose focus
❌ Data gets swapped

React gets confused which item is which.
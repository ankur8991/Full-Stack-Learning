# All About redux - Toolkit

1️⃣ Redux actually hai kya?

**Redux ek state management library hai.**

 👉 *State* = app ka data.

 Jaise:
- User login hai ya nhi.
- cart me kitne items hain.
- theme dark hai ya light.

Problem ye hoti hai ki :
- React me state component ke ander hoti hai.
- Agar **bahut jagah** use hona ho → props drilling nightmare ban jata hai 😵.

Reduc ka kaam :

**Poora app ke data ko ek central jagah rakhna data ka mtlb poore app ke states ko ek jagah rakhna jisse hme props drilling na krni pde**


2️⃣ Redux React ka part hai ya alag?

❌ Redux React ka part nahi hai

**✅ Redux ek independent library hai**

Lekin : 
- React ke sath use krne ke liye ek helper library use hoti hai 👉 **react-redux**

Matlab:
- Redux = logic + data store.
- React = UI banata hai.
- react-redux = bridge (React ↔ Redux).

3️⃣ Redux use kyun karte hain? (Real problem)

**Without Redux:**

```
App
 └── Navbar (needs user)
 └── ProductList
     └── ProductCard (needs cart)
         └── Button (needs cart update)
```

Har level pe props pass krni pdti hai.

👉 **Props Drilling**

**With Redux:**

```
Redux Store (Global Data)
   ↑         ↑
 Navbar   Button
```
Direct store se data lo, kisi parent se **permission nahi** 😎

4️⃣ **Redux ke main concepts.** 

 Redux ke **4 pillars** hote hai:

 1️⃣ Store

 👉 Single source of truth.

 Socho:

 ```Store = ek bada JS object```

 Isme poore app ke state hote hai:

```
{
  user: {...},
  cart: [...], 
  theme: "dark"
}
```

2️⃣ Action (Kya hua?)

Action ek simple object hota hai jo batata hai:

  "Bhai, kya change krna hai or Mtlb batata hai ki kya kaam krna hai?"

  Example:

```
  {
    type: "cart/addItem",
    payload: { id: 1, name: "Laptop" }
  }
```

Meaning :

➡️ cart me item add karo.

3️⃣ Reducer (Kaise change hoga?)

Reducer ek **function** hota hai jo decide krta hai:

  Action aaya hai → state kaise change hogi?

Important rule:

❌ Direct state mutate nahi karni

✅ Naya state return karna

Example:

```
function cartReducer(state, action) {
  if(action.type === "cart/addItem") {
    return [...state, action.payload]
  }
  return state
}
```

 We can say = **Current state + action -> new state.


4️⃣ Dispatch (Action bhejna)

Dispatch ka mtlb:

   Action ko store tak bhejna.

```
dispatch(addItem(product))
```

5️⃣ OLD Redux vs NEW Redux (Important)

❌ Old Redux (painful for developers)
- bahut files
- switch case
- manullay immutable logic
- boilerplate zyada

✅ Modern Redux = Redux Toolkit (RTK) 

Redux Toolkit ne bola:
 
    "Redux use karo but dimaag kharab mt kro"

6️⃣ Redux Toolkit (Latest & Recommended)

RTK kya krta hai?
- Boilerplate kam.
- Auto immutability (immer use krta hai).
- Simple syntax.


7️⃣ Redux Toolkit ke main concepts

1️⃣ *configureStore*

Store banata hai

```
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  }
})
```

2️⃣ *Slice (Game changer)*

Slice = **state + reducer + actions** → ek jagah sab.

```
import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload)
    },
    removeItem(state, action) {
      return state.filter(item => item.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
```

👉 Yahan state.push() allowed hai

RTK backend me immutable bana deta hai (magic = Immer) RTK ke andar ek library hoti hai 👉 Immer.

**Mutation = same memory change**

**Immutability = new memory create**

👉 Immer kya karta hai?

Tum mutating code likho,
Immer usko immutable bana deta hai.

Tumhe jo dikh raha hai:

```state.push(item)```

Backend me jo ho raha hai:

```return [...state, item]```

✨ Ye sab automatically hota hai

Redux Toolkit reducers me state actual state nahi hoti
Wo Immer ka draft state hota hai
Jo baad me immutable state ban jaata hai

Tum mutation jaisa code likhte ho
RTK usko immutability me convert kar deta hai


8️⃣ Redux kab use karein aur kab nahi?

✅ Use Redux jab:
- Large app ho.
- Same data bahut jagah use hota ho.
- Complex logic (auth, cart, permissions).

❌ Redux mat use karo jab:
- Small app.
- sirf 2-3 components dara share kar rahe hain.
- useContext se kaam ho jayega.

🔥 Redux vs Context API (short)

| Feature    | Redux | Context |
| ---------- | ----- | ------- |
| Debugging  | ⭐⭐⭐⭐  | ⭐⭐      |
| DevTools   | Yes   | No      |
| Middleware | Yes   | No      |
| Large apps | Best  | Weak    |


🧠 Final simple line

Redux React ka part nahi hai

Redux = global state ka boss

Redux Toolkit = modern, recommended way.
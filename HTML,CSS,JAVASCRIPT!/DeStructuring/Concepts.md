# All About Destructuring 


## 🧠 Core idea (Destructuring kya hai?)

- Destructuring is a JavaScript expression used to unpack values from arrays or properties into distinct varaibles.

- think of its unpacking a suitcase.

```js
const [a, b] = [10, 20]
const { name, age } = { name: "Ankur", age: 21 }
```

👉 Simple:

**Array/Object se values nikal ke varaibles me assign krna -- clean way me**

Without destructuring:

```js
const user = {
     name: "ANkur",
      age: 21
    }

const name = user.name
const age = user.age
```

With destructuring:

```js
const { name, age } = user
```

👉 Same result, but clean + readable

-------------------------------------------------------------------------

## 1. Array Destructuring

**🔹 Basic**

```js
const arr = [10, 20, 30]
const [a, b, c] = arr
```

👉 Mapping:
- ```a = 10```
- ```b = 20```
- ```c = 30```


**🔹 Skip values**

```js
const arr = [10, 20, 30]
const[first, , third] = arr
```

👉 ```second``` skip ho gaya.


**🔹 Default values**

```js
const arr = [10]

const [a, b = 50] = arr
```
👉 ```b = 50``` (kyuki value nhi thi)


**🔹 Rest operator (array me)**

```js
const arr = [1, 2, 3, 4]

const [first, ...rest] = arr
```

👉
- ```first = 1```
- ```rest = [2, 3, 4]```


**🔹 Swap variables (🔥 useful)**

```js
let a = 1
let b = 2

[a, b] = [b, a]
```

👉 swap ho gaya without temp variable.

-------------------------------------------------------------------------

## 2. Object Destructuring

**🔹 Basic**

```js
const user = {
    name: "Ankur",
    age: 21
}

const {name, age} = user
```

**🔹 Rename variables (important)**

```js
const {name: userName} = user
```

👉

```userName = "Ankur"```


**🔹 Default values**

```js
const user = { name: "Ankur" }

const { age = 19 } = user
```

👉 ```age = 18```

**🔹 Nested destructuring**

```js
const user = {
    name: "Ankur",
    adress: {
        city: "Delhi",
        pin: 1212414
    }
};

const { address: { city } } = user
```

👉 ```city = Delhi```


**Important catch**

```js
const { address: { city } } = user
```

👉 Iska matlab:

- pehle user.address nikalo
- fir usme se city nikalo

👉 Agar address exist nahi karega → crash

👉 ```address``` variable nhi milega, sirf ```city```

Agar chahiye:

```js
const { address } = user
const { city } = address
```

**🔹 Rest operator (object me)**

```js
const user = {
    name: "Ankur",
    age: 21,
    city: "Noida"
};

const { name, ...rest } = user
```

👉

- ```name = "Ankur"```
- ```rest = { age: 22, city: "Delhi" }```


## Function me destructuring

**🔹 Without destructuring**

```js
function greet(user) {
    console.log(user.name)
}
```

**🔹 With destructuring**

```js
function greet({ name }) {
    console.log(name)
}
```

👉 Clean + direct access


**🔹 Default + destructuring**
```js
function greet({ name = "Guest" }) {
    console.log(name)
}
```


**Common mistakes**

**❌ Undefined error**

```js
const user = {}

const { name } = user   // ok (undefined)
```

But:

```js
const { address: { city } } = user
```

------------------------------------------------------------------------

## **🧠 Deep intuition (sabse important)**

**Arrays:**

👉 Position matter krta hai

```js
const [a, b] = [10, 20]
```

**Objects:**

👉 Key name matter krta hai

```js
const { name } = user
```

**⚡ Destructuring + Spread**

```js
const user = { name: "Ankur", age: 21 }

const updated = { ...user, age: 22 }
```

👉 extract + rebuild


**Array destructuring:**

“List me jo order hai, uske hisaab se values nikaal raha hoon”

**Object destructuring:**

“Object ke keys ke naam se values nikaal raha hoon”

-------------------------------------------------------------------------

## Destructuring in Functional Programming/Parameters:

Yahi actual use-case hai.

### ✅ Case 1: Normal function

```js
function greet(user) {
    return `Hello ${user.name}`
}
```

### ✅ Case 2: Destructuring in params

```js
function greet({ name }) {
    return `Hello ${name}`
}
```

👉 Direct object se name nikal liya.


### Multiple values
```js
function createUser({ name, age, city }) {
    retrun `${name} is ${age} from ${city}`
}
```

### Default values
```js
function greet({ name = "Guest" }) {
    return `Hello ${name}`
}
```

👉 Agar name missing ho → "Guest"

**⚠️ Important edge case**

```js
greet(); // ❌ error
```

Fix:

```js
function greet({ name = "Guest" } = {}) {
  return `Hello ${name}`;
}
```

👉 Yeh ```{}``` default diya, warna destructuring crash karega.


### Array destructuring in function params.

```js
function sum([a, b]) {
    return a + b
}

sum([2, 3]) //5
```

**✅ Pure functions**

```js
const getName = ({ name }) => name
```

👉 No mutation, only extraction.

**✅ Avoid deep chaining**

```js
// ❌
user.address.city

// ✅
const { address: { city } } = user;
```

**✅ Clear dependencies**
```js
function calculateTax({ price, taxRate }) {
  return price * taxRate;
}
```

👉 Function ko clearly pata kya chahiye.


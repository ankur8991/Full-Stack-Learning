# All About Spread & Rest Operator

## 🧠 Core idea (Spread vs Rest)
Same syntax ```...``` hai, but role alag hai:
- **Spread**(```...```) → *values ko phaila deta hai*
- **Rest**(```...```) → *values ko ikattha krta hai*

👉 Remember one thing:
- **Spread** = **expand**
- **Rest** = **collect**

### 🚀 1. Spread Operator (expand / phailana)

**🔹 Arrays me**

```js
const arr1 = [1, 2]
const arr2 = [3, 4]

const result = [...arr1, ...arr2]
```

👉 Behind the scenes:
```js
// Same as
[1, 2, 3, 4]
```

💡 Insight
- Spread array ko tod deta hai into individual elements.
- Fir new array me daal deta hai.


**🔹 Copy banana (important)**
```js
const original = [1, 2, 3]
const copy =  [...original]
```

👉 Yeh **shallow copy** hai.

⚠️ **Shallow copy**
```js
const a = [{ x: 1}]
const b = [...a]

b[0].x = 100  // overwrite to x: 1 to x: 100
console.log(a[0].x)     // 100
```

👉 Kyuki object reference copy hua, deep copy nhi.

-------------------------------------------------------------------------


**🔹 Objects me**

```js
const user = { name: "Ankur" }
const updated = {...user, age: 21}
```

👉 Result:
```js
{name: "Ankur", age: 21}
```

**🔥 Override behavior (important)**
```js
const obj = { a:1, b: 2}

const newObj = { ...obj, b: 10 }
```

👉 ```b``` overwrite ho jayega.


**🔹 Function/Method call me**
```js
const nums = [1, 2, 3]

Math.max(...nums)  // 3
```
👉 Spread = array → individual arguments


### 2. Rest Operator (collect / ikattha krna)

**🔹 Function parameters me**
```js
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0)
}
```

```js
sum(1, 2, 3, 4)   // 10
```

👉 ```...numbers``` = sab arguments ko ek array me collect kar liya

**🔹 Destructuring me (arrays)**

```js
const arr = [1, 2, 3, 4]
const [first, ...rest] = arr
```

👉 Result:

```js
first = 1
rest = [2, 3, 4]
```

**🔹 Destructuring me (objects)**
```js
const user = { name: "Ankur", age: 22, city: "Delhi" };

const { name, ...rest } = user;
```

👉 Result:

```js
name = "Ankur"
rest = { age: 22, city: "Delhi" }
```

**⚠️ Rules (bahut important)**

*❗ Rest last me hi aata hai*

```js
// ❌ galat
const [...rest, last] = [1,2,3];

// ✅ sahi
const [first, ...rest] = [1,2,3];
```

*❗ Spread kahin bhi aa sakta hai*
```js
const arr = [0, ...[1,2], 3];
```



**🧩 Spread vs Rest ek saath**
```js
const arr = [1, 2, 3]

function test(a, b, ...rest) {
    console.log(a, b, rest)
}

test(...arr)
```

👉 Flow samajh:

- ```...arr``` → spread → ```1,2,3```
- function me:
- ```a = 1```
- ```b = 2```
- ```rest = [3]```

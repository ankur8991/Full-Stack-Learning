# All About Functional Programming 
- Functional Programming is a programming paradigm where functions are first-class citizens, and the focus is on pure functions, immutability, and function composition rahter than shared state and side-effects.

1. Pure Functions.
2. Immutability.
3. Declarative.
4. Aviod Shared state.
5. Avoid Side Effects.
6. Reuse or Compose Logic.
7. Don't iterate.
8. Loose coupling.
9. First-Class & Higher-Order Functions.

-------------------------------------------------------------------------

**🧠 1️⃣ Functional Programming hota kya hai?**

Functional Programming ek programming paradigm hai jisme:

Hum program ko functions ke through design krte hain Data ko change krne ke bajaye transform krte hain.

Yaha foucs hota hai:
- Pure functions.
- Immutability.
- No Side effects.
- Functions as values.

-------------------------------------------------------------------------

**2️⃣ Sabse Basic Concept – Function ko seriously lena**

Normal programming me function sirf kaam krne ka tool hota hai.

Functional Programming me:

👉**Function** = First class citizen.

matlab function ko:
- Variable me store kr skte hai.
- argument me pass kr skte hai.
- return kr skte hai.

Example:
```js
function greet() {
    return "Hello"
}

let sayHello = greet

console.log(sayHello())
```

**3️⃣ Pure Function (FP ka heart ❤️)**

*🔹 Pure Function kya hota hai?*
1. same input → same output
2. Bahar ki duniya ko change nhi karega(no side effect)

Example(Pure):
```js
function add(a, b) {
    return a + b
}
```
Same input doge → same output milega.

-------------------------------------------------------------------------

*❌ Impure Function*
```js
let total = 0 

function addToTotal(num){
    total += num
}
```

Ye bahar ke variable ko change kr raha hai.
ye side effect hai.

-------------------------------------------------------------------------

**🧊 4️⃣ Immutability (React ka core concept)**

Functional programming me data change nhi krta - naya data banate hain.

❌ Wrong (mutation):
```
let arr = [1, 2, 3]
arr.push(4)
```

✅ Correct (immutable):
```
let arr = [1, 2, 3]
let newArr = [...arr, 4]
```

React bhi isi principle pe kaam krta hai.

Isliye:
```setState(prev => [...prev, newItem])```

-------------------------------------------------------------------------

**5️⃣ Higher Order Function (HOF)**

jo function:
- function ko argument me leta hai
- ya function return krta hai

Example:
```js
function operate(a, b,fn) {
    return fn(a, b)
}

operate(2, 3, (x, y) => x+y)
```

JS ke built-in HOF:
- map().
- filter().
- reduce().
- SetTimeout().

**6️⃣ Declarative Style (FP ka thinking model)**

Imperative:
```js
let result = []
for(let i=0 i<arr.length i++){
    result.push(arr[i]*2)
}
```

Functional - Declarative:

```let result = arr.map(n = n*2)```

Functional Programming m hum "HOW" nhi batate hai Hum batate hai "WHAT" kya chiye tumhe bss yeh btao baki km system ka h internal working ki koi need nhi h hme krne ki ya samjhne ko.

-------------------------------------------------------------------------

**7️⃣ Side Effects kya hote hain?**

Side effect mtlb :
- DOM change krna.
- console.log.
- API call.
- global variable modify.

Functional programming ideally side effects avoid krta hain.

React me side effect handle hote hain:

```useEffect()``` ke through.

-------------------------------------------------------------------------

**8️⃣ FP ka mental model**

FP me hm:
- Data ko change nhi krte.
- Data ko transform krta hai.
- Loops ki jagah map/filter use krte hai.
- Pure funtions likhte hai.

-------------------------------------------------------------------------

**Summary**

Functional Programming ka mltb:
- Pure functions likho.
- Data mutate mt kro.
- Side effects control kro.
- Declarative code likho.
- Functions ko value ki tarah treat kro.

React isi thinking pe bana hai.

-------------------------------------------------------------------------
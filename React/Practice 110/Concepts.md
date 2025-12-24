# About useCallback() Hook 

1️⃣ Pehle samajhe : React re-render karta kyun hai?

React ka ek simple rule yaad rakhe :

**Jab bhi state change hoti hai, componenet dobara render hote hai**

Aur jb component dobara render hote hai:
- saare varibles dobara bante hai.
- saare function dobara bante hai.

Examples: 

```
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return <button onClick={increment}>+</button>;
}
```

Jab ```count``` change hua:
- ```App()``` function phir se chala.
- ```increment``` **naya function** ban gaya (memory me naya referene).

Ye normal hai, aise hi kaam krta hai.

2️⃣ Problem kahaan se start hoti hai?

Problem tab aati hai jab:
- tum **function** ko props ke through child component ko bhejte ho.
- aur child component memoized hai (JO sirf variables  ko memoized krta hai).

Ab dhyaan se samajhe 👇
- ```parent``` re-render hua (kyuki count change).
- jo child function tha vi naya function ban gaya.
- or jab naya function bn gya tab Props change ho gaye.
- isliye ye function child wala dobara re-render hogya.

👉 Chahe vo function ka logic same ho, reference alag hojyega.

3️⃣ Ab entry hoti hai: useCallback()

useCallback kya karta hai?

Function ka reference yaad (memoize) karke rakhta hai

Matlab:

- Agar dependencies same hain

- To React purana function hi reuse karega

- Naya function nahi banega

***OR agr hme fir vi useCallback use krke vi kuch state mai props ko pass krke function mai change karana hai mtlb re-render karana hai to hm syntx mai dependencies wale part mai vo props daal dengai or jisko frezz/re-use karana hai to usko usecallback() fuction ke ander rakhengai***

Syntax:

```
const memoizedFn = useCallback(() => {
  // logic
}, [dependencies]);
```

useCallback vs normal function

| Cheez        | Normal function   | useCallback                    |
| ------------ | ----------------- | ------------------------------ |
| Re-render pe | Naya function     | Same function (agar deps same) |
| Memory       | Kam               | Thodi zyada                    |
| Use case     | Simple components | Optimized components           |


useMemo() vs useCallback() hooks differnece.

| Point                | useMemo           | useCallback               |
| -------------------- | ----------------- | ------------------------- |
| Kya yaad rakhta hai  | Value             | Function                  |
| Return karta hai     | Result            | Function                  |
| Main use             | Heavy calculation | Stable function reference |
| Child re-render roke | ❌                 | ✅                         |
| Readability          | Medium            | High                      |


**useMemo React ko bolta hai:
“Is value ko dobara calculate mat karna”**

**useCallback React ko bolta hai:
“Is function ko dobara banana mat”**
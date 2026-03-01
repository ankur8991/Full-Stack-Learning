# All About Paradigm

👉 **Paradigm = Sochne ka tareeka (way of thinking) code likhne ka**


Matlab:

Tum problem ko kis style me solve krte ho.

Ye language nhi hota Ye coding ka philosophy hota hai.

Same problem ko alag paradigm me alag tareeke se likh skte h.

----------------------------------------------------------------------

**Simple Example**

Problem : Student ke total marks calculate kro.

Hm isse likh skte hai :
- Step by step instructions (Procedural)
- Object bana ke (OOP)
- Pure functions use krke (Functional)

Ye hi paradigm differnce hai.

-------------------------------------------------------------------------

## 🔵 Main Programming Paradigms

### 1️⃣ Imperative Paradigm (HOW batata hai)

Computer ko step by step batate hai:

Kaise kaam krna hai.

Example thinking:
```
Step 1: ye kro
Step 2: ye kro
Step 3: Result nikalo
```

Iske andar 2 major types aate hain:

**🟢 Procedural Programming**
- Code ko functions/procedures me divide krte hai.
- State change hota rhta hai.

Example languages:

C

JavaScript me hi procedural likh skte hai.

**🟣 Object-Oriented Programming (OOP)**

Yaha focus hota hai:

👉Objects + Data + Behavior.

Concepts:
- Encapsulation.
- Abstraction.
- Inheritance.
- Ploymorphism.

Thinking model:

Real world entities ko model karo.

Example:

Car object, User object, BankAccount object.

------------------------------------------------------------------------

### 2️⃣ Declarative Paradigm (WHAT batata hai)

yaha hum batate h:

Kya chiye result me.

HOW ka tension system ka hota hai mtlb uss functional programming ke internal ka kaam hme pta krne ki jrurat nhi hai jaise array ka map(), reduce(), filter() methods.

Example:

SQL:
```
SELECT name FROM users;
```

Hm nhi batate kaise search kre DB khud manage krta hai.

-------------------------------------------------------------------------

## 🟡 Functional Programming (Declarative ka type)

Focus:
- Pure functions.
- No side effects.
- Immutable data.
- Higher-order function.

Example thinking:

Input → Output
No internal state change

JavaScript me:
```
array.map()
array.filter()
array.reduce()
```

Ye functional style hai.

-------------------------------------------------------------------------

#### 🧠 Deep Comparison
| Paradigm    | Focus     | State     | Thinking Model      |
| ----------- | --------- | --------- | ------------------- |
| Procedural  | Steps     | Mutable   | Instruction based   |
| OOP         | Objects   | Mutable   | Real-world modeling |
| Functional  | Functions | Immutable | Mathematical model  |
| Declarative | Result    | Hidden    | Describe outcome    |

-------------------------------------------------------------------------

#### Important

JavaScript:

👉 Multi-paradigm lanaguage hai.

Isme:
- Procedural likh skte hai.
- OOP likh skte hai.
- Functional likh skte hai.

Isliye JS baki se alg.

-------------------------------------------------------------------------

Paradigm matter krta hai:
- Maintainability.
- Scalability.
- Testability.
- Concurrency handling.

Example:
Functional code → easier testing.
OOP → better modeling.
Procedural → simple small scripts.

**Programming paradigm hme code likhne ka structure deta hai Language tools deta hai Paradigm thinking deta hai.**

-------------------------------------------------------------------------

**🎯 Ek Example**

Same task:

Add 1 to each number in array.

Procedural : 
```
let arr = [1, 2, 3, 4, 5, 6]

let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] + 1);
}

console.log(result)

OUTPUT : [ 2, 3, 4, 5, 6, 7 ]
```

Functional:
```
arr.map(x => x + 1)

OUTPUT : [ 2, 3, 4, 5, 6, 7 ]
```

Problem same Paradigm alag.

-------------------------------------------------------------------------

***Programming Paradigm***

1. Imperative Paradigm
- Procedural Programming.
- Structured Programming.

2. Declarative Paradigm
- **Functional Programming.**
- Reactive Programming (e.g., RxJS) example : realtime data transfer in other words streaming of the data.

3. **Object-Oriented Programming**
- Class based.
- Prototype-based.

4. **Event-Driven Programming**
- Based on event listeners, Callbacks, DOM events, etc.

5. **Asynchronous Programming (cross-paradigm)**
- Callback-based.
- Promise-based.
- async/await (syntactice sugar over Promises)
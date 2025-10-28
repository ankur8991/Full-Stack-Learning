# About Vite Setup 

- Firstly we can use Create React App to run and performs our React web App in previous vedio then So , that Create React App is get older then we can use VIte , Now the Vite and Create React App Both can arranges Folders structure for react app That's why we can say's that Vite (Build tool , bundlers etc.) Now in below part we can write the setup's COde of Vite.

```npm create vite@latest```

- Bas fir simple basic quetions ke baad hmara Vite run ho jyega.

# JSX hota kya hai?

*JSX Hota kya hai?*

JSX(JavaScript XML) ek aisa syntax hai jisme tum JavaScript ke ander HTML jaisa code likh sakte ho.

Ye React me UI banane ke liye use hota hai.

Matlab 👇

Normal JavaScript me UI likhna mushkil hota tha 

*React ne bola - "HTML Jaisa syntax JavaScript ke ander likh lo" - and that is JSX*

Example ⬇️

```
function App() {
 return <h1>Hello JSX!</h1>;
 }
```

Ye HTML lagta hai, lekin acutally ye **JavaScript ka syntax hai** jo React ke through browser me HTML ban jaata hai.

✅ Important Point

Browser directly JSX samajh nhi skta.

Isliye Vite Babel/ESBuild ki help se JSX ko normal JavaScript me convert krta hai, jisse browser samajh skta hai.

```
JSX Code (Developer likhta hai)
     ↓
Babel / ESBuild (JSX ko convert karta hai)
     ↓
Normal JavaScript (React.createElement)
     ↓
Browser (Ab samajh sakta hai)

```

Example: 

```<h1>Hello JSX</h1>```

Convert hone ke baad (Browser ko ye milta hai) 👇

```React.createElement("h1", null, "Hello JSX");```

**JSX hota kya hai**

*JSX JavaScript ka XML-like syntax hai jisse hum React me UI ko readable aur easy way me likh sakte hain. Browser JSX ko directly nahi samajhta, isliye Babel usko plain JavaScript me convert karta hai.*

# JSX ke Rules

1. JSX me sirf ek parent element return ho skta hai.

Galat ❌

```
return (
  <h1>Hello</h1>
  <p>World</p>
);
```
Sahi ✅ - parent element hona zaroori.

```
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```
Ya phir React Fragment use sakte ho:

```
return (
    <>
    <h1>Hello</h1>
    <p>World</p>
    </>
);
```

2. JSX me attributes camelCase hota hain.

HTML me:
```<button onclick=""></button>```

JSX me✅
```<button onClick=""></button>```

3. class nahi, className use hota hai.

HTML:
```<div class="box"></div>```

JSX:
```<div className="box"></div>```

4. JavaScript expression { } ke ander likhte hain.

```
const name = "Ankur";

return <h1>Hello {name}</h1>;
```

5. ```if```, ```for```, ```while``` direct JSX ke ander nhi chalega.

Galat ❌

```return <h1>{if(true) "Hi"}</h1>```

Sahi ✅ (ternary operator)

```return <h1>{true ? "Hi" : "Bye"}</h1>;```

6. JSX tags must be closed

Galat ❌

```
<img>
<input>
```

Sahi ✅ (self Closing tag)

```
<img />
<input />
```

7. Components ka naam Capital letter se start hota hai.

```function Header() {   ✅ Correct```

not 

```function header() {  ❌ Wrong```

8. JSX me plain strings ko quotes me likhte hain jo **Attributes** ke ander hai unhee.

```<p title="Hello World">Text</p>```

9. Style object ke through camelCase me.

```<p style={{ color: "red", fontSize: "20px" }}>Hello</p>```

10. Adjacent elements allowed nahi (Rule #1 ka extension)

JSX me ```return``` statement ke ander sirf 1 hi parent element ho skta hai. React mutiple sibling elements ko bina wrap kiye accept nhi krta.

❌ Galat (Adjacent Elements)

```
return (
  <h1>Hello</h1>
  <p>World</p>
);
```
Yahaan ```h1``` aur ```p``` adjacent/sibling elements hain - isliye  error aayega.

✅ Sahi (Wrapped in a Parent)

```
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

Ab ```h1``` aur ```p``` ek hi parent ```<div>``` ke ander wrap ho gye, toh code vaild ho gya.

✅ Fragment se bhi Wrap kar sakte ho (Recommended)

Agar tum extra ```<div>``` nhi banana chahte toh React Fragment use karo:

```
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```
Yeh bhi 1 parent element hi count hota hai.

✅ Is rule ka simple reason

React ke render() process me 1 component = 1 parent node hona chahiye.
Isliye woh multiple elements ko direct accept nahi karta.

React har component ke liye ek hi root element chahata hai, isliye JSX me return ke andar hamesha elements ko ek parent me wrap karna padta hai.

# Some More Concepts 

- In src / App.jsx ke ander ye niche function React app ke Entry point hai.

```
function App() {

  return (
    <>
       
    </>
  )
}

export default App
```

- Hamare src folder ke ander jo index.css file hai vo globally apply hoti hai hmare website pr mltb agr mai usse connect bhi na kru na apne App.jsx mai tabh vi vo apply hogi.


# About Components and Props

# ⚛️ React Components and Props

React me **Components** aur **Props** sabse basic aur powerful concepts hain.  
In dono ki help se hum reusable, modular aur dynamic UI bana sakte hain.

---

## 🧱 Components

### 🔹 What is a Component?

A **Component** ek function (ya class) hota hai jo UI ka ek part return karta hai.  
Isse hum chhote–chhote reusable blocks me apni app ko tod sakte hain.

React me 2 types ke components hote hain:

1. **Functional Components** → (Modern React me sabse zyada use hote hain)
2. **Class Components** → (Purane React version me use hote the)

---

### 🧩 Example: Functional Component

```jsx
function Navbar() {
  return (
    <nav>
      <h1>My Website</h1>
    </nav>
  );
}

export default Navbar;
```

🧱 Why Components Are Useful?

- Components reusable hote hain.

- App ko modular aur maintainable banate hain.

- Har component ek specific UI part handle karta hai.

- Data ko props ke through share karte hain.

💡 Props (Properties)
🔹 What are Props?

Props ka matlab hai Properties.
React me props ka use ek component se dusre component me data pass karne ke liye hota hai.
Props ko hum function ke arguments ki tarah samajh sakte hain —
Parent component child component ko data deta hai via props.

⚠️ Props read-only hote hain — child component unhe change nahi kar sakta.


🔹 Why Props Are Important?

- Props ke through dynamic data bhej sakte hain.

- Reusable components banana easy ho jaata hai.

- Data ka flow parent → child direction me hota hai.

- Har component ko customize karne ke liye props use hote hain.


## 🧩 Example: Using Props

### 🧱 `App.jsx`

```jsx
import Card from './components/Card';

function App() {
  return (
    <>
      <Card title="Next.js" description="Next.js is a React framework for building fast, SEO-optimized web apps." />
      <Card title="Django" description="Django is a Python-based framework for backend development." />
      <Card title="Flutter" description="Flutter is used for building mobile, web, and desktop apps with a single codebase." />
    </>
  );
}

export default App;
```

🧱 Card.jsx

```
function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
```
🗒️ Explanation:
Yahan ```App.jsx``` parent component hai, aur ```Card.jsx``` child component.
Parent ne ```title``` aur ```description``` props ke through bheje,
aur child ne unhe use karke screen par display kiya.
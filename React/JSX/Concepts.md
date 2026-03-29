# All About JSX.

### 🔹 JSX kya hai (simple but precise)

JSX = **JavaScript XML**

Matlab: JS ke andar HTML jaisa syntax likhne ka tareeka.

```jsx
const element = <h1>Hello World</h1>;
```

Ye directly browser nhi smjhata. Ye **transpile hota hai**

```jsx
const element = React.createElement("h1", null, "Hello World")
```

Important:
- JSX = syntax sugar(mtlb jo hm likhte hai vo simple or asan syntax m hai lekin run hone ke phle hi vo dusre syntax m convert hota hai jo niche likha hai vese m isliye isko JSX jo syntactice sugar kehte hai).
- Final me sab ```React.createElement`` calls ban jata hai.

### 🔹 JSX kyun use karte hain?

Without JSX:

```jsx
React.createElement("div", null, "Hello")
```

With JSX:
```jsx
<div>Hello</div>
```

👉 Readability + maintainability improve hoti hai.

### 🔹 JSX ka core rule

👉 JSX = expression (value return krta hai)

Isliye:

```jsx
const el = <h1>Hello</h1>  // vaild
```

But:

```jsx
if(true) {
    <h1>Hello</h1>; // useless (return nahi ho raha)
}
```


### 🔹 JSX me expressions kaise likhte hain

Curly braces ```{}``` use hota hain

```jsx
const name = "Ankur"
<h1>Hello {name}</h1>
```

👉 ```{}``` ke andar:
- variables.
- functions.
- expressions.

```jsx
<h1>{2 + 2}</h1> // 4
```

❌ NOT allowed:
- statements (if, for)


### 🔹 Attributes in JSX

HTML jaisa hi, but JS style

```jsx
<input type="text" />
```

**🔸 class → className**

```jsx
<div className="box"></div>
```

**🔸 inline styles (object)**

```jsx
<div style={{ color: "red", fontSize: "20px" }}></div>
```


### 🔹 Single root rule

JSX return karega to ek hi parent hona chiye.

❌ 
```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

✅ 
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

Ye Better:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

👉 ```<> </>``` = Fragment


### 🔹 Conditional rendering

JSX me directly ```if``` nhi use hota.

**🔸 Ternary**

```jsx

const isLoggedIn = true;

{isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
```

**Short-circuit rendering**

```jsx
const isAdmin = ture;

const element = {isAdmin && <p>Admin Panel</p>}
```

**🔸 AND operator**

```jsx
{isAdmin && <button>Delete</button>}
```

👉 Agar left false → kuch render nahi


### 🔹 Lists rendering

```jsx
const items = [ "a", "b", "c", "d", "e"]

items.map(item => <li>{item}<li>);
```

⚠️ Important: key

```jsx
items.map(item => <li key={item}>{item}<li>);
```

👉 React ko diffing me help milti hai

### 🔹 JSX under the hood

```jsx
<div className="box">Hi</div>
```

Becomes:
```jsx
React.createElement(
    "div",
    { className: "box" },
    "Hi"
);

👉 Structure:

```jsx
React.createElement(type, props, children)
```

### 🔹 Components in JSX

2 types:

**🔸 Functional component (modern / recommended)**

Ye normal JS functions hote hain jo JSX return krte hain.

```jsx
function App() {
    return <h1>Hello</h1>
}
```

**🔸 Use like HTML**

```jsx
<App />
```

👉 Capital letter zaroori hai

lowercase → HTML tag
uppercase → component

👉 Ye aajkal standard hai
👉 Hooks (```useState```, ```useEffect```) isi me use hote hain {return ke phle}


**Class Components (old / legacy)**

Ye ES6 class hoti hai jo ```React.component``` extend krti hai.

```jsx
class App extends React.Component {
    render () {
        return <h1>Hello</h1>
    }
}
```

### 🔹 Props in JSX

```jsx
function Hello(props) {
    return <h1>Hello {props.name}<h1>
}

<Hello name="Ankur" />
```

### 🔹 Spread operator in JSX

```jsx
const props = { name: "Ankur", age: 20 }

<Hello {...props} />
```

### 🔹 Children in JSX

```jsx
function card({ children }) {
    return <div>{children}</div>
}

<Card>
  <h1>Title</h1>
  </ Card>
  ```

👉 ```<Card>``` ke andar jo bhi → ```children```


### 🔹 Events in JSX

camelCase use hota hai

```jsx
<button onClick={handleClick}>Click</button>
```

❌

```jsx
onclick="..."
```

### Logic

**🔸 JSX is just JS**

```jsx
const element = condition ? <A /> : <B />
```

**🔸 Functions returning JSX**

```jsx
function renderItem(item) {
    return <li>{item}<li>
}
```


**🔸 Dynamic components**

```jsx
const component = isLoggedIn ? Dashboard : Login;
<Component />
```

### 🔹 Performance angle

JSX → Virtual DOM → diffing → real DOM update

👉 JSX fast nahi hota
👉 React ka diffing algorithm fast hota hai


### 🔹 JSX ≠ HTML (critical difference)

| JSX                     | HTML         |
| ----------------------- | ------------ |
| className               | class        |
| camelCase events        | lowercase    |
| JS expressions allowed  | not allowed  |
| must return single root | no such rule |


👉 JSX = UI ka blueprint
👉 React = us blueprint ko DOM me convert karta hai

👉 Transpile = translation
(JSX ko JS me convert karna)

👉 Diffing = comparison
(old UI vs new UI compare karna)


### 🔚 Final clarity summary

JSX ko samajhne ka sahi tareeka:

- Ye HTML nahi hai → JS ka syntax hai
- Ye directly run nahi hota → transpile hota hai
- Ye UI describe karta hai → create nahi karta
- Har JSX ek function call ban jata hai




### Some other notes

**JSX**

HTML inside JavaScript.

JavaScript Inside HTML.

React looks like HTML but behave like JavaScript.

JSX is not HTML - it's syntactice sugar over React.createElement().

**JSX (JavaScript XML) is a syntax extension for JavaScript used in React. mtlb ye hme JavaScript m html jaisa code likhne ke liye ek extention provide krta hai JSX**

It lets you write HTML-like code inside JavaScript.


#### Embedding Expressions

```jsx
const name = "Ankur"
const element = <h1>Hello, {name}!</h1>     // here the html code inside we write JS.
```

Valid Expressions:
- Variables.
- Function calls.
- Ternary expressions.
- Mathematical operations.

Note:

JSX and templates literals(in JavaScript) both follow this rule: Only expressions can go inside {} or ${} and not statements.

Statements like if-else, for, etc. are not allowed.

### JSX with inline Styles

JSX style is an object, not a string

```jsx
const element = (
  <div style={{
    color: "red",
    fontSize: "20px"
  }}>Hello Ankur sharma</div>
)
```

```jsx
const element = (
  <div style={{
    "color": "red",
    "fontSize": "20px"
  }}>Hello Ankur sharma</div>
)
```

### JSX with Loops (Arrays)

JSX doesn't support for, but we can use .map()

```jsx
const items = ["Ankur", "sojn", "wieof"]

<ul>
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
</ul>
```

### JSX is an Expression

Assign it to variables

Pass as Props

Return from functions

```jsx
function callMe(otherJSX) {
  return <h1>Suno, {otherJSX}</h1>
}
```

### Behind the Scenes

Compiled to React.createElemet() behind the scenes.

JSX:
```js
 const element = <h1>Hello, Ankur!</h1>
 ```

 Compiled: 
```js
const element = React.createElement("h1", null, "Hello, Ankur!")

React.createElement(type, props, ...children)
```

### JSX Rules:
1. Must return single parent element. Wrap with div(<div></div>) or fragments (<></>).
2. use "ClassName" and "htmlFor" props instead of "class" and "for" attributes. (class & for are reserved keywords in JS).
3. Self-closing tags are used for elements wihtout children.
4. Cannot use if-else directly - use ternary or logical ```&&```.
5. JSX supports only expressions inside {} - not statements.




### Transpile



```jsx
JSX / TSX
   ↓ (Transpile - Babel / TypeScript)
Plain JavaScript (ES5/ESNext)
   ↓ (Bundle - Webpack / Vite / etc.)
Final JS bundle
   ↓
Browser run karta hai
```

- Same language → same language
- JSX → JS
- ES6 → ES5

Example:

```jsx
<div>Hello</div>
```

→

```jsx
React.createElement("div", null, "Hello");
```

**👉 Compile**
- Broad term hai

Kabhi:

- JS → machine code (V8 engine runtime pe)
- ya TypeScript → JS (isse bhi log compile bolte hain)

**React ecosystem me actual kya hota hai?**

- Babel transpile karta hai JSX → JS
- Bundler (Vite/Webpack) files combine karta hai
- Browser ka engine (V8) internally compile + execute karta hai
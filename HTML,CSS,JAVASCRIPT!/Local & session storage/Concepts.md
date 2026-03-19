# All About Local and Session Storage

- Both localStorage and sessionStorage are part of the Web Storage API used to store key-value pairs in the browser.
- Store Data in the Browser (No Server Needed).
- Improve User Experience(keep user setting and user specific data).
- Fast & Easy Access.
- Easy to Use API.
- Foundation for Advanced Topics(indexDB, Cookies, PWA)

| Feature         | Local Storage                                | Session Storage         |
| --------------- | -------------------------------------------- | ----------------------- |
| Lifetime        | Permanent (jab tak manually delete na ho)    | Tab band hote hi clear  |
| Scope           | Same origin (domain) ke sab tabs mein shared | Sirf ek tab tak limited |
| Storage size    | ~5-10MB                                      | ~5MB                    |
| Accessible from | JS (window object)                           | JS                      |


## Local Storage 

**Use Case:**

User preferences, theme, tokens(but careful), offline data etc.

🔑 Properties
- Persistent hota hai → browser band karo, reopen karo → data still there.
- Same domain ke multiple tabs share krte hai(mean one profile of the browser can hold the multiple tabs in that case the localStroage can persist), but they cannot persist in the different profile browser in chorme and edge mean we can save some localStorage key-value in the one profile of the chorme browser or another broswer they cannot persist in the another profile of the browser and edge of that particular locaStorage in the first profile to another.
- key-value pairs mein store hota hai (string format)

Example:
```js
// set
localStorage.setItem("username", "ankur")

// get
const user = localStorage.getItem("username")

// remove an particular item
localStorage.removeItem("username")

// remove all of your browser localStorage
localStorage.clear()
```

```js
// get the name of the key at 0 and 1st index present in the localStorage table.
localStorage.key(0)
localStorage.key(1)
```

```js
// Getting the length of localStorage using "length" property.
localStorage.length
```

Important
- Sirf string store hota hai.

```js
localStroage.setItem("user", JSON.stringify({ name: "Ankur" }))

const user = JSON.parse(localStorage.getItem("user"))
```

------------------------------------------------------------------------

## Session Storage
**use case:**
Temporary data → form progress, OTP flow, step-based UI

🔑 Properties
- Tabs-specific hota hai.
- Tab close → data gayab.
- Same tab reload → data rehta hai.

Example:

```js
sessionStorage.setItem("step", "2")

const step = sessionStorage.getItem("step")
```

Key Difference (real world analogy)

**Local Storage** = Hard disk
→ jab tak delete nahi karoge, data rehta hai

**Session Storage** = RAM
→ tab band = data gaya

⚠️ Security concern (important for devs)
- Dono **client-side storage** hain → easily accesible via JS.
- ❌ Sensitive data (like auth tokens) directly store karna risky hai (XSS attacks)

Better:
- HttpOnly cookies use karo for auth.

-------------------------------------------------------------------------

#### ⚙️ Under the hood
- Dono Web Storage API ka part hain.
- Sync (blocking) operations hote hai → large data store karna UI block kr skta hai.
- IndexedDB better hai large/complex data ke liye.

-------------------------------------------------------------------------

#### 🧠 Kab kya use kare?
- ✅ Local Storage:
- Dark mode.
- Remember me.
- Cached data.

- ✅ Session Storage:
- Multi-step forms.
- Temporary state.
- One-time flows.


-------------------------------------------------------------------------
***Problem occurs in that time when we can add is boolean format value in the instead of string***

❌

```js 
localStorage.setItem('isLoggedIn', false)
undefined
localStorage.getItem('isLoggedIn')
'false'
isLogin
VM8503:1 Uncaught ReferenceError: isLogin is not defined
    at <anonymous>:1:1
(anonymous) @ VM8503:1
let isLogin = localStorage.getItem('isLoggedIn')
undefined
isLogin
'false'
if(!isLoggedIn) console.log("not logged in")
VM8730:1 Uncaught ReferenceError: isLoggedIn is not defined
    at <anonymous>:1:1
(anonymous) @ VM8730:1
if(!isLogin) console.log("not logged in")
undefined
```

✅ 

```js
let isLoggedIn = false
undefined
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn))
undefined
localStorage.getItem('isLoggedIn')
'false'
JSON.parse(localStorage.getItem('isLoggedIn'))
false           // here we can get that the correct boolean value.
```


***Same case as that array so we can firslty converted that in the array into string by default also provided but as we can use JSON.Stringifly() method to convert to that data then we can JSON.parse() method use to get the own desires  forms of the data we can gets.***

❌

```js
let arr = [1,2,3,4]
undefined
localStorage.setItem('array', arr)
undefined
localStorage.getItem('array')
'1,2,3,4'
JSON.parse(localStorage.getItem('array'))
VM11117:1 Uncaught SyntaxError: Unexpected non-whitespace character after JSON at position 1 (line 1 column 2)
    at JSON.parse (<anonymous>)
    at <anonymous>:1:6
```

✅ 

```js
let arr = [1,2,3,4]
undefined
localStorage.setItem('array', JSON.stringify(arr))
undefined
localStorage.getItem('array')
'[1,2,3,4]'
JSON.parse(localStorage.getItem('array'))
(4) [1, 2, 3, 4]
```


#### Storing objects(important)
```js
const user = {
    name: "Ankur",
    partner: "krishna",
}

localStorage.setItem("userData", JSON.stringify(user))

JSON.parse(localStorage.getItem("userData"))
```

#### Some notes 
**Browser Limitations**

- Most modern browsers allow around 5 to 10 MB per origin.
- Trying to exceed it throws a QuotaExceededError.

**Data Type Limitation**
- Only strings can be stored.
- We must JSON.stringify() complex data types (arrays, objects & boolean) then we can JSON.parse() to use get that data into that original or our desires forms.

**Securtiy**
- Not secure for sensitive data (passwords, tokens) -- accessible via JavaScript.
- Vulnerable to Cross-Site Scripting (XSS) if not properly sanitized.

#### Origin-Based Storage
- We cannot access localStorage or sessionStorage data across origins.
Data Stored on https://siteA.com is not accessible on https://siteB.com

- The data is only available to:
- That specific domain.
- On that browser.
- In that user profile(Chorme profiles are separate)

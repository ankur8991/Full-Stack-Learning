# Why we use React?
- Hme pta hai ki JavaScript se bhi website ban jaati hai - par sirf chhoit websites. jab website badi ho jaati hai(jaise Instagram, Facebook, Swiggy, Amazon), tab plain JavaScript mein ye porbelms aati hain.

1. ***UI Baar-Baar update karna muskil***

- JavaScript mein jab bhi data change hota hai, tumhe manually DOM update krna pdta hai.

- Example: Agar ek counter web app mai ek button pr click krke UI ko update kru to Tumhe manually ```document.getElementById()```
se UI update krna padega.

- Jabki React mai UI **apne app refresh/update hota hai**.

2. ***Code Messy ho jata hai***

- Badi website mein JavaScript + DOM + Events manage krte-krte code Messy+uljha hua ban jata hai, jisse maintain krna muskil hota hai.

- React mein components hote hai →
code clean, reusable, modular.

3. Reusable cheezain banana tough 

- JavaScript mein baar-baar code likhna padta hai.

- React mein tum ek Button Component, Navbar Component ye Card Component bana kr har jagah reuse kr skte hai.

``` 1 baar code → 100 jagah use ✅```

4. ***Speed issues***

- Plain JS mein DOM slow hota hai.

- React Virtual DOM use krta hai → UI super fast re-render hota hai.

✅ React se kya milta hai?
| Feature              | Plain JS | React         |
| -------------------- | -------- | ------------- |
| Fast UI Update       | ❌        | ✅ Virtual DOM |
| Reusable Components  | ❌        | ✅             |
| Clean Code           | ❌        | ✅             |
| Large App Management | ❌        | ✅             |
| Community & Tools    | ⚠️       | ✅             |

***React hme iss liye sikhna chiye kyuki ajj ke zamane ki har modern webisite component-based hoti hai. Aur job market mein React ki sabse zyada demand hai(Frontend ke liye)***

# React hai kya?

- React ek JavaScript library hai jo UI(User interface) banane ke liye use hoti hai.

- Isko Facebook ne banaya tha - taaki fast, scalabe, ur reuseable UI ban sake.

- IN short: React = UI banane ka smart tareeka.

- React ki madadt se hme Data Change? ki tension nhi leni hai vo bhut hi asani se hm React mai kr skte hai.

***✅ React ki 3 sabse important Cheezein (Foundation Pillars)***
| Concept        | Kya hota hai?                              | Kyu important?                      |
| -------------- | ------------------------------------------ | ----------------------------------- |
| **Components** | UI ke chhote-chhote parts                  | Reusable & clean UI                 |
| **State**      | Data jo change ho sakta hai                | Dynamic UI banana                   |
| **Props**      | Data passing from one component to another | Components ko connect karne ke liye |

**React = Components + State + Props**

Example :

- Navbar → ek component
- Footer → ek component
- Button → ek component
- Card → ek component

**Pure UI ko chhote blocks me tod diya → manage easy, reuse easy ✅**

***✅ Virtual DOM kya hota hai?***
- Normal DOM slow + heavy.
- React Virtual DOM banata hai (ek copy), changes waha pe hote hain → phir sirf zaroori jagah update hoti hai → UI fast ✅.

- **Actual DOM ko baar-baar touch  nhi krte → speed milti hai.


***✅ React ke Rules***

React follow karta hai:
```UI = f(state)```

- Matlab UI = State se decide hota hai.
- State change → UI automatically change.
- Tumhe update karne ki zaroorat nhi.

- React mein hum **JSX** use krte hain - JavaScript + HTML jaise code ek saath.

# About React + Vite(Build Tool / Bunder / Dev Server)

**Vite kya hai?** → Vite ek build tool / bundler hai jo React (ya kisi bhi frontend framework) ko fast development environment provide krta hai.

- React project banane mai use hota hai.

- Local server banane me use hota hai.

- Files ko fast compile/bundle krta hai.

- Browser me fast output deta hai.

**Vite = React project chalane ka fast engine**

isko hum code run/compile krne ke liye use krta hain.

- Yes, VIte React ke liye waise hi helpful hai jaise MinGW C++ ke liye - but exact concept differnet hai.

**✅ React ko "Compiler" kyu mhi bolte?**

React me JSX hota hai:

```<h1>Hello React</h1>```

Ye Browser smjh nhi skta, kyuki browser JSX ko nhi jaanta.

Vite + Babel is JSX ko normal JavaScript me convert krte hain:
```React.createElement("h1", null, "Hello React");```

Phir browser isko run krta hai.

Matlab Vite React ke code ko convert + Compile + run + serve karta hai.
isliye use "Build Tool / BUnder / Dev Server" kaha jata hai.

| Cheez         | Kaam                                              |
| ------------- | ------------------------------------------------- |
| **MinGW/GCC** | C++ code ko machine-readable banata & run karta   |
| **Vite**      | React code ko browser-readable banata & run karta |

*So our statement is 90% correct - bas y smjh lo kki React ke liye VIte ek Compiler + server + bundler ka combination jaisa hota hai.*

***React chalane keliye Vite ek development environment provide krta hai, jisse code browser me fast run aur ouput visible hota hai.***


# React ko easily use With Help of Create React App

1. We can use these Below command to run Our React App using Create React App Utility.

 ```npx create-react-app my-app```

 ```cd my-app```

```npm start```


 *These command run our VsCode Terminal* 

 - Then fir hmne jo localhost://3000 milega vo nhi lengai hm jo my-App folder hai usko alg se open-with-code (VsCode) mai kholengai fir uske baad simple ye Below mentioned command run krengai.

 ```npm start`` 

 - jisse hme ek local host milega jo hmare React app ka hai fir uske baad hm src folder ke ander App.js mai jayengai kyuki vo hi main file hai hmari jo localhost://3000 pr dikh raha hai fir jisme hamra code rahega sara ka sara usme hmm eek counter bnygai with the help of counter.

 ```rafce```
 - ye rafce likhne se hme ek react ka snippet wroking jo chiye hota hai syntax basic vo mil jyega ya fir hm keh skte hai React ka Arrow function hme mil jyega jiske ander hm code likhengai.
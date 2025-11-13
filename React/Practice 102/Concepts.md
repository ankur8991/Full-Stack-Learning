# Why we use useEffect in React 

React normally sirf UI banata hai aur update krta hai.
Lekin kai baar thuje kuch **"extra kaam"** krna pdta hai jo directly UI se related nhi hota.

Jaise:
- API call krna(data fetch krna).
- Browser event listen krna(scroll, resize, DOM related).
- LocalStorage me data save krna.
- Timer ya interval set krna.
- Console me log krna.

👉 Ye sab side effects kehlate hain.

Aur inhi "Side effects" ko handle krne ke liye React me aata hai - ```useEffect``` Hook.

| Use Case          | Example                                              |
| ----------------- | ---------------------------------------------------- |
| 🧠 API Call       | Fetch data from backend                              |
| ⏱️ Timer          | setTimeout / setInterval                             |
| 💾 LocalStorage   | Save or get data                                     |
| 🌍 Event Listener | Window resize, scroll event                          |
| 🔌 Subscriptions  | WebSocket, Firebase listener                         |
| 🧹 Cleanup        | Remove event listener, stop timer, disconnect socket |


*“Interaction” aur “Side Effect” alag cheezein*
| User Interaction           | Side Effect                              |
| -------------------------- | ---------------------------------------- |
| User button dabata hai     | Tu API call karta hai                    |
| User input me likhta hai   | Tu localStorage me data save karta hai   |
| User page open karta hai   | Tu data fetch karta hai                  |
| User kuch select karta hai | Tu DOM ya browser ke sath kaam karta hai |


👉 React to UI aur state handle karega
lekin ye external world ke kaam (API, storage, DOM) nahi karega.

Un sab external kaam ko React me handle karne ka tarika hi hai → ```useEffect```.


🔹 6️⃣ Real-world Example (Data Flow Diagram)

Flow:

[ MongoDB ]

     ⬇️

[ Backend (Express API) ]

     ⬇️

fetch() in useEffect()

     ⬇️

setState(data)

     ⬇️

React re-renders UI

     ⬇️

User sees data on screen


Q: React me backend ka data kaise show karte ho?

"React me hum backend se data ```fetch``` API ya ```axiois``` se lete hain, aur ```useEffect``` ke ander call krte hain through API call(using UseEffect) taaki wo component mount hone ke baad chale.

Phir data ko state me set krke UI me render kr dete hain."

# About UseEffect 

🔹 2️⃣ useEffect ka basic syntax

```
useEffect(() => {
    //Yahan likho wo code jo side effect hai.
});
```

Example:

```
useEffect(() => {
    console.log("Component render hua");
});
```

iska mltb: jab bhi component render hoga → ye function chalega.

🔹 3️⃣ Lekin useEffect ke 3 main cases hote hain 👇

🔸 Case 1: Without Dependency Array.

```
useEffect(() => {
    console.log("Component rendered!");
});
```

Ye har render pe chalega (initial render + every update).

➡️ Yani agr state change hoti hai, ye fir se chalega.

🔸 Case 2: With Empty Dependency Array ```[]```

```
useEffect(() => {
    console.log("Component mounted (sirf ek baar)");
}, []);
```

➡️ Ye sirf component mount hone pr ek baar chalega (like **componentDidMount** in class components).

Perfect for:
- API call krna.
- Initial setup (e.g. event listener, data load, etc.)

Explanation:

```useEffect``` ek React Hook hai jo "**Side effects** handle krta hai.

Ab ye kab chalega, wo decide hota hai iske dependency array se.

Syntax:

useEffect(() => {
    // yahan wala code chalega
}, [dependencies]);

- Agar dependencies change hoti hai → effect fir se chalega.
- Agar dependencies empty hain(```[]```) → effect sirf ek baar chalega.

🔹 ***— Empty Dependency Array [] ka matlab***

```
useEffect(() => {
    console.log("Component mounted!");
}, []);
```

Yahan ```[]``` ka mtlb hai:

"Bhai, main kisi state ya prop pe depend nhi krta.

To mujhe sirf ek baar chalana - jab component phli baar load ho."

React ke terms me ye hota hai component *mount* hone pr.

Mount hone ka mtlb hota hai  : "Component first time screen pe appear hona (render hona)."

Simple words me:
- Jab tu website kholta hai aur wo component phli baar load hota hai - **mount**.
- Jab wo component screen se hata diya jaata hai (page change ya condition change hone pr) - **unmount**.

***— Example: Console log check kar***

```
function Example() {
  useEffect(() => {
    console.log("Component mounted (sirf ek baar)");
  }, []);

  return <h1>Hello React!</h1>;
}
```

Output:

```
Component mounted (sirf ek baar)
```

Ab chahe tu state update kre, button click kre, kuch bhi ho - ye message dobara print nhi hoga, kyuki dependency array empty hai.

***— Isme API call kyu karte hain?***

kyuki hume API se data sirf ek baar hi laana hota hai, jab component load hota hai.

Mtlb :
- Page load → Data fetch → State me set krna → UI me dikhana.
- Uske baad har render me data dobara laana bekar hai.

Example 👇
```
useEffect(() => {
  fetch("https://api.example.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []); // <- empty array means run only once
```

📌 Ye API call sirf component ke mount pr ek baar chalegi, bar - bar re-render hone pr nhi.


🔸 Case 3: With Dependencies ```[stateName, propName]```

    ```
    useEffect(() => {
        console.log("Count badla:", count);
    }, [count]);
    ```

    👉Ye sirf tab chalega jab ```count``` change hoga.

    Perfect for:
    - Jab tu kisi varibale ke change pe react krna chahta hai.
    - e.g. user search type kare → call  API text badle.

 **Explanation**

**🔹 Step 1️⃣ — Basic Definition**

 Syntax:

   useEffect(() => {
    // ye code chalega.
   }, [dependencies]);

   ✅ Matlab:

   Jab bhi dependency array me likha hua variable change hoga, tab hi ye ```useEffect``` dobara chalega.

   Yaani React bolta hai:

   "Bhai main her render pe nhi chalunga, sirf tab chalunga jab tu jis variable pe depend kr raha hai, wo badal jaaye."

   **🔹 Step 2️⃣ — Simple Example**

   ```
   const [count, setCount] = useState(0);

   useEffect(() => {
    console.log("Count badla:", count);
   }, [count]);

   👉 Kya hota hai yahan:

   1. Phli baar component mount hota hai → ```useEffect``` ek baar chalega.(React hamesha mount ek baar chalata hai.)

   2. Jb ```count``` badalta hai (button click etc.) → React ```useEffect``` ko fir se chalata hai.

   3. Agar koi aur state change hoti hai (jo dependency me nhi hai) → ye effect nhi chalega.

   🔹 Step 3️⃣ — “Dependencies” ka matlab kya hai?

   Dependencies ka mtlb hai:

   "Wo variable jinke change hone par ye effect fir se chale."

   React ko dependeices array se ye hint milta hai ki "is effect ko dobara chalana hai ya nhi".

   So basically:
  
  - ```[]``` → kabhi dobara mat chalana.
  - ```[count]``` → sirf jab count badle.
  - ```[count, text]``` → Jab count ya text dono me se koi badle.



   🔹 Step 4️⃣ — Real-Life Example: Search Box

   Maan le tu ek search box bana raha hai jisme user kuch likhta hai, aur har baar jab user type kare → backend API call kare (live search).

   Without dependency (galat way):

   ```
   useEffect(() => {
    fetch(`https://api.com/search?q=${searchText}`);
   });
   ```

   ⚠️ Ye har render pe API call karega → performance problem!

   With dependency (sahi way):
   ```
   useEffect(() => {
    if(searchText) {
        fetch(`https://api.com/search?q=${searchText}`)
      .then(res => res.json())
      .then(data => setResults(data));
    }
   }, [searchText]); // sirf jab searchText badle.

   ✅ Ab API call tab hi chalegi jab user kuch likhega, nahi likhega to effect bhi nahi chalega.

   🔹 Step 5️⃣ — Ek aur Example: Theme Change

  Maan le tu dark/light theme bana raha hai:

   ```
   const [theme, setTheme] = useState("light");

   useEffect(() => {
    document.body.className = theme;
   }, [theme]);
```

   👉 Jab ye ```Theme``` badlega (light → dark), tab hi ye effect aur body ka class update karega. 
   
   Nhi to unnecessary DOM update nhi hoga (React efficient rahega).


🔹 5️⃣ Cleanup Function (Important!)

Kuch side effects ko “saaf” karna padta hai jab component unmount hota hai
(ya dependency change hoti hai).

Example:


```
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // cleanup
  return () => {
    clearInterval(timer);
    console.log("Timer cleared!");
  };
}, []);
```

➡️ Cleanup function useEffect ke andar return hota hai.
Ye tab chalega jab:

- Component unmount hota hai.

- Dependency badalti hai.


🔹 6️⃣ Real-life example for cleanup:

Soch, tu ek chat app bana raha hai:

- User online aaye → socket connect

- User chala jaaye → socket disconnect

```
useEffect(() => {
  const socket = connectToChat();

  return () => {
    socket.disconnect();
  };
}, []);
```

Yani ```useEffect``` ne setup bhi kiya aur cleanup bhi 💪


🔹 10️⃣ Common UseCases of useEffect:

| Use Case          | Example                                              |
| ----------------- | ---------------------------------------------------- |
| 🧠 API Call       | Fetch data from backend                              |
| ⏱️ Timer          | setTimeout / setInterval                             |
| 💾 LocalStorage   | Save or get data                                     |
| 🌍 Event Listener | Window resize, scroll event                          |
| 🔌 Subscriptions  | WebSocket, Firebase listener                         |
| 🧹 Cleanup        | Remove event listener, stop timer, disconnect socket |


# Some Important shortcuts 

We can create the vite project  using ```npm create vite@latest``` then we can choose the project name like by default gives us ```vite-project``` and we can get selected so, we can open the vite-project manually by going the folder their exists folder name ```vite-project``` now we can open the folder by clicked shift + right click we can choose again option like open with vsCode but instead of doing these things we can use ```code -r foldername``` to entered following particular project so that's way we can can use in terminal to entered the following folder like vite-project to using in terminal command like ```code -r vite-project```.

or other side without does these all things to we can do like . in project name instead of using vite-project name by default in project name vite-projet we can use . in project name.

Two times shows the same things using in useEffect react hooks like --> 

```
useEffect(() => {
    alert('Welcome to Vite + React page');
}, [])
```

ye alert two times isliye dikhata hai kyuki src folder ke ander ek file hoti hai main.jsx ```src/main.jsx``` iske ander hota hai *strict mode* jo  development ke ander cheeze two bar isliye liye dikhata hai kyuki ek br check krta hai or dusri br normally chalata hai jo ki sirf Development mai hota hai na ki production mai to hm isse acche se sikhne ke liye strict mode ko comment out kr dunga.

or hm useEffect ko isliye use krte hai kyuki jb hmara page render ho tabh hm kuch kr ske or mout hone pr bhi.
# About Context API ?

Jab tum React app banate ho, bohot baar data ko parent → child → child → child pass karna padta hai.

Isko bolte hain **Prop Drilling.**

Ye painful hota hai.

👉 Example:

User ka naam top component mein hai, aur neeche 5 level components ko chahiye To har baar ```props``` pass karna padta hai.

⚠️ Problem:
- Code messy ho jata.
- Beech ke components ko woh props chaiye bhi nhi hota lekin dena padtaa hai kyuki uske child ko chiye vo.
- Debugging mushkil.

👉 Solution:

**Context API !**

🌈 Context API ka kaam kya?

✔ Data ko directly share krna.
✔ without prop drilling.
✔ App kahin se bhi access.

Sochiye Water Tank + Pipes jaise:

- Ek tank (Context Provider) data rakhta.
- Jis component ko water (data) chahiye, wo pipe (useContext) lagake le sakta hai.


📦 Context ke main parts

Context API ke 3 main Parts:

1️⃣ Create Context

```const MyContext = React.createContext();```

2️⃣ Provide Data using Provider
- Data ko share karta hai.
- Provider ke ander wale sab components ko data mil sakta hai.
```
<MyContext.Provider value={data}>
<App />
</MyContext.Provider>
```

3️⃣ Consume Data using useContext [useContext Hook]

- Provider ke data ko directly le aata hai.
- Props ki jarurat nhi.

```const value = useContext(MyContext);```

🧠 useContext hook kya karta hai?

```useContext``` ka kaam:

👉 Jis context ko tum create karte ho, uska data directly de deta hai

👉 Without props

Ye short-cut hai.

Full Example

Step 1: Context banaya

```
import { createContext } from "react";

export const UserContext = createContext();
```

Step 2: Provider banaya

```
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState("Ankur");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Home />
    </UserContext.Provider>
  );
}
```

⚠️ Important:

- Iske andar jitne components honge, un sabko user aur setUser available.

Step 3: useContext se data le liya

Example in Navbar
```
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return <h1>Welcome, {user}</h1>;
}
```

Example in Home

```
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Rahul")}>
      Change User
    </button>
  );
}
```

BAS.

Ab Navbar aur Home dono ko props pass nahi karna pada.

💡 Kab use kare Context API?

✔ Global data share karna ho:

- Logged in user

- Theme (dark/light)

- Language

- Cart items

- Authentication state

⚠️ Best for:

- Medium size apps

🚫 Kab use NAA kare Context API?

❌ Agar data sirf 1-2 components ko chahiye

❌ If bohot frequent updates ho — performance hit

👉 Tab **Redux, Zustand, Recoil** better.

Final Line:

Context API = Global data share karna easily

useContext = Wo data directly use karne ka hook
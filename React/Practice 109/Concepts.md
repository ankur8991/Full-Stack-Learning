# About UseMemo() Hook

React component kab re-render hota hai?

👉 Jab:
- state change ho.
- props change ho
- parent re-render ho.

Matlab re-render hona normal hai, koi problem nhi.

*Problem kaha aati hai?*

Maan le:
- Humara component re-render ho raha hai.
- Uske ander ek heavy calculation / expensive kaam hai.
- Wo calculation har render pe dubara chal rahi hai .

for Example:

Maan le hamare pass 30 Milion ka ek array hai or ek magical number hai 29 Milion vo true hoga jb i == 29 Milion pr aayega or vo ek state se change hota hai hr br or vite mai basic count app hoti hi hai to jb jb count badhega tabh hr br render hoga or render ke bich mai vo magical number vi 30 Milion mai se ek br 29 Milion pr aayega isliye ye ek heavy Computation hai or Expensive Computation vi hai jisse hamaraa web app crash or low responsible by user interact ho skta hai isliye hm **useMemo()** hook ka use krte hai .

*Yahin se useMemo aata hai*

--> **useMemo value ko yaad (memoize) rakhta hai taaki bina zarurat subara calculate na krna pade.**

***useMemo bolta hai:***

**“Bhai jab tak dependency same hai, purana result hi use kar le”**
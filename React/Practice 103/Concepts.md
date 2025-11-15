# Rander and re-render

*Render* = Component ka phli baar screen pr appear hona.

Jab tum React component ko first time browser me dikhate ho(mount krte ho), us process ko render kehte hain.

*mount* = Component ka phli baar DOM me add hona, Component is created + its JSX is converted to DOM + DOM me insert.

Jab React kisi component ko screen pr first time dikhata hai, us process ko mounting kehte hain.

React krta kya hai?

1. Component ka function run krta hai.
2. JSX ko real DOM me convert krta hai.
3. DOM ko screen pr place krta hai.

This entire first-time process is mounting.

*unmount* = Jab React koi component screen (DOM) se hata deta hai.

Mtlb:

- Component ab screen pr nhi dikhega.
- Uska DOM remove ho jayega.
- Uska State destroy ho jayega.
- Uska ref, listerners, effects sab clean ho jayengai.

Ye pura process = Unmounting.

Example of Unmounting = Tum back press krte ho, chat screen gayab ho jati hai. Chat component ho gaya.

*Re-render* = Component ka dobara chalna (dobara execute hona)

Jab React component fir se run hota hai au fir se apna JSX calculate krta hai, us process ko re-render kehte hain.

First time run - render.

Baad me dobara run = re-render.

*Example of Render or re-render* = Jab hm WhatsApp kholte hai jo hme phli baar dikhta hai vo render, or jb kisi ka new massage aya ho to screen update ho jati hai vo re-render.

# About UseRef Hook ?

React ka useRef hook basically ek aisa container (object) deta hai jisme tum ek mutable value store kr skte ho jo component ke re-render hone pr change nhi hoti.

SImple WOrds:

UseRef = ek dabba(box) jisme koi bhi value rakh lo, aur wo value component ke re-render hone pr bhi reset nhi hoti.

❓ useRef kyun use hota hai?

*Re-render ke bina value change karni ho*

useState me agr value change karoge toh component re-render hota hai. But kai baar hame value update chahiye hoti hai re-render ke.

Example:

- Timer ka value.
- Previous value store krna.
- DOM element ko access krna bina DOM ke use kre React mai.
- API calls count rakhna.

Isliye useRef perfect hai, kyuki value badalti hai pr component re-render nhi hota.

***React internally har component instance sotrage area banata hai. useRef simply us storage area me ek object store krta hai***

Ye OBject:
- re-render hone pr recreate nhi hota.
- Same memory refernce rakhta hai.
- value change kro, UI re-render nhi hota.
- DOM references store krne me helpful hota hai.


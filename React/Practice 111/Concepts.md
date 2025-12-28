# React Hook form in -> Form Handling.

1️⃣ *Sabse pehle samajhegai : Form hota kya hai React mein?*

Form = 
- input
- Validation
- submit
- error handling
- performance

Normal React mein hum kya krte hain?

```
const [name, setName] = useState("")
```

Har input ke liye:
- state.
- onChange.
- value.
- validation manually.

problem kya hoti hai?
- 10 inputs → 10 states.
- Har key press pe re-render {

    User ne key press ki

    onChange chala

    setName() call hua

    state change hui

❗ component re-render hua

👉 Matlab har key press = state change = re-render

}
- Code heavy, slow & messy.

**👉 React Hook Form yahin pe game change karta hai**

2️⃣ *React Hook Form (RHF) actually karta kya hai?*

In Simple words :
   
   *RHF form ko React ke control se bahar rakh ke handle krta hai*

React mai har key press pr re-render hota tha web app  

Pr RHF(React Hook form) mai kuch ese handle krta hai vo 

{

    Key press ho rahi hai

 Input ka value DOM khud handle kar raha hai

 React ki koi state change nahi ho rahi

 ❌ component re-render nahi ho raha

 **💡 React Hook Form internally ref use karta hai, useState nahi.**

}

React normally controlled components use krta hai.

RHF mostly uncontrolled components use krta hai.

Iska Fyda?
- Kam re-render (because of internally use **ref in RHF**).
- Fast performance.
- Clean code.
- Easy validation.

3️⃣ *useForm() – RHF ka dil ❤️*

Jab hm likhte hai:

```
const { register, handleSubmit, formState } = useForm()
```

Iska matlab:
- RHF ke pass poore form ka control aa gaya 
- React ko Har key press pe distrub nhi krna.

🧠 Iska matlab kya hai?

React Hook Form ko bol rahe ho:

**“ Bhai tu mera poora form sambhaal le, aur mujhe bas teen important cheeze de de. "register, handleSubmit, formState" ”**

4️⃣ *register() – input ko form se jodna*

In Simple words :

  "Is input ko yaad rakhna, iska data collect krna."

  Jab Hm input mein ```register``` lagate hai:
  - RHF us input ka value track krta hai.
  - Validation rules apply krta hai.
  - React State banane ki zarurat nhi hoti hai.

  👉 Without ```register``` → input form ka part hi nhi.

Example (logic samajhne):

```
<input {...register("email")} />
```

Iska mtlb :
- "email" 

→ input ka naam/identify hai Jisse React Hook Form is input ko pehchanta hai.

→ submit pe data { email: value } milega.

- register("email")

→ React Hook Form ko bolta hai:

“Is input ko track kar ispr nazr rakhna.”

```register``` yeh kaam krta hai :

       input ka reference (address) save krta hai.

       Batata hai:

       "Is input ka naam email hai"

       ⚠️ Ye React state nahi banata

       Ye direct DOM input ko pakad leta hai

- Input ki value

→ React state mein nahi jaati

→ value browser ke input box (DOM) mein hi rehti hai

- Isliye useState, onChange, value

→ likhne ki zarurat nahi hoti

- Submit ke time

→ RHF input se direct current value read kar leta hai

- Result

→ kam re-render

→ fast form

→ clean code

- ONE Final Line => 
register input ko form se jodta hai,
value DOM sambhaalta hai,
React sirf final data leta hai

❌ Normal React (controlled)

```
<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```


React har key press pe update

Re-render hota hai


5️⃣ *Validation*

Basic validation: 

```
register("email", {
    required: true
})
```

Iska matlab:
- Agar empty hua → error

Thoda advanced:

```
register("password", {
    required: "Password zaruri hai", 
    minLength: {
        value: 6,
        message: "Kam se Kam 6 characters"
    }
    maxLength: {
        value: 12,
        message: "Kam se Kam 12 characters"
    }
})
```

💡 Important baat: 
- Validation form submit ke time hoti hai.
- Har key press pe React re-render nhi hota hai.


6️⃣ *formState & errors – form ka status report 📊*

Simple words mai : 
   
   "Form abhi ki condition mein hai?"

Iske ander hota hai :
- Errors (kahan galti hai)
- isSubmitting (submit chal raha hai? {Like Loading use of async})
- isVaild (form shi hai ya nhi)
- isDirty (user ne kuch change kiya?)

👉 UI decisions yahin se hote hain 
(error message, disable button, loader, etc.)

```const { errors, isSubmitting, isValid } = formState```

errors kya hota hai? 

Ek object hota hai jisme:
- Field name.
- uska error message.

Example: 

```errors.email?.message```

Matlab:

- Agar email mein error hai → message dikhao.

👉 errors sirf tab update hota hai jab **actual validation fail hoti hai.**


7️⃣ *handleSubmit() – sirf submit nahi, guard bhi 🛡️*

In Simple terms :
 
  "Submit se phle sab check kr, phir data bhej."

HandleSubmit :
- Phle validation chalata hai
- Agar error hai → submit rok deta hai.
- Sab shi ho → form ka saara data ek object bana ke de deta hai.

👉 Direct ```onSubmit``` mat lagao, warna validation skip ho jaayegai.


```<form onSubmit={handleSubmit(onSubmit)}>```

HandleSubmit karta hai?
1. phle validation check 
2. Agar error → submit roke.
3. Agar sab shi → data bheje object form mai.

hme bas:

```
const onSubmit = (data) => {
    console.log(data)
}
```

RHF:

- saare inputs ka data collect karega.
- ek object bana ke dega.

Form submit pe jo object milega, uski keys aur structure
bilkul waise hi honge jaise tu register() ke andar names likhta hai.

For example:

```
<input {...register("email")} />
<input {...register("password")} />
```

Submit pe RHF data dega:

```
{
  email: "abc@gmail.com",
  password: "123456"
}
```

🔹 Kyun?

Kyuki input ke names "email" aur "password" hain.

*Agar name change kar diya to data bhi change 🔁*

```<input {...register("userEmail")} />```

Submit pe data:

```
{
  userEmail: "abc@gmail.com"
}
```

👉 RHF apni marzi se keys nahi banata,
jo tu register() mein likhega wahi key banegi.

*Nested (andar object)*

```
<input {...register("user.email")} />
<input {...register("user.age")} />
```

Submit pe data:

```
{
  user: {
    email: "abc@gmail.com",
    age: 25
  }
}
```

👉 Dot (.) ka matlab:

andar object banao

*Array structure (real projects mein use hota hai)*

```
<input {...register("skills.0")} />
<input {...register("skills.1")} />
```

Submit pe data:

```
{
  skills: ["React", "Node"]
}
```

👉 Index number = array ban jaata hai.


*Deep nested + array*

```
<input {...register("users.0.email")} />
<input {...register("users.0.role")} />
```

Submit pe data :

```
{
  users: [
    {
      email: "a@gmail.com",
      role: "admin"
    }
  ]
}
```

Yehi wajah hai RHF complex forms mein king hai.

**💡 data ka structure input ke name pe depend karta hai**

8️⃣ *Controlled vs Uncontrolled*

Controlled (useState):
- React har key press pe re-render.
- Slow for big forms.

UnControlled (RHF):
- DOM input handle krta hai.
- React srif submit pe react krta hai.

| Point                | Controlled    | Uncontrolled    |
| -------------------- | ------------- | --------------- |
| Value kahan hoti hai | React state   | DOM (input box) |
| onChange             | Zaruri        | ❌ Nahi          |
| useState             | Zaruri        | ❌ Nahi          |
| Re-render            | Har key press | ❌ Mostly nahi   |
| Performance          | Medium/Slow   | Fast            |
| Best for             | Small forms   | Large forms     |


Controlled = React boss hai

Uncontrolled = Browser boss hai

RHF = browser ko kaam karne deta hai 😎


👉 Isliye RHF large forms ke liye best hai.


9️⃣ *defaultValues*

```
useForm({
  defaultValues: {
    name: "Ankur",
    email: ""
  }
})
```

Use case:
- Edit form.
- API se data aa raha.
- Form ko prefill krna.

⚠️ Important:
- DeafultValues sirf first render pr lagta hai.
- API data ke liye ```reset()``` use hota hai.


*🔟 reset() – form ko fresh banana*

```reset()```

Ya:

```reset({ name: "", email: "" })```

Use cases:
- Form submit ke baad clear.
- Edit → Create mode switch.

1️⃣1️⃣ *watch() – live value dekhni ho toh*

```watch("password")````

Use Cases:
- confirm password.
- conditional UI.
- Dynamic validation.

⚠️ watch re-render karata hai, so limited use kare.


1️⃣2️⃣ *Why companies love React Hook Form?*

✅ Performance

✅ Less boilerplate

✅ Easy validation

✅ Works well with:

- Yup

- Zod

- Material UI

- Ant Design

1️⃣3️⃣ *Common galtiyan*

❌ register ke bina input.

❌ errors ko direct access karna.

❌ controlled input + RHF mix karna bina Controller

❌ har jagah watch use karna.
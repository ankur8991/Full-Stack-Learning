## 1️⃣ XML kya hota hai
XML = **eXtensible Markup Language**

Ye ek data store aur transfer format hai jisme data tags ke andar likha hota hai.

Examlpe :

```
<user>
  <name>Rahul</name>
  <age>25</age>
  <city>Delhi</city>
</user>
```

Strucuture HTML jaisa hota hai.

XML ka purpose:
```
Data ko store krna 
Data ko system ke beech transfer krna
```

-------------------------------------------------------------------------

## 2️⃣ JSON kya hota hai
JSON = **JavaScript Object Notation**

Ye bhi data transfer format hai lekin JavaScript object jaisa syntax hota hai.

Example:

```
{
  "name": "Rahul",
  "age": 25,
  "city": "Delhi"
}
```

-------------------------------------------------------------------------

## 3️⃣ XML vs JSON (Structure Difference)

XML 

```
<product>
  <name>Laptop</name>
  <price>50000</price>
</product>
```

JSON 

```
{
  "name": "Laptop",
  "price": 50000
}
```

JSON short aur readable hai.

-------------------------------------------------------------------------

## 4️⃣ Main Differences

| Feature            | XML              | JSON            |
| ------------------ | ---------------- | --------------- |
| Syntax             | Tag based        | Key-value based |
| Size               | Large            | Small           |
| Readability        | Harder           | Easy            |
| Speed              | Slow parsing     | Fast parsing    |
| JavaScript support | Extra parsing    | Direct object   |
| Usage              | Old web services | Modern APIs     |


-------------------------------------------------------------------------

## 5️⃣ Backend se data kaise aata hai

Jab frontend server ko request krta h:

Example:

```
Browser → API → Server
```

Server response deta hai.

Example:
```
{
 "users": [
   { "name": "Rahul", "age": 22 },
   { "name": "Aman", "age": 24 }
 ]
}
```

Ye **API response** hota hai.

Isko frontend directly use krta h.

Example React me:
```
fetch("/api/users")
.then(res => res.json())
.then(data => console.log(data))
```

-------------------------------------------------------------------------

## 6️⃣ Pehle XML kyu use hota tha
Old web me **SOAP APIs** use hota the.

SOAP ka format **XML based** tha.

Example:
```
<response>
 <user>
   <name>Rahul</name>
 </user>
</response>
```

Problem:
- Bada data.
- slow parsing.
- complex syntax.

-------------------------------------------------------------------------

## 7️⃣ JSON kyu popular ho gaya

JSON me advantage the:

#### 1️⃣ Lightweight

XML:
```
<name>Rahul</name>
```

JSON:
```
"name":"Rahul"
```
JSON **short** hai.

#### 2️⃣ Faster parsing

JavaScript direclty JSON ko object bana skta hai.

```
JSON.parse(data)
```

XML parsing complex hota tha.

#### 3️⃣ JavaScript friendly

JSON basically JS object jaisa hi hai.

Example:
```
let user = {
 name: "Rahul",
 age: 22
}
```

Isliye frontend frameworks:
- React.
- Angular.
- Vue.

Sab JSON use krta hain.

------------------------------------------------------------------------

## 8️⃣ Modern Web Architecture
Modern web me;
```
Frontend (React)
        ↓
REST API
        ↓
Backend (Node / Java / Python)
        ↓
Response → JSON
```

Example API response:
```
Frontend (React)
        ↓
REST API
        ↓
Backend (Node / Java / Python)
        ↓
Response → JSON
```

-------------------------------------------------------------------------

## 9️⃣ Important thing
Backend sirf JSON hi bhejta hai aisa rule nhi hai.

Backend bhej skta hai:
- JSON 
- XML
- HTML 
- Text

Lekin 90% APIs JSON use krti hain.

-------------------------------------------------------------------------

# JSON
- JSON stands for JavaScript Object Notation.
- It's a lightweight data format used to store and Exchange data - like sending data between a browser and a server.

```js
// JavaScript Object
const user = {
    name: "ANkur",
    age: 20,
    isStudent: true
}
```

```js
// JSON version (as a string)
const jsonUser = `{
    "name": "Ankur",
    "age": 20,
    "isStudent": true
    }`
```

Note :
- Keys and string values are wrapped in double quotes.
- It's a string, not an object.

#### Convert Between JS to JSON

```js
// Convert object to JSON
const jsonData = JSON.stringify(user)

// Convert JSON to object
const jsObject = JSON.parse(jsonData)
```

Use JSON.stringify() and JSON.parse()
- stringify() --> Object to JSON string.
- parse() --> JSON string to Object.
- And typeof Json all of the case is returned Object.

-------------------------------------------------------------------------

# API 

- API stands for Application Programming Interface.
- Application Programming Interface, is a set of rules and protocols that allows different software applications to communicate with each other.

#### API Uses:
1. Communication between different languagues/systems.
2. Controlled, secure access to data.
3. Monitoring & analytics.
4. Faster development with third-party services.
5. Automation & integration.
6. Microservices architecture.
7. Easy scaling and maintennance.

-------------------------------------------------------------------------
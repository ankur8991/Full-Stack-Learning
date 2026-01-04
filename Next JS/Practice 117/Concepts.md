# Next.js API Routes (App Router) – Notes.

## 1️⃣ API Routes kya hote hain?

API Routes ka matlab hota hai **frontend ke andar hi backend logic likhna**.

👉 Inka use hota hai:

* Form submit karne ke liye
* Database se data lane ke liye
* Login / Signup ke liye
* External APIs se baat karne ke liye

Simple words me: **Next.js me frontend + backend ek hi project me**.

---

## 2️⃣ App Router me API Routes kaha bante hain?

API Routes **`app/api/`** folder ke andar bante hain.

Example structure:

```
app/api/users/route.js
```

Iska URL ban jaata hai:

```
/api/users
```

---

## 3️⃣ Route Handler kya hota hai?

`route.js` ya `route.ts` file ko **Route Handler** bolte hain.

Is file ke andar hum HTTP methods define karte hain:

* GET
* POST
* PUT
* DELETE

Har method ek function hota hai.

---

## 4️⃣ Basic API Route Structure

Ek simple API route ka structure:

```js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello API" });
}
```

Browser me hit karoge:

```
http://localhost:3000/api/users
```

---

## 5️⃣ Requests kaise handle hoti hain?

Har HTTP request ke liye alag function hota hai.

### GET – Data lene ke liye

```js
export async function GET(request) {
  return NextResponse.json({ users: [] });
}
```

### POST – Data bhejne ke liye

```js
export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    data: body
  });
}
```

---

## 6️⃣ `request` object kya hota hai?

`request` object me request se related sari info hoti hai:

* headers
* body
* url
* method

Example:

```js
request.headers.get("authorization");
```

---

## 7️⃣ Query Params kaise handle karte hain?

Agar URL ho:

```
/api/users?id=10
```

Code:

```js
export function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json({ id });
}
```

---

## 8️⃣ Dynamic API Routes

Dynamic routes tab use hote hain jab URL ka part dynamic ho.

Folder structure:

```
app/api/users/[id]/route.js
```

URL:

```
/api/users/5
```

Code:

```js
export function GET(request, { params }) {
  return NextResponse.json({ userId: params.id });
}
```

---

## 9️⃣ `NextResponse` kya hai?

`NextResponse` Next.js ka response object hai jo client ko response bhejne ke kaam aata hai.

### JSON response

```js
NextResponse.json({ msg: "ok" });
```

### Status code ke saath response

```js
NextResponse.json(
  { error: "Not Found" },
  { status: 404 }
);
```

### Headers set karna

```js
const res = NextResponse.json({ success: true });
res.headers.set("token", "123");
return res;
```

### Cookies set karna

```js
const res = NextResponse.json({ login: true });
res.cookies.set("user", "ankur");
return res;
```

---

## 🔟 Error Handling

Error ko try-catch se handle karte hain.

```js
export async function GET() {
  try {
    throw new Error("Something went wrong");
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
```

---

## 1️⃣1️⃣ App Router vs Pages Router API

| App Router            | Pages Router |
| --------------------- | ------------ |
| route.js              | pages/api    |
| Web standard Request  | Node req/res |
| Modern & future-proof | Old approach |

---

## 1️⃣2️⃣ API Routes kab use kare?

### Use karo jab:

* Small backend banana ho
* Authentication logic ho
* Database calls karni ho
* Secrets / API keys hide karni ho

### Avoid karo jab:

* Heavy backend ho
* Complex business logic ho

👉 Aise case me separate backend better hota hai.

---

## 🧠 One-line Summary

**Next.js API Routes frontend ke andar backend logic hote hain jo `app/api` folder me bante hain aur `NextResponse` ke through client ko re

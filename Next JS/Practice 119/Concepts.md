# All ABout Proxy(Middleware) 

## 1️⃣ Next.js Middleware hota kya hai?

**Middleware = request ke beech ka guard / checker**

Simple words mein:

**User ne request maari → Middleware beech mein ayaa → decide ki request aage jaaye ya nhi / kahaan jaaye**

📌 Middleware server par run hota hai, browser par nahi.

📌 Page load hone se pehle run hota hai.

Example:

- User /dashboard open kare.
- Middleware check kare: login hai ya nahi?.
- Agar nahi → login page par bhej do.

## 2️⃣ Middleware Next.js mein kahan hota hai?

File ka naam fix hota hai:

```
middleware/proxy .ts
```

ya 

```
middleware.js
```

📍 **Ye root folder mein hota hai** (same level as ```app``` ya ```pages```).


## 3️⃣ Middleware ka main kaam kya hota hai? (Production Use)

Middleware mainly use hota hai:

- ✅ Authentication check.
- ✅ Route protection (admin/user).
- ✅ Geo/location based logic.
- ✅ Headers modify karna.
- ✅ A/B testing.
- ✅ URL rewrite / redirect.

⚠️ Middleware heavy kaam ke liye nahi hota
(no DB queries, no heavy logic).


## 4️⃣ Middleware ko “Proxy” kyun kehne lage?

Proxy ka matlab hota hai:

 **Beech ka banda jo request ko aage forward karta hai**

Middleware bhi wah hai:

- User → Middleware → Actual Page/API.

Isliye log bolte hain:

  **Middleware ek proxy layer hai**

📌 Ye **request ko intercept** karta hai

📌 Decide karta hai:

- allow.
- block.
- redirect.
- rewrite.

## 5️⃣ Middleware ka basic structure

```js
import { NextResponse } from 'next/server'
 

export function proxy(request) {
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: '/dashboard/:path*',
}
```

- ```request``` → user ki request.

- ```NextResponse.redirect()``` → request ko redirect krdo ```/dashboard``` se ```/login```.


## 6️⃣ Middleware ke 2 main kaam

1. Redirect.
2. Rewrite.


## 7️⃣ Redirect kya hota hai?

**Redirect = URL change ho jaata hai (browser mein)**

Example:

```
  return NextResponse.redirect(new URL('/login', request.url))
```

Agar user:

```
/dashboard
```

to vi redirect ho jaye  browser mein dikhenga:

```
/login
```

📌 Auth failure mein mostly use hota hai.


🧠 Production use:

- Not logged in → login page.
- Old URL → new URL.


## 8️⃣ Rewrite kya hota hai?

**Rewrite = URL same dikhega, andar se page change**

```
 if(request.nextUrl.pathname.startsWith('/dashboard')) {{
    return NextResponse.rewrite(new URL('/login', request.url))
  }}
```

User browser mein dekhega:

```
/dashboard
```

Lekin actually serve hoga:

```
/login
```

📌 User ko pata nahi chalta.

📌 Performance friendly.


🧠 Production use:

- Role based pages.
- A/B testing.
- Country based content.


## 9️⃣ Redirect vs Rewrite.

| Feature      | Redirect  | Rewrite         |
| ------------ | --------- | --------------- |
| URL change   | ✅ Yes     | ❌ No            |
| User ko pata | ✅ Yes     | ❌ No            |
| New request  | ✅ Yes     | ❌ No            |
| Use case     | Auth fail | Content mapping |


## 🔟 Middleware mein matcher

Sab routes pe middleware chalana galat hota hai.

Isliye **matcher** use karte hain:

```
export const config = {
  matcher: '/dashboard/:path*',
}
```


📌 Sirf ```/dashboard``` aur uske andar ke routes par chalega.

📌 Performance better.

## 1️⃣1️⃣ Important limitations

Middleware mein ye nahi kar sakte:

- ❌ Database access.
- ❌ Heavy computation.
- ❌ Node APIs (fs, etc.).

Kyun?

👉 Ye **Edge Runtime** pe chalta hai (fast but limited)

## 1️⃣2️⃣ Ek real example (Auth)

```
import { NextResponse } from 'next/server'

export function middleware(request) {
  const isLoggedIn = false // maan lo token nahi

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
```

*Final ek line mein*

**Next.js Middleware ek proxy guard hai jo request ko page load se pehle check karta hai aur redirect ya rewrite ke through control deta hai.**
# All ABout Next JS Basics.

1️⃣ Next.js

Next.js ek React Framework hai Jo React ko production-ready banata hai.


React = UI Library

Next.js = React + Performance + SEO + Routing + Backend

2️⃣ Next.js Core Objective

Next.js ka main goal:

- Fast rendering

- SEO friendly pages

- Better user experience

- Full-stack capability

3️⃣ Rendering ka concept

🔹 React Rendering (CSR)

Client Side Rendering

Flow:

1. Browser ko empty HTML milta hai.
2. Fir JS load hoti hai.
3. UI render hota hai.

❌ Problems:

- Slow first load.
- SEO weak.
- Poor performance on low devices.

🔹 Next.js Rendering Types

✅ 1. SSR (Server Side Rendering)
- HTML request ke time server pe banti hai.
- Browser ko ready content milta hai.

✔ SEO.

✔ Fast First Paint.

✅ 2. SSG (Static Site Generation)
- HTML build time pe generate hoti hai.
- Page bilkul static hota hai.

✔ Ultra fast.

✔ Blogs, marketing pages.

✅ 3. CSR (Client Side Rendering)
- Same React jaisa behavior.
- Mostly dashboards ke liye.

✅ 4. Hybrid Rendering

Ek hi app mein:

- Home → SSG.
- Blog → SSR.
- Dashboard → CSR.

🔥 React alone ye flexibility nahi deta.

CSR → JS first.

SSR → HTML on request.

SSG → HTML before request.

 **SEO kya hota hai?**

SEO (Search Engine Optimization) ka matlab:

Google mainly kya dekhta hai:
- Page ka HTML content.
- Page kitna fast load hota hai.
- Content phle hi available hia ya nhi.

**SEO ka React se relation**

❌ React (CSR) problem:

Browser ko pehle:

```
<div id="root"></div>
```

milta hai (empty)

👉 Google ko content JS ke baad milta hai

👉 Isliye SEO weak ho jata hai


SEO = HTML content availability

CSR = JS dependent rendering

SSR = Request time rendering

SSG = Build time rendering

Next.js = Hybrid rendering king


4️⃣ Next.js App Router

```app```/ folder = pura application ka root.


5️⃣ Default app/ Folder Structure

```
app/
 ├─ page.js
 ├─ layout.js
 ├─ globals.css
 ├─ loading.js
 ├─ error.js
 ├─ not-found.js
 ├─ api/
 └─ dashboard/
```

📄 ```page.js```
- Ek route ka UI.
- URL ka Last point.

Example:

```
/        → app/page.js
/about   → app/about/page.js

```

📄 ```layout.js```
- Shared UI.
- Navbar, Footer, Fonts.

Ye ek wrapper hai jo sab pages ko cover krta hai.

📄 ```globals.css```
- Pure app ki CSS.
- body, fonts, theme.

📄 ```loading.js```
- Page load hone ke time dikhta hai.
- Skeleton / spinner.

📄 ```error.js```

- Runtime error UI.

- Crash hone par fallback.

📄 ```not-found.js```

- 404 page.

- Invalid route handling.

📂 ```api/```
- Backend logic.
- Rest APIs.

Example:
```
/api/login
/api/users

```

📂 ```dashboard/```

- Folder = route

- ```dashboard/page.js``` → ```/dashboard```

👉 File-based routing

 **React – Major Problems (Short Notes)**

 **❌ Manual Routing**
- React Router manually install karna padta hai  
- Extra configuration & boilerplate code

 **❌ SEO Issues**
- Initial HTML empty hota hai  
- Google crawler ko content late milta hai

 **❌ Performance**
- Large JavaScript bundle  
- First page load slow hota hai

 **❌ Backend Missing**
- APIs ke liye alag server (Express / Node) banana padta hai

 **❌ No Standard Structure**
- Har project ka alag folder structure  
- Team mein inconsistency aur confusion

**7️⃣ Next.js ne React ki kami kaise door ki**


| React Issue    | Next.js Solution         |
| -------------- | ------------------------ |
| CSR only       | SSR + SSG                |
| Manual routing | File-based routing       |
| SEO weak       | Pre-rendered HTML        |
| No backend     | API Routes               |
| No structure   | Opinionated architecture |


8️⃣ **Why Companies Prefer Next.js**

- Better SEO.

- Faster loading.

- Full-stack app.

- Scalable architecture.

- Easy deployment (Vercel).

9️⃣ **React vs Next.js (One-line Truth)**

- React UI banata hai.

- Next.js Product banata hai.


🔟 **Kab kya use kare**

React:

- Small internal apps

- Admin panels

- No SEO needed

Next.js:

- Startup / SaaS

- E-commerce

- Blogs

- Production apps


🧠 Final One-Line Summary 

***Next.js = React + Performance + SEO + Backend + Structure***

1️⃣2️⃣ **Next.js DB ke bina kya karta hai?**

Next.js backend (```app/api```) ye kaam karta hai:

- Request receive karta hai

- DB se data mangta hai

- Data process karta hai

- Response frontend ko deta hai

- Lekin DB khud provide nahi karta


# Next.js File-Based Routing (Short Notes)

## 1️⃣ File-Based Routing hoti kya hai?

- Next.js mein URL manually define nahi karte
- 👉 Folder aur file ka naam hi route decide karta hai

### Matlab:
- **Folder** = URL ka part
- **page.js** = actual page


---

## 2. App Router (Recommended)
- `app/` folder use hota hai (Next.js 13+)
- Har route ke liye **folder** + `page.js`

Example:
app/page.js        →  /
app/blog/page.js   →  /blog

---

## 3. Nested Routes
- Folder ke andar folder = nested route

Example:
app/dashboard/page.js        → /dashboard
app/dashboard/settings/page.js → /dashboard/settings

---

## 4. Dynamic Routes
- Dynamic routes ke liye `[param]` use hota hai

Example:
app/blog/[slug]/page.js → /blog/react-basics

Access:
params.slug

---

## 5. Catch-All Routes
- Multiple dynamic segments ke liye `[...param]`

Example:
app/docs/[...slug]/page.js
/docs/a
/docs/a/b/c

---

## 6. Optional Catch-All
- Route optional banana ho toh `[[...param]]`

Example:
app/docs/[[...slug]]/page.js
/docs
/docs/a/b

---

## 7. Special Files (VERY IMPORTANT)
- `page.js` → UI for route
- `layout.js` → Shared layout
- `loading.js` → Loading UI
- `error.js` → Error handling
- `not-found.js` → 404 page

---

## 8. Route Groups (No URL change)
- Folder name `(group)` → URL mein show nahi hota

Example:
app/(auth)/login/page.js → /login

---

## 9. Private Files
- `_folder` ya `_file` → routing ignore hoti hai

Example:
_components/Button.js

---

## 10. Pages Router (Old)
- `pages/index.js` → /
- `pages/blog.js` → /blog
- `pages/blog/[id].js` → /blog/1
(Still supported but App Router preferred)

---

## 11. Key Advantage
- No manual router config
- Clean structure
- Easy scalability

---

## 12. Interview Line
"Next.js uses file-based routing where folder structure directly maps to application routes."

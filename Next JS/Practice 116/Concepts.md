# All About Link, Script & Image Components in Next JS 

## 🔗 1. Link Component (next/link)

### ❓ Problem kya solve karta hai?

Normal ```<a>``` tag **full page reload** krta hai.

Next Js ```Link``` **client-side navigation** karta hai → fast & smooth.

✅ Why Link is IMPORTANT

- Page reload nahi hota.
- State & performance better.
- SEO friendly.
- Automatic prefetching.

**🧠 Deep Concepts**

- Client-side routing: Browser reload ke bina page change.
- **Prefetching:** 
      - Link viewport(**screen ka visible part**) mein ate hi Next Js background mein next page load kr leta hai mltb *User click kare usse pehle hi Next.js page ka data chup-chap load kar leta hai.*

- **Only internal routes ke liye (external ke liye ```<a>```).**

Internal link(routes): Jo page same Next.js app ke andar ho. 

Example:

```
<Link href="/about">About</Link>
```

External link(routes): Jo page bahar kisi aur website ka ho.

Example:

```
<a href="https://google.com" target="_blank">Google</a>
```

**⚠️ Most Important Rules**

- ```href``` mandatory hai.

- ```Link``` ke andar text / element hona chahiye.

- External links ke liye ```target="_blank"``` +``` <a>```.

### About ```_blank```

- **“target='_blank' external links ko new tab mein open karta hai aur better UX deta hai.”**

- ```target="_blank"``` → link new tab mein open karta hai

- External links ke liye mostly use hota hai

- Hamesha ```rel="noopener noreferrer"``` ke saath use karo

Example :
```
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google
</a>
```

---


## 📜 2. Script Component (next/script)

### ❓ Problem kya solve karta hai?

Normal ```<script>``` page ko block karta hai (slow loading).

```Script``` component se **performance control** milta hai.

### ✅ Why Script is IMPORTANT

- Page speed improve hoti hai.
- Third-party scripts safe tareeke se load hote hain.
- Google Analytics, Ads, Chat widgets ke liye must.

### 🧠 Loading Strategies (VERY IMPORTANT)

1️⃣ ``` beforeInteractive```
- **Website chalne se pehle script load hoti hai.**
- Page load se phle.
- Critical scripts.
- ⚠️ Performance impact.
- Kab use kare?

    - Login security.
    - Authentication.
    - Critical configs.

- ⚠️ Important warning:
    - Page slow ho sakta hai.
    - Sirf bahut zaroori cheez ke liye.

2️⃣ ```afterInteractive``` (MOST COMMON)
- **Page clickable ho jaaye, phir script load ho.**
- Page interactive hone ke baad.
- Analytics, tracking.
- Kab use kare?

    - Google Analytics.
    - Tracking tools.
    - Chat widgets.

3️⃣ ```lazyOnload```
- **Sab kuch load hone ke baad, last mein script.**
- Page load ke kaafi baad.
- Ads, heavy scripts.
- Kab use kare?

     - Ads.
     - Heavy third-party scripts.
     - Non-important features.

⚠️ Rules

- Script tag manually mat use karo.
- Strategy samajh ke choose karo.
- Galat strategy = slow website.


🧠 One rule yaad rakhiye:

**“Jitni late script load hogi, utni website fast lagegi.”**
**“Next.js Script strategies website performance control karne ke liye hoti hain.”**

---

## 🖼️ 3. Image Component (next/image).

### ❓ Problem kya solve karta hai?

Normal ```<img>```:

- Large size.
- No optimization.
- Slow loading.

```Image```:

- Auto optimization.
- Faster load.
- Better SEO.

### ✅ Why Image is VERY IMPORTANT

- Automatic image resize.
- Lazy loading by default.
- Device ke hisaab se image serve.
- (like desktop image size = 51kB but these same image in mobile size = 230Bytes).


### 🧠 Deep Concepts

- Responsive images auto generate.
- Lazy loading default hota hai.
- CLS (layout shift) reduce karta hai.
- WebP / AVIF format use karta hai.
- Jab hm <Image /> use karta hai:
- Next.js automatically image ko WebP / AVIF mein convert kar deta hai.
- Hme kuch extra karna hi nahi padta.
- JPG → 500 KB.
- WebP → 200 KB.
- AVIF → 120 KB.
- 👉 Quality same, size kam.


⚠️ MOST IMPORTANT RULES

- ```src```, ```width```, ```height``` ya ```fill``` mandatory.
- Public folder images easiest.
- External images ke liye ```next.config.js``` required.

📌 Kab use kare?

- Har jagah jaha image ho (Hero, cards, blogs).
- Production app mein ```<img>``` almost avoid karo.

🧠 QUICK COMPARISON.
 
| Component | Problem Solved | Key Benefit         |
| --------- | -------------- | ------------------- |
| Link      | Page reload    | Fast navigation     |
| Script    | Blocking JS    | Performance control |
| Image     | Slow images    | Auto optimization   |

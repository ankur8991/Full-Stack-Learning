# All About Dynamic Routes - (Notes)

## 1. Dynamic Routes kya hote hain?

Normally routes fixed hote hain jaise:
- /about
- /contact
- /blog

Par jab same page structure use karke different data dikhana ho, tab **Dynamic Routes** use hote hain.

**Example:**
- /blog/1
- /blog/2
- /blog/hello-world

Yahan `1`, `2`, `hello-world` dynamic parts hain.

---

## 2. Next.js mein Dynamic Route ka Folder Structure

Next.js file-based routing use karta hai.

**Single Dynamic Route:**
```
app/blog/[slug]/page.js
```

Isse ye routes bante hain:
- /blog/react
- /blog/nextjs
- /blog/123

---

## 3. Dynamic Route ka Data kaise milega?

### App Router (Next.js 13+)

```js
export default async function Page({ params }) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}
```

Agar URL:
```
/blog/nextjs
```

Output:
```
My Post: nextjs
```

**Note:**
- `params` ek object hota hai
- `params.slug` dynamic value hoti hai

---

## 4. Real-life Example (Blog Use-case)

```js
const blogs = {
  react: "React is a JS library",
  nextjs: "Next.js is a React framework",
};

export default function Blog({ params }) {
  return <p>{blogs[params.slug]}</p>;
}
```

URL:
```
/blog/react
```

Output:
```
React is a JS library
```

---

## 5. Multiple Dynamic Routes

Folder structure:
```
app/shop/[category]/[product]/page.js
```

URL:
```
/shop/mobile/iphone
```

Code:
```js
export default function Page({ params }) {
  return (
    <>
      <p>Category: {params.category}</p>
      <p>Product: {params.product}</p>
    </>
  );
}
```

---

## 6. Catch-All Routes

### Catch-All Route

```
app/docs/[...slug]/page.js
```

URL:
```
/docs/react/hooks/useEffect
```

Params:
```js
params.slug // ["react", "hooks", "useEffect"]
```

Use-case:
- Documentation sites
- Deep nested routing

---

## 7. Optional Catch-All Routes

```
app/docs/[[...slug]]/page.js
```

Works for:
- /docs
- /docs/react
- /docs/react/hooks

---

## 8. Dynamic Routes + Data Fetching

```js
async function async getBlog(slug) {
  const res = await fetch(`https://api.com/blog/${slug}`);
  return await res.json();
}

export default async function Page({ params }) {
  const data = await getBlog(params.slug);
  return <h1>{data.title}</h1>;
}
```

Benefits:
- Server-side rendering
- Better SEO
- Automatic caching

---

## 9. generateStaticParams (Advanced)

Static pages generate karne ke liye:

```js
export async function generateStaticParams() {
  return [
    { slug: "react" },
    { slug: "nextjs" },
  ];
}
```

Benefits:
- Faster performance
- SEO boost
- Pre-rendered pages

---

## 10. Common Mistakes & Summary

### Common Mistakes:
- ❌ `[slug].js` file banana  
- ✅ `[slug]/page.js` folder structure use karo

- ❌ Client component mein params expect karna  
- ✅ Server component preferred

### One-Line Summary:

Dynamic Routes Next.js mein same UI ko different URL params ke saath render karne ke liye use hote hain, jisme `[param]`, `[...param]`, aur `[[...param]]` ka use hota hai.
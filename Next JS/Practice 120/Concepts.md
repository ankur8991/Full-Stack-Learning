# 🔐 NextAuth.js – Complete Notes 

## 1. NextAuth.js Kya Hai?
NextAuth.js ek authentication library hai jo Next.js applications ke liye use hoti hai.

Ye handle karta hai:
- Login / Signup
- Sessions
- OAuth providers (Google, GitHub, etc.)
- Secure authentication flow

Why NextAuth.js?
- Secure by default
- Easy integration with Next.js
- JWT & Database sessions support
- Production ready

---

## 2. NextAuth.js Architecture (High Level)

Flow:
User → Login Page → NextAuth API → Provider → Session

Steps:
1. User login request bhejta hai
2. NextAuth provider se authenticate karta hai
3. Session generate hoti hai
4. Session frontend + backend dono pe available hoti hai

---

## 3. Installation & Setup

Install:
npm install next-auth

App Router (Next 13+):
app/api/auth/[...nextauth]/route.ts

Pages Router:
pages/api/auth/[...nextauth].js

---

## 4. Core Concepts (Very Important)

### Provider
Provider define karta hai user ka login source.

Types:
- OAuth Providers (Google, GitHub, Facebook)
- Credentials Provider (Email / Password)

Example:
providers: [
  GoogleProvider({...}),
  CredentialsProvider({...})
]

---

### Session
Session batati hai user logged-in hai ya nahi.

Types:
1. JWT Session (Default)
2. Database Session

Example:
session: {
  strategy: "jwt"
}

JWT zyada fast aur scalable hota hai.

---

### JWT (JSON Web Token)
JWT ek encrypted token hota hai jo user info store karta hai:
- user id
- email
- role (optional)

Benefits:
- Stateless
- Secure
- Fast

---

## 5. Callbacks (Interview Favourite)

Callbacks auth flow ko customize karne ke kaam aate hain.

Common Callbacks:
- jwt
- session
- signIn

Example:

```
callbacks: {
  async jwt({ token, user }) {
    if (user) token.id = user.id
    return token
  },
  async session({ session, token }) {
    session.user.id = token.id
    return session
  }
}
```

Use cases:
- Role add karna
- Extra user data session mein bhejna

---

## 6. Credentials Provider (Email / Password Auth)

Custom authentication ke liye use hota hai.

Example:

```
CredentialsProvider({
  authorize: async (credentials) => {
    const user = await db.user.findUnique(...)
    if (!user) return null
    return user
  }
})
```

Password hashing:
- bcrypt.compare()
- bcrypt.hash()

---

## 7. Database Integration (Production Level)

Common Databases:
- MongoDB
- PostgreSQL
- MySQL

Recommended ORM:
- Prisma

Adapter:

adapter: PrismaAdapter(prisma)

Adapter automatically manage karta hai:
- Users
- Accounts
- Sessions
- Tokens

---

## 8. Client Side Usage

useSession hook:

import { useSession } from "next-auth/react"

const { data: session, status } = useSession()

Status values:
- loading
- authenticated
- unauthenticated

---

## 9. Server Side Usage 

Server-side session:

import { getServerSession } from "next-auth"

const session = await getServerSession(authOptions)

Use cases:
- Secure APIs
- Protected pages
- Admin dashboards

---

## 10. Middleware Protection

Basic middleware:

export { default } from "next-auth/middleware"

Custom logic:
if (!token) redirect("/login")

Used for:
- Route protection
- Role-based access

---

## 11. Environment Variables

Required envs:

NEXTAUTH_SECRET=supersecret

NEXTAUTH_URL=http://localhost:3000

OAuth:
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

Secret strong hona chahiye (production).

---

## 12. Security Best Practices (Interview important)

- HTTPS use karo
- Strong NEXTAUTH_SECRET
- Password hashing (bcrypt)
- Role-based access control
- Server-side session validation

---

## Interview Quick Q&A

# NextAuth.js – Interview Q&A (Simple Explanation)

## Q1. NextAuth JWT vs Database Session?

### JWT Session
- Login ke baad user ka data **JWT token ke andar** store hota hai  
- Har request pe database hit nahi hota  
- Isliye ye **fast** aur **scalable** hota hai  

**Use case:**  
Large applications jahan performance important ho

---

### Database Session
- Session ka data **database mein store** hota hai  
- Har request pe database se session check hota hai  
- Session ko manually delete ya control kar sakte ho  

**Use case:**  
Jahan **zyada control** chahiye (logout from all devices, etc.)

---

**Short Summary:**  
- JWT = Fast performance  
- DB Session = More control

---

## Q2. Callbacks ka use kya hota hai?

**Callbacks** authentication process ko **customize** karne ke liye use hote hain.

Simple words mein:
- Login ke time extra logic lagane ke liye  
- User ka **id, role, permissions** session ya token mein add karne ke liye  

**Examples:**
- Admin / User role add karna  
- Database se extra user data session mein bhejna  

**Conclusion:**  
Callbacks bina authentication flow ko break kiye usse modify karne dete hain.

---

## Q3. Credentials vs OAuth Authentication

### Credentials Authentication
- User **email aur password** se login karta hai  
- Password ko hum khud handle aur verify karte hain  
- Full control developer ke paas hota hai  

**Use case:**  
Custom authentication systems

---

### OAuth Authentication
- User **Google, GitHub, Facebook** jaise providers se login karta hai  
- Password hum handle nahi karte  
- Zyada **secure aur trusted** hota hai  

**Use case:**  
Fast setup aur trusted login system

---

**Short Summary:**  
- Credentials = Custom authentication  
- OAuth = Third-party trusted authentication

---

## Q4. Session secure kaise hoti hai?

NextAuth session secure hoti hai kyunki:

### 1. HTTP-Only Cookies
- JavaScript se access nahi hoti  
- XSS attacks se protection milta hai  

### 2. Encryption
- Session data encrypted hota hai  
- Koi data read ya modify nahi kar sakta  

### 3. Secret Key
- `NEXTAUTH_SECRET` session ko protect karta hai  

---

**Conclusion:**  
HTTP-only cookies + encryption + secret key ki wajah se session secure hoti hai.

---

## Interview One-Line Answers (Quick Revision)

- JWT fast hota hai, database session zyada control deta hai  
- Callbacks auth flow ko customize karte hain  
- Credentials custom login ke liye, OAuth trusted providers ke liye  
- Session HTTP-only cookies aur encryption se secure hoti hai


---

## Short Summary

- NextAuth.js = Auth solution for Next.js
- Providers define login method
- Sessions manage auth state
- JWT default & fast
- Prisma best for production
- Secure & scalable

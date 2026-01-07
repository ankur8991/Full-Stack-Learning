# 🔐 Authentication From Scratch – Notes.

## 1. Authentication Kya Hota Hai? 

Authentication ka matlab hota hai:
> User kaise prove kare ki wo wahi hai jo wo claim kar raha hai.

Production-level authentication mein ye main parts hote hain:
1. User Registration (Signup)
2. User Login
3. Session / Token Management
4. Route Protection (Authorization)
5. Security Best Practices

---

## 2. User Registration (Signup Process)

### Step 1: User Data Collect Karna
Signup ke time user se:
- Email / Username
- Password

⚠️ Important Rule:
- Password **kabhi bhi plain text mein store nahi karte**

---

### Step 2: Password Hashing (Most Important)

Password ko database mein save karne se pehle **hash** karna mandatory hai.

Use hota hai:
- bcrypt (ya argon2)

Flow:
User Password → bcrypt.hash() → Hashed Password → Database

Points:
- Hash one-way hota hai
- Original password kabhi recover nahi hota
- Salt rounds: 10–12 (production standard)

---

### Step 3: User Database Structure

Example `users` table:
- id
- email (unique)
- password_hash
- created_at

Best practices:
- Email pe unique constraint
- Email pe index (fast lookup)

---

## 3. User Login (Authentication Process)

### Step 1: Email Verify Karna
- Check karo user database mein exist karta hai ya nahi

❌ Agar nahi:
- Same generic error return karo (security reason)

---

### Step 2: Password Verify Karna
- User ke input password ko stored hash se compare karo

Use:
bcrypt.compare(inputPassword, storedHash)

✔ Match → Login success  
❌ No match → Authentication fail

⚠️ Kabhi bhi exact error mat batao:
- “Email galat hai”
- “Password galat hai”

Hamesha bolo:
> Invalid credentials

---

## 4. Session / Token Management (Heart of Authentication)

Login ke baad server ko yaad rakhna hota hai ki user logged-in hai.

Iske 2 professional approaches hote hain:

---

### Option A: Session-Based Authentication

Flow:
1. Login success
2. Server session ID generate karta hai
3. Session database mein store hota hai
4. Session ID client ko cookie ke through milti hai

Browser → Cookie (session_id) → Server → Database

Pros:
- Zyada control
- Easy session revoke

Cons:
- Har request pe database hit

---

### Option B: Token-Based Authentication (JWT)

Modern applications mein zyada popular.

Flow:
1. Login success
2. Server JWT generate karta hai
3. JWT client ko milta hai
4. Client har request ke saath JWT bhejta hai

JWT ke andar hota hai:
- userId
- email
- expiry time

Pros:
- Fast
- Stateless
- Scalable

---

## 5. JWT Security Rules (Production)

JWT **encrypt** nahi hota, balki **sign** hota hai.

Isliye:
- Strong secret key use karo
- Short expiry rakho (15 min – 1 hour)
- Sensitive data JWT mein mat rakho

JWT structure:
header.payload.signature

Server verify karta hai:
- Token valid hai
- Expired to nahi
- Signature sahi hai

---

## 6. Cookies vs LocalStorage (Very Important)

### ❌ LocalStorage
- JavaScript se accessible
- XSS attacks ka risk

### ✔ HTTP-Only Cookies (Recommended)
- JavaScript se access nahi hoti
- Secure aur industry standard

Production cookie settings:
- httpOnly: true
- secure: true
- sameSite: "strict"

---

## 7. Protected Routes & Authorization

Authentication aur Authorization alag cheezein hain.

### Authentication:
User kaun hai?

### Authorization:
User kya access kar sakta hai?

Flow:
1. Token / session verify
2. User role check (user / admin)
3. Access allow ya deny

Example:
- Token valid hai
- Role admin nahi hai
→ Access denied

---

## 8. Logout Properly (Common Mistake Area)

### Session-based Auth:
- Session database se delete karo
- Cookie clear karo

### JWT-based Auth:
- Cookie clear karo
- (Optional) Token blacklist

Logout mein:
- Client + Server dono side cleanup zaroori

---

## 9. Security Best Practices (Production + Interview Ready)

- Password hashing (bcrypt / argon2)
- HTTPS mandatory
- HTTP-only cookies
- Rate limiting (login attempts)
- Same error message for login failures
- Token expiry + refresh tokens
- Secrets environment variables mein rakho

---

## Real Production Stack Example

- Backend: Node.js + Express
- Authentication: JWT-based
- Password Hashing: bcrypt
- Cookies: HTTP-only
- Database: PostgreSQL / MongoDB
- Security: Rate limiting, HTTPS

---

## Interview One-Liner Summary

"Authentication from scratch mein main password hashing, secure token/session handling, HTTP-only cookies aur role-based authorization use karta hoon."




# 🔐 Forgot Password + OTP Authentication (Notes)

## 1. Forgot Password Feature Kya Hota Hai?

Forgot Password ka use tab hota hai jab:
- User apna password bhool jata hai
- User ko securely new password set karna hota hai

Is process mein:
- OTP (One Time Password) use hota hai
- OTP email ya phone number pe bheja jata hai

---

## 2. High-Level Forgot Password Flow

1. User email / phone enter karta hai
2. Server OTP generate karta hai
3. OTP user ke email ya phone pe send hota hai
4. User OTP submit karta hai
5. Server OTP verify karta hai
6. User naya password set karta hai

---

## 3. Step 1: Forgot Password Request

User input:
- Registered email ya phone number

Server actions:
- Check karo user exist karta hai ya nahi
- Same response do (security reason)

Example response:
"If account exists, OTP has been sent"

---

## 4. Step 2: OTP Generate Karna

OTP characteristics:
- Random (6 digits)
- Time-limited (5–10 minutes)
- One-time use

Example OTP:
847293

---

## 5. OTP Storage (Most Important Security Rule)

❌ OTP plain text mein store nahi hota

✔ OTP ko pehle hash kiya jata hai

Flow:
OTP → bcrypt.hash() → hashed_otp → database

Database fields:
- user_id
- otp_hash
- expires_at
- is_used

---

## 6. OTP Send Karna (Email / Phone)

### Email OTP:
- Nodemailer / SES / SendGrid
- Subject: Password Reset OTP

### SMS OTP:
- Twilio / Fast2SMS / AWS SNS

Message example:
"Your password reset OTP is 847293. Valid for 10 minutes."

---

## 7. Step 3: OTP Verification

User input:
- Email / phone
- OTP

Server verification:
- User exist karta hai?
- OTP expire to nahi hua?
- OTP already used to nahi?
- bcrypt.compare(inputOTP, storedHash)

✔ Match → OTP valid  
❌ No match → reject

---

## 8. Step 4: New Password Set Karna

Rules:
- OTP verify hone ke baad hi allow karo
- New password ko bcrypt se hash karo
- Old password overwrite karo

Flow:
New Password → bcrypt.hash() → update user record

---

## 9. Step 5: OTP Invalidate Karna

Security ke liye:
- OTP ko mark karo `is_used = true`
- Ya OTP record delete karo

OTP reuse kabhi allow nahi hona chahiye

---

## 10. Security Best Practices (Very Important)

- OTP expiry mandatory
- OTP hash karke store karo
- Same response for valid/invalid email
- Rate limiting (OTP spam prevent)
- Password hashing mandatory
- HTTPS only
- Strong password validation

---

## 11. Common Mistakes (Avoid These)

❌ OTP plain text store karna  
❌ OTP kabhi expire na karna  
❌ Unlimited OTP requests allow karna  
❌ Email exist/not-exist clearly batana  

---

## 12. Interview One-Liner Answer

"Forgot password flow mein main OTP generate karta hoon, OTP ko hash karke store karta hoon, expiry aur one-time use enforce karta hoon, aur OTP verify hone ke baad hi securely password reset karta hoon."

---

## 13. Real Production Stack Example

- Backend: Node.js + Express
- OTP Hashing: bcrypt
- Email: Nodemailer / SendGrid
- SMS: Twilio
- Database: MongoDB / PostgreSQL
- Security: Rate limiting, HTTPS
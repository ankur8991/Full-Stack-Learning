
🔹 HTTP Methods (GET, POST, PUT, DELETE, etc.)
Ye server se baat krne ke "tarike" hain:

1. GET → Data mangna (fetch karna)

. Client: "Mujhe sab products dikhao"
. Server: "Ye lo JSON me products list"
. ye km url ke thorugh vi hota hai but vo limited or 
  restricted vi hota hai restricted isliye kyuki tum 
  uske server ki data vi access kr skte ho isliye vo 
  nhi deta vo restricted hota hai or limited also.

2. POST → Data bhejna (naya record banana)

. Client: "Ye naya product add karo"
. Server: "Thik hai, product add kar diya"

3. PUT/PATCH  → Data update krna

. Client: "Is product ka naam update karo"
. Server: "Update kar diya"

4. DELETE → Data delete karna

. Client: "Is product ko hata do"
. Server: "Delete ho gaya"

🔹 API kya hoti hai?
API = Application Programming Interface
. Simple words mai: Ek bridge (pul) jo client     (browser/app) aur server ke beech data exchange karta hai.

. Jab tu kisi website ya app se data maangta hai (e.g., weather app → “Delhi ka weather de”), wo server ko request bhejta hai. Server response bhejta hai JSON ya HTML me.

. Ye process jo hota hai → API call ke through hota hai.

👉 Express.js me jo routes banate hain (GET, POST, etc.), wo hi APIs ban jaati hain

. Api ka simple mltb hota hai ek endpoint(route) hota hai jo client aur server ke beech data exchange 
krta hai.
. Example: GET /products → server se products ki list aayegi.
. Example: POST /products → server ek naya product create karega.

. Ye chahe tu server side se frontend(HTML/JS) se kare ya postman/thunder client se, fark nhi padta.
jo 'route server pe bana hai', whi API hai.

🔹 POST/PUT requests bhi API hoti hain?
Bilkul ✅

. GET = API hai (data lana).
. POST = API hai (naya data bhejna).
. PUT/PATCH = API hai (update karna).
. DELETE = API hai (delete karna).

Sab API hi hote hain → bas unka HTTP method alag hota hai.

🔑 Clear kar le
. API = server pe bana endpoint(GET, POST, PUT, DELETE)
. Public folder/HTML = Bas ek frontend tester jo API ko call karta hai.
. POST/PUT bhi API hi hote hai → sirf unka method(kamm) alag hota hai.



IMPORTANT --> 
phle hmne (npm init -y) ye command terminal mai run kri or isse hmare current folder mai ek npm package.json file create ho jayegai jo npm project ko darsata hai or fir hm express pr practice kr rahe hai isliye hmne (npm i express@5) run kri jisse hme npm mai express module mil jye or fir finally hmne (nodemon yourfileName.js/express.js) se apna server run kr diya jisse hm microsoft edge pr jkr localhost:3000 se apne server ko run kr skte hai.



. Serving HTML file = Jab client (browser) request bhejta hai, server usse HTML page response me bhejta hai.

. Express.js ke through tu easily apni HTML file ko serve (bhej) sakta hai bina manually HTTP code likhe.






🔹 res.send()

. Ye string, object, json ya HTML content direct response me bhejta hai.
. Mtlb tu manually contentlikh raha hai.

Example:
app.get("/index", (req, res) => {
    res.send("HEllo WOrld ye content res.send() se aa raha hai!")
    });
👉 Browser me HTML render hoga, lekin tu khud string 
    ke form me bhej raha hai.
. Agar tu res.send({ name: "ANkur" }) kare →        Express automatically JSON bana dega.

🔹 res.sendFile()
. Ye poori file (HTML , image, PDF, etc.) ko as 
   response bhejta hai.
. Matlab → tu bol raha hai "bhai, is path wali file browser ko de do".

.Example:
app.get("/index", (req, res) => {
    
    res.sendFile('templates/index.html', {root: __dirname})
    });
👉 Browser ko index.html file milegi jaise ki wo server ke folder me hai.

🔑 Simple Difference (Easy to Remember)

. res.send() → content bhejna (string, JSON, HTML code).
. res.sendFile() → file bhejna (pure HTML file, image, PDF, etc.).

⚡ Ek line me bolu to:

. Agar chhoti si testing hai → res.send()
. Agar proper web page serve karna hai (HTML file) → res.sendFile()





🔹 JSON kya hai?
JSON = JavaScript Object Notation

. Ye ek data format hai (jaise English me likhte ho, waise hi computers ke liye readable format).
. Iska use data ko store aur transfer karne ke liye hota hai (specially web me client ↔ server communication ke liye).
. Ye JavaScript objects jaisa dikhhta hai, lekin actually ye ek text (string) hota hai.

🔹 Example: Normal JavaScript Object
const user = { name: "Ankur", age: 22 };

🔹 JSON Format (same data as text)
{
  "name": "Ankur",
  "age": 22
}

👉 Dhyan de: 
. Key double quotes me hona chiye ("name").
. Values number, string, boolean, array, object ho skti hain.
. function ya undefined allowed nhi krta hai.

🔹 Real Life Example
jb tu ek app banata hai aur usme backend --> forntend data bhejna hai:
. server bolta hai: "Ye le user ka data format me".
. Browser/ React app/ Mobile app easily us json ko smjh skti hai.

🔹 Express.js me res.json()

.Jab tu Express.js ka res.json() use karta hai → server automatically tera JavaScript object ko JSON string me convert karke bhej deta hai.
.Saath hi HTTP response me header set karta hai:

Content-Type: application/json.


🔹 Kab use karna chahiye?

. Jab tu API bana raha hai jaha data (objects/arrays) return karna ho.
. Example: Users list, products data, messages, etc.
. API ka main kaam hota hai → data exchange.
. Aur data exchange ka best aur fastest format hai → JSON.

🔑 Summary

. JSON ek format hai (JavaScript object jaisa dikhne wala text).
. Iska use data exchange karne me hota hai (client ↔ server).
. Express me res.json() → object ko JSON banake client ko bhej deta hai.








🔹 1. Limitation of Browser (yahi Postman useful banata hai)

1. Extra setup karna padta hai
  . Har POST/PUT/DELETE test ke liye HTML/JS likhna padta hai.
  . Time waste ho jata hai.

2. Headers/Authentication
   . Browser me fetch() likhte waqt manually header lagana padta hai.
   . Postman me dropdown se easily header, token, cookies add kar sakte  ho.

3. Different environments
   . Browser se sirf apna frontend ka request test hota hai.
   . Postman se tu direct API test kar raha hai bina HTML banaye.

4. Complex APIs
   . Real APIs me authentication hoti hai (JWT token, API key, OAuth).
   . Ye sab browser me setup karna mushkil hai, Postman me one-click me ho jata hai.

5. Testing Team/Developers
   . Backend developer ko hamesha frontend ka wait nahi karna padta.
   . Wo sidha Postman me API bana ke test kar leta hai.

🔹 2. Best Practice
   . Frontend testing → Browser (HTML/JS fetch() se).
   . Backend/API testing → Postman (fast aur professional).

🔑 Ek line me yaad rakh:

👉 Browser se POST test karna possible hai, lekin Postman professional API testing tool hai jisme:
   . tezi se request bhejna,
   . headers/tokens set karna,
   . different environments check karna,
   . aur API ke har method ko test karna bahut easy hai.


   🔹 Confusion IMPORTANT:
. Jo URLs pe tu GET, POST, PUT, DELETE request bhej raha hai → wo sab APIs hi hain.
. Farak bas itna hai:
   . Backend → API banata hai.
   . Frontend → API use karta hai (consume karta hai).
   . pr isse bhut hi time consuming hote hai jisse hm vo jb hm html file
     ko public folder mai daal kr fetch() await krke use krte hai ye bhut
     sari chiizze hme manully krni pdti hai isliye ye shi nhi hai that's the reason we use the postman .








USE CASE OF ROUTES FOLDER?
🔹 Problem kya hai bina routes folder ke?
Soch ki tu ek Express app bana raha hai aur usme saare endpoints(GET, POST, PUT, DELETE) ek hi file Express.js mai likh diye hai:

👉Jab project chhota hai to chalega.
👉LEkin jaise-jaise project bada hoga (100+ endpoints), file bhut
 badi ho jaayegi, smjhna & maintain krna muskil ho jaata hai.

🔹 Routes folder ka kaam
👉 Routes folder ek alag jagha hai jaha tu apne API endpoints ko
  organize karta hai.
  . Har feature ka alag file bana lete hain.
  . Jaise blog.js, shop.js, ye dono folder routes folder
    ke ander contain krte hai .
  . Fir unko Express.js me import krke use krte hain.
  tarika import krane ka apne file mai:
  const blog = require('./routes/blog')  
  const shop = require('./routes/shop')
   
   app.use('/blog',blog)  
   app.use('/shop',shop) 

   🔹 Benefit of Routes folder
   1. Clean COde → Express.js file short & simple ho jaati hai.
   2. Maintainability → Har features ka apna route file hota hai, 
      easy to manage.
   3. Reuesability → Routes ko dusre project me easily reuse kr 
      skte hain.
   4. Scalability → Jab project bada hoga, routes alag-alag module
      me divide krke manage kr paayega.


   🔑 Ek line me:

👉 Routes folder ka kaam hai API endpoints ko alag files me organize karke project ko clean, maintainable aur scalable banana.
  


  const blog = require('./routes/blog')
    // Ye path hai routes folder ke ander jo blog.js file hai uski isliye kyuki hme uska ander ke api chiye hai isme kyu kyuki vo blog wala part organize dikhe or isse hi hm connect kr pa rhe hai dono files ko express.js ko .

    app.use(express.static("public"))  
    // ye middleWare hai.

    app.use('/blog',blog)  
   // isme /blog se jo start hone wali endpoint hai vo .routes/blog.js routes folder ke blog file handle kr rahi hai mtlb agr hm http:localhost:3000/blog kre to vo blog.js file ki simple get request(api) return kr dega or fir http:localhost:3000/blog/about to vo about api return kr dega or fir http:localhost:3000/blog/blogcontent/abc to vo blogcontent api return kr dega. simple mtlb /blog se koi vi endpoint hai vo blog.js file handle kregai.



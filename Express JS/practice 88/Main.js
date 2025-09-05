/*
🔹 Node.js kya karta hai?
Node.js ek runtime environment hai jo JavaScript ko browser ke bahar chalata hai.
Iske saath hume server banane ka low-control milta hai(HTTP requests handle krna, file read/write krna, etc.).

👉 Matlab tu Node.js se apna web server bana skta hai, lekin thoda bhot low-level code likhna padta hai.
*/

/*
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type' , 'text/html');
    res.end('<h1>Hey1</h1>');
});
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
*/

// jb hm server Node.js ki madadt se banate hai or hmne baad mai kuch update krna ho server to hme server ko manually change krna padta hai isliye hm terminal mai isse likhte hai (npm i --global nodemon) jisse hme globally nodemon mil jyega jisme hm npm use krte hai sare porjects ke liye or (npm init -y) likhne se hmne package.json mil jata hai turant hi kuch swaal jawab vi nhi puchta hai terminal mai or jb hm (nodemon yourcurrentfilename.js) jiase mere case mai (nodemon Main.js) hai likhengai to hme terminal mai hme manullay restart krne ki jrurt nhi hai apne server ko vo automatically restart krke deta hai. 


// Yaha node.js se jb hm server bnanate ahi to hme bhut sara km manually krna pdta hai jaise request ke liye headers, routing, responses sab manage krna pdta hai or hm static file ko serve nhi kr skta hai .

/*
🔹 Express.js kya hai?
Express.js ek framework hai jo Node.js ke uper bana hai. 
Ye basically Node.js server banane ka kaam easy aur fast kr deta hai.

👉 Isko smjh le "Node.js ka shortcut aur toolkit" jisme server banane ke liye ready made cheezein mil jaati hain.

🔹 Express.js kyun use krte hain?
1. Easy Routing!
   . Node.js me router("/home", "/about") banane ke liye 
     extra code likhna pdta hai.
   . Express me bas ek line mai ho jaata hai.

2. Middleware support 
   . Express ke middleware se tu request/response ke beech 
     custom logic laga skta hai.
    (e.g., authentication, logging, error handling).

3. less Boilerpalte
   . Node.js me jo cheezein manually likhni padti hai(headers det krna, JSON parse karna), Express automatically kar leta hai.
4. Commuinty support 
   . Bahut sare plugins au packages available hain(jaise express-session, express-validator, etc).
*/

// Example:

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))  // Ye middleware hai jo express deta hai kyuki hmare code ki file koi or vi acces n kr ske isliye .
// yo fir hm ek folder banyegai public naam se or usme vo sari file daal dengai jo h cahahte hai vo files access kr ske public ke end pr isliye sirf whi files public access kr pati hai na ki jo hme ape editor mai files hai sari vo vi access krle.

// app.get() ye kehta hai jb vi '/' path pr koi koi request ati hai ye handler chala do 'res.send('Hello World!')' ye hote ese hai kuch app.get(path, handler) or app.post(path, handler) or app.put(path, handler) or app.delete(path, handler).
app.get('/' , (req, res) => {
    res.send('Hello World!')
})

app.get('/about' , (req, res) => {
    res.send('About us!')
})

app.get('/home' , (req, res) => {
    res.send('Home!')
})

app.get('/Contact' , (req, res) => {
    res.send('Contact us with this web page!')
})

app.get('/blog' , (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug' , (req, res) => {
    // logic to fetch blog/anything from the DB.
    // For URL: http://localhost:3000/blog/Ankur-bhaii?mode=dark&regin=in
    console.log(req.params) // Will Output: { slug: 'Ankur-bhaii' }
    console.log(req.query)  // Will Output:  query: 'mode=dark&regin=in',
    res.send(`hello ${req.params.slug}`) 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// ab hm simple jis browser pr hamra website open hai uspr hme bss localhost:3000/about or ese likhne se hmne jo apne server pr likha hai about mai vo chal jyega ese hi hm localhost:3000/Contact likhne pr hme vo return hokr mil jyega server se data pr agr ye good practice nhi hai isliye hme ek variable mai return krdengai kyuki wah pr client jo daalega vo aajyega web page(mtlb hmare server pr).


/*
🔑 Summary in Simple Words

. Node.js = ek raw engine (server banane ka tool).
. Express.js = ek gadi ka steering, gear, AC, music system 😎 jo Node.js engine pe chalti hai.
. Node.js se tu khud poora truck assemble karega.
. Express.js ready-made car de deta hai — bas chalana hai.

*/
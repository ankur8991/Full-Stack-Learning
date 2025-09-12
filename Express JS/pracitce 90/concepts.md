                        🔹 Middleware in Express.js
                           middleware hota kya hai?
                        👉 Middleware ek function hota hai jo Express.js ke request-response cycle ke beech me execute hota hai.
                        matlab: Jab client request bhejtaa hai → response bhejne se phle tabh ek function beech me run hota hai(jo kuch bhi kar skta hai).

                         syntax:
                                 app.use((req, res, next) => {
                                     console.log("Middleware chal rha hai");
                                     next(); 
                                  });

                        🔹 2. next() kya hai?
                            .  next() ek fucntion hai jo Express ko bolta hai:
                             →  "Ye middleware ka kaam ho gya, ab agle middleware ya route handler pe jao".✅

                        Agar Hm next() nahi likhega:
                             . Request wahi pe atki rahegi aur browser ko koi response nhi milega (loading ese hi permanent chalti rahegi ⏳).

                        🔹 Middleware ka kaam
                        1. Request aur response ko modify kr skte hai.
                        2. Extra logic add kr skte hai(auth check, logging, validation, etc).
                        3. Request ko end bhi kr skte hai (jaise error bhejna).
                        4. Agar middleware complete ho gya → next() call karega → request aage badhegai.





                        🔹 Types of Middleware in Express.js

                          1. APPLICATION-LEVEL MIDDLEWARE:   
                              . Pure app ke liye use hota hai 

                                      app.use((req, res, next) => {
                                        console.log("Time:", Date.now());
                                        next();
                                     });

                                USE CASE OF THIS CODE EXAMPLE WITH APPLICATION-LEVEL MIDDLEWARE:
                                   A. Har request ke liye Express phle is middleware ko chalata hai.
                                   B. Ye middleware terminal (server console) me ek log print karega.
                                  C. In Terminal : Time: 1725539012345

                                  . Date.now() ek timeStamp deta hai (ms me from 1970 → isko hum date/clock me convert bhi kr skte hain).

                        🔹 Isse fayda kya hai? (Global middleware ka real use)
                            1. Logging requests
                            . Tu dekh skta hai ki kaunse time pe kaunsi request aayi thi.
                            . Example: debugging ke time helpful.
                            . Agar server hang ho raha hai → check kr skte ho ki kis time  pe zyada requests aayi thi.

                         2. Performance monitoring
                            . Start time(Date.now()) aur response bhejne ke time ko compare karke pata chal jaata hai ki request ko handle karne me kitna time laga.

                         Example Performance monitoring:
                          app.use((req, res, next) => {
                            const start = Date.now();
                            res.on("finish", () => {
                                const end = Date.now();
                                console.log(`${req.method} ${req.url} took ${end - start}ms`);
                            });
                            next();
                          });

                          🔹 A. ${req.method}
                          .  Ye batata hai kis HTTP methods se request aayi hai.
                           . Example:
                              . GET → Agr tu page dekh raha hai.
                          . POST → Agr tu form submit kr raha hai.
                              . PUT/DELETE → agr tu data update/delete kr raha hai.

                          👉 Output me part hoga: GET ya POST etc.

                          🔹 B. ${req.url}
                          . Ye batata hai kis route (path) pe request aayi hai.
                           . Exmaple:
                             . /about
                             . /users
                             . /api/products

                          👉 Output me part hoga: /about ya /users.

                          🔹 C. ${end - start}ms
                          . start = Date.now() jab request aayi thi.
                          . end = Date.now() jab response finish hua.
                          .  end - start = time taken by server to handle that request 
                             (in milliseconds).

                          👉 Output me part hoga: 12ms ya 50ms.


                          🔹 D. Combined meaning
                          . Agar browser ne /about pe GET request bheja aur server ne 20 milliseconds me response bheja →

                          Console output hoga:
                          GET /about took 20ms

                            👉 FINAL Output:
                            GET /about took 20ms


                      3. Audit / security purpose
                         . Large apps me har request ka log maintain karna important  hota hai (kab request aayi, kis endpoint pe aayi).
                         . Later  analysis ke liye helpful.

                      🔹 Ek simple analogy

                      Soch tu ek dukaan chalata hai.
                      . Har customer jo gate se andar aata hai, tu time note kar 
                        leta hai ki vo kab aaya.

                      . Isse tu analyse kar sakta hai ki din ke kaunse time 
                        pe customers zyada aate hain.

                      👉 Waise hi ye middleware request ke arrival time log kar raha hai.

                      🔑 Ek line me?
                      👉 Ye global middleware har request ka time log karta hai → jo debugging, performance check aur monitoring ke liye useful hota hai.


                      🔹Sirf Date + Time readable format
                      const now = new Date(Date.now());

                      console.log(now.toLocaleDateString()); // Date only
                      console.log(now.toLocaleTimeString()); // Time only
                      console.log(now.toLocaleString());     // Date + Time


                      👉 Example Output:

                      9/4/2025
                      9:00:12 PM
                      9/4/2025, 9:00:12 PM



                      2. ROUTE-LEVEL MIDDLEWARE:
                      . Sirf ek specific route( Ya uske group ) ke liye apply hota hai, pura application  ke liye nhi.
                      . MAtlab ki app.use() se pura app ke liye middleware lagta hai, lekin router.use() ya route ke ander lagaya hua middleware sirf us route ke liye hi chalega.

                      Example:
                      📂 Express.js 
                            app.get("/users", (req, res, next) => {
                               console.log("users route middleware");
                               next();
                             },(req, res) => {
                          res.send("All Users");
                         });

                        . Direct approach (Express.js)
                          . Chhote projects ke liye easy hai.
                          . lekin jaise routes badh jaayenge, Express.js ka code bohot bada aur messy ho jaata hai.


                    Example: 
                                                  📂 routes/users.js

                            const express = require("express");
                            const router = express.Router();

                            // Route-level middleware (sirf is router ke liye  chalega)
                            router.use((req, res, next) => {
                              console.log("Users route middleware");
                              next();
                            });

/                            / Route itself

                            router.get("/" , (res, req) => {
                              res.send("All Users");
                            });

                            module.exports = router; // router ko export krna.


               📂 Express.js
                             const express = require("express");
                             const usersROuter = require("./routes/users");

                             const app = express();

                             // Router ko mount krna
                             app.use("/users", usersROuter);

                             app.listen(3000, () => {
                               console.log("Server chal raha hai port 3000 pe");
                             });

                           🛠 Flow:

                           . Hum jab http://localhost:3000/users hit karega → Sabse pehle middleware chalega: phle terminal output: bcoz it written in console.log() Users route middleware.

                              . Fir response aayega:
                               → server ouput: bcoz it written in res.send() "All Users".


                            🔑 Conclusion

                            . app.use("/xyz", router) me jo /xyz likhega wo prefix banega.
                            . Aur jo routes tu router file me banata hai (/, /profile, /settings) wo us prefix ke aage jud jaayenge.


                             3. Built-in Middleware
                             . Express ke ander already aate hai.
                             . Example:
                                . express.json() →  JSON body parse krne ke liye.
                                . express.urlencoded() → URL encoded data parse krne ke liye.
                                . express.static → ye hm assets ko pulic mai serve krne ke liye use krte hai 
                                 HTML files, image ,and so on.

                             Example: 
                               app.use(express.json());



                             4. Third-party Middleware
                             . Bahar ke packages jo middleware ke form me use hote hain.
                             . Example:
                                    . morgan → logging ke liye..
                                    . cors → Cross-Origin Resources sharing ke liye. 

                             Example: 
                             INStall by TERMINAL This command --> npm install cookie-parser
                            CODE:
                                      const express = require('express')
                                      const app = express()
                                      cosnt cookieParser = require('cookie-parser')

                                      // load the cookie-parsing middleware
                                      app.use(cookieParser())


                              5. Error-handling Middleware
                                . Special middleware jo error catch krta hai.
                                . Isme 4 arguments hote hain: (err, req, res, next).

                              Example:
                                 app.use((err, req, res, next) => {
                                   console.error(err.stack);
                                   res.status(600).send("Somthing broke!");
                                 });

                                🔹 Middleware ke Benefits

                                1. Code reusability → Bar-bar same code likhne ki zarurat nahi.
                                2. Centralized handling → Jaise sabhi request ka logging ek hi jagah.
                                3. Separation of concerns → Auth, validation, error handling alag rakhe ja sakte hain.
                                4. Maintainability → Project clean aur scalable banta hai.
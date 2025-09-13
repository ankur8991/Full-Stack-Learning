               🔹 Template Engine kya hota hai?
               👉Template Engine ek aisa tool hai jo hume dynamic HTML pages generates karne me help krta hai. 
               . Normally HTML static hoti hai(fix content).
               . Lekin agar tu chahta hai ki server ke data ke hisaab se HTML badle, to template engine use hota hai.
               . Ye allow krta hai ki HTML file me tu variables, loops, conditions use kr ske.

               👉Matlab:
               Template Engine: HTML + Dynamic Data(server se) → ready HTML client ko send.

               🔹 Template Engines ke types / examples
               Express.js ke saath bohot saare template engines use kiye ja sakte hain:
               1. EJS (Embedded JavaScript) ✅Most common
                    . HTML jaisa  syntax.
                    . <%= %> se variables inject karte hain.
                    . Simple aur beginner friendly.
              2. Pug(Phle Jada tha use)
                    . Indentation based syntax.
                    . Thoda minimalcaur chhota likhne ka style.

                    pug
                    h1 Hello #{name}
              3. Handlebars(hbs)
                    . Mustache-style syntax {{}}.
                    . Reuseable templates aur partials hote hain.

                    hbs
                    <h1>Hello {{name}}</h1>
              4. Mustache
                    . Handlebars jaisa, but thoda simple aur limited features.
              5. Nunjucks
                     . Jinja (python Flask) jaisa syntax.
                     . Conditons aur loops support karta hai.

            🔹 Phir EJS hi kyu use karte hain?
            1. Easy aur familiar → HTML jaisa hi syntax hai, bas <%= %> lagana hota hai.
            2. Express ke saath built-in support → res.render('file') se direct kaam ho jaata hai.
            3. Learning projects ke liye perfect → beginner ko turant samajh aa jata hai.
            4. Readable code → HTML ke saath hi JS ka use kar skte ho.

            FINAL DEFINE TEMPLATE:
            "Template Engine ek tool hai jo hume server side se dynamic HTML generate karne deta hai. Isme hum HTML ke ander variables, conditions, aur loops likh kar server data inject kar skte hai. Express.js me popular tempaltes engine hain: EJS, pug, Handlebars. Generally EJS use hota hai kyuki iska syntax HTML ke bilkul jaisa hota hai aur Express ke saath easily integrate ho jaata hai."

            🔹 EJS kya hota hai?
            👉EJS(Embedded JavaScript Templates) ek templating engine hai jo Express.js ke saath use hota hai.
               . Iska kaam hai: Server-side se dynamic HTML pages generate krna.
               . Matlab, Tu HTML likh skta hai + JavaScirpt code embed kar skta hai(<%= %>) ke through.
              
              🔹 Important Features of EJS

                1.  Dynamic data inject karna Server se data aayega, aur tu use <%= %> ke anda embed kar sakta hai.
                2.  Conditionals aur loops Tu HTML ke andar if, for, foreach chala sakta hai.
                3.  Code reusability partials use karke tu header, footer jaisi files alag bana ke har page me include kar sakta hai.
                4.  Separation of concerns Business logic alag (server.js), aur view alag (EJS templates).
                5.  Express ke saath res.render() use hota hai.    

                    FinaL DeFine EJS:
                    "EJS ek templating engine hai jo Express.js ke saath use hota hai. Ye Hume HTML pages ek ander dynamic data inject krne ki facility deta hai. Isme hum server-side se data bhejte hain aur <%= %> syntax ka use karke us data ko HTML me dikhate hain. Isse hume static HTML ke jagah dynamic content serve krne ka option milta hai."

                    “React ya Angular ki jagah EJS kyu use karte hain?”
                    "React/Angular client-side rendering engine hain jo zyada heavy SPAs(single page Applications) ke liye use hote hain. Lekin agr hume sirf server-side rendering chahiye simple dynamic pages ke liye, to EJS lightweight aur easy hai. Express ke saath direct integrate ho jata hai."

                    🔹 res.render()
                    . Ye sirf tab use hota hai jab yi Template Engine(EJS, Pug, Handlebars, etc.) use kre.
                    . res.render() ek template file ko compile aur usme jo dsts pass kiya gaya hai wo inject krke final HTML bana kr client ko send krta hai.

                    👉 Example with EJS:

                     app.set("view engine", "ejs");

                     app.get("/", (req, res) => {
                       res.render("index", { name: "Ankur" });
                     });


                     📂 views/index.ejs

                     <h1>Hello <%= name %></h1>


                     👉 Browser output:

                       Hello Ankur

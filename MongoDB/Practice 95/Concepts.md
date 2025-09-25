               
             ⚡  MongoDB vs Mongoose 
              ✅ MongoDB 
               . Ye ek database hai.
               . Isme data collections aur documents ke form me store hota hai (JSON-like format).
               . MongoDB ek NoSQL DB hai → schema flexible hota hai, relational tables jaise constraint nhi hota.
               . Tu directly MongoDB ke saath interact kr skta hai MongoDB driver(Compass) ya mongosh shell se.

              ✅ Mongoose
               . Te library / ODM (Object Data Modeling) hai jo Node.js ke ander use hoti hai.
               . Iska kaam hai MongoDB ko easy tareeke se handle krna.
               .Mongoose ke ander: 
                   . Schema: document ka structure define krne ke liye.
                   . Model: CRUD operations perform krne ke liye.
                   . Validation, Middleware, Population, Hooks, Virtuals jaise features milte hain jo plain MongoDB me Manully krne pdte hai .

              ⚡ Relationship
              . MongoDB = database system
              . Mongoose = ek npm package jo Node.js apps ko MongoDB ke saath connect aur manage krne mai help krte hai.      
               
               
               
               🔹1. Mongoose ODM kya hai?
               . Mongoose ek ODM(Object Data Modeling) Library hai Node.js ke liye.
               . ODM ka Mtlb hai: Object-oriented tareeke se database (MongoDB) ke documents ko model aur interact krna.
               . Agar tu direct MongoDB driver use karega(mongodb package), toh tu raw queries likhega.
               Example:
               db.Studentcollection.insertOne({name: "Ankur", age: 20});
               -> ye simple hai, but bada project hote hi manage krna muskil ho jata hai.
               .Mongoose ye sab abstract krke ek schema -based solution deta hai.Matlab tu phle ek schema define krta hai(structure + rules), fir uske hisaab se Models bante hain.

               🔹2. Features of Mongoose 
               1. Schema-based modeling
                  . Tu database collection ka ek "blueprint" define krta hai.
                  . Example: User ke schema mai name, age, email define kr diya.

               2. Validation
                  . Data database mai save hone se phle check hota hai (string, number, min, max, required, regex, custom).
                
              3. Middleware (Hooks)
                 . Pre & post hooks(e.g. save hone se phle password hash krna).

              4. Virtuals
                 . Compound properties jo DB mai store nhi hote, but code mai behave krte hain.
                 . Example: fullName = firstName + lastName
                
              5. Population (joins jaise)
                 . Alag collection ke documents ko link karke ek sath data laa skte ho.
            
              6. Built-in Query Helpers
                 . .find(), .findOne(), .updateOne(), .deleteOne() etc.
                
              7. Indexes support
                 . Performance ke liye indexes schema level pr define kr skte ho.

            🔹3. Express.js ke sath integrate kaise krte hain?
            (a) Install karo
            npm install mongoose express

            (b) Express + Mongoose Setup
            // main.mjs
             import express from "express";
             import mongoose from "mongoose";

             const app = express();
             app.use(express.json());

             // 1) MongoDB connect kro
             mongoose.connect("url of monogpdb")
             .then(() => 
             console.log("MongoDB Connected))
             .catch(err => 
             console.log(err));

             // 2) Schema define kro
             const userSchema = new mongoose.schema({
                name: { type: string, required: true },
                age: { type: Number, min: 18 },
                email: { type: string, unique: true },
                createdAt: { type: Date, default: Date.now }
             });

             // 3) Model banao
             cosnt User = mongoose.model("user", userSchema);

             // 4) Routes banao
             app.post("/users", async (req, res) => {
                try{
                    const user = new User(req.body); // Mongoose model ke instance
                    const savedUser = await user.save();  // Validation + save
                    res.json(savedUser);
                } catch(err) {
                    res.status(400).json({error: err.message });
                }
             });

             // 5) server start karo
             app.listen(5000, () => console.log("Server running on port 5000"));

             🔹 4. IMportant Question:
              1. ODM vs ORM 
                . ODM = Document-based DBs (MongoDB) ke liye hota hai.
                . ORM = Relational DBs (MySQL, PostgreSQL) ke liye hota hai.

              2. Advantages of Mongoose over native MongoDB driver:
                 . Validation
                 . Middleware support
                 . Easy relationship handling with 'populate()'
                 . Cleaner & structured code
            
            3. Common interview Question:
               . What is differnce between Schema & Model in Mongoose?
                 1) Schema
                  . Definition of structure hoti hai ek collection/document ki.

                  . Matlab tu decide karega ki document me kaunse fields honge, unka type kya hoga, required hai ya optional, default values kya hongi, validators kya honge.

                  . Ek tarah se blueprint/template hai document ka.

                 2) Model

                 . Model = compiled version of Schema hota hai.

                 . Ye schema ko collection ke sath bind karta hai aur CRUD operations perform karne ke liye methods deta hai (find, create, update, etc).

                 . Basically, schema ka runtime usable object hota hai.

            4. How to handle realtionship in MongoDB using Mongoose?
              👉 By using Refs + populate()
              Example : 
              const postSchema = new mongoose.schema({
                title: string, 
                user: {type: mongoose.Schema.Types.ObjectId, ref: "User" }
              });

              THen:
              post.find().populate("user");

              ✅Ab hm easily bol skte hai:
              "Mongoose ODM ek schema-based abstraction hai MongoDB ke uper, jo validation, middleware, population aur indexes provide krta hai, aur Express.js ke sath easily integrate ho jaata hai using Models and Routes."


              nodemon jo run karane ka tarike hai doo sirf:
              1). simple Terminal mai likhu nodemon jo file run krni ho uska naam for Example in my case :
              nodemon main.mjs

              2). package.json ke ander script wale sections ek ander mai likhu 
               "dev": "nodemon main.mjs" mltb phla letter jisse hm terminal mai use krengai or : right wale part mai hm isko save krdengai.

               math.random() => 0 to 0.9 tk value deta hai random.

               Math.floor() = decimal ko neeche ke nearest integer tak round karta hai. 
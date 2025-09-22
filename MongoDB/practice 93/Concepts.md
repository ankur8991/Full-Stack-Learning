                            Intro to MongoDB:
                            🔹 MongoDB Kya Hai?
                            MongoDB ek NoSQL dataabase hai.
                             . NoSQL ka matlab - ye SQL(Relational Database jaise MySQL, Oracle) jaise table-row system use nhi krta.
                             . Isme data ko JSON-like documents (BSON) ke form mai store kiya jata hai.

                            → Matlab rows & columns ki jagah yaha thujko collections aur documents milenge.

                             🔹 Main Concepts
                             1. Database → sabse upar ka container, jisme collections hote hai.
                             2. Collection → ek tarah se "table" jaisa, jisme documents hote hai.
                             3. Document → ek ek record, jo JSON object ki tarah hota hai.

                            Example:
                            json 
                            {
                                "name": "Ankur",
                                "age": 20, 
                                "skills": ["JavaScript", "Node.js", "Express.js" , "MongoDB"]
                            }
                           → Ye ek document hai. Aur aise multiple documents milke ek collection banate hain.

                            🔹 Why MongoDB Popular ?
                            . Scheme-less → Tu data ka structure rigidly fix hi karta(mtlb jaisa MySQL mai ek table hmne avi define krdi hai or usme kuch columns 
                              or rows vi hai to agr ab mujhe kl usme ek naya column add-on krna pdta hai to mujhe schema change krna padega pr esa MongoDB ke sath nhi hai isme tum jb chahe update kr skte hai bina schema change kre mtlb data ka structure rigid/fixed  strict nhi hai).

                           . scalable → Large scale apps ke liye best, kyuki distributed database hai.

                           . Fast → Indexing aur in-memory storage ke wajah se performance acchi hai.
                               In-Memory →
                                    . MongoDB data ko disk pe store karta hai(jaise normal DB) isko persist vhi bolte hai kyuki ye data ko SSD me sotre krta hai 
                                      permanent non-persist jb bolte hai jaise hmne ek bar shutDown kr diya agr PC to doabra on krne ke baad vo data gayab ho jata hai
                                      lekin persist wala reh jata hai hmesha ke liye kyuki vo direct SSD secondary memory mai store hai isliye.
                                    . lekin jab tum query chalate ho, frequently used data ko MongoDB RAM (memory) me load kr leta hai.
                                    . Isse repeated queries bahut fast ho jaati hain kyuki har baar disk se read nhi krna padta hai.
                                    . MongoDB ke pass ek storage engine(default: WiredTiger) hota hai jo memory caching handle krta hai.
                                         → MongoDB me Caching(WiredTiger Engine)
                                           . MongoDB ka default engine WiredTiger hai.
                                           . Ye ek cache Layar in RAM maintain krta hai.
                                           . Jab Tum query chalate ho:
                                               a. Phle cache(RAM) check hota hai.
                                                 - Agar data RAM me mila → turant result (isko bolte hai cache hit).
                                                 - Agar data nhi mila → disk se read krke RAM Copy rakhta hai (isko bolte hai cache miss).
                                               b. Agli baar wahi query chalayi to sidha RAM se answer mil jaata hai → speed bhaut fast.

                                    Example Of in-Memory →
                                    maan lp hamre pass ek bada users collection hai(1 crore records).

                                    . Tum br-br query krte ho:
                                    db.users.find({ city: "Noida"})
                                    . First time: MongoDB disk se "Noida" ke records nikalega → RAM me store karega.
                                    . Next time: MongoDB sidha cache se "Noida" ke records de dega → 10x faster.
                                    
                                    Benefits of Caching in MongoDB:
                                    1. Speed - queries fast ho jaati hain.
                                    2. Reduce Disk I/O - disk pe load km hota hai.
                                    3. Better performance for Repeadted Queries - br-br used 
                                       data instantly milta hai.
                            
                            . Flexible with JSON → JavaScript developers ke liye easy kyuki format JSON/BSON hai.

                              Simple Compare with SQL
                              SQL (Relational)	                 MongoDB (NoSQL)
                              Database → Tables → Rows	        Database → Collections → Documents
                              Structured schema	                 Schema-less
                              Joins supported	                 Embedded documents, references
                              Best for complex transactions	     Best for flexible & scalable apps

                        🔹 Where MongoDB Used ?
                        . Real-time analytics (jaise tracking system)
                        . E-commerce (cart, product catalog)
                        . Social media apps (users, posts, comments)
                        . IoT aur big data projects                       
                            

                        MongoDB code :
                        _id
                        68d0d893be0ad912c58a8e19
                        name
                        "Ankur"
                        Skills
                        "CPP, JavaScript, Node.js, Express.js, MongoDB"
                        Email
                        "XyZ@gmail.com"

                       → isme id by default rhti hi hai koi sa vi document ho.


                       MongoDB code of  file extention is → 'mongodb.js'.
                              
//Create DB
use("CrudDB")

//Create Collection
db.createCollection("crudCollection")

//Insert one in collection and create document
// db.crudCollection.insertOne({
//     "name": "Ankur Sharma",
//     "age": 20,
//     "Year/sem/section": "3rd/2nd/A",
//     "branch": "CSE",
//     "Laptop": "Samsung Laptop"
// })

//Insert many in collection and create document
// db.crudCollection.insertMany(
//     [
//         {
//             "name": "Rohit Verma",
//             "age": 21,
//             "Year/sem/section": "2nd/1st/B",
//             "branch": "ECE",
//             "Laptop": "Dell Inspiron"
//         },

//         {
//             "name": "Neha Singh",
//             "age": 19,
//             "Year/sem/section": "1st/2nd/C",
//             "branch": "IT",
//             "Laptop": "HP Pavilion"
//         },

//         {
//             "name": "Amit Yadav",
//             "age": 22,
//             "Year/sem/section": "4th/1st/A",
//             "branch": "ME",
//             "Laptop": "Lenovo ThinkPad"
//         },

//         {
//             "name": "Priya Mehta",
//             "age": 20,
//             "Year/sem/section": "3rd/2nd/B",
//             "branch": "CSE",
//             "Laptop": "Acer Aspire"
//         },

//         {
//             "name": "Sahil Khan",
//             "age": 23,
//             "Year/sem/section": "4th/2nd/C",
//             "branch": "Civil",
//             "Laptop": "Asus VivoBook"
//         },

//         {
//             "name": "Kritika Gupta",
//             "age": 21,
//             "Year/sem/section": "2nd/2nd/A",
//             "branch": "EEE",
//             "Laptop": "MacBook Air"
//         },

//         {
//             "name": "Arjun Malhotra",
//             "age": 19,
//             "Year/sem/section": "1st/1st/B",
//             "branch": "CSE",
//             "Laptop": "MSI Gaming Laptop"
//         },

//         {
//             "name": "Simran Kaur",
//             "age": 22,
//             "Year/sem/section": "3rd/1st/C",
//             "branch": "IT",
//             "Laptop": "HP Envy"
//         },

//         {
//             "name": "Vikas Dubey",
//             "age": 20,
//             "Year/sem/section": "2nd/1st/A",
//             "branch": "ECE",
//             "Laptop": "Dell XPS"
//         },

//         {
//             "name": "Pooja Nair",
//             "age": 18,
//             "Year/sem/section": "1st/2nd/A",
//             "branch": "BioTech",
//             "Laptop": "Samsung Galaxy Book"
//         }
//     ]
// )

//Read
// let a = db.crudCollection.find({"branch": "CSE"})
// console.log(a)
// console.log(a.toArray())

//Update
// db.crudCollection.updateOne({"Laptop": "Samsung Laptop"}, {$set: {"Laptop": "MacBook m4 pro max"}})
// db.crudCollection.updateMany({"branch": "CSE"}, {$set: {"Laptop": "MacBook m4 pro max"}})

//Delete
// db.crudCollection.deleteOne({_id: ObjectId("68d222f87d8246f9cfc8f040")})
// db.crudCollection.deleteMany({"branch": "Civil"})
db.crudCollection.deleteMany({"branch": "ECE"})
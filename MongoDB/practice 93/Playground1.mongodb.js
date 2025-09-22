use('Full-Stack');

// Insert a few documents into the courses collection.
db.getCollection('Practices ').insertMany([
  {
    "name": "Ankur",
    "skill": "MERN Stack, DevOps, BLockchain(Web3), Cybersecurity, Artificial Intelligence, Machine Learning",
    "Gmail": "ankur@gmail.com"
  },
  {
    "name": "Rahul",
    "skill": "Java, Spring Boot, MySQL",
    "Gmail": "rahul@gmail.com"
  },
  {
    "name": "Neha",
    "skill": "Python, Django, PostgreSQL",
    "Gmail": "neha@gmail.com"
  },
  {
    "name": "Vikram",
    "skill": "C++, Rust, Go",
    "Gmail": "vikram@gmail.com"
  },
  {
    "name": "Simran",
    "skill": "AI, Machine Learning, Data Science",
    "Gmail": "simran@gmail.com"
  },
  {
    "name": "Karan",
    "skill": "Android, Kotlin, Firebase",
    "Gmail": "karan@gmail.com"
  },
  {
    "name": "Priya",
    "skill": "React Native, Flutter",
    "Gmail": "priya@gmail.com"
  },
  {
    "name": "Amit",
    "skill": "Cybersecurity, Networking",
    "Gmail": "amit@gmail.com"
  },
  {
    "name": "Sonal",
    "skill": "Blockchain, Solidity, Web3",
    "Gmail": "sonal@gmail.com"
  },
  {
    "name": "Rohit",
    "skill": "Cloud (AWS, Azure, GCP)",
    "Gmail": "rohit@gmail.com"
  }
]

);
 
// Print a message to the output window.
console.log(`Done Inserting Data`);
 
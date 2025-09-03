// terminal command --> npm i express jsonwebtoken dotenv
// Iska matlab hai 3 alag-alag packages ek saath install krna. 


// 1. express
//  . Ye ek web framework hai Node.js ke liye.
//  . Isse tu easily server bana sakta hai aur routes handle kar sakta hai.


// Example:
const express = requires('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello Express!');
});

app.listen(3000, () => console.log('server running on port 3000'));

// 2. jsonwebtoken(short name: JWT)
//   . Ye package JWT tokens generate aur verify krne ke liye use hota Hai.
//   . JWT ka use authentication/authorization me hota hai(user login ke baad secure token dena).

//   . Example:
  const jwt = require('jsonwebtoken');

  // token generate
  const token = jwt.sign({userId: 123}, 'secretKey', {expriesIn: '1h'});
  console.log(token);

  // token verify
  const data = jwt.verify(token, 'secretKey');
  console.log(data);

//   3. dotenv
   // . Ye package .env file ke variables ko load krta hai project ke ander.
   // . Sensitive info (like passwords, secret MediaKeySession, database URLs) tu ocde me nhi likhta, .env file me rakhta hai.
   
   // .Example:
      // .env file:
      PORT = 4000
      SECRET_KEY = mysecert

      //  Server.js:
       require('dotenv').config();

       console.log(process.env.PORT);
       console.log(process.env.SECRET_KEY);

//    📌 To short mai:

//   . express → server banane ke liye.
//   . jsonwebtoken → secure login/authentication ke liye.
//   . dotenv → secrets safely store aur use karne ke liye.
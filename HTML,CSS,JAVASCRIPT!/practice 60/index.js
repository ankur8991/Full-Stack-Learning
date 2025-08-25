console.log("This is string tutorial")
let A = "Ankur";
console.log(A[0])
console.log(A[1])
console.log(A[2])
console.log(A[3])
console.log(A[4])

console.log(A.length)

let real_name = "Ankur"
let friend = "Krishna"

console.log("His  name is " + real_name + " And his friend name " + friend)

// this is templates literals and it is possible to use both single as well as double quotes inside a string.
console.log(`His name is  ${real_name} And his friend name is ${friend}`)

let n = "Ankur"
console.log(n.toUpperCase())
console.log(n.toLowerCase())
console.log(n.length)
console.log(n.slice(1,3))  // isme ( included , notincluded).
console.log(n.slice(0))
console.log(n.replace("Ankur" , "Krishna"))  // isme hmne (Ankur ko Krishna se replace kr dia hai) 
// pr agr do consicutive AnkurAnkur hai or hmne ("Ankur" , "Krishna")se replace kr diya to isme ek Ankur first wala hi repalce hoga naki dono AnkurAnkur.
console.log(n.concat(friend))  // Yeh add kr deta hai string ko concat().

// string immutable hoti hai mtlb original string change nhi hoti balki uski dusri string uppercase yah lowercase mai milti hai.
console.log(n)


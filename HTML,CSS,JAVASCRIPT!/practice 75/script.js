// console.log("ANkur Is GooD iN DevEplOmeNt")
// console.log("SHivM is My FrnD")

// setTimeout(() => {
//   console.log("I am Inside the SetTimeOut 1")
// }, 2000);

// setTimeout(() => {
//   console.log("I am Inside the SetTimeOut 2")
// }, 2000);

// console.log("ThE EnD")

// CallBack function ka mtlb hota hai ki ek function ko  hm As a Variable use kr rhe hai Kissi Dusre Function mai.
// Ek function jo kisi doosre function ke andar call hota hai — usi ko callback kehte hain.

/*
const fn = () => {
  console.log("nothing")
}



const callback = (arg, fn)=>{
  console.log(arg)
  fn()
}

const loadScript = (src , callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Radha Radha" , fn);
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
*/


// Yeh Funtion hai jisse hum pass krengai 
function kmcontinu() {
  console.log("Abhi Coding sikh rah hu mai!")
}

//Yeh Doosra Funtion hai jo callback lega 
function kmkaro(callback) {
  console.log("Coding Abhi just Start kri hai !~")
  callback() // Yah jo bhi funtion aaya, usse chla diya.
  console.log("Coding Khtm!~")
}

//Yahan hum kmcontinu ko pass kr rhe hai kmkaro mai jo ki kmcontinu ek reference le rah hai kmkaro funtion mai or iska naam same rhega kyuki hm isse final ouput chhate hai fir chahe vo baki refernce se kyu nhi ara ho or jb hm refernce dete hai tbh vo jis function mai de rhe hai phle uss refernce wale funtion ko call krega bki uske baad mai jb vo chl gya tbh pura k khtm hoga or jb hm pura funtion call krte hai tbh direct chl jata hai bina kissi or ko call kre mtlb vo direct run krne ke liye hota hai.
kmkaro(kmcontinu)


// Anonymous function ek aisa function hota hai jiska koi naam nhi hota, aur usse turant use krna ke liye banaya jaata hai - mostly as a callback.
function sayHello() {
  console.log("Hello Bhai!")
}
//Iska naam hai: sayHello

// Anonymous Function :

// function () {
//   console.log("Hello Bhai!")
// }
//Iska koi Naam nhi hai - Ye ek nameLess function hai.

// Lekin dikkt hai - Aise akele anonymous function JS mein nhi likh Skte hai. Toh isse kisi kaam ke liye pass karte hain ya store karte hain.


/*Anonymous function ko hm tbh use krte hai jb hme -
1) jb jo functon hme pass krna ho as a callback usko hme alg se define na  krna ho ek hi mai likh vi de or usse callback vi alg function mai krva  de.
2) Aur hm Direct usi jagh kaam karwana chahte hain
2) Taki hme alag function define nan krna pde 
*/
function kaamkaro(callback) {
  console.log("start")
  callback()
  console.log("End")
}

kaamkaro(function () {
  console.log("Anonymous Function Run hogya or ye line Middle mai ayegai!~")
})

/*
callback hell - jab bhut saare nested callback ek ke ander ek likhne jaate hai , jisse code ghuma-ghuma ke ander chala jaata hai, aur samajhna muskil ho jata hai - callback hell bote hai.
*/

setTimeout(function () {
  console.log("utha")

  setTimeout(function () {
    console.log("Runnimg ke liye gya!!")

    setTimeout(function () {
      console.log("Fir Wah se Aya to Sawar liya")

      setTimeout(function () {
        console.log("Fir mandir gya fir uske baad apni deit li")

        setTimeout(function () {
          console.log("Fir sabko chodne gya uske baad padhna suru kiya")

        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
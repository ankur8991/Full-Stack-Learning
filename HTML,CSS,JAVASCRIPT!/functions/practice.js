// here function is Function keyword.
// MyFunction is Function name.
// n is called parameter.
// arguments is 2 pass when we call's our function.


// function MyFunction (n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//        sum += i;   // sum = sum + 1;
//     }
//     console.log("sum of your number is", sum);
// }

// MyFunction(2)

// ----------------------------------- with return only.

// function z () {
    //     return "zod"
    // }
    
    // let zz = z()
    // console.log(zz)
    
    // console.log(z())   
    
    // jb vi hm return krte hai function ke ander to usse run krne ke liye console krna padta hai pure function ko ya fir alg variable mai store karana padta hai usse run run karane ke liye.


    // ----------------------------------- with parameter only.
    
    // function y(name){   
        //     console.log("Hello bhai", name)
        // }
        
        // console.log(name)  // ye name variable block scope hai isliye isko hm function ke bhr use nhi kr skte according to ES6 {let variable}
        
        // y("Ankur");


        // -----------------------------------  with parameter & return.

        //  function greet(name) {
            //     return "Hello bhai" + " " + name;
            //     console.log("Something Somthing")  // return ke baad mai kuch vi ho nhi chalega.
            //  }
            
            //  let a = greet("Ankur")
            //  console.log(a)
            


    // -----------------------------------  as a default value.
    
    // function greet2(name="Guest"){
        //     console.log("wlcm " + name + " in our website")
        // }
        
        // greet2(); // output : wlcm Guest in our website.
        // greet2("ANkur")  // output : wlcm ANkur in our website.
        
        
        // ----------------------------------- Types of functions.

        // normal function.

        // function sum (a, b){
        //     return a + b;
        // }

        // function stored in variable.

        // let z = function (a, b){
        //     return a + b;
        // }

        // let aa = sum(4, 6)
        // let bb = z(6,7)
        // console.log(aa, bb)

        /*
         jb hme function ko variable mai store hi karana hai to to 
         
       let a =  funtion  {
        // some code here  
        }

        itna bada expression likhne ki jrurat nhi hai hm direct ye arrow funtion use kr skte hai 

       let b =  () => {
            // some code here 
         }

        */

        /*  lekin ek baat yaad rakhna ye arrow function ko variables mai store karana hi padega bina variable ke store karaye hm isse use nhi kr skte hai jaise 
        alpha () => { 

            // ese hm use hi nhi kr skte hai.

            }

            lekin high order function mai ye arrow function ka naam nhi hota hai jo ki hai setTimeout jo niche hai uske details.

            */

    //     let rr = () => {
    //         console.log("Arrow function write this type");
    //     }

    //    rr()

    // Anonymous function - jiska koi function name nhi hota hai

    // { setTimeOut function high order function mtlb settimeout ek function hai high order or iska ander wale  function ka naam nhi hota hai kykui vo ander function jo hai vo call hota hai with the help of setTimeOut function } .
   
    // setTimeout function doo (two) chizein leta hai phla function jiska koi naam nhi hai or dusra time leta hai.

    // setTimeout(()=>{
    //     console.log("Hello bhai ")
    // }, 2000)



    // setTimeout(function () {
    //     console.log("Hello from normal function ")
    // }, 3000);

    // agr mai setTimeout function ke ander wala function ko naam de vi du tabh vi vo out of the setTimeout function kaam hi nhi krega to koi fyda vi nhi hai isme name dena function ko.


    // let func = () => {
    //     console.log("hello from outside function from setTimeout")
    // }

    // setTimeout( func, 4000 )   // hme sirf yha pr function ka referance dena hai call function ko setTimeout khud hi kr lega 

    // Reference ka mtlb sirf usse bheja hai pass kra hai usme baaki agr kam karana hua to func() ko call karate hai ab smjhte hai Reference kyu pass kra hai hmne yha pr kyuki jb kabhi vi hm function ko variable mai store karate hai tabh tbh usse memory address mai store karate hai function ko variable ke ander jo hai to isliye hi hm usse function ka reference bhejte hai kykui wahi pr hamra function store hai isliye 


    // Immediately invoked function expression[IIFE].
    // isme hm doo(two) paranthesis use krte hai phle () ke ander function likhte hai or dusre ke ander () kuch nhi ye call krne ke liye use hota hai.
    // or ek baat agr iske upper koi vi code hai to usme hme terimnater lagana hi hai or uske IIFE function ke dusre () ke baad vi terminator lagana padta hai jaise ()();

    // (function () {
    //     console.log("Hello from IIFE function")
    // })();

    // iska usecase hai jb hme kuch km async await mai krna hai react mai useEffect mai tbh hm async await sirf function mai hi apply kr skte hai isliye useEffect ke ander jb vi koi async await function use krna hai to uske ander IIFE ka use krna padta hai kyuki async await function mai hi apply hota hai.



    // question 1

    // function capitalizeFirstLetter(str) {
    //     console.log(str.charAt().toUpperCase() + str.slice(1))
    // }

    // capitalizeFirstLetter("ankur")


    // question 2

//    let calculateDiscountedPrice = (price, discount) => {
//       let discountedPrice = price - price*(discount/100);
//       return discountedPrice
//    }

//    let a = calculateDiscountedPrice(100, 30)
//    console.log(a)


    // question 3

    // function generateUsername (fullName) {
    //     return "@" + fullName.trim().replace(" ", "") + fullName.length;
    // }

    // console.log(generateUsername("Ankur sharma"))
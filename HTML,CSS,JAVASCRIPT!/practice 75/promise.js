/*
JavaScript mai promise ek "Vaada" hota hai jaise Naam se hi pta chl rah hai - 
Jab koi km asynchronous(Jo time leta hai) hota hai , Jaise:
1) Server se Data Lana
2) File Read krna
3) Timer Set KRna
 Toh Promise Use hota hai uska Result Handle krne mai.
 
 Define:-
 Promise ek object hota hai jo btata hai future hone wale km ko ki hoga ya ni mtlb vo future mai jo km hoga vo success hoga hai failure tk jyga
 promise ek asynchronous operation ka result future mein dene wala object hai, jo callback hell se bachata hai or code ko readable banata hai.
 promise se hm API call , file upload ya asynchronous kaam krte hai .

 Real Life Example -:
 Soch Tune Pizza Order kiya Swiggy Bole: "15 mint mai deliver hoga - Promise!"

 To: 
 . Agr pizza time pe aaya --> Resolved 
 . Agr pizza nhi aaya --> Rejected
*/




/*
console.log('This is the promises');
let prom1 = new Promise((reslove, rejects)=>{
    setTimeout(() => {
        console.log("Yes I am done");
        reslove("AnkUr")
    }, 3000);
})

prom1.then((a)=>{
    console.log(a)
})
    */

const meraPromise = new                                      // Ek async kaam ka promise banata hai.
    Promise(function (resolve, reject) {
        //Yahan async kaam hoga (e.g., API call , timeout)
            let kaamHoGay = true;

            if (kaamHoGay) {
                resolve("Kaam ho Gaya!!")
            }

            else {
                reject("Kaam fail ho gya!!")
            }
    });


    let prom1 = new Promise((resolve , reject) => {
        let a = Math.random();
        if(a < 0.5) {
            reject("No random number was not supporting you!")
        }
        else{
            setTimeout(() => {
                console.log("Yes I am DoNe!")
                resolve("Random Number Was Supporting YOu!")
            }, 2000);
        }
    })


    let prom2 = new Promise((resolve , reject) => {
        let a = Math.random();
        if(a < 0.5) {
            reject("No random number was not supporting you 2!")
        }
        else{
            setTimeout(() => {
                console.log("Yes I am DoNe 2!")
                resolve("Random Number Was Supporting YOu 2!")
            }, 1000);
        }
    })



/*
// Yeh Sirf meraPromise ke liye Hai
meraPromise
.then(function(SuccessMessage){
    console.log("Sucess:" , SuccessMessage ); // agar resolve hua.
})
.catch(function(errorMessage){
    console.log("Error:" , errorMessage );  // agar reject hua.
});
*/


let p3 = Promise.allSettled([prom1 , prom2])
p3.then((a)=>{
    console.log(a)
})
.catch((err)=>{
    console.log(err)
})


/*
Resolve or settled hone mai differnce hai
Resolve hone ka mtlb hai ki hme ek value milni chiye bina kissi erroR ke oR Settled Hone ka mtlb hai ki Hme pura satuts dikho chahe vo kitne vi promises bn rhi ho fir uske baad saare promises ka stuts Dikhao chahe vo reject hui ho ya fir Resolve.  
*/

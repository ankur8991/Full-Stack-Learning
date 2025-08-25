// settle means resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully



/*
 function getData() {                                   
    return new Promise((resolve , reject)=>{             
        setTimeout(() => {
            resolve(404)
        }, 3500);
    })
}
*/

/*
console.log("Loading modules")
console.log("Do Something Else")
console.log("Load Data")          // Hm yah pr ye chahate hai ki Process data hone se phle data load ho.
let data =  getData()            // Isliye hmne getData() ka use kiya hai kyuki data ko load hone mai thoda time to lgega hi isliye hm promise 
                                  // yah pr promise ka use krte hai Taki promise hme data respone krke de or hm wah se data lete rhe or data futher process hota rhe.
console.log(data)
console.log("Process Data")
console.log("Task 2")
*/

/*  Second Approach with .then() promise.
or agr mujhe ye niche ke further km jo hai vo baad mai hi krane ho mtlb data load hone ke baad hi saaara niche ka km ya fir sara code line jo hme likhi hai load data hone se phle, load data ke baad ki chale jb data aajye server se ya fir simulate(ka mtlb hota hai koi vi chiz actual mai nhi hori h bss uska jaise drama keh skte hai ya fir naatak keh skte hai) krke chle to hm promise ke .then() ki madadt se kr skte hai kyuki data ek promise hai  mtlb data jb aajye tbh yeh km krdo.

 function getData() {                               
    return new Promise((resolve , reject)=>{             
        setTimeout(() => {
            resolve(404)
        }, 3500);
    })
}
*/

// console.log("loading modules")
// console.log("Do something Else")
// console.log("Load Data")
// let data = getData()

// data.then((v)=>{
//     console.log(data)
//     console.log("process data")
//     console.log("Task 2")
// })


//Approach with await sync function. 
/*
async function getData() {
    return new Promise((resolve, rejet) => {
        setTimeout(() => {
            resolve(466)
        }, 4000);
    })
}

// We can Mostly Use await with in async function that's way we can call wrap the whole code of lines in async function but some other cases we can also we use without async function.
async function main() {
    console.log("Loading Modules")
    console.log("Do Something else")
    console.log("Load Data")

    let dataForSync = await getData()   // We can write await because of we not be more to run this getData() function run in background and their further code's of line run concurrently our approach to write the await keyword is the attached getData() function with await run totally then further lines of code can be executed not the same time and not more the background run of the await function. 

    console.log(dataForSync)
    console.log("process Data")
    console.log("Task 2")
}

main()
*/

// Third Approach with Fetch API await
async function getData() {
    //Simulate getting data from a server.
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // yeh ek promise return krta hai toh isko wait  krane ke liye await lagaya hai. yeh promise data to lane ki hai
   
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

     let data = await x.json()   // yeh vi ek promise return krta hai yah pr data ko load kra jata hai.
     console.log(data)          // x.json() ka mtlb hai ki vo data javascript object ki trh data provide krta hai or agr x.text() likhte hai to vo hme text ki form mai data provide krta hai.

}

async function main() {
    console.log("Loading Modules")
    console.log("Do Something else")
    console.log("Load Data")
    let dataForSyncFetchAPI = await getData() 
    console.log(dataForSyncFetchAPI)
    console.log("process Data")
    console.log("Task 2")
}

main()



/*
hmne ek async function bnaya hai main() usme hmne jo sab console.log() krke sare lines codes ki ek ke baad ek chalegai or jb hme dusre function se data ko bulaya we can wriiten also async function getData() wah se let dataForSyncFetchAPI = await getData() jo hmne main() function mai yeh line likhi hai yeh chalegai data ko wait krygai kyuki data ko ane mi time lagta hai bhai toh uss promise ka wait krna pdega or yeh jo getData() async function hai yeh vi overall ek promise rturn krta hai   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')   or line ka mtlb hai ki data network se aya or uska wait karan tha kyuki data chukns ke forms mai ata hai isliye await krakr uska wait kraya tha kyuki data ko network se lane mai time lgta hai isliye or  let data = await x.json() or iss line ka mtlb hai ki data chunks mai ayega or data x.json() mai ek javascript object style mai show krega kyuki data network se fetch krne se chunks ki forms mai ata hai isliye usko object mai convert krne ke liye hmne isss line ka use kiya with await keyword kyuki time lgta hai data network se aya hai or  usko objec mai convert krne ke liye time chiye kuch isliye[raw data jo network se aya hai vo x.json() mai pss hoga].
*/ 

/*
Get Request: purpose -> Data lena( server se )
server se kuch fetch krna.
Example: Jab hm URL mai kuch vi dalte hai mtlb kuch chiz search krte hai tab ,GET request jati hai 

POST Request: purpose -> Naya data bhejna( server pr create krna )
server pe kuch naya add krna
Example: Jab form fill submit krte  hai (signup/login),tab POST request jati hai 

PUT Request: purpose -> Pura data update krna ho tbh 
Jo cheez hai, usko completely replace krna
Example: Jb hm User ka naam, photo, sab update kr rhe hai - puri profile

PATCH Request: purpose -> Thoda sa data update krna ho tbh 
Jb sirf ek part update krna ho(jaise naam ya email hi badalna ho)
Example: Jb hm User ka sirf naam update kr rhe ho

DELETE Request: purpose -> Data delete krna 
Jb server se koi cheez hata dena 
Example: Jb hm kisi product ko cart se hata rhe ho

OPTIONS Request: purpose -> Server se poochana ki yeh request allowed hai ya nhi
Pre-Check hota hai - browser krta hai yeh automatically(CORS ke time)
Example: Jb hm kisi aur ke domain pr request bhejte hai , browser phele OPTIONS request bhej kr check krta hai ki allowed hai y nhi.

. In sab requests ko fetch,axios,ya Postman se test kr skte ho
. har request ke sath headers aur body bhejna jruri hai(POST,PUT,PATCH,DELETE ...ETC)

*/
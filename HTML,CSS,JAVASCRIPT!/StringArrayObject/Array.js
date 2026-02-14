// Array mai hm bhut sare variable ek array mai store kra skte hai hme alg alg variable mai store karana ki jrurart nhi hai.
// yha javascript mai hm item add or delete kr skte hai yha js mai array dynamic in nature hai.
// Array hmara reference type hai mtlb ye copy nhi krta hai string  ki trha values ko ye same memory location ko hi point krta hai isliye array mai actual original value change hoti hai agr hm usme kuch vi kre string ki tarha copy bnkr nhi hoti hai.
// stack memeory mai reference save hota hai hmare array ka jo vi heap memory mai save hai hmara array, hmara array heap memory mai save hua hai jo vi hm banate hai or uska reference hme chiye hota hai uss array ko use krne ke liye to vo stack memory mai save hota hai uska reference.
// yha pr hm ek hi array mai different - different data type wale varibale sotre kra skte hai jaise string , number etc ek hi array ke ander Lekin ye km c, c++ mai nhi hota hai yha pr hi hota hai.
// Create array using Literal method, let personDetails = ["Ankur", 20, "Nangla"]
// Create array using constructor, let arr = new Array("spiderman", "ironman", "thor") oR ye constructor array mostly isliye use krte hai jb hme empty array banana hota hai.
// type of an Array is not a array it is "object".
/*
let personDetails = ["Ankur", 20, "Nangla"]
console.log(personDetails)

let arr1 = ["Ankur", 23, "CWA", [2,4,5] ]   // hm yha pr array ke ander ander ko vi daal skte hai.
console.log(arr1)

let arr = new Array("spiderman", "ironman", "chotabheem", 598)
console.log(arr)


let normalarr = [20]  // yha pr hm normal array bna rhe h or usme character present hai 20.
let constrarr = new Array(20).fill(100)  // Lekin jb vi hm constructor array se array banate hai to yha pr 20 ka mtlb hai hmare array mai 20 empty items present hai mtlb iss array ki length hmari 20 hai or empty hai bss or baad mai hme isse bharna hai 20 items ko ya fir nhi ye hmpr depend krta hai.
console.log(normalarr) 
console.log(constrarr) 
console.log(typeof normalarr)  // ye array ka typeof array nhi hai iska type of 'object' hai ye ek special type of object hai.
*/


// Array are Mutable mtlb array ko hm change kr skte hai orginal wale ko lekin string mai esa nhi hota hai usme hme original string ko change nhi kr pate hai.
// Array Indexing, positive index ke ander 0 se start hota hai starting se or 6,7.. tk jata hai jha tk hmara array hai or negative indexing ke ander -1, -2, -3, -4.. ese jata hai pr last of the array se.
/*
let arr = [1,2,3,4,5]
console.log(arr[0])
console.log(arr[1])   // arr of 1 index pr '2' value h lekin hm isko change karengai.
console.log(arr[2])

 arr[1] = 201
console.log(arr)   // isliye kehte hai array are mutable Lekin kuch method's ese h ki hmare original array ko change nhi krte h new array bana kr dete h lekin kuch methods ese h jo original array ko hi change kr dete hai vo ye hai.
*/

// Loops in array
/*
let arr = [1,2,3,4,5]

//normal for-loop
for(i=0; i<arr.length; i++){    // yha pr hmne arr.length ko chota rakha hai arr se kyuki index 0 se 4 tk hi rahega isliye hmne <= nhi lagaya hai ek km tk jana hai isliye = nhi lagaya usse ek choti value tk chalaya hai.
    console.log(arr[i])
}

// console.log(arr)  // isse vi hamara array print krega lekin agr hme kuch operation lagana hai ek ek value pr jo hmare array mai present hai tbh ye km nhi krega.

//for-of loop
for(let element of arr){    // ye jo element hai vo array ka hai.
    console.log(element)   // hme yha pr index dene ka km hi nhi hai to hme ese pss krne ki need hi nhi hai 'arr[i]' krke isliye hm yha pr normal element likh dengai.
}


// for-in loop
for(let index in arr) {    // ye loop hme index ke sath sath value vi deta hai ye hme index de rha hai arr m se.
    console.log(index)   
}
*/



// Array Methods
/*
=========================================================
ARRAY METHODS - MUTATION TABLE (Practice Reference)
=========================================================

Method      | Changes Original? | Returns                     | What It Does
------------|------------------|----------------------------|-----------------------------
push()      | Yes              | New length                 | Add item at end
pop()       | Yes              | Removed last item          | Remove item from end
unshift()   | Yes              | New length                 | Add item at start
shift()     | Yes              | Removed first item         | Remove item from start
splice()    | Yes              | Array of removed items     | Add / Remove / Replace items
reverse()   | Yes              | Reversed array             | Reverse order of array
sort()      | Yes              | Sorted array               | Sort elements

slice()     | No               | New array (portion)        | Copy part of array
concat()    | No               | New combined array         | Merge arrays
join()      | No               | String                     | Join elements into string
toString()  | No               | String                     | Convert array to string
includes()  | No               | true / false               | Check if value exists
indexOf()   | No               | Index or -1                | Find index of value
find()      | No               | First matched element      | Return first matching item
flat()      | No               | New flattened array        | Flatten nested arrays

=========================================================
NOTE:
- "Yes"  = Mutating Method (original array change karega)
- "No"   = Non-Mutating Method (original array safe rahega)
=========================================================
*/
/*
let arr = [2, 4, "CWA", 5, 8]
console.log(arr, arr.length)  // yha hme alg se vaiable m store karane ki jrurt nhi hai array ko length dekhne k liye.
let a = arr.push(2345)   // ye original array m change krta hai or sath ke  sath length of array vi return krta hai or hmne ye dekhne ke liye isse variable a m store kra ki ye return kya krta h.
console.log(a, arr)   // to hmne dekha ki ye array ki length return kr raha hai after pushing the value of a.


let b = arr.pop()     // push or pop end of array ki item pr km krta hai mtlb push krengai to last of array mai or pop krega to vi last array m.
console.log(arr, b)   // or ye return krta hai vo element jo isme pop kra hai, ye push ki tarah array ki length return krta hai.

//  shift or unshift ki performance km hoti hai as compare to push or pop methods.
arr.unshift(45445)    // ye push end of array se value add krta tha array m lekin ye unshift jo hai vo array mai starting se new item add krta hai.
console.log(arr)

arr.shift()            // ye pop ki tarah last se value nhi nikalta hai ye starting se item ko hatata hai.
console.log(arr)
*/


// splice() or slice()

// slice()
/*
let arr = [ 1, 2, 4, 5, 6, "CWA" ]

// arr.slice(1,3)   // ye hme 1 se 2 index tak cut krke dega hme array ki values ko jo hmne 3 likha hai vo nhi dega kyuki last wala index include nhi hota hai, or hme pta hai ye slice method negative index vi leta hai.
// console.log(arr)   // ye original array mai koi change nhi hua hai isse hme ye pta chalta hai ki slice() method hme original array mai change krke nhi deta hai direct vo hme copy bna kr deta hai new array change krke.

let newArr = arr.slice(1,3 )  // ye slice() method hme original array mai change krke nhi deta hai ye uss orginal array ka copy banakr usme change krke deta hai new array isliye hmne ek new variable banaya hai copy ko recieve krne ke liye.
console.log(newArr)

// splice() method
let tstrtrunval = arr.splice(1, 2, 235, 568, 568, 457)  // yha pr ye slice method direct original array mai change krta hai or ye splice(phla index , dusra index, third items) phla index vo index hota hai jo hme bta ta hai konsa index se hme elements delete krne hai or dusra index hme btata hai ki khatak delete krne hai mtlb kitne items aage ke delete krne hai ye btata hai hme dusra index or ek or important baat iska slice ki tarah kuch km nhi hai ye alg hai bilkul slice se kyuki ye dusra index jo hme btata hai kitne items delete krne hai vo last wala vi include hota hai jaise mai nai yha pr dala phla index 1 to ye 1 index se start krega or dusra index diya mai nai 2 jo hme btata hai kitne items delete krne hai 1 index se to hmne 2 diye iska mltb ye 2 items delete kr dega 1 index se or isme dusra item vi include hoga slice ki taraha nhi hai jo end ka ek item chod de baki ye slice() method se bilkul hi alg hai or jo third items hai wha pr hme kuch new items add kr skte hai ussi index pr jha pr hmne phla index pr jo value di thi wha pr hi ye value ko add kr dega chahe vo bich ka index ho ya fir starting or ending index's ho.
// ye return krta hai vo delete wali values ko jo isne vo phle wale index se dusra index ke jitne vi items hai utne ye delete kr deta hai vo hi ye retrun krta hai.
console.log(arr)
console.log(tstrtrunval)
*/

// concat() or spread operator 
/*
let arr = [1, 3, 6, 7, 8, 9]
let arr2 = [ "CWA", "ANKUR", "SHARMA" ]
let arr3 = [ 'true', 'false' ]

// ADD these three array by concat() method or concat vi new array return krke deta hai original array mai kuch direct changeses nhi krta hai isliye usscopy newarray ki hme ek variable mai store karani padti hai.
let newArr = arr.concat(arr2, arr3)
console.log(newArr)

// ADD these three array by using spread operator
let neWarr = [...arr, ...arr2, ...arr3]
console.log(neWarr)
*/

// JOIN() method ye vi hamre original array mai change nhi krta hai copybana kr return krta vo hi array or ye join() method string type ka vo hi same array retrun krta hai hm join() ke ander parameter pass krte hai jaise &, AND to ye hmare orginal array ko string type ka return krta hai jo hm () ke ander dete hai uske saath hi vo hme value string mai return krke deta hai.
/*
let fruits = [ "Mango", "Orange", "litchi" ]
let rturntstchck = fruits.join(" AND ")
console.log(rturntstchck)

// includes() method ye vi same baki ki tarah orignial array mai return nhi krta hai ye vi copy return krke deta hai hmre array mai se.
let bool = fruits.includes("mango")  // ye array mai se subarray ko check krta hai na ki ek charcter jo hmre subarray mai present hai or vo subarray array mai present hai.
console.log(bool)
*/

// toString() method hamare array ko string m convert krke deta hai bss join() method ki tarah ye hm ye nhi btataa ki kis tarike ye bases pr join krna hai or ye vi original array mai change nhi krta hai ye vi hme copy bana kr deta hai uss array ki hi retrun krta hai or string type ka return krta hai to uss copy ko accept krne ke liye hme ek new variable banana pdta hai.

// let fruits = [ "Mango", "Orange", "litchi" ]

// let str = fruits.toString()
// console.log(str)

// indexOf() method jo hme array mai present item ka index retrun krta hai oR agr hmne yha pr spelling mistake krdi to vo hme jo item ka index search kr rahe hai uska to vo hme -1 retrun krega jo btata hai ki ye item tumare array mai present hi nhi hai. 
// console.log(fruits.indexOf("Mango"))

// find() or flat() method   find() method hamre original array mai change nhi krta hai isliye ye copy return krta hai or vo copy ko recive krne ke liye ek new varibale bana padega or find ek ek iterate krke find krta hai items ko or ye find () ek funtion leta hia direct pass nhi krte hai jo hme find krna hai vo item hme ek function banakr pass krna padega.
/*
let test = fruits.find((item)=> {
    console.log(item)   // yeh hme ek ek krke value iterate krke deta hai values hme.
    // return item === "Mango"  // hme retrun karana bhut jruri hai kykui ye nhi to undefined dega output hme 
})
console.log(test)
*/

// flat() method hmara km krta hai array ke ander array jo hai usse ek hi array mai convert krne hai or kis level tk convert krna hai vo vi hme ye btata hai jaise 1 dengai to array ke ander agr ek or array hai to vo usko ek hi array mai flat kr dega ese hi same agr bhut sare array ek ke andar ek hai to vo usse vi infinity pass krna pdega hme bss.

/*
let heroes = ["spiderman", ["hulk", "chota bheem", "ANkur", ["shree krishna"] ] , "thor"]
console.log(heroes.flat(Infinity))
*/


// sort() method in Array , It works on Tim sort under the hood. (combination of merge sort anf insertion sort), By default, sort() converts elements to strings and sorts them alphabetically (Unicode order) or Lexicographically order.
/*
let arr = [ 10, 5, 1, 20]
arr.sort()   // ye avi as a number sort nhi kr raha hai values ko kyuki ye avi isko as a string treat kr raha jisse hamara array sort nhi milega ye string alphabates ke according krega.
console.log(arr)  // isliye hme yha pr avi excepted array sort hua nhi milega kykui ye numbers avi string ke bases pr sort ho raha hai.

let heroes = ['spiderman', 'ironman', 'hulk', 'thor', 'hawkeye', 'wanda', 'ankur']
heroes.sort()  // yha pr ye shi sort krega kyuki ye string already hai to alphabates ke according hi krega sort ye jo ki shi kr raha hai.
console.log(heroes)
*/

// to array ko shi se sort karane ke liye hme uske andar function use krna padhta hai.
// Ascending order a - b, or Desending order b - a : kese km krta hai ye phle a or b value decide krta hai fir consecutively ye sabhi array ki value ko a-b krta hai fir agr a-b ki value agr positive aii to ye swap kr deta hai values ko fir next values ko ye a-b ka result negative ata hai to ye swap nhi krega same hi rahega isko hi ye km tabh tk hota rahega jb tk pura sort n ho jye array hamara.  
/*
arr.sort((a, b)=>{
    // console.log(a, b)
    return a - b        // Ascending order mai sort karane ke liye retrun krte hai a-b.
})

console.log(arr)

arr.sort((a, b)=>{
    // console.log(a , b)
   return b - a              // desending order mai sort karane ke liye hm b - a krte hai.
})

console.log(arr)
*/



// Array iteration methods or Functional array methods.
// map() method ye method ek high order function hai, mtlb high order function ak mtlb hota hai ek funtion uske andar ek or function bina kisi naam ka kyuki uske uper wale function se call hoga vo na ki uss andar wale se oro ye map function k andar ek or function jo hai vo thinn cheezein leta hai phla element, dusra index, thisra array actual jisme map lagana hai map((element, index, arr)=>{ }) element vo array ke sare item jisme hm map laga rahe hai.
/*
let arr = [1, 2, 3, 4, 5]

let newArr = arr.map((element, index, arr)=> {     // element mai arr ke saare items jo vi hai vo ek ek krke ye display kr dega or index mai uske sare index's print kr dega {0,1,2,3,4...etc} last arr hmara actual array jisme hmne map lagaya hai.
    console.log(element, index, arr)
    return element*2
})

console.log("original array : ", arr);   // ye original array mai change nhi krta hai ye vi same copy bana kr retrun krta hai new updated array jo hm karaya hai updated vo isliye hme phle ek new varialbe mai sotre karana padega.
console.log("updated copy array :", newArr)
*/

// forEach() loop function, ye same HOF(high order function) hai or ye andar wale function mai thin cheezein leta h phla , elem , index , arr same map ki tarah hi lekin alg vi hai map se kyuki ye na to original array mai change krega or na hi newArray retrun krega iska sirf itna km hai ki elemnt mai kuch km kara or usse console display kr diya bss itna hi.
/*
let arr2 = [ 2, 5, 6, 7, 8]

arr2.forEach((elem, index)=> {
    // console.log(elem**2)
    arr2[index] = elem*2      // ye hmne manullay value assign kre hai jisse hmara ab original array change hogya hoga.
})

console.log("original array in ForEach :", arr2);
*/


// Filter() function vi HOF ye vi high order function hai mtlb ye vi ek function leta hai apne andar jaise map() apne andar ek function le raha hai or ek value modify hui andar wale function ke madadt se or map bhar wala ek ek valuue uss andar wale funciton ko provide krraha hai or andar wala function usse modify krke de raha hai bar bar vaise hi filter bahar wala filter krke de raha hai or uske andar wale function mai logic likha hua hoga or uss logic ke according vo filter krke de dega bar bar or jo values milegai vo new Array m miljyegai.
/*
let arr = [1, 4, 5, 7, 8, 9]
let filterArr =  arr.filter((elem, index, arr)=>{
//   console.log(elem, index , arr)          // ye vi same values de raha hai map function ki tarah.
       return elem % 2 === 0         // ye change jo filter krwa rahe hai hm vo new array m milega purane array mai nhi milega.
    //    return elem*2         // ye values ko true or flase bases pr retrun krta hai compare krke array m se new update kuch vi nhi krega ye.
})

console.log(arr)
console.log(filterArr)
*/


// reduce() function single value mai evalute hota hai , mtlb ye iterate to pure array pr krta hai lekin jb output deta hai to vo single digit mai deta hai jaise maan lo hmara array h kuch esa let arr = [1, 2, 3, 4, 5] to isme jb hm reduce method lagaenagi to vo reduce function ek HOF hai uske vo vi andar ek function le raha hai or uss function ke ander doo values, parameter leta hai vo ek prevValue, reduce((prevvaalue, currentvalue)=> { return prevvalue + currentvalue }) or ek CurrentValue hm yha pr prevvlaue initial state pr 1 hogi or currentvalue uske aage wali 2  next time prev+current ko add krke 3 result ayega vo ab fir se prevvalue ki value update hokr 3 hojyegai or uske baad currentvalue 3 hojeygai same ese hi ye loop mai km krta rahega .
/*
let arr = [1, 2, 3, 4, 5, 6]

let result = arr.reduce((prevVal, currVal)=>{
   return prevVal + currVal             // last mai previous value mai output mil raha hoga.
}, 10)       // ye ab hmare array mai pervVal start hogi 10 se or currVal set hojyegai hmare array mai 1 agr hm nhi dete yha pr manully to  prevVal to hmare array ke according prevVal 1 set or currVal 2 hojyegai initially ab hmne de diya hai to hmri prevVal initially set hogi 10 or currentValue 1  to vo hi add hota rehega hmre prevVal mai result prevVal or currVal ka result bar bar end tk jb tk hmara array khtm n hojye.

console.log(result)
*/


// Questions on array 

// Question 1
/*
let arr = [44, 55, 66]

let sumResult = arr.reduce((prevVal, currVal)=>{
        return prevVal + currVal
})

let averageMarks = sumResult/arr.length

console.log(`SumOfMarks = ${sumResult}`)
console.log(`AverageMarks = ${averageMarks}`)
*/


// Question 2
/*
// let n = prompt("user can give numer of n value for they can accroding fill array with 0")  // agr yha p sirf prompt() use hua hai to vo string pass krta hai n ki number isliye hme yha pr parseInt(prompt(...)) ko cover krna padega ya fir Number(prompt(...)) Number se 
let n = Number(prompt("user can give numer of n value for they can accroding fill array with 0"))
let arr = new Array(n).fill(0)
console.log(arr)
*/


// Question 3
/*
let n = Number(prompt("user can give numer of n value for they can accroding fill array with 0"))
let arr = new Array(n).fill(0)
arr.forEach((item, index)=>{        // (item , index) ab yha pr index ki jagah mai kuch vi naam de du pr milega to item hi yha pr index ki jagah mai kuch vi likh du lekin milega to index hi isliye positon bhut matter krta hai isme ki phla parameter item dega or coma(,) ke baad wala index hi dega hme.
    arr[index] = index+1              // arr[index] se hm value access kr rahe hai array ki position sari ki sari uss pr hmne index dediya koki 0 se start hoti hai Lekin hme naturall number print karane hai isliye index+1 se karana hai.
})
console.log(arr)
*/

// Question 4
/*
let arr = ["ironman", "captain", "black widow", "wanda", "hulk", "black panther"]

arr.push("spiderman")
arr.unshift("thor")
console.log(arr)      // ye push or unshift hmare oirginal array mai change krta hai.

arr.splice(3, 1, "hawkeye")
console.log(arr)

console.log(arr.includes("captain"))
*/

// Question 5
/*
let test = [1,2];
console.log(Array.isArray(test))     // ye Array ek class & object ka array hai or isArray btata hai check krta hai ki ye array array hai ya nhi jo hmne pass kra hai usme.

// agr mujhe kisi datatype ko array banana ho to kese krengai or ye baat sirf hm string ko hi array mai convert kr skte na hi hm number or na hi hm object ko Array mai convert krva skte hai, or Agr hm object ko array mai convert kre to vo hme khali array dega [] chahe kuch vi ho object ke andar.
let test1 = "CWA"
console.log(Array.from(test1))  // Ab ye array bn jyega hmara jo test1 variable string present h vo or ye multiple items(variables) ko array mai convert nhi krta hai.
*/



// Question 6
/*
let a = 1
let b = "Ankur is best in EveryThings"
let c = {
    name: "ankur",
    city: "noida"
}
let d = [1, 2, 3, 4]

// convert all these upper different - differnet datatypes into array using Array.of() method where we can see in upper case Array.from() Fails in that case.
console.log(Array.of(a, b, c, d))
*/

// Question 7
/*
let str = "Hello"
let str2 = Array.from(str).reverse().join("")  // string ko reverse krna hai pr reverse() method to sirf array pr hi km krta hai isliye phle isko array mai convert kra with the help of Array.from() se fir usse reverse kr diya to ye kuch alg alg words mai reverse hua tha isliye isko join kr diya with the bases of "" using join("") this  method.
console.log(str2)
*/


// Question 7 - B
/*
let str3 = 'OLLO'
let revStr = str3.split("").reverse().join("")
if(str3 === revStr){
    console.log("Plaindrome string")
} else{
    console.log("Not a Palinfrome string")
}
*/


// Question 8
/*
let str = "hello how are you"
let newArr = str.split(" ").map((elem) => {
     return elem.charAt(0).toUpperCase() + elem.slice(1)
})
console.log(newArr.join(" "))            // sirf console.log(newArr) krne se hmara newArr array ke bases pr print ho raha hoga ab agr mujhe isse string ke bases pr dekhana hai to mujhe isse join krna padega " " iss bases pr.
*/
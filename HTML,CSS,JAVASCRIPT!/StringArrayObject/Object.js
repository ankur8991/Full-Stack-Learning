// Object mai values key value pair mai store hota hai jaise for example : let obj = { name: "Ankur", city: "Noida"} too isme "name", "city" key hogya or vlaues mai "Ankur" or "Noida" hogya issi bases pr hmara object store hota hai or same array mai vi key value mai store hota hai pr hme pta nhi chalta hai ke kry value mai hamara array sotre hora hai pura ka pura for Example : let arr = [1, 2, 3, 4] to isme jo array ke andar vlaues hai 1, 2, 3, 4 vo to values hai Lekin jo keys h vo index's hai jiase iss case mai 0, 1, 2, 3 tk hi hai.
// Object m koi length naam ka property nhi hota hai jaise string or array mai hota tha vese yha object mai nhi hota h length naam ki property jo find krke de hme length of object hm bna skte h lekin javascript m inbuilt nhi hoti hai esi koi property.
// "object are mutable" mtlb hm direct object mai changes kr skte hai uske predefined methods ki madadt se lekin string mai hm dekh rahe the ki direct changes nhi kr pa rahe the array m vi kuch condition mai hm direct changes nhi kr pa rahe the uske direct original array mai lekin object ko hm change kr skte hai isliy isko hm khete hai object are mutable.
/*
 let obj = {
    name : "sanorita",
    age: 19,
    isMarried: false
}

console.log(obj)
*/

// create object using literals methods.
/*
let car = {
    brand: "mercedes",            // yha pr brand, color, maxSpeed properties define kr rahe hai object ke isliye isko properties kehte hai jo hme sirf kuch n kuch information deta h kuch km nhi krke de raha h.
    color: "black-grey",
    maxSpeed: "220kmph",
    "full name": "Ankur sharma",   // agr hm full name ke bich mai space denagai to dusre wale tarike se hi hme console ya print karana hoga phle wala tarike yha pr fail hojyega jo tha console.log(car.full name)❌ shi ye hoga console.log(["full name"])✅
    stop: ()=>{                       // ye methods kehte hai function ke format m jo likha hai actually ye function hi hota hai pr ye sirf object ke andar ka kaam kr raha h mtlb object ke liye ye bana hai ye sirf vese hi map function jo h vo sirf array pr work krta hai isliy eusse vi hm method hi khaenagi jo kisi particular array, object or string pr km kre usse hm methods khete hai, jaise toupperCase() method ye vi sirf string pr hi km krta hai isliye ye vi method hi kehte hai hm sirf.
        console.log("stopped the car")
        return "aram se break lagaye Mhange tyre h"
    },
    start: function(){                    // isko hm behaviors / methods keh skte hai.
        console.log("started the car")
        return "button click krte hi start hoti hai car"
    }
}

let testforbraketnotation = "full name"   // isko vi hme access krne or console ya print karane ke liye bracket notation ka hi use krna padega hme.

// console.log(car)
// console.log(car.brand)  // iska dot notation kehte hai.
// console.log(car.color)
// console.log(car.maxSpeed)
// console.log(car.stop())        // function ko console tbh krte hai jb function kuch retrun krta hai bina return kre km console krengai to vo hme undefiend krega.
// console.log(car.start())

// ek or tarika hai properties or methods access krne ka object kee andar jo presents hai unhee, isko bracket notation kehte hai.
console.log(car["brand"])
console.log(car["color"])
console.log(car["maxSpeed"])
console.log(car["stop"]())
console.log(car["start"]())
console.log(car["full name"]) 
console.log(car[testforbraketnotation])  // yha pr variable pss ke liye ye wala hi use krna padega. 

let obj = {
    "*" : "Ankur"
}

console.log(obj["*"])   // ye bracket notation se hi access hoga kyuki yhe ek special character mai store ho raha hai isliye hmne jb * : "ankur" mai store karane ki kosis kri to error aa gya lekin jaise hi hme islie "*": "Ankur" mai wrap kra vese hi ye error chala gya.

*/


// object create by Object constructor : let obj = new Object() 
/*
let obj = new Object({
    name: "Ankur",
    city: "Noida"
})

obj.age = 20   // ye add kara hai apne object mai jo bana hai constructor ki madadt se.

console.log(obj)
*/


// Some operations on object
/*
let obj = {
    name: "Ankur",
    age: 20
}

obj.name = "CodeWithAnkur"     // ye update direct object mai hogya mtlb hmare original object mai direct change hogya name.
obj.city = "Noida"  // ye hmare object mai exsists nhi krta hai isliye ye new value key ke pair mai new banjyega.

delete obj.city   // yha pr hamri city original object se delete hojygai.

console.log(obj)
*/


// object this keyword operation.
/*
let obj = {
    name: "chaddy",
    greet: function(){
        console.log(`Hello I Am ${this.name}`)         // Agr hm `Hello I Am ${name}` use krte hai name variable ko object m jo sirf avi define hai r hm uss variable ko access krne ki kosis kr rahe hai object ke greet() function jisse hm method kehte hai or behavoir vi kehte hai to hm isse `${name}` ese access nhi kr skte hai isliye hmne yha pr this keyword ka use krna padega or this keyword hme btata hai ki isse object ka andar ka name ko isse object ke fuction greet() method mai access kr rahe hai isliye hme this keyword use krna padhta hai, lekin ye sirf normal function m use hota hai this keyword arrow function mai hm usse this keyword se kisi variable ko access nhi kr skte hai isliye this keyword ka usecase alg alg cases mai alg hota hai jaise window mai alg browser mai alg or different-different function m vi alg km krta hai this keyword kisi function mai this keyword object ke andar km krta h lekin kisi object ke andar koi dursa jaise arrow function m this keyword use nhi hota hai.
    }
}

obj.greet()
*/


/*
=========================================================
                OBJECT METHODS (JavaScript)
=========================================================

Method                     | Changes Original? | What It Returns            | What It Does
---------------------------|------------------|----------------------------|-----------------------------------------------
Object.keys(obj)           | No               | Array of keys              | Returns all enumerable property names (keys)
Object.values(obj)         | No               | Array of values            | Returns all enumerable property values
Object.entries(obj)        | No               | Array of [key, value]      | Returns array of key-value pairs

Object.assign(target,src)  | Yes (if modified)| Modified target object     | Copies properties from source to target

Object.freeze(obj)         | Yes (locks obj)  | The frozen object          | Prevents adding, removing, modifying properties

Object.seal(obj)           | Yes (locks structure) | The sealed object     | Prevents adding/removing properties but allows modifying existing ones

obj.hasOwnProperty(key)    | No               | Boolean (true/false)       | Checks if object has specific own property

=========================================================
NOTE:
- "No"  = Non-mutating (original object safe)
- "Yes" = Mutating (original object modified or locked)
=========================================================
*/


// methods on object thier predefined methods of object
/*
let obj = {
    name: "caddy",
    age: 23
}
*/

// make copy of obj and create new object and put that obj copy in obj2.
/* 
// Using spread operator '...spread'
let obj2 = {             // agr hme copy banani hai obj ki obj2 mai to hme simple obj ko obj2 mai spread kr dena hai bss or kuch nhi.
    ...obj
}
console.log(obj2)


// using assign() method in-built for object
let obj3 = {};
Object.assign(obj3, obj)
console.log(obj3)

*/



// keys method to access the keys in object.
/*
 let keys = Object.keys(obj)    // ye Object ek constructor hai or ka naam hai jo js mai predefiend in-built hota hai to usko ese use krke keys() method use krke use kr skte hai or jis object ki hme keys chiye usse keys() method ke andar pass kr dengai.
 console.log(keys)         // or ek baat ye hme output jo hai vo ek array ke format mai milega na ki object se uski keys nikal rahe hai to hme object ke format mai hi milegai ye hme output array ke format m milegai.
*/

// values method in object to access the values of object.
/*
 let values = Object.values(obj)     // same keys() ki tarah hi ye values method vi h jisse hm values lete h pure object ki jo hm pass krengai iss values() method ke andar.
 console.log(values)       // yha pr vi hme ye ouput array ke format milega na ki object ke format mai or array ko iterate krna to hm jante hi hai jaise for-of loop, for-in loop lekin map(), forEach(), & reduce() methods/function hm use nhi kr pate hai kyuki ye array ke methods hai na ki object ke ye sirf array pr work krengai naki object pr vi lekin "for", "for-in", "for-of" loop kr skte hai use inme vi "for-in" loop mostly use hota hai etc.
*/


// for-of-loop to iterates the values the object lekin hme ye for-in-loop tarah ye for-of-loop iterate nhi kr pata hai direct values pr hmare given object m.
/*
 for (let value of obj){   // yha object ko iterate krne ke liye for-of-loop use nhi kr skte hai kyuki for-of-loop hme direct values print krke deta hai na ki index ke sath kuch vi km nhi krta hai ye lekin hmara object hota hai store key value ke pair mai hai isliye hme for-in-loop use krna padhta hai kyuki vo index or value pr km krta hai.
     console.log(value)
 }
*/


// for-in-loop to iterate the value of object ye loop hme keys deta hai iterate krke
/*
for(let key in obj){
    // console.log(key)          // sirf key print karane se hme key milegai jo hmare for in loop mai iterate kr raha hai uska naam hme key de rakha hai actuaaly ye ek variable ka naam hai bss vo by default key print krta hai hoti dono hi ahi uske andar values hai jo hai key or value lekin values ko print karane ke liye alg tarike se krte hai jo hai bracket notation jo hme upper disccuess kr rakha hai jo hai kuch ese obj[key] isse se hm value vi milejyegai.
    console.log(key, ":", obj[key])   // obj[key] se hm values access krte hai kyuki ye key ek variable hai jo iterate kr raha hai hmare object ko print krke de raha hai key agr hm sirf key likhte hai to sirf lekin agr hm ko key ke sath values vi print karani hai to hme bracket notation ka use krna padhta hai jo ki hai jo hme allow krta hai variables ko access krna in object. 
}
*/


// entires() method in object ye method kya krta hai basically ye hmare object ko key-value pairs mai de deta hai in array format or key - value alg alg array mai hote hai print or hmara key-value whole vi ek array mai consist krta hai isko hm kehte hai nested array ye hme array m convert krke deta hai isska bhut accha use case ye hai ki ab hm array pr aram se loop kr skte hai jaise map(), reduce(), forEach() jada map() method / function hi use hota hai inme se.
/*
let entries = Object.entries(obj)
console.log(entries)
*/


// freeze or seal methods in object 

/*
let obj = {
    name: "gamma",
    age: 21
}

// freeze() method 
Object.freeze(obj)    // kisi vi object ko freeze() kr ne ke baad hm usme bhr se manully key, or value add nhi kr skte hai kyuki uss object ko hmne freeze kr diya hai.
obj.city = "NOida"    // After apply freeze() method on object we can not add new key value pair information / property oR function by manully outside.
delete obj.age        // ALso we cannot delete any exisiting key or their value present in object after apply freeze() method.
obj.name = "gamma chaturbodh"   // we also cannot update any key  their vlaue.
console.log(obj)


// seal() method
Object.seal(obj)
obj.city = "nOida"    // seal() method apply krne ke baad hm city new key or pair mai add nhi kr skte hai.
obj.name = "gamma chaturbodh"   // Lekin after apply seal() method we can updates the exisiting name key value.
delete obj.age    // after apply the seal() method we also cannot delete the key or value in present in object.
console.log(obj)
*/


// hasOwnProperty() method in object this property checks the property of the object we can create only checks the property of the exisiting object or we knows that property called ass in object 'keys' and they retrun their output in the bases of boolean values(true/false).
/*
let obj = {
    name: "saloni",
    age: 21
}

console.log(obj.hasOwnProperty("name"))
*/


// singleton object Vs class-based object 
/*
=> A singleton is just a single, unique object created once in your code.
=> Creating an object using literal syntax is considered a singleton becaause it creates one specific object instance that is not used as a template to create others.
=> Example of singleton object -> let obj ={ ...code } this method create the object using literals.
=> Or we can create the object using constructor let obj = new Object({ ...code }) this method also called as singleton object the constructor cannot class-based object this is singleton object.
=========================================================
      SINGLETON OBJECT vs CLASS-BASED OBJECT
=========================================================

Feature         | Singleton Object              | Class-Based Object
----------------|--------------------------------|---------------------------
Syntax          | Object literal {}             | class or constructor function
Purpose         | One specific object           | Blueprint for many objects
Instances       | Only one                     | Many objects can be created
Example Use     | Settings, config, logger      | Users, cars, products
Example Code    | let config = {}               | class User { ... }

=========================================================
*/



/*
=========================================================
KEY TAKEAWAY:

- Singleton = Direct single object (used for config, settings)
- Class     = Blueprint (used to create many similar objects)
=========================================================
*/


// Destructuring in object.
/*
let obj = {                  // ye object hmne define kra hai or usme hmne structure provide kra hai name, city ke sath to vese hi hm deStructure krke ye cheezien nikal vi skte h.
    name: "Ankur kumar sharma",
    city: "NoiDa"
}


// hm cheezein uss object ki access to simple obj.name or obj.city se vi le skte hai lekin uske liye hme access krne kee liye alg alg variable mai store karana padhta hai ye problem thi isme 
// let name  = obj.name
// let city = obj.city

// console.log(name)
// console.log(city)

// bar bar alg varaible mai store nhi karana hai to hm Destructing use kr skte hai ek hi same name ka variable hmne dena hoga right equal to ke bagal mai jo hmare object ka h or left side mai let { } curly braceses ka use krna padega .
let {name , city} = obj        // to yha pr obj right side mai likhte hi pura ka pura ye hmara object internally present hojyga or left side mai curly brases ke andar vo cheezein hm le lengai jo hme chiyee hai or ek baat important yaad rkhni hai hme yah pr curly brases ke andar hme vo same name spelling ke sath hme likhna padega jis object se hm usse destructure kr rahe hai to hme vo hi variable ki keys miljyegai jo hme chiye hai or key ki spelling hme bilkul exact deni padegai jis object se hm destructure kr rahe hai usse unhe aage piche likh skte hai curly brases ek andar lekin spelling bilkul shi honi chiye exact same.
console.log(name , city)
*/

// Destructing in array, Destructur krne ka mtlb ye hi hota hai ki bss hme syntax ko bar bar repate na krna pade bar bar usko varibale mai store na krna pade.
/*
let arr = [ 1, "gamma bodh", {name: "something something"} ]

let [ item1, item2, objectvariable ] = arr   // yha pr array mai desturture krte time hmne pura ka pura array ko right se mai equal ke bagal mai likh kr le lengai or hme yha pr key dene ki jrurart nhi hai kyuki array mai key nhi hoti h isliye hm kisi vi naam se kr skte hai Destructur kr skte hai object ki tarah hme yha pr exact key ka same naa dene ki koi jrurat nhi hai yha pr name matter nhi krta hai lekin sequences mattar krta hai lekin object ke case mai ulta tha wha pr sequence matter nhi krta wha pr name of keys ki spelling matter krti hai.

console.log(item1, item2, objectvariable)
*/


// Question - 1
/*
let person = {
    name: "rahul",
    age: 23,
    city: "khoda colony"
}

person.email = "example@gmail.com"
delete person.city

for (key in person){
    // console.log(key, ":", obj[key])
    console.log(`Value of ${key} is ${person[key]}`)
}
*/


// Question - 2, hme yha pr fullname return krna hai
/*
let obj = {
    firstName: "chandan",
    middleName: "negi",
    lastName: "ramola"
}

let convrtToFullName = (params) => {        // yha pr jo hmne paramater pass kra hai params or isko hmne apne arrow function mai hi call kra diya or hme pta hai iss parameter ka scope iske arrow function tk hi hoga or jb hm isse function ko call krengai tbh jo argument ke form mai hm pass krengai tbh koi vi object jo hmne bna rakhi hai obj naam se vo iss 'params' iss parameter ke andar aajyegai or isse vo hold kr lega paramter uss object ko jo hmne pass kra hai 'params' jo ki hamare case mai ye hai in final baat khau to ye params parameter ke andar hmara pura ka pura object ara hai jo hmne niche arguments ke form mai pass kra hai.
     return `${params.firstName} ${params.middleName} ${params.lastName}`     // hme pta ahi jb vi hm retrun karate hai tbh hme function ko call karate time ek variable m store karana padega fir uss variable ko console karana padega. 
}

let fullname = convrtToFullName(obj)
console.log(fullname)
*/


// Question - 3 , hme object ki keys ki length nikalni hai 
/*
let obj = {
    name: "shivam",
    age: 23,
    city: "bulansharan",
    isMarried: "false"
}

let NoOfKeys = Object.keys(obj).length    // To hme pta hai Object class ka use karengai or usme keys method se apne manully banye hue object ko pass krdengai kyuki vo fir hme array ke form mai miljyega hmara object fir hm uss array pr '.length' property laga kr uss pure ki length nikal lengai object ke keys ki.
console.log(NoOfKeys)
*/


// Question - 4 
/*
let arr = [
    {name: "Alice", role: "admin"},
    {name: "Bob", role: "user"},
    {name: "charlie", role: "admin"},
]


function filterArray(arr, role){          // ye jo 'arr' parameter pass kra hai hmne vo hm kuch or vi naam le skte kyuki ye function scope tk hi km krega uske bhr ye accessable nhi hoga, agr hm arr ka name yha pr kuch or rakhna chahe to hm rkh skte hai lekin hamare case m fir hmne jo vi arr ke name se filter function andar laga rakhe hai vo sb change krna padega, pr hm code readable likhne ke chakkr mai hm same arr naam hi rakhengai.
let filteredItem = arr.filter((item)=>{               // ye hamre array mai se item leta hai or return krta hai h pura ka pura item hi.
    return item.role === role     // yha pr sirf vo hi item pure ke pure return karega jo iss condition ko satisfy krte hai or iss condition ko se match krte h hmare given array mai se, or ek baat ye pura ka pura item hi return krta hai, hmne baad mai role ko as a parameter pss kra hai apne main super function mai code jo readable format mai banane ke liye isliye hmne isse vo hi paramter role ko compare kra hai, or baad mai niche function call krte time role bhej dengai hm konse role ke according hme filter krne hai user.
})

let finalArray = filteredItem.map(item=>{            // hme pta hai map function sirf array pr lagta hai or agr ek hi parameter agr hm pass kr rahe h to andar ke funtion ka bracket vi hata skte h.
    return  item.name             // Or hm jo return krte hai vo hi bss vo hi output m hme milta hai chahe fir hm return mai 1 number hi kyu na pass kr rahe h vo hi hme milega sirf print hokr output m pr hmare case m hme sirf jo 'filteredItem' mil raha hai usme se sirf hme name print karana hai output m jo hme 'filteredItem' jo array kr form mai hme admin ka name or role dono de raha hai usme se sirf hme uska name print karana hai, or hme pta hai map function sirf wahi retrun krta hai jo hm return mai pass krte h to hmne item.name return kara diya ab hme name print hokr sirf milega.
})
  return finalArray

}

let finalArr = filterArray(arr, 'admin')
console.log(finalArr)
*/


// Question - 5
/*
let products = [
    { id: 1, name: "iphone 15" },
    { id: 2, name: "Samsung Galaxy" },
    { id: 3, name: "Google Pixel" }
];

function search(products, searchKeyword){
    let filteredArray = products.filter(Obj=>{
        return Obj.name.toLowerCase().includes(searchKeyword.toLowerCase())    // object ke name jo hmare products array k andar hai uske name ko compare krengai hm jo hm arguments mai pass krengai function call krte time usse compare krega, ab isme ek problem hai ki hme pura name dena padega pura string pass krna padega same exact isliye hm includes() method ko add krngai compare krne ki jagah jo hme kuch part likhne se vi search hojyega, includes() method krta kya hai actually ye krta hai true false mai evaluate krta hai ki jo hme parameter iske andar pass kra hai vo dekhta hai ki same hai kuch part ya fir nhi agr hai to vo hme dedega true lekin yha pr obj.name se elvaute krega jo parameter uske andar pass krengai hm includs() ke andar, to hm yha pr vohi as a parameter pss krdengai searchkeyword variable se jo hme as a parameter pass kri hai or function call krte time as a arguments pass krengai name product ka.
    })
    console.log(filteredArray)
}

search(products, "ipho")
*/


// Question - 6 ,hme isme ek same postid ke data niklne hai group krke.
/*
let comments = [
    { postId: 1, text: "Very helpful" },
    { postId: 2, text: "Great post!" },        
    { postId: 1, text: "Thanks" }        // kisi ne comment kra 'Very helpful' uspr hi ek or comment ka reply krke ek or comment kra hai 'thanks'.
]

function groupByPost(comments){
   let groupedComments = {}              // basically we want to converts the whole comments in differnet postid can put in object an array format only same contains postid that's why we can initialize a variable called groupedComments in empty object, Now we can check in lower below code .

   comments.forEach(obj => {                        // we can apply on comments array forEach() loop because of for-each loop cannot change's our original array or also cannot returns any things in our object we can define in the question that works only print / console the data or logic prints /console data here we have comes object by the our initialize variable groupedComments there firstly not have any postid because we can created that an empty object of if conditon false else condition runs there we can create new postid and there values add in the array format now secondly foreach loop runs then again if postid matches our previous postid then we can push otherwise we can create new postid and their postid comments in new array these whole things wrapped into object.   
    if(groupedComments.hasOwnProperty(obj.postId)){
        groupedComments[obj.postId].push(obj.text)
    } else {
        groupedComments[obj.postId] = [obj.text]
    }
   })

   console.log(groupedComments)

}


groupByPost(comments)
*/



// Question 6 , using destructure
/*
let comments = [
    { postId: 1, text: "Very helpful" },
    { postId: 2, text: "Great post!" },        
    { postId: 1, text: "Thanks" }       
]

function groupByPost(comments){
   let groupedComments = {}              

   comments.forEach(obj => { 
    let {postId, text} = obj                          
    if(groupedComments.hasOwnProperty(postId)){
        groupedComments[postId].push(text)
    } else {
        groupedComments[postId] = [text]
    }
   })

   console.log(groupedComments)

}


groupByPost(comments)
*/



// Question - 7 , we have some key pair values that's we can use and combine that in the manner of URL.
/*
let params = {
    search: "laptop",
    page: 2,
    sort: "price"
}


function createUrl(params){
    //   console.log(`search=${params.search}&page=${params.page}&sort=${params.sort}`)          // there has only one problem if our object has join new key with thier new value so we can add in that manully that's why we can apply loop.
      let url = ""
      for(let key in params){
           url = url + `${key}=${params[key]}&`
      }
      let finalurl = url.slice(0, url.length-1)
      return finalurl
}


let URL = createUrl(params)
console.log(URL)
*/
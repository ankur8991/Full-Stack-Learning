// A string is a piece of text mtlb string jo hai vo ek sentence ka kuch part ho skta hai uska piece.
// string jo hai vo ek word, sentence , ek single letter or even empty space vi ho skta hai jo bana hai kisi characters se.
// Example = "Ankur", "A", " ", "12" yha or ek piece of character hai jo name ke format mai hai or, single word jo hai vo vi, or khali space ke ander vo vi as a string hi treat kara jyega, or double quotes ke ander jo number hmne likha hai vo vi ek string ki trha hi treat kara jyega.
// JavaScript ke ander double quotes ek ander hi nhi single quotes ke ander vi hm string ko define or likh skte hai.
// example :  " ", ' ' & "Ankur", 'Ankur' dono hi valid hai ek or backticks `Ankur` ke ander vi likhte hai string ko.
// backticks ki madadt se hm variables ko vi le skte hai.

/*

let str1 = "Ankur"
let str2 = 'Ankur'
let str3 = `Ankur`
let aa = 'Ankur' + 456 + " sharma"  // ye jb vi string ke sath kisi number ko add krte hai to vo number phle string mai convert hoga fir uske baad + ke according concentinate ho jata hai.
let bb = '@' + aa // isme hmne string ke sath uper wale variable ko concentinate krvaya h.

console.log(str1, typeof str1)
console.log(str2, typeof str2)
console.log(str3, typeof str3)
console.log(aa)
console.log(bb)

*/


// agr hme thin strings ko apas mai concatinate krvana ho to vo tarike hai yha pr ?

/*

let firstname = 'Ankur'
let MiddleName = 'kumar'
let lastname = 'sharma'

let fullname = firstname + " " + MiddleName + " " + lastname  // Isme hme thino strings ko ek ke baad ek ko '+' sign se add krna padta hai or words ke bich mai space ke liye alg se " " ye kr ke add krna padta hai isme.
console.log(fullname)

// print according to backticks those upper name concetiantes words isme hme extra '+' sign ka use nhi krna padta hai or spaces ke liye vi extra + " " ye nhi krna padta hai .
let fullname2 = `${firstname} ${MiddleName} ${lastname}`
console.log(fullname2)

// agr hme koi variable ko insert krvana hai text ke bich mai to ?
console.log("My name is " + fullname)  // ye wahi purana tarika hai jisme hm '+' sign ka use kr rahe hai.
console.log(`My name is ${fullname2}`)  // ye vi hmne backtickes ki madadt se add kra hai variable ko using this ${} syntax.

// One more example of backticks or backticks [` `] ko bolte hai hm {Template Literals} or 
let a = 20
let b = 40 
let c = 70

let str = `my first number = ${a} and second number = ${b} and third number = ${c}`   // ${ } iske ander jo variables daal rahe hai usko hm bolte hai placeholder jaise is case mai hmare pss thin placeholder hai ${a}, ${b}, ${c} or jo method se ye apply hora hai usko hm botle hai string interpolation.
console.log(str)

*/

// string make's by constructor method 
// String constructor se hme ye pta chalta hai ki string ke ander indexing hoti hai or positioning or bhut sare in-built's methods(function) vi hote h or methods isliye bolte hai kykui vo ek particular string pr appyl hokr kuch km kr raha hai.

// let str = new String("Ankur")   // isse hme ye pta chalega ki string ke ander vo indexing hoti hai accrodig to your string words jaise Ankur mai indexs hai 0 se 4, 5 length hai apne word ki index's hai.
// console.log(str)


// \n use in string kyuki agr hme ek hi string of word ke form mai jo hai uske second line mai lana hai to hm \n ka se krte hai or ye \n sirf ek single space sequnecs character hai.
// Yeh \n basically ek invisible character hai jo "new line" represent karta hai, isliye ye ek character ki length vi hold krta hai.
// let str = 'Ankur\nsharma'
// console.log(str, str.length)

// let str2 =   "Ankur  \"  sharma" // agr hme  double qoutes ke ander" " ek or " single qoutes use krna hai to normaly mai to "  " " is taraha se to error print krega lekin agr hme esa krna hi hai to hme kuch esa krna padega " \" " isse ye pta chlta hai ki isko as a hai opening or closing quotes use mt kro.
// console.log(str2)

// // Write /n in console log 
// let str3 = "ANkur \\n sharma"
// console.log(str3)


// Strings are immutable = mtlb hm string ko change nhi kr skte hai ek br jo define kr diya vi hi rahega baad mai change nhi hoga vo fir.
// Example : -
// let str4 = "hello world"

// console.log(str4[2])
// console.log(str4[4])
// console.log(str4[6])
// console.log(str4[7])

// str4[4] = "r"    // hmne yha pr hello world mai 4 character ke o ko change krke manually r kra hai lekin hmne
// console.log(str4)  // print mai avi vi hello world hi mil raha hai na ki jo hmne change krke hellr world isliye strings are immutable hoti hai.

// String for-off loop jo hme value deta hai string ki mtlb actual data deta hai na ki uska index's.
/*
let str5 = "Ankur Sharma"
let str6 = ""
for(ch of str5){
    str6 = str6 + ch + " "   // yha pr hm str6 jo naya string hai usko usme add krke str5 ko str6 mai add kara hai or vo print kr rahe hai na ki original mai change kra hai str5 mai.
}
console.log(str6) 
*/

// for-in loop jo hme string ka index's deta hai.
// for(index in str5){
//     console.log(index)
// }

// String Properties & Methods in JavaScript?
// String properties ka mltb hota hai vo hme kuch information de raha hota hai na kuch actual km kr raha hota hai string mai jo change krde baad mai uss string ko jaise properties mai hai ek length of string ye sirf hme btata hai ki hmari string ki length kya hai or isme paranthesis use nhi hoti hai bina () ke ye call hota hai.
// String Methods m hm actual string ko change krte hai or vo koi information nhi deta hai balki tumhari string ko change krke kuch alg krta hai uske sath or isme hm () use krte hai example toUpperCase() ye ek method hai jo hmri string ko uppercase mai convert krdeta hai or hme pta hai string original change nhi hota isliye ye original mai kuch km krta hai or uski copy bana kr retrun kr deta hai isliye string hmri immutable hai.

/*
let str = "ankuR"
let upprcasCopy = str.toUpperCase()   // strCopy new string banaya kyuki hme pta hai string immutable hoti hai original change nhi hoti string vo original ek copy bana deta hai jo hm karana chahate hai usse or usko return as a copy of string na ki actual original string ko change kr deta hai.
let lowercaseCopy = str.toLowerCase()
console.log(str, upprcasCopy, lowercaseCopy)
*/

// trim() method ye kya krta hai? ye white space ko hata deta hai hmare word mai.
// Or ek important baat ye string ko bich mai jo white space hota hai usko nhi hatata hai sirf aage or piche ki whitespace khali space ko hatata hai na ki uske bich ki string mai jo khali space hai usse vi.
/*
let str = "              Ankur         "
let TrimmedStrCopyOrignalString = str.trim()
console.log(str)
console.log(TrimmedStrCopyOrignalString)
*/


// concat method in string ? jo ki km krta hai string ko add krne ke liye
/*
let firstname = "Ankur"
let middlename = "kumar"
let lastname = "sharma"
let finalname = firstname + middlename + lastname
let fullname = firstname.concat(middlename, lastname)   // lekin isne original firstname mai kuch vi change nhi kra hai vo same hai as it is copy bana kr add kr diye or baki saari values.

console.log(finalname)
console.log(fullname)
*/


// includes() methods in string ? jo check krke btata hai ki vo specific word hmre string mai present hai ke nhi or or answer hme true or false mai milta hai agr check successfull hai to mil jyega ki hn true hai or check mai fail mtlb vo word jo hm check kr rahe hai vo nhi hai uss string mai isliye false return krta hai vo.
/*
let str  = "I am ankur"
let includesstr = str.includes("zz")
console.log(includesstr)
*/


// indexof() method in string ? jo hme string ki direct index return krke deta hai hmri given string ki.
/*
let str = " Ankur kumar sharma "
console.log(str.indexOf("r"))
*/


// CharAt() method hme btata hai ki konse index pr konsa character present hai hme index dena hoga character lene ke liye.
/*
let str = "Ankur"
console.log(str.charAt(4))  // yha pr hm character lete hai index pass krke string mai se.
*/

// replace() or replaceAll() methods in string ? ye replace() method jo hai vo sirf ek br replace krta hai string mai se agr vo same word string mai doo jagah vi lie krta hai tabh vi vo sirf phle jo ayega ek br usko hi replace krega lekin replaceAll iss problem ko solve krta hai vo jitne vi jagah present hoga hmara word uss string mai vo hr jagah replace kr dega usko.
/*
let str = "I Am a boy and good boy"
console.log(str.replace("boy", "girl"))   // OUTPUT : - I Am a girl and good boy.
console.log(str.replaceAll("boy", "girl")) // OUTPUT : - I Am a girl and good girl.
*/


// slice() method in String ? slice(start, end) iska km hota hai jo hme start mai index di hai wha se end index jo hm dengai wha tk ka part cuttt katt kr dedega hme hmri given puri string mai se isliye iska naam slice diya hai kyuki ye hme ek slice fo part cutt krke deta hai hme hmre given string m se.
/*
let username = "@ankurkumar45436"
console.log(username.slice(1))   // yha pr hm keh rahe hai mujh given string mai se cutt krke dedo 1 index se jha tak jata hai index waha tk kyuki hmne yha pr define nhi kra hai end index isliye vo hme 0 index ignore krke 1 index se last index tk ka part string ka dedega hme.
console.log(username.slice(6,11)) // yha pr hmne end pr 11 index isliye liya kyuki ye last end wala index mai ek index chodd deta hai kyuki vo index vo cutt nhi krta hai uske phle wale tk cutt kr deta hai bss or same start wale mai vi hai start index mai vi 6 index se cutt krega na ki uske baad wale se bss itna remember rakhna hai.
console.log(username.slice(-10,11)) // ye negative index pr vi km krta hai or ek baat negative index -1 se start hota hai na ki zero 0 se last or last of string se hota hai.
console.log(username.substring(-10,11)) // ye positive pr to shi km krta hai slice ki tarah hi lekin nagative values pr km nhi krta hai jbki ye kehta hai tum negative lagao ge mai usse positive se 0 se start krke cut krke de dunga tumhe.
*/


// split() method in String ? ye given string mai se words ko splits krke deta hai ek hme.
/*
let str = "Ankur sikarwar amit"
console.log(str.split(" ")) // yha pr hm ye bta rahe hai ki hmare string m jo words hai unko " " iss bases pr split krke dedo mujhe.
console.log(str.split("a"))  // yha pr hm a ke bases pr split kr rahe hai mtlb a jaahn vi hoga hmre string mai usko wha se hata kr a ko uss jagah ko khali krdega or new unn words ko wahi se tod vi dega.
*/

// Question 1
/*
let fullname = prompt("Enter your full-Name")

// let username = "@" + fullname + "_" +fullname.length
let username = `@${fullname.trim().replaceAll(" ", "")}_${fullname.length}`
console.log(username)
*/

// Question 2
/*
let Userstr = prompt("Enter any string")
let Userch = prompt("Enter any character")

let count = 0
// for(let val of Userstr){       // for-of loop hme sirf value deta hai string ho ya fir array.
//     if(val.toLowerCase() === Userch.toLowerCase()){
//         count++
//     }
// }


for(let index in Userstr){           // for-in loop hme index ke saath saath value vi deta hai chahe fir string ho ya fir array.
    if(Userstr[index].toLowerCase() === Userch.toLowerCase()) {   // tolowercase() isliye lagaya kyuki ye case insensitive m vi km kr ske.
        console.log("occurence position = ", index)
       count++
    }
}


console.log("count = ", count) 
*/

// Question 3
/*
let str = "Hello I am caddy best in coding but not anymore anything"
console.log(str.split(" ").length)
*/
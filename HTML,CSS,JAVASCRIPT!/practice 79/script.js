let a = prompt("Enter the First Number?")

let b = prompt("Enter the Second Number?")

// YEh error tbh Encounter hota hai jb user koi unallowed input dede yeh user kuch or kr de! or hm phele se hi krke rkhengai ki ye user krega to yeh error ayega isliye uss error ko hi hm phele se hi handle krengai or mtlb vo hm ek error throw krengai tki user vo glti dobara n kre.
// Or agr Hmne error  throw krwa diya n ek brr to fir hmari script ruk jyegai whi pr.
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This is Extermely not allowed")
}

let sum = parseInt(a) + parseInt(b);

console.log("The Sum of Your Two numbers is -> ", sum);


// yEh Error tbh Encounter hota h jb hme kudh se kuch error ata ho hmari bnai hui website mai ya fir hmare application mai tbh hm isse handle krte hai mn lo hmne kuch fetch-API ki mddat se kuch data kissi network se mngwa liya tbh jkr vo kuch data unexpected aajye tbh usse hm kese handle krengai .

// try-catch synchronous based km krti h mtlb agr hm Asnycronous km jaise setTimeout ya fir setInterval krengai try ke ander to vo wah pr dies kr jyegai.


// Use of Finally in try and catch .
/*      IMPORTANT 
kuch log kehte hai ki finally ka use hota hai jb hme vo try-catch ke baad vi hme run krna ho bina kissi mtlb ke vi lekin esa nhi hai kyuki hm to fir direct console.log likh skte hai yeh likhne ki koi jrurt nhi hai hme finally() ki lekin lekin agr hme isse try-catch ko agr kissi function mao wrap krde or usko return value assgin krde to hme pta hai return funcation koi sa vi ho to vo return ke aage nhi chalta hai kyuki return ka mtlb hota hai ki vo wapas se apne function ko hi call kr ske na ki return ke agee ka to iss conditon ko break krne ke liye hm finally ka use krte hai isse hme return ke baad mai jo finally mai likhte hai usko vi run kr ske ya fir print kra ske. 
*/

function main(){ 
    let y = 4;  
try {
    console.log("The sum of Multiples of sum with unknown x value -> ", y * sum)    // YEh error nhi fire hoga tbhi chlega ye finally wala.
    return true
}
 catch (error) {
    console.log("error Agya bhai!!")
    return false
}

finally {
    console.log("Files are being closed and db connection is being closed!!")
}

}

let c =  main()

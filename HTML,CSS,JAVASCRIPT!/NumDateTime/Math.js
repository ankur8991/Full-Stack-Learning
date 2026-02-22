// console.log(Math.round(4.6))   // 5 or agr hm round 4.5 ka lete hai tbh vi 5 hoga round-off.


/* floor() or ceil() Method 
--------------------------------------------------------------------------------
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |  |
2  1.9 1.8 1.7 1.6 1.5 1.4 1.3 1.2 1.1  1  0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1 0

- to smjhete hai floor or ceil method kese km krta hai agr m number dedu 1.2 to floor mtlb dharti or ceil mtlb chath to jaisa naam vesa km hai inka to 1.2 ka floor hojyega 1 or ceil hojyega 2 esa hi hai.
- koi vi number ka hm floor niklane ke liye hm ussi number ka same lowest whole hota hai or kyuki floor ka mtlb niche wala hota hai isliye jaisa naam h vesa hi kam hai.
- koi vi number ka hm agr ceil niklana chahte hai to phli baat ceil ko smjh lo chhat or jb hm kisi vi number ka ceil nikalte hai to uska mtlb hai ussi number ka whole number highest wala ya fir uske ek badi value.
- Example : floor(1.2) to iski choti lowest value hai 1 or ceil(1.2) iski highest value hai 2 bss simple krne ke liye hmne floor ko niche wala bol diya kyuki ye choti value deta hai or ceil ko hmne chhat kehte hai kyuki chhat floor se uper hota hai bss itna hi.


console.log(Math.floor(1.2))  // ye to normal de rakha hai uper example m.
console.log(Math.ceil(1.2))
console.log(Math.floor(1.9))    // still 1 return karega kyuki lowest countable number dega hme ye.
console.log(Math.floor(-0.9))     // yha pr floor k mtlb hota hai choti value to hme pta hai floor mtlb choti value uss number se vo vi countable number m or negative m jo choti value dikhtti hai vo badi hoti hai or badi value dikhti h vo choti hoti hai isliye -0.9 jo value ka hm floor() nikale tbh value hme milegai -1 kyuki -0.9 se chota countable number h -1 kyuki negative m number jitna bada hota h vo utna hi chota hota hai bss.
console.log(Math.ceil(-0.9))   // yha pr jitni choti value hogi negative m utna hi badi value hogi bass to iska ceil ki value ayegai -0.
console.log(Math.floor(-2.6))   // yha -2 nhi ayega kyuki -2.6 se choti value hai -3 isliye -3 return karega ye.
console.log(Math.ceil(-2.6))    // yha pr -2 return karega ye answer hme kyuki -2.6 se -2 badi value h whole number m to return krega hme -'2' naki -3.
*/


/*
Math.abs() method hme mode nikal kr deta hai agr negative value dalengai to vo hme positive nikal kr dega or positive dengai to positive hi return karega |-X| = +X, |+X| = +X ye wala bss itna hi.
 
console.log(Math.abs(-0))     // 0 
console.log(Math.abs(0))      // 0
*/

/*
Math.sqrt() Method hme square root nikal kr deta hai mtlb 4 ka square root 2 bss itna hi krke deta hai ye hme.

console.log(Math.sqrt(81))  // 9 
consle.log(Math.sqrt(2))    // 1.4142135623730951
*/

/*
Math.pow(x, ki power y) yha pr ye power m convert kr deta hai y ki vlaue ko x ke upper jaise x = 2 or y = 3 to ye return karega 2^3 bss or usko calculate krke dedega hme bss.
ek or tarika hai power nikalne ka jaise vo hai console.log(2**3) to yha pr vo 2^3 ho rahi hai or isko vo calculate krke dedega hme ye bss itna hi.

console.log(2**3)  // 8
console.log(Math.pow(2, 3))  // 8
*/

/*
Math.min() or Math.max() ye kya krta hai ye hme jo vi number hm inke andar pass krengai unmai se ye hme min ke case m min dedega or max ke case m max value return kr dega bss itna hi.

console.log(Math.min(1243, 44, 34,24,2352,25,2 ,34,52,2,52))
console.log(Math.max(1243, 44, 34,24,2352,25,2 ,34,52,2,52))
*/

/*
- Math.random() ye method hme value return krke deta hai 0 se 1 ke bich mai vo random value or isme 0 jo hai vo included hota or rear case m 0 ata hai hai or 1 jo hai vo excluded hota hai.
- Ex important baat ye hai ki 0(inclusive) or 1(exclusive) hota hai or 0 included hota hai iska mtlb ye nhi ki 0 most of the cases  ayega hi ye ye bhut hi rear case m ata hai bss itna hi isko hm ese likh skte hai 'Range --> [0, 1)' isme '[' iska mtlb 0 included hoga or ')' iska mtlb jiske tarah ye hai vo included nhi hoga jo ki hai 1.
- or agr hme isme 0 se 10 tk nikalna ho to simple 10 se multiply kr dengai hm bss [0, 1) * 10 to ye range ab [0 , 10) hojyegai.
- same ese hi range agar mujhe kuch vi leni ho to uss number se hm direct multiply kr dengai bss or kuch nhi to hmari range = [0, n) if we can multiply by n value.
- Or agr m add kru to hmari range of value 0 se nhi hogi start vo usse number se start hojyegai jisse hmne add kra tha jaise mai add krta 2 to range = [2, 3) kyuki phle range [0, 1) baad mai add krne baad 2 se to hmari value [0+2, 1+2) => [2, 3) hojyegai. 
- baki hm kuch vi logic laga skte h random of math value m.
*/

// random number between 0 and 1.
// let random = Math.random()

// yha pr hm hmee pta hai Math.random() method 0 se 1 se bich mai random value generate krta hai lekin hme 5 , 25 tk nikalwani hai random values to isliye hme min m 5 value value di or max mai 25 di to jb hm min - max + 1 krte hai to hmare value ati hai 5 - 25 + 1 => 21 to hm hme pta hai 21 included nhi hoti hai isliye hme yha pr 0 se 20 tk milegai value [0, 20] fir hme to chiye thi value 5, 25 tk isliye hm last m 5 min add dengai ot hme ab [5, 25] tk values mielgai or 25 included hai lekin hme deciml m number mil rahe hoengai 24.177494167189757 ese to isko countable number banane ke liye hme isko floor ke andar dalna padega jisse hme countable number mil ske 5  se 25.
// Maan lo hme 1 se 10 tk value dikhani hai or to hm simple Math.random() me * 10 se kr dengai to hme 0 se 9 tk vlaue milegai to uske baad hm 1 se 10 tk chiye thi isliye 1 add kr dengai jaise math.random()*10 + 1 pr hme isko countable m convert krna h isliye hm Math.floor(Math.random()*10 + 1) kr dengai lekin hm yha pr ceil vi to apply kr skte h or hme fir +1 add krne ki jrurart vi nhi hai isliye kyuki ceil hm uper ki value deta hai isliye to hm ceil kuch ese apply karengai jo h math.ceil(Math.random()*10) lekin iss case m hme yha kabhi 0 vi dedeta hai isliye h isko aviod krte h kyuki hme chiye thi 1 se 10 tk lekin ceil ke case m 0 se 10 dega lekin ceil ek value uper ki deta hai isliye hm man lete hai 1 se 10 tk hme milegai value lekin ye rear case m hme 0 vi de deta hai value mai isliye isko hm aviod krte hai.
// Random integer between min and max (inclusive min value)

// Math.ceil() gives 0 only if Math.random() returns exactly 0 - but that's extermely rare.
// Math.floor(... + 1) is slightly more consistent in intent and avoids the edge case of 0.
/*
function getrandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getrandomInt(5, 25))
*/
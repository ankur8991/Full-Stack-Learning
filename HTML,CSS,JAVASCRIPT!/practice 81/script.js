async function sleep(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve("Hey wcm to advanced JavaScript topics!");
        }, 1000);
    })
}

function sum(a,b,c) {
    return a+b+c;
}

// Immediately invoke function Expression [IIFE]
(async function main() {
// let a = await sleep()
// console.log(a)
// let b = await sleep()
// console.log(a)

//   let [x, y, ...rest] = [1,5,7,8,9,10,11]     // isme x,y jo hai vo 1,5 ko assign hongai or ...rest ko baki ki saari value hold krenga or ha rest ek variable hai or isme structure mai ... hi ayengai na ki 2 ya na ki 4,5 etc.
//   console.log(x,y,rest);


let obj = {
    a: 1,
    b: 2,
    c: 3
}

let {a,b} = obj     // isme hmne a or b ki value nikl li obj se.
console.log(a,b);    // Or fir a,b ko print krawa liya console mai.


let arr = [11, 23, 45];
console.log(arr[0]+arr[1]+arr[2]);
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));   // spread operator isse  ke km ata hai kyuki ye arr ke values ko khool deta hai or hmne sum function mai direct return kr rakha hai values ko plus krna.

})()   //() iss function ko invoke kr diya isliye hm isse Immediately function kehte hai.


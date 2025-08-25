let arr = [1, 13, 5, 7, 11];
// let newArr = []

/*
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
}


*/

//Map funcation use case in notDefined newArr with creates multiples of 2 for his old Array is konws as in this Code is 'a'.
let newArr = arr.map((e, index, Array)=>{
    return e**2
})

console.log(newArr)



//Filter funcation use case 
const greaterThanSeven = (e)=>{
    /*
    if(e>7){
        return true
    }

    else{
        return false
    }
        */
   return e > 7 ? true : false;
}

console.log(arr.filter(greaterThanSeven))



//Reduce funcation use case by their real code example.
let b = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}

console.log(b.reduce(red))

//Ye kissi vi object ko Array mai convert krta hai Array,from() se.
// Array.from("Ankur")
// (5) ['A', 'n', 'k', 'u', 'r']csl

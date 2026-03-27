/*
// CommonJS Import
// Here we can use const instead of let due to we can always imports the consistent data not any changeses the data from exports another file to imports.
const nm = require('./Math.js')     // Here we can import by CommonJS using default import and we knows that in CommonJS we can only uses default import export and in import we can by any name can import the variable and function using another file.
const umer = require('./Math.js')   // here we can in Math.js file exports another variable age and we can use commonJS to import and exports so in imports times we can use any name that time so we import here in umer so but they can overwrite that nm vairable data in the same file of the Math.js that means in the one per file we can exports by defaults only one time.

console.log(nm)
console.log(umer)
*/

/* 
//CommonJS Import
const obj = require('./Math.js')

console.log(obj)    // OutPut : { name: 'Alpha', age: 21 }.
console.log(obj.name, obj.age)// If we wants the name or age separately so that we can uses these.
*/


/*
// CommonJS Import
const {name, age} = require('./Math.js')    // Here the Math.js file we can destructures the exports object here in the imports formate like name, age in here the destructures performs in the object data due to we can exports the data in the format of the math.js that's why we can destructures the object variable exact same key spelling names don't confuses that the exports/imports destructures in the object fromate in the CommonJS or ES6 named exports/imports.

console.log(name)
console.log(age)
*/



/*
// CommonJS Import
const {sum, sub} = require('./Math.js')   // Here we can also exports objects format data into another file Math.js imports in that file using destructures in imports the function on the object formate. 

let result1 = sum(2, 4)
console.log(result1)
let result2 = sub(4, 2)
console.log(result2)
*/


/*
// Here we can use the ES6 JavaScript to do imports by another file exports using default exports in ES6 and we knows that only one time we can default exports in the another file.
import sumFunc from './Math.js'

const result = sumFunc(2, 5)
console.log(result)
*/



/*
// ES6 imports 
// Here the exports time we can uses the object format to exports the one or more functions so that we can easily destrucutes the object in the commonJS but in ES6 we can't do that due to restrication of the ES6 default exports and imports.
import obj from './Math.js'
let {sum , sub} = obj  // we can destructures in that way but not in the direclty in the ES6 default import and export of the object in destructures.

console.log(sum(23,346))
console.log(sub(45, 32))

console.log(obj.sum(1, 4))
console.log(obj.sub(2, 1))
*/




/*
// Named exports takes here in imports in Es6.

import { divide as DivideFunc, modulo, mul, sub, sum } from './Math.js'   // here we can rename the divide name as the DivideFunc using as keyword in the destructure times we knows the object destructres in rename using {divide: DivideFunc} but in the case of the Es6 named exports they exports/imports destrucutres times we can destrutures the the object in the rename like these as keyword {divide as DivideFunc}.

console.log(sum(2,5))
console.log(sub(4,2))
console.log(mul(2,4))
console.log(DivideFunc(4,2))
console.log(modulo(2,3))

*/
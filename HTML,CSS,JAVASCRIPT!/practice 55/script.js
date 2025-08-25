console.log("Hello Ankur Bhai Saahi rah tum wah se nikl kr aa gye yha coding sikhne !!");

var person_name = "Ankur";    // var se person_name variable bna, jiske ander string data hai.
let surname = "Kumar";       // let se surname variable bna, jiske ander string data hai.
let age = 20;                // let se age variable bna, jiske ander number data hai.
let honset = true;          // let se honest variable bna, jiske ander string data hai.

console.log(person_name , surname, age, honset);
console.log( typeof person_name , typeof surname , typeof age , typeof honset);


{
    var person_name = "Alice";
    console.log(person_name);
}

    console.log(person_name);

// 'let var const' datatype nhi hote hai  ye variable declaration keywords hote hain - jinse hm varibale banate hai.
// Redeclartion var allows✅
// var x = 10;
// var x = 20;

//Redeclartion let not-allows❌
// let  y = 10;
// let  y = 20;

// Redeclartion const not-allows❌
// const z = 10;
// const z = 20;

// ReAssignment var allows✅
// var a = 10;
// a = a+1;
// console.log(a);

//ReAssignment let allows✅
// var b = 10;
// b = b+1;
// console.log b);

// ReAssignment const not-allows❌
// const a1 = 6;    
// a1 = a1 + 1;      
// console.log(a1);

// var = funcation scoped.
// let and const = block scoped.

// Hoisting(Phle use, baad mai declared)
//VAR-Case
// console.log(v); //✅ undefind (var is hoisted)
// var v = 10;

//LET-Case
// console.log(l); //❌ Error (let is hoisted but in TDZ)
// let l = 20;

//CONST - case
// console.log(c); //❌ Error (Const is hoisted but in TDZ)
// const c = 30;

// TDZ=Temporary Dead zone 
// Mtlb Variable declare to ho gya hai (javascrpit ne memory reserve kr li hai), lekin jb tk usko value assign nhi hoti, tabh tk usse access krna mana hai  - is waqt ko hi TDZ khte hai




// javascript mai do trah ke datatype hote hai ek hota hai primitive data type and Objects.
/*
  1. primitive Data types.
| Data Type     |   Example                                   |   Interview Tip                                 |
| ------------- | ------------------------------------------- | ----------------------------------------------- |
| **String**    |  "hello" ya 'A'                             | Text ko represent karta hai.                    |
| **Number**    | `123`, `3.14`                               | Integer & decimal dono cover karta hai.         |
| **Boolean**   | `true`, `false`                             | Mostly conditions ke liye use hota hai.         |
| **Null**      | `null`                                      | "Intentional absence of value".                 |
| **Undefined** | `undefined`                                 | Jab value assign nahi hoti.                     |
| **Symbol**    | `Symbol("id")`                              | Unique identifier. Mostly advanced topics mein. |
| **BigInt**    | `1234567890123456789012345678901234567890n` | Badi numbers ke liye.                           |

  -->  Ye directly value hold krta hain. Ye "Immutable" hote hain(Value change nhi hoti).

  --> jb hum ek primitive value(jaise string,number,Boolean,etc.) ko dusre variable me assign krte hai. to uski value ek copy bn jati h.
  --> jb hm banate hai to uski asli value ko change nhi kiya ja skta - agr lgta hai ki change kr rahe ho, to actually nayi value bn rhi hoti hai.
    Example: 
    let a = 10;
    let b = a;   //b me 10 ki copy gyi
    b = 20;

    console.log(a);  output: 10 (asli value safe hai)
    console.log(b);  output: 20 
    b mai a ki value copy gyi thi. jb b change kiya to a pe koi asar nhi hua uski asli value same hi rhi a mtlb.

    NULL datatype Special -->
  --> null ka mtlb hota hai: "koi value nhi hai, ye intentionally khaali rakha gya hai"
      console.log(typeof null);  //Output: "object".
  --> Lekin jb javaScript ke phle version me typeof null ka code likha gya tha, tb mistake ho gyi aurr usme "object" return kr diya - aur ab wo 
      purani cheez backward compatibility ke chakkar me ajj tk chali aa rhi h.
      null actual me object nhi hota, ye bas javaScript ki purani glti(bug) hai mtlb javaScript ka bug hai (ECMAScript standard ke time se).

  2. Non - primitive(Reference) data types.
 -->  ye mutable hote hai or ye heap memory mai store hote hai 
 -->  heap memory(mtlb jaise hm intermedate value ko apne mind m yaad rkte hai add krte tym vaise hi non - primitive datatypes value ko heap memory mai store krta hai).


| Data Type    | Example                      | Interview Tip                                    |
| ------------ | ---------------------------- | ------------------------------------------------ |
| **Object**   | `{ name: "Ankur", age: 21 }` | Key-value pairs. JS ka sabse important type.     |
| **Array**    | `[1, 2, 3]`                  | Indexed collection of items.                     |
| **Function** | `function() {}`              | JavaScript mein function bhi object hi hota hai. |

4.Data
5.Map,Set,RegExp,etc- modern JS features.

Ye values memory ke reference se access hoti hain, isliye inko reference types bhi bolte hain.
Ye heap memory mein store hote hain. Aur ye mutable hote hain – matlab inki value change ho sakti hai
inka refrerencs (address) memory me store hota hai, aur copy nhi balki pointer pass hota hai isliye iski value direct change hoti hai asli wali.

typeof "hello"       // "string"
typeof 123           // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // ❗"object" (bug)
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "callable object"

JavaScript me funcation ek"callable object" hota hai- mtlb wo object ki trh bheve krta hai + usse call (invoke) bhi kiya ja skta hai.

   */

let obj = {
     "name": "Ankur",
     "Job code": 7890,
    "is_handsome": true
    }

console.log(obj);
obj.Salary = "1000crores";
console.log(obj);
obj.Salary = "2000crores";
console.log(obj);

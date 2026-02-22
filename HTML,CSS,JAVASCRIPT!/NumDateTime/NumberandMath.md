# All About Number in JavaScript
1) In JavaScript, numbers represents both integer and floating-point values.
Unlike many other languages, JavaScript has only one number type: Number. No separate types for integers or floatss.

2) Number is technically a constructor function (also called a built-in object) in JavaScript.

-------------------------------------------------------------------------

## 1️⃣ JavaScript me sirf ek hi Number type hota hai

Dusri languages (jaise C, C++, Java) me:
- ```int``` alag type hota hai.
- ```float``` alag type.
- ```double``` alag type.

Lekin JavaScript me:

👉 Sirf ek hi number type hota hai → ```Number```

Chahe tu likhe:

```
let a = 10        // integer
let b = 10.5      // Floating point 
```

Dono ka:
```
console.log(typeof a)     // "number"
console.log(typeof b)     // "number"
```

Matlab JS integer aur decimal me difference nhi krta typ level pr.


par agr hm ye krte h:

```
let c = 124555594n
```

tbh typeof change hoke bigInt ho jata hai bss itna hi:

```
console.log(typeof c)        // typeof bigInt.
```

----------------------------------------------------------------------

## 🧠 Internally kya hota hai?

javaScript sab numbers ko 64-bit floating point format (IEEE 754) me store krta hai.

Isliye Mostly cases me:  agr hm ye krte hai -

```
0.1 + 0.2
```

to OutPut:
```
0.3000000000000000004
```

ye floating point precision issue hai.

Mtlb:  Jb hm ye krte hai - 

```
0.1 + 0.3
```

Expected: 
```
0.3
```

Actual: hme kya milta hai-
```
0.300000000000000004
```

Ab sawaal - aisa kyun?

### 🧠 Root Reason
JavaScript numbers ko internally sotre krta hai:

**👉 Binary (base 2) me**

👉 64-bit floating point format (IEEE 754)

Jaise hu normally numbers likhte hain base 10 me:
```
0.1 (base 10)
```

Computer likhta hai base 2 me:
```
0.000111001100110011.....(binary)
```

problem ye hai:

👉 0.1 binary me exactly represent nahi hota.

👉 0.2 bhi exactly represent nahi hota.

Ye dono internally slightly rounded values ban jate hain.

### 🧠 Thoda Visual Samajh
jaise :

1/3 ko decimal me likho:

```
0.333333333333....
```
Exact likh nhi skte - round krna padta hai.

Waise hi :

0.1 ko binary me exact likhna possible nhi.

To computer karta kya hai?

👉 Usko closest possible binary value me store krta hai.

------------------------------------------------------------------

#### Ab kya hota hai?

internally:
```
0.1 ≈ 0.10000000000000000555...
0.2 ≈ 0.20000000000000001110...
```

Ab in dono ko add kro:
```
0.300000000000000000000004
```
Isliye ye extra digits aa jate hain.

#### 💡 Important Point
Ye JavaScript ki problem nhi hai.

Ye floating-point system ki limitation hai.

ye issue:
- Java.
- Python.
- C.
- C++.
- Sab me hota hai.

---------------------------------------------------------------------

#### Real World Solution

Agar exact decimal chiye:

**Method 1: Round karo**
```
(0.1 + 0.2).toFixed(2)
```

**Method 2: Multiply trick**
```
(0.1 * 10 + 0.2 * 10) / 10
```

#### 🧠 Ek Line Me

0.1 aur 0.2 binary me exactly represent nahi hote,
isliye unka sum thoda inaccurate aata hai.

-----------------------------------------------------------------------

## Literal Method v/s Constructor Method For Creating a Number:

#### ye hm literal se number create krte hai to vo primitive hota hai 

```
let num = 1235566                // ye hmne Literals Method se banaye h.
let num1 = Number("2144333")
let num2 = Number(12343255)
```

#### ye hm Constructor se number create krte hai to vo non-primitive hota hai.

```
let num2 = new Number(12325325);     // ye Constructor Method.
```

- ye Constructor method se generally hm create nhi krte hai number ko ye ek built-in object hai JavaScript ka to hmee pta hai ye object ke kuch method or properties hote hai to hmne vo Number ka new keyword se instance create kra fir usse hm uske saare built-in properties or method ko browser m dekh skte hai jisse hm vo dekh kr sare method or properties sikh skte hai.

- ek or baat agr m ese Number() ka use kru to hm chahe '' ek andar apna number create kre ya fir normally pass kre number ke value kuch ese Number('2214425') ya normal kuch ese Number(32393595) tbh ye dono hi case m typeof iska Number hi dega.

- new Number() se jb hm create krte hai number to hme pta hai vo ek object hai or ek instance create krta hai or ye non-primitive number h or hm isse aviod isliye krte hai create krna number ko kyuki ye ek built in object hai or ye confusion bugs or unexepected behavior dikha skta hai hmesha hme number literals or Number(value) ka use krna hai without new keyword.


---------------------------------------------------------------------

## Number Properties & Methods

**Hme pta hai property kuch hme number ke bare mai information deti h or Method ek type ka function hi hota hai lekin agr vo kisi specific number object built ke liye bana hai or kisi pr vo apply nhi hoga to usse hm method kehte hai jaise hm dekh reh hai neche table mai parseInt() to ye ek function h js ka built in lekin ye sirf number pr applicable nhi hoga jaise array, string sirf nubmer pr hi hoga isliye isko hm method kehte hai**

#### 🔢 Number Properties

| Property                   | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `Number.MAX_VALUE`         | Largest possible number in JavaScript                 |
| `Number.MIN_VALUE`         | Smallest positive number greater than 0               |
| `Number.POSITIVE_INFINITY` | Represents Infinity                                   |
| `Number.NEGATIVE_INFINITY` | Represents -Infinity                                  |
| `Number.NaN`               | Represents "Not-a-Number" value                       |
| `Number.EPSILON`           | Smallest difference between two representable numbers |
| `Number.isNaN()`           | Checks whether a value is NaN                         |



```Number.MAX_VALUE```

```
console.log(Number.MAX_VALUE)
```

```Number.MIN_VALUE```

```
console.log(Number.MIN_VALUE)
```

```Number.POSITIVE_INFINITY```

```
console.log(Number.POSITIVE_INFINITY)
```

```Number.NEGATIVE_INFINITY```

```
console.log(Number.NEGATIVE_INFINITY)
```


**Hum Number.MAX_VALUE use kar rahe hain lekin humne Number ko initialize nahi kiya to ye Number hai kya?**


#### Number kya hai?
```Number``` koi variable nhi jo hmne yha pr banaya ho.

👉 Ye JavaScript ka built-in global object hai.

jaise:

- ```Math```
- ```String```
- ```Array```
- ```Object```

Waise hi:
- ```Number```

ye sab automatically brwoser / JS engine provide krta hai.

isliye hume initialze krne ki zarurat nhi hoti.

-------------------------------------------------------------------

#### Ye internally kaise exist krta hai?
JS engine ke andarr already defined hota hai:

Conceptually kuch aisa:
```
function Number() {
    // internal implementation
}

isliye hm direct likh skte hai :
```
console.log(Number)

Aur hme kuch esa milega:
```[Function: Number]```
Matlab ye ek constructor hai jo engine me phle se defined hai.

------------------------------------------------------------------

#### ```Number.MAX_VALUE``` ka mtlb kya hai?
Yaha:
- ```Number``` = built-in constructor object hai.
- ```MAX_VALUE``` = uska static property hai.

ye kisi specific variable pe nhi laga.

ye laga hai Number constructor pe.

jaise:
```
Math.PI
```

hm Math ko initialize nhi krte fir bhi use krte hai.

same concept.

------------------------------------------------------------------

#### Static Property kya hoti hai?
Property jo object ke instance pr nhi balki directly construtor pe hoti hai.

Example:
```
Number.MAX_VALUE   // ✅
Math.PI            // ✅
Array.isArray()    // ✅
```

Lekin:
```
let x = 10
x.MAX_VALUE     // ❌ undefined
```
Kyuki MAX_VALUE Number constructor ki property hai, primtive number ki nhi.

-------------------------------------------------------------------

#### Final Clear Model
```
Global Environment
   ├── Number
   ├── Math
   ├── String
   ├── Array
   └── Object
```

ye sab automatically available hote hain.

Hm unko initialize nhi krte.

#### Ek Line Me

```Number``` ek built-in global constructor hai
jo JavaScript engine already provide karta hai,
aur ```MAX_VALUE``` uski static property hai.


#### 🛠 Number Methods
| Method              | Description                              |
| ------------------- | ---------------------------------------- |
| `parseInt()`        | Converts string to integer               |
| `parseFloat()`      | Converts string to floating-point number |
| `isNaN()`           | Checks if value is NaN                   |
| `Number.isFinite()` | Checks whether a number is finite        |


**use of parseInt() method**

```
let num = 123.56
console.log(Number.parseInt(num))

```

- sabse phle check ki jo number hmne define kra hai ki vo integer hai ya fir nhi vo hmne kara isInteger() method se to ye hme false return krega to confirm hogya ki ye integer nhi hai float hai ```console.log(Number.isInteger(num))```.

- phir hm parseInt() method ka use krke usse int mai convert kr dengai or ye round-of wagera nhi krta hai sirf integer m convert krke deta hai ye hme.


**use of isNaN() method**

👉 Check krta hai ki value NaN (Not-a-Number) hai ya fir nhi.

Basic Example:

```
console.log(isNaN(123))       // false
console.log(isNaN("123"))     // false (convert ho jayega number me)
console.log(isNaN("hello"))   // true
console.log(isNaN(NaN))       // true
```
#### ```isNaN()``` pehle convert karta hai
```console.log(isNaN("123"))```  // false 

kyuki :
- ```"123"``` → convert ho gaya 123 me
- 123 valid number hai
- Isliye false

-------------------------------------------------------------------

#### Better Version: Number.isNaN()
```
let num = "hello"
console.log(Number.isNaN(num))      // true
console.log(Number.isNaN("hello")) // false
console.log(Number.isNaN(NaN))     // true
```

**use of isFinite()**

👉 Check karta hai value: Matlab valid finite number hai ya nahi.

Example:
```
console.log(isFinite(100))        // true
console.log(isFinite("100"))      // true (convert ho gaya)
console.log(isFinite(Infinity))   // false
console.log(isFinite(NaN))        // false
```

-----------------------------------------------------------------

Better Version: ```Number.isFinite()```

```
console.log(Number.isFinite(100))      // true
console.log(Number.isFinite("100"))    // false
console.log(Number.isFinite(Infinity)) // false
```

ye strict version hai.

---------------------------------------------------------------------

## Number Instance Method (used on Number primitives)

| Method           | Kya karta hai                      | Return Type |
| ---------------- | ---------------------------------- | ----------- |
| toFixed(n)       | Decimal places fix karta hai       | String      |
| toExponential(n) | Scientific notation me convert     | String      |
| toPrecision(n)   | Total significant digits set karta | String      |
| toString()       | Number → String                    | String      |
| valueOf()        | Object → Primitive number          | Number      |

Ye methods Number primitive values pe use hota hain. JavaScript internally primitive ko temporary object me convert krta hai (auto-boxing) taaki methods kaam kr sakein.

```
let num = 10
num.toFixed(2)
```

Yaha: 
- ```num``` primitive hai.
- JS temporary Number object banata hai.
- Method call krta hai.
- Fir object destroy ho jata hai.

Is process ko bolte hai 👉 **Auto-boxing**

-----------------------------------------------------------------------

### 1️⃣ toFixed(n)
**Description**:

Number ko ```n``` decimal places tak format krta hai mltb jo vi value hm toFixed() method ke andar pass karengai vo number ko utne point ke baad ki value dikhayega bss itna hi hai.

```
let num = 12.3456

console.log(num.toFixed(2))      // "12.35"
console.log(num.toFixed(0))      // "12"
```

🧠 Important:
- Return value **string** hoti hai.
- Rounding hoti hai.

-----------------------------------------------------------------------

### 2️⃣ toExponential(n)
**Description**:

Number ko exponential (scientific) notation me convert krta hai, mtlb ye hme bss itna btata h ki jo vi number hm method ke andar pass karengai vo utne durr tk fractional value hme dikhata hai jaise 3 to 3 tk hi dikhata hai ye value hm decimal ke baad.

```
let num = 12345
console.log(num.toExponential(3))   // "1.23e+4"
```

🧠 Use case:
- Bahut bade ya bahut chhote numbers ke liye useful.

------------------------------------------------------------------------

### 3️⃣ toPrecision(n)
**Description**:

Number ko total ```n``` significant digits me format krta hai, mtlb jo vi value hm pass krte hai method ke andar vo utne durr tk starting se value hme de dega jaise 3 diya to man ye 123.456 h nubmber hamara fir uske baad hmne 3 de diyo iss method ke andar to ye hme 123 hi return krega bss or ek chiz jaise mera decimal 3 digit ke baad hai to agr m precision value 2 pss kr raha hun method ke andar to return mai hme to exponential value mil skti hai.

```
let num = 123.456

console.log(num.toPrecision(4))    // "123.5"
console.log(num.toPrecision(2))    // "1.2e+2"
```

🧠 Difference from toFixed():

- toFixed() → decimal places count karta hai
- toPrecision() → total digits count karta hai

------------------------------------------------------------------------

### 4️⃣ toString()
**Description**:

Number ko string me convert krta hai, or iska ek fyda hai ki hm string ke method, properties ispr apply kr skte hai.

```
let num = 100

console.log(num.toString())    // "100"
console.log(typeof num.toString())   // "string"
```

🧠 Base conversion bhi kar sakte hain:

```
console.log((255).toString(2))      // "111111"    (binary)
console.log((255).toString(16))     // "ff"        (hexadecimal)
```

---------------------------------------------------------------------

### 5️⃣ valueOf()

**Description**:

Number object ka primitive value return krta hai, mtlb man le hmne ek new keyword ka use krke ek number create kra or usme ek number pass kr diya kuch vi to jb hm sirf uss normal number ko console krengai tbh vo hme ek function object ke format jisse non-primitive kehte hai usko ye valueOf() method primitive value mai convert krke deta hai hmne bss itna hi hai isme.

```
let numobj = new Number(50)

console.log(numObj.valueOf())    // 50
console.log(typeof numbObj.valueOf())    // "number"
```

🧠 Important:

- Mostly internally use hota hai.
- Primitive numbers me normally direct use nahi karna padta.

----------------------------------------------------------------------


# ABout math in JavaScript

## 1️⃣ Math aaya kaha se?
JavaScript me kuch built-in global objects hote hain:
- Object.
- Array.
- Number.
- String.
- Date.
- Math.
- etc.

Ye sab JS engine (V8, SpiderMonkey, etc.) already provide krta hai.

Mtlb:

👉 Jab JS load hota hai.

👉 Ye objects automatically memory me available hote hain.

Hm inko create ya initialize nhi krte hai Engine phe se bana ke deta hai.

-----------------------------------------------------------------------

## 2️⃣ Math internally kya hai?
Technically:
- Math ek **built-in-static object** hai mtlb iske kuch method or properties hoengai.
- Ye constructor nhi hai.
- Iske andar sirf **static methods aur constants** hote hai.

Conceptually aise socho:

```
Math = {
    PI: 3.141592653589793,
    round(): function() {},
    floor(): function() {},
    ceil: function() {},
    random: function() {},
    ...
}
```

⚠️ Ye real internal code nahi hai
Bas samajhne ke liye structure hai.

------------------------------------------------------------------------

## 3️⃣ Hum new Math() kyu nahi karte?
kyuki:
- ```Math``` constructor nhi hai.
- Iska purpose object banana nhi.
- Sirf mathematical utilities dena hai.

Agar hm try kare :

```
new Math()
```

👉 Error aayega.

Kyuki Math me constructor behavior hi nhi hai.

------------------------------------------------------------------------

## 4️⃣ Math static object kyu hai?
Do treeke hote hain design ke:

#### 🟢 Instance based (like Array)

```
let arr = new Array()
```
Yaha har array ka apna data hota hai.

-----------------------------------------------------------------------

#### 🔵 Static utility object (like Math)
Math kisi specific data pe kaam nhi krta.

Example: 
```
Math.sqrt(25)
```

Yaha koi internal state nhi hai.

Bas input lo → output do.

Isliye:

👉 Iska instance banana pointless hota hai.

👉 Isliye direct static methods use hote hain.

------------------------------------------------------------------------

## 5️⃣ Direct use karne se kya behaviour milta hai?
Jab hm likhte hai:

```
Math.round(4.6)
```

Engine:
1. Global scope me Math object dekhta hai.
2. Usme round method call krta hai.
3. Result return krta hai.

Koi object creation nhi hota koi memory waste nhi hoti Bas direct calculation hoti hai.

Efficient + Fast.

------------------------------------------------------------------------

##  6️⃣ Math vs Number difference

| Math                     | Number                               |
| ------------------------ | ------------------------------------ |
| Static object            | Constructor + static object          |
| Instance nahi bana sakte | Instance bana sakte (`new Number()`) |
| Sirf calculations        | Type + conversion + formatting       |

------------------------------------------------------------------------

## Math Methods

## Math Methods

| Method              | Description                                                | Example | Output |
|---------------------|------------------------------------------------------------|---------|--------|
| Math.round(x)       | Number ko nearest integer me round karta hai              | Math.round(4.6) | 5 |
| Math.floor(x)       | Number ko niche wale integer tak round karta hai          | Math.floor(4.9) | 4 |
| Math.ceil(x)        | Number ko upar wale integer tak round karta hai           | Math.ceil(4.1) | 5 |
| Math.abs(x)         | Absolute (positive) value return karta hai                | Math.abs(-10) | 10 |
| Math.sqrt(x)        | Square root nikalta hai                                   | Math.sqrt(25) | 5 |
| Math.pow(x, y)      | x ki power y return karta hai                             | Math.pow(2, 3) | 8 |
| Math.min(...args)   | Multiple numbers me se smallest number return karta hai   | Math.min(3,1,7) | 1 |
| Math.max(...args)   | Multiple numbers me se largest number return karta hai    | Math.max(3,1,7) | 7 |
| Math.random()       | 0 (inclusive) aur 1 (exclusive) ke beech random number deta hai | Math.random() | 0.534... |
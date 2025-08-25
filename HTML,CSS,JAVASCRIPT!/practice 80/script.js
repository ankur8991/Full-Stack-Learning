// Object orientation programming is not uses in small level of projects OOPS Concept uses for only Created Complex levels of Projects.
/*
let obj = {
    a: 1,
    b: "Ankur"
}

console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // Iss tarike se ek objct ko dusre object mai inherit krvate hai with the help of proto-Keyword with prototype Concepts{Which means that  we can added some Additonal property in rabbit object to by animal object}.
*/

// ProtoType in JavaScript -> JavaScript mein sab kuch object se bnta hai. Aur har objet ke pass ek hidden link hota hai kisi dusre object se - Usi ko Prototype kehte Hai.  {oR in Simple Defination} -> Prototype ek object hota hai, jisme wo properties aur methods hote hain jo inherit(yaani milte) hain dusre objects ko.

// LEt's we introduce Class Concepts with means we cannot always added some property in other object ot other object by Prototype which is complexity created when we Added more than more property added that's why we can uses that Class COncepts.
/*
class Animal{
    constructor(name){
        this.name = name
        console.log("Jab vi object Create hota hai tbh  ye constructor ke ander ki lines of code Execute hoti h...")
    }
    
    eats(){
        console.log("Khana kha rah hun")
    }

    jumps(){
        console.log("kuud kr shant baitha hun")
    }
}

class lion extends Animal {
    constructor(name , color){
        super(name) // parent constructor ko call krna zaroori hai phle kyuki child class mai agr constructor bna hai to phle parent class ka constructor call hota hai.
        this.color = color;
    }

    jumps(){
        console.log("kuud kr shant baitha hun agr fir se kudda to mai fir iss br roar!")
    }

}

let a = new Animal("Bunny");
console.log(a)

let b = new lion("Sherrrrrr" , "Crystal Golden");
console.log(b)
*/

// Let'S take another example with the user input.
/*
class person{
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi, My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const p1 = new person("ANkUr" ,20);
console.log(p1);
p1.greet();
*/

//Let's take another example of inhertiance.
/*
class Animal{
    constructor(name){
        this.name = name;
    }

    speaks() {
        console.log(`${this.name} makes menacing voice and gave us chills`);
    }
}

class Dog extends Animal {
    // overwritten here.
     speaks() {
        console.log(`${this.name} barks and gave us scary`);
    }
}

const a1 = new Animal("lyerWord")
a1.speaks();

const a2 = new Dog("BullDog")
a2.speaks();
*/

//PolyMorphism{Overriding} -> Ek hi methods ke alg-alg behaviour hona depending on class.
/*
class Shape {
    area() {
       return "Area not Defined here becz of their only written motive is inheritant by another child class"
    }
}

class Circle extends Shape {
    area(){
        return " Area of Circle is pir^2"
    }
}

class Square extends Shape {
    area(){
        return " Area of Circle is r^2"
    }
}

const c = new Circle();   // Yha pr kuch pss nhi kr rah mai argument
console.log(c.area())    //Isliye yha pr mai console.log() c.area() ko print kr rah hun.

const d = new Square();
console.log(d.area())
*/

// Encapsulation -> Data(properties) aur functions(methods) ko ek hi jagah - class ke ander - band krna.  Aur kuch cheezein baahar se access nhi krne dena. sirf jo zaroori ho whi dikhana.   ye Concept data ko secure krta hai.

// Real-life Example:
// Bank account ka balance kisi ko directly access nhi krne Dena.
// SIrf deposite() aur withdraw() functions se hi kaam hota hai.

//Normal public properties(Not safe) isme koi vi banda balance directly change kr skta hai isliye ye unsafe.
/*
class Bank {
    constructor() {  //yeh constructor hardcoded 0 value se balance set kr rha h - mtlb hr account banate hi balance hmesha 0 hi rhega by default
        this.balance = 0;  // public
    }
 
    deposite(amount) {
        this.balance += amount; // yha pr amount isliye pss kiya hai kyuki hm by defult kuch vi amount pss nhi kr rahe hai
    }

    getBalance() {
        return this.balance;
    }
}

const acc = new Bank();
acc.deposite("1cr")
console.log(acc.getBalance());

acc.balance = "10cr"; // kisi ne directly balance change kr diya with the help of some write of code in below down.
console.log(acc.getBalance())
*/
/*
class Bank{
    #balance = 0;   // private property.

    deposite(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;
        }
        else{
            console.log("INsufficent funds");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new Bank();
acc.deposite("5cr");
console.log(acc.getBalance());

acc.#balance = 1; //Error: Due to private feid cant be accessed.
*/
// #balance ek private feild Hai.
// sirf class ke ander hi access ho skta hai. 
// class ke bhr se access krne ki koshish karoge to error milega.

// class Demo{
//     #secret = "hidden";
 
// Show() {
//     console.log(this.#secret);
// }
// }

// let d1 = new Demo();
// d1.Show()
// console.log(d1.#secret); // isko direct acess nhi krskte hai 
// console.log(d1.Show()); // agr mujhe isse access hi krna hai to phle class ke ander hi ek method bnao or fir usko phle wah pr access kro fir uske baad hm console.log() mai krke ese show krva skte hai.
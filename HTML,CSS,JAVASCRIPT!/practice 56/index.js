let age = 0;

if (age == 18) {
    console.log("You can drive the vehicles!!");
}

else if (age == 0) {
    console.log("You are not Born Yet!!");
}

else {
    console.log("You cannot drive!!");
}

let a = 10;
let b = 15;
let c = a > b ? (a - b) : (b - a);
console.log(c);

/*
translate to:
if(a>b){
console.log(a-b);
}

else{
console.log(b-a);
}

*/
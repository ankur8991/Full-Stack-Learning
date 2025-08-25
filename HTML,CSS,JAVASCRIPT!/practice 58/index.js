// funcation ka  mtlb app kuch code ko likh kr koi naam de skte ho and baad mai usey use kr skte ho with that name as many times .

/* funcation mainly teen kaam ke liye use hote ha
 1) jab aapka code app turant nhi chalana chaate future mein chalana chaate ho
 2) jab aapka code app  reuse krna chahte ho
 3) jab app code chalana chaahte ho har baar with different data.
 */

 function about(name) 
 {
    console.log("Hey " +name+ " You are too good in character")
    console.log("Hey " +name+ " You are build your personality")
    console.log("Hey " +name+ " You are bad because  you fall in again love and you mustbe exit this loop")
    console.log("Hey " +name+ " Why you laughing reason for other by defending your love")
 }

//  about("Ankur");


function Sum(a , b , c = 3) {    //c = 3 is default value mtlb  if we not push manully value in result  than these c = 3 value added.
    // console.log(a + b)
    console.log(a, b, c);
    return (a+b+c);
}

result=Sum(5, 6, 7);
result2=Sum(54 , 75);
result3=Sum(35 ,55);

console.log("The Sum of these two Numbers is :", result);
console.log("The Sum of these two Numbers is :", result2);
console.log("The Sum of these two Numbers is :", result3);


const func1 = (x)=>{           // funcation ko variable mai use krne ka fyda yeh hai ki usko hm internally ek or funcation mai pass kr skte hai.
    console.log("I am an arrow Function", x)
}


func1(67);
func1(46);
func1(89);
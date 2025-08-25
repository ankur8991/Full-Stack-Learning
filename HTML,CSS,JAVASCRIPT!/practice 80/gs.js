/*
Getter And Setter -> ye tabhi important hota hai jb hume data ko secure rakhna ho, ya us pe control chahiye. 
  Simple bhasha mein: Hum chahte hain ki object ka data directly change ya access na ho, balki hmare rule ke through ho.
  ->  Getter(get) -> Value ko read krne ke liye hota hai.
  ->  Setter(set) -> Value ko set(ya update) krne ke liye hota hai.

Final Line : -> Getter aur Setter ka use hum isliye karte hai taaki data Safe, correct aur format mein ho, bina kisi ko object ke ander direct ghusne diya.

why? kyu chahiye control?
1. Data ko secure rakhna hai:
   . Jaise kisi ne salary = -10000 set diya. Galat hai na?
   . Hum chahenge ki salary kabhi negative  na ho.

2. Vaild input chahiye:
   . Naam kam se kam 3 letter ka ho.
   . Password Strong ho.
   . Age 18 se upar ho, etc.

3. Data ko Format Karke Dikhana:
   . Naam hamesha capital letters mein aaye.
   . Date formatted ho (e.g., dd-mm-yyyy)

   */

// Data ko secure rakhna hai{Negative salary ya balanace Allowed nhi}
/*
_name property:  
1). Sirf ander se use krne waali property dikhata Hai.
2). _name convential mtlb kya hai?
   -> Jab JavaScript mein real private variable nhi thi, tab developers ne apne rule banaye: 
      this._name = name;
   -> Yani,underscore _se naam likhna ya signal deta hai ki Yeh property internal/private hai,isse direct use{access} mt krn.
   -> But JavaScript usse truly private nhi banata . koi bhi bhr se change kr skta hai.
      const p = new personalbar("Ankur")
      p._name = "Hacked"; // ❌ Yeh possible hai.
   -> So _name bas ek coding rule(Convention) tha - jaise aadat, koi JS ka rule nhi.

   TO ab Sawal:
   "Bhai fir tu har jagah #name kyu nhi use krta, _name hi kyu?"
   .✅Reason : Browser support 
   . #private fields purane browsers mein nhi chalta(like old chrome, Safari, etc.)
   . Isliye jab hum maximum compatiblity chahte hain, to _name use krte hain.
   . To hm #name ka use tabh krte hai jb modern browser ya Node.js pe chale jaise internal tools, React/Vue projects, apps jahan tumhara control hai
     jaise: Chorme(80+), Firefox(72+), Node.js(12+), etc.
       ->  Jb hm #name use krengai to :
           . Wo sirf class ke ander accessible hoga 
           . Bahar se access ya even log vi nhi kr skte 
           . Hm dot{.} se access nhi kr payengai -ye real private hai koi conventional{nhi jo ki manne se private hoga koi log krengai nhi access}
             
*/

/*
class person {
   constructor(name) {
      this._name = name;  // _name is private conventionally.
   }

   // Getter jab naam access krengai tabh yeh chalega.
   get name() {
      return this._name.toUpperCase();  // naam hmesha capital letters mein milega.
   }

   // Setter - Jab name set krengai to yeh chalega.
   set name(newName) {
      if (newName.length < 3) {
         console.log("Naam km se km 3 letters ko hona chiye");
      }
      else {
         this._name = newName;
      }
   }
}

const p1 = new person("Ankur");
console.log(p1.name);

p1.name = "AI"
p1.name = "shivam"
console.log(p1.name);



// Iss code ko hi hmne _name se #name mai kra hai kyuki hm ek brr truly private value se code ko chalana chahte the naki sirf conventional se!
class person{
   #name;   // Truly Private field.

   constructor(name){
      this.#name = name;
   }

   get name() {
      return this.#name.toUpperCase();
   }

   set name(newName){
      if(newName.length < 3){
         console.log("Naam km se km 3 letters ka hona Chahiye.")
      }
      else{
         this.#name = newName;
      }
   }
}

const p1 = new person("ANkur");
// console.log(p1.#name);  we cannot use the this truly private #name directly by outside the code of line means not internally in the class 
console.log(p1.name);

p1.name = "kartik"
console.log(p1.name)

p1.name = "AI"
*/

/*
ek or Real life example code getter or setter le according! {secert code} 
    . constructor(secert code) -> shuru mein secert code set hota hai.
    . get code () -> actual code nhi dikhata, sirf "HIDDEN" dikhata hai.
    . set code () -> jab bhi koi code set karega tbh:
         .✅ kam se kam 8 Characters ka ho.
         .✅ Ek special character ho: @ ya # hona chahiye.
         .❌ 123 jaise weak part nhi ho.
         .✅ agr sab pass kre, tabhi code update ho.

   constructor ka km ->
        . jb hm likhte hai let code1  = new Secert("@Ankur123") tabh ye constructor automatically call hoga bina kissi code ko outerside likhte
          hue .
  

 class Secert{
   #code;   // ✅ Real private field.

   constructor(secretcode) {   
      this.#code = secretcode;
   }

   get code () {
      return "***HIDDEN***";
   }

   set code (newCode) {
      // 1.✅Length check.
      if(newCode.length < 8){
         console.log("❌Code must be at least 8 characters long! ");
         return;
      }

      // 2.✅ Must includes @ or #.
      if(!newCode.includes("@") && !newCode.includes("#")){
         console.log("❌ Code must includes '@' or '#'! ");
         return;
      }

      //3.✅ Cannot contain '123'.
      if(newCode.includes("123")){
         console.log("❌ Weak Code: avoid using '123'! ")
         return;
      }

      //4.✅ First characrter must be @ or #.
      if(!(newCode[0] === "@" || newCode[0] === "#")) {
         console.log("❌ First character must be '@' and '#'! ");
         return;
      }

      //5.✅ Second character must be uppercase letter (A-Z).
      if(! /[A-Z]/.test(newCode[1])) {
         console.log("❌ Second character must be an uppercase letter (A-Z)! ");
         return;
      }

      //6.✅ Must COntains at least one Number.
      if(!/\d/.test(newCode)) {
         console.log("❌ Code must contains at least one number (0-9)! ");
         return;
      }

      //All Good 👍.
      this.#code = newCode;
      console.log("✅ Secert code updated successfully! ");
   }

   revealCode(){
      return this.#code;
   }
 }


 const s  = new Secert("dummy");

 //Too short
 s.code = "@A12";    // 8 characters nhi hai.

 //Missing @ or #.
 s.code = "Aman1234";     // @/# nhi hai.

 //Contains 123.
 s.code = "123";         // present 123.

 // First  char not @/#.
 s.code = "A@man12";      //1st char vaild nhi hai.

 //Second char not upperCase.
 s.code = "@aMan123";    //2nd char uppercase nhi hai.

 //No number.
 s.code = "@Azure";   //number hai hi nhi.

 //✅ vaild
 s.code = "#Zcode789";   // yeh Code sare rule pass krta hai.

 console.log(s.code);   // It Will ***HIDDEN*** becz we can already in get function written HIDDEN.
 console.log(s.revealCode()); // only can access the passwords and it's return #Zcode789.

 */

 /*
    Ek or Real-Life Example -> Full Bank Account Class.
    Feature                                 Explantion
-------------------------------------------------------------------------------------------    
    #balance                                True private variable(secure data).
    Getter(get)                             Sirf read krna ke liye balance show.
    Setter(set)                             Disable direct balance set.
    deposite()                              Paise add krna ka method.
    withdraw()                              paise nikaalne ka method(WIth check).
    #transaction[]                          saari activity ka record.
    history getter                          History print karta hai line by line with date/TIme ke saath.
    transfer TO ANother account             ye transfer krta hai ek account se dusre acount mai.
    UPI transfer                            External mai jab hm kissi ko paise bhejte hai with the help of UPI-ID("Someone@upi") string ke duara.

 All code Simplify ->
 1). #balance ,#transaction ,#name Ye 3 private properties hain. #lagaker banate hai takki koi bhr se directly access na kr ske.
      . #balance: kitna paise hai account mein.
      . #transaction: jitni vi activity hui unka record.
      . #name: account holder ka naam.
 2). constructor(ownerName , initialAmount = 0).
      . Jab new account{using by Object} banega to ye function chalega.
      . ownerName: Kiska account hai.
      . initialAmount: shuru mein kitna paisa hai(agar kuch na diya to 0 maanege).
      . #logTransaction(...): ek helper method hai jo transaction history mein note karega ki account bana aur kitna paise the uss account mai.
            -> const acc1 = new BankAccount("Ankur" , 1000);
 3). #logTransaction(message)
      . private helper method hai.
      . isme current time ke saath ek message save hota hai #transactions array mein.
      . new Data().toLocalString() -> se time milta hai.
 4). get balance()
      . jab acc1.balance likhoge to ye method chalega.
      . console.log("...") krega or fir #balance return karega.
 5). set balance()
      . Hum balance ko directly change na kr paye isliye ye block krta  hai.
          example of code -> acc1.balance = 1000000;   // Direct change not allowed.
 6). deposite(amount)
      . Agr amount sahi hai mtlb {positive hai}, to #balance mein add karega.
      . #logTransaction karega or message print karega.
          -> acc1.deposite(500);
 7). withdraw(amount)
      . Agr amount shi hai or balance se kam hai paisa deduct hoga.
      . Nahi to ❌ error ayega.
          -> acc1.withdraw(200);  // ✅200 withdraw.
 8). tranferTo(recevier , amount)
      . Ye method ek account se dusre BankAccount object ko paise bhejta hai.
      . Dono ka #balance update hota hai.
      . Dono mai #logTransaction bhi hota hai
          -> acc1.transferTo(acc2 , 300);   //✅ acc2 ko 300 bheje paise.
 9). upiTranfer(upiId, amount, app = "Phonepe")
      . Ye normal UPI transfer jaisa km ktra hai.
      . UPI ID ke through paisa bhejne ka simulation hai.
      . app default hai "Phonepe", lekin hm paytm, Gpay bhi pass kr skte hai.
             -> acc1.upiTranfer("ankur@upi" , 200 , "Gpay");
 10).get history()
      . jab acc1.history likhoge, to sari transactions time ke saath console mein print hogi.
          acc1.history;   // 📜 shows full history.

   ✅ Bonus: private ka fayda 
       . #balance, #name,#transactions ko koi object ke bhar se access ya modify nhi kr skta.
       . Sirf methods se hi control possible hai - Yehi hota hai true encapulations.
 */


   class BankAccount {
      #balance;        
      #transactions = [];
      #name;

     constructor(ownerName , initialAmount = 0){
      this.#name = ownerName;
      this.#balance = initialAmount;
      this.#logTransaction(`✅ Account created with ${initialAmount}`);
     }

     //Helper: Add entry with timestamp.
     #logTransaction(message) {
      const time = new Date().toLocaleString();
      this.#transactions.push(`[${time}] ${message}`);
     }

     // ✅ Balance Getter
     get balance() {
      console.log("Checking balance...");
      return this.#balance;
     }

     // ❌ Block balance set
     set balance(_) {
      console.log("❌ Cannot directly set balance.");
     }

     //💰 Deposite 
     deposit(amount) {
      if(amount <= 0) {
         console.log("❌ Amount must be positive");
         return;
      }
      
      this.#balance += amount;
      this.#logTransaction(`💰 Deposited ${amount}`);
      console.log(`✅ ${amount} deposited`);
     }

     //💸 Withdraw
     withdraw(amount) {
      if(amount <= 0 || amount > this.#balance) {
         console.log("❌ Invaild withdraw amount");
         return;
      }

      this.#balance -= amount;
      this.#logTransaction(`💸 ${amount} withdrawn`);
     }

     //Transfer to another account
     transferTo(recevier , amount) {
      if(!(recevier instanceof BankAccount)){
         console.log("❌ Invaild account to transfer");
         return;
      }
      if(amount <= 0 || amount> this.#balance) {
         console.log("❌ Invaild transfer amount");
         return;
      }

      this.#balance -= amount;
      recevier.#balance += amount;

      this.#logTransaction(` Sent ${amount} to ${recevier.#name}`);
      recevier.#logTransaction(`Received ${amount} from ${this.#name}`);

      console.log(`✅ ${amount} transferred to ${recevier.#name}`);
     }

     //📲 UPI transfer.
     upiTransfer(upiId, amount, app = "phonepe") {
      if(amount <= 0 || amount > this.#balance) {
         console.log("❌ Invaild UPI amount");
         return;
      }
      this.#balance -= amount;
      this.#logTransaction(`📲 Sent ${amount} to ${upiId} via ${app}`);
      console.log(`✅ ${amount} sent to ${upiId} via ${app}`);
     }

     //Transaction History.
     get history() {
      console.log("📜 Transaction History: ");

      this.#transactions.forEach((entry, i )=> 
         console.log(`${i+1}. ${entry}`));
     }
   }

   const acc1 = new BankAccount("Ankur" , 5000);
   const acc2 = new BankAccount("Sikarwar" , 2000); 

   acc1.deposit(1000);
   acc1.withdraw(600);
   acc1.transferTo(acc2, 1300);
   acc1.upiTransfer("sikarwar@upi", 1000, "GooglePay");
   console.log("Ankur's Balance: ", acc1.balance);
   console.log("Sikarwar's Balance:", acc2.balance);

   acc1.history;
   acc2.history;


   /*
    IMPORTANT -> About #transactions = [] and #logTransaction(message).
    1). #transactions ->
      .  ek private array hai.
      .  Isme hum har deposit, withdraw, transfer ki details save krte hai.
      .  {#} lagane ka mtlb hai bahar se access nhi ho skta, sirf class ke ander hi kaam krega.
      .  Jab bhi koi paise add ya remove krega, hum isme ek string format mein note likh denge, jisme date/time + message hoga.
              -> Example [ '[26/07/2025, 8:20 pm] Deposited 1000',... ]
    
   📌Ab Ye Method Dekho:
   #logTransaction(message) {
      const time = new Date().toLocaleString();
      this.#transactions.push(`[${time}] ${message}`);
     }

   2)
   A). #logTransaction(message) :
     . Ye ek private funcation hai(sirf class ke ander use hoga).
     . jab bhi paisa deposit, withdraw, transfer karengai, toh hum is function ko call krengai message ke sath:
             -> this.#logTransaction("💸 Withdraw 500");

   B). const time = new Date().toLocalString(); :
     . Real-time date & time nikalne ke liye JavaScript ka built-in Date object use kiya.
     . new Date() se current date & Time milta hai.
     . .toLocalString() uska readable formate bana deta hai(like: 26/07/2025, 8:30 pm).
     
   C). this.#transactions.push([....]) :
     . Hum message ko format karke usme date/time add krte hain.
     . Jaise: 
        [23/07/2025, 8:35 pm ] 💰 Deposited 1000
     . Is string ko #transactions array mein add krte ja rhe hain.
     
   📌Ab dekho jab koi paise deposit krta hai :
    deposit(amount) {
     if(amount <= 0) {
       console.log("❌ Amount must be positive");
       return;
     }
       this.#balance += amount;
       this.#logTransaction(`💰 Deposited ${amount}`);     // `💰 Deposited ${amount}` ye tera ek message hai jo isme pass hora hai.
    }

    .  phele check krta hai ki amount vaild hai ya nhi.
    .  Agr vaild hai toh #balance mei add krta hai.
    .  Fir  #logTransaction(...) call krta hai .
        . Wo current time ke sath transaction message ko note krega or message jo hai vo vo ya to fir amount or withdraw or deposit ke 
          format mai ho skta hai jaise  { this.#logTransaction(`💰 Deposited ${amount}`); }
   
   📌Fir jab user bole: acc.history  :
   get history() {
     console.log("📜 Transaction History: ");
     this.#transactions.forEach((entry, i) => console.log(`${i + 1}. ${entry}'));
     }

   📘 Explanation:
   . Jab hm likhega: acc.history, toh ye function chalega.
   . #transactions array ke andar jitna bhi transactions stored hain, unko console pe print karega line by line.
     
   FINAL WORDS: Mtlb #logtransaction sare payment jitni vi h jaise withdraw, deposit, transferTo, upiTransfer sab mai #logtransaction ko 
   hm dengai or ye sari transaction ko detect krega or #transaction sari usme rhegai or histroy mai hm forEach() loop lgaengai kyuki jo #transaction
   hai ye ek array type mai store krta hai values ko or isme mai sari transaction ko jitne vi h sab isme hi rkhengai or history hme milegai.

   #logTransaction(message) {
    const time = new Date().toLocalString();
    this.#transactions.push(`[${time}] ${message}`);
   }
    
   .Jab bhi koi action hota hai(jaise Deposit,Withdraw,transfer,UPItransfer), to hm isko call krengai.

   .Ye kya karega?
      a. Real date/time lega.
      b. uske saath message(like Deposited $500) ko combine karega.
      c. Us entry ko #transactions array me store karega.

   ✅ #transctions array ka kaam:
     #transactions = [];
       . ye ek private jagah hai jahan hum saari transactions collect karte hain.
       . Jaise:
          [
               "[23/07/2025, 7:05 pm] ✅ Account created with $2000", 
               "[26/07/2025, 5:05 pm] ✅ Account created with $3000", 
               "[26/07/2025, 4:05 pm] ✅ Account created with $5000", 
               "[28/07/2025, 6:05 pm] 📲 Sent $200 to ankur@ybl via paytm" 
          ]
    */
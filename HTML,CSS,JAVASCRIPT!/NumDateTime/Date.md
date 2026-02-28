# All About Date in JavaScript

## Fundamentals:
1. GMT (Greenwich Mean Time) Time Zone).
2. UTC (Coordinated universal Time).
3. ISO Standard (International Organization for Standardization).
4. Unix Time And Unix Epoch.
5. How computers keep track of time.
6. Time Zones.

-----------------------------------------------------------------------

### A) GMT (Greenwich Mean Time) Time Zone.

- Ye time England ke ek jagah **Greenwich** se measure kiya jata tha.
- Ye earth ke rotation ke basis pr calculate hota hai.
- Phle duniya isi ko base time maanti thi.

**Simple Example:**

Soch duniya me ek main ghadi hai 🌍
Wo Greenwich me lagi hui hai.

Agar waha 12:00 PM hai → To India ka time hoga :

12:00 + 5:30 = **5:30PM**

Isliye bote hain:

India = GMT + 5:30.

------------------------------------------------------------------------

🧠 Important

GMT earth ke ghoomne (rotation) pr depend krta tha.
Earth perfect speed se nhi ghoomti - kabhi thoda fast, kabhi slow.

Isliye thoda inaccurate ho skta hai.

------------------------------------------------------------------------

### B) UTC(Coordinated Universal Time).

👉 UTC = Coordinated Universal Time.

Ye Modern standard time hai.

Ye earth ke rotation pr nhi, 
balki **atomic clocks** pr based hota hai.

Atomic clocks bohot hi accurate hote hain.

------------------------------------------------------------------------

| GMT                           | UTC                |
| ----------------------------- | ------------------ |
| Old system                    | Modern system      |
| Earth rotation based          | Atomic clock based |
| Thoda inaccurate ho sakta hai | Extremely accurate |

-----------------------------------------------------------------------

**JavaScript aur modern systems mostly UTC use karte hain.**

Time zones are usually written as offsets from UTC, like: UTC+1, UTC-4, etc example : India UTC 5:30 + forwards always mtlb UTC ka referance dekh kr or baki sari country iske reference se time leti hai jaise india m 5:30 ghante aage chalti hai india UTC se .

------------------------------------------------------------------------

### C) ISO Standard (International Organization for Standardization)

**👉ISO = International Organization for Standardization**

Ye ek international organization hai jo duniya bhar me **rules / standards** banati hai.

Taaki :
- Sab countries ek hi format follow karein.
- Confusion na ho.
- Systems compatible rahein.

Example Areas: 
- Date format.
- Time format.
- Currency codes.
- Country codes.
- Product quality standards.
- File formats.

Ye ensure krta hai ki duniya ek common rule follow kare.

**📅 ISO Date Standard**

**👉ISO 8601**

Ye date aur time ka global format hai.

Format:

```
YYYY-MM-DDTHH:mm:ss.sssZ
```

Example:
```
2026-02-25T14:30:00.000z
```


**Is format ka breakdown**
```
2026      → Year
02        → Month
25        → Date
T         → Date & Time separator
14:30:00  → Time
.000      → Milliseconds
Z         → UTC (Zulu time)
```

**Ye zaruri kyu hai?**

soch agr:

India me format hota:
```
25-02-2026
```

US me format hota:

```
02-25-2026
```

Agr hm backend se data bhejegai to confusion ho jayegai.

Isliye ISO bolta hai :

👉 Sari countries ek hi format use kro.


**🎯 Backend me ISO kyu use hota hai?**
- Database me universal format chahiye.
- Timezone confusion aviod krna hota hai.
- APIs globally consistent rhni chiye.


**ISO khud time system nhi hai. ISO rules banata hai format ke liye. UTC time system hai. ISO usko likhne ka standard format deta hai.**


-------------------------------------------------------------------------

### D) Unix Time And Unix Epoch.

**1️⃣ Unix Epoch kya hai?**

**👉 Unix Epoch = starting Reference Time**

Ye ek fixed starting point hai jisse computers time count krte hain.

Unix Epoch Date:
```
January 1, 1970
00:00:00 (UTC)
```
Is moment ko bolte hain:

👉 Epoch Time = 0.

Mtlb:

```
1 Jan 1970, 00:00:00 UTC → 0 Seconds.
```
ye hi base point hai.


**2️⃣ Unix Time kya hota hai?**

**👉 Unix Time = Seconds since Unix Epoch**

mltb:

```
1 Jan 1970 → 0 seconds.
1 Jan 1970, 00:00:01 → 1 second.
```

Agr aaj tk maan lo 1700,000,000 seconds beet gaye to Unix time = 1700000000.

**🧠 Important:**

Unix time hamesha:

👉 UTC ke base pr hota hai.

👉 Timezone se independent hota hai.

Isliye backend me safe hota hai.

**JavaScript me Unix Time**

JavaScript internally:

👉Miliseconds count krta hai (seconds nhi)

```
Date.now()
```

Ye return krta hai:

👉 Miliseconds since 1 Jan 1970 UTC.

Example output :
```
console.log(Date.now())

Output : 170000000
```

Ye milisecoonds h, seconds nhi.

Agar seconds chahiye :

```
Math.floor(Date.now() / 1000)
```

Ese hi agr hme min m jana chahte hai to 60 se or divide krdo 

```
Date.now()/1000/60
```

or agr ab hour m chiye to 60 se or divide krdo isme 

```
Date.now()/1000/60/60
```

or agr ab days m chiye to 24 se or divide krdo
```
Date.now()/1000/60/60/24
```

to ab hme years m chiye to finally hm 365 se kr dengai divide to hme ye year m dedega time jo Unix Time h 1 Jan 1970 se.

```
Date.now()/1000/60/60/24/365
```

**🧠 Deep Understanding**

Soch:

Computer ka data store krna h.

Instead of: 
```
25 Feb 2026, 6 : 30 PM
```

Wo store krta hai:

```
1708852200 seconds
```

Ye zayda easy hai:
- Compare krna easy.
- Calculate krna easy.
- Sort krna easy.

🟣 **Visualization**

```
Unix Epoch (Start)
↓
1 Jan 1970 00:00:00 UTC
↓
Seconds count hote rehte hain
↓
Current time = total seconds since that point
```


| Term       | Meaning                                 |
| ---------- | --------------------------------------- |
| Unix Epoch | Starting reference date (1970 UTC)      |
| Unix Time  | Us date ke baad kitne seconds beet gaye |


2038 problem isliye aayega kyuki 32-bit signed integer me Unix timestamp ki limit khatam ho jayegi.

-------------------------------------------------------------------------

### E) How computers keep track of time.
 
Computer human jaise "data" store nhi krta hai.

Wo store krta hai:

👉**Ek Number**

Ye number hota hai:

Miliseconds (ya seconds) since Unix Epoch (1 Jan 1970, 00:00:00 UTC)

**Internally kya hota hai?**

Computer ke pass hota hai:

1️⃣ System Clock (Hardware Clock)

Motherboard me ek small clock hoti hai jo continuosly tick krti rhti hai.

2️⃣ OS Time Counter

Operating System:
- Current time ko Unix timestamp me convert krta hai.
- Seconds / miliseconds count krta rhta hai.


Example:

```
1700000000 seconds since 1970
```

3️⃣ RTC (Real Time Clock)

Computer band hone pr bhi:
- CMOS battery clock ko chalati rhti hai.
- Taaki restart pr time reset na ho.

Computer time ko string me store nhi krta:

❌ "25 Feb 2026 6:30 PM"

Wo store karta hai:

✅ 1708852200

Compare karna, sort karna, subtract karna easy hota hai.

🎯 Final Understanding

Computer time ko ek continuously increasing number ke form me track karta hai
based on Unix Epoch.

Human readable format sirf display ke time generate hota hai.

------------------------------------------------------------------------

### F) Time Zone.

Unix timestamp sab jagah same hota hai.

Lekin display alag hota hai.

**🧠 Time Zone kya hai?**

Time zone = 👉 UTC se kitna aage ya peeche ho.

Example: 

India → UTC +5:30
London → UTC +0
New York → UTC -5

Important Rule

Unix timestamp:

👉 Time zone independent hota hai
👉 Sab jagah same rehta hai

Lekin jab display karte hain:

👉 System usko local timezone me convert karta hai


Example

Maan lo UTC time:

```
12:00 PM
```

India me dikhega:

```
5:30 PM
```

New York me:

```
7:00 AM
```

Timestamp same hai
Bas display conversion alag hai.


------------------------------------------------------------------------

## Date in JavaScript 

```Date``` **constructor function** hai.

Matlab:
- Ye ek built-in-object hai.
- Isse hum object bana skte hain using ```new```

Example:

```
let d = new Date()
```

Yaha:
- ```new``` kryword use hua.
- Ek Date object create hua.


**Agar new na lagaye to?**

yaha magic hota hai 👇 
```
let d = Date()
console.log(d)
```

Ye Date object return nhi karega❌ 
Ye ek **string** return karega (current date-time ka) Example : Thu Feb 26 2026 18:33:51 GMT+0530 (India Standard Time)

Matlab :

| Syntax       | Result      |
| ------------ | ----------- |
| `new Date()` | Date object |
| `Date()`     | String      |


Date ek built-in constructor function hai
jo internally Unix timestamp (milliseconds) store karta hai
aur usko readable date-time me convert karta hai.

-------------------------------------------------------------------------

**Creating a Date**

// 1. No Arguments (Current Date & Time)
```
let now  = new Date()          // Current date and time.
```

// 2. Date String (ISO or other Formats)
```
let date1 = new Date("2026-02-12T12:00:00")      // ISO format (recommended) here we  cannot put at the end Z that's why they can give us IST time and date returned due to we currently present in india local time shows they without Z put in the end.
```

```
let date2 = new Date("May 18, 2026 12:00:00")  // Long format.
```

```
let date3 = new Date("2026/04/19 12:00:00")  // Slash format(less reliable).
```

// 3. Numbers: new Date(year, monthIndex, day, hours, minutes, seconds, ms)
```
let date4 = new Date(2026, 2, 23, 12, 0, 0) //Feb 2, 2026, 12:00:00 here month can be stored in JavaScript with 0 index here we can write the month 2 so 2+1 => 3 month by our written side but in js there is 2 instead of 3.
```

// 4. Miliseconds Since Epoch (unix timestamp)
```
let date5 = new Date(12323554545987)    // Miliseconds since Jan 1, 1970
```

// 5. Copy Another Date
```
let original = new Date("2026-02-27")
let copy = new Date(original)
```


**Getting parts of the Date**

```let date = new Date()```
```date.getFullYear()```         // 2026
```date.getMonth()```            // 0-11 (0 = Januray)
```date.getDate()```             // 1-31
```date.getDay()```              // 0-6 (0 = Sunday)
```date.getHours()```            // 0-23
```date.getMinutes()```          // 0-59
```date.getSeconds()```          // 0-59
```date.getTimezoneOffset()```   // UTC - local time
```date.getMilliseconds()```     // 0-999 (miliseconds portion of the current second)

**Setting Parts of the Date**
```now.setFullYear(2027)```
```now.setMonth(0)```        // January
```now.setDate(1)```

**Working with Timestamps**
```Date.now()```       // Miliseconds since 1 Jan, 1970
```let timestamp = new Date().getTime()```

-------------------------------------------------------------------------

**Formatting Dates**

 *Date Object Formatting Methods*

| Method                | What it Returns |
|-----------------------|------------------|
| toISOString()         | Standard UTC format (ISO 8601) |
| toString()            | Full date & time string (local time zone) |
| toDateString()        | Date only (weekday, month, day, year) |
| toTimeString()        | Time only with time zone |
| toLocaleDateString()  | Local date format (e.g., DD/MM/YYYY) |
| toLocaleTimeString()  | Local time format (e.g., 12-hour or 24-hour) |

*Example*

```js
let d = new Date();

console.log(d)          // normal UTC return date with time
d.toISOString();        // 2026-02-27T12:30:00.000Z
d.toString();           // Thu Feb 27 2026 18:00:00 GMT+0530 (IST)
d.toDateString();       // Thu Feb 27 2026
d.toTimeString();       // 18:00:00 GMT+0530 (India Standard Time)
d.toLocaleDateString(); // 27/02/2026
d.toLocaleTimeString(); // 6:00:00 PM
```

**Custom Formatting (like dd/mm/yyy)**
```
let d = new Date()
let formatted = `${d.getDate()}day ${d.getMonth()+1}Month ${d.getFullYear()}Year`
```

### Notes:
- Months are zero-indexed in JS: 0 = January, 11 = December.
- JS Date is based on UTC internally, but displays in local time.
- Date calculations can be tricky - consider libraries like Luxon, Day.js, or date-fns for advanced use.

------------------------------------------------------------------------

## Calculations On TimeStamps

*Some basic*
- 1 Year = 365 days.
- 1 Day = 24 hours.
- 1 hour = 60 minutes.
- 1 minute = 60 seconds.
- 1 second = 1000 miliSeconds.

*A) What is a TimeStamp?*
- A TimeStamp is the number of miliseconds since the Unix Epoch (Jan 1, 1970 UTC).
- In JavaScript, Date objects internally store time / Date as timestamps(MiliSeconds).

*B) Getting the Current TimeStamp?*
- Use ```Date.now()``` to get the current timestamp:
- ```const now = Date.now()```  // Miliseconds since Jan 1, 1970.

*C) Convert Date to Timestamp?*
- Use getTime() on a Date object:
```
const date = new Date()
const timestamp = date.getTime()
```

*D) Convert Timestamps to Date*
- pass the timestamp to the Date Constructor:
```
let date = new Date(1772254058628)
console.log(date)
console.log(date.toLocaleString())
```

*E) Adding or subtracting Time*
- Timestamps are in miliseconds, so you can add or subract directly:

- 1 second = 1000 ms.
- 1 Minute = 60 * 1000 ms.
- 1 hour = 60 * 60 * 1000 ms.

Example :
```const oneHourLater = Date.now() + (60 * 60 * 1000)```

Another Example : 
```
let currentTime = Date.now()
undefined
currentTime
1772254551068
let tenMin = 1000 * 60 * 10
undefined
let updatedTime = currentTime + tenMin
undefined
updatedTime
1772255151068
let date = new Date(updatedTime)
undefined
date
Sat Feb 28 2026 10:35:51 GMT+0530 (India Standard Time)
date.toLocaleString()
'28/2/2026, 10:35:51 am'
updatedTime
1772255151068
let twoHrs = 1000 * 60 * 60 * 2
undefined
let newUpdateTime = updatedTime + twoHrs
undefined
let date = new Date(newUpdateTime)
undefined
date
Sat Feb 28 2026 12:35:51 GMT+0530 (India Standard Time)
date.toLocaleString()
'28/2/2026, 12:35:51 pm'
```

*F) Calculating Differences Between Dates*
- Subract timestamps to find duration:
```
const start = new Date('2025-05-04T10:00:00z')
const end = new Date('2025-05-04:1500:00z')
const diffMs = end - start     // in Miliseconds.
const diffHours = diffMs / (1000 * 60 * 60)
```

```
let date = new Date('2025-05-04T10:00:00z')
undefined
date
Sun May 04 2025 15:30:00 GMT+0530 (India Standard Time)
let date2 = new Date('2026-02-12T15:00:00z')
undefined
date2
Thu Feb 12 2026 20:30:00 GMT+0530 (India Standard Time)
let diffYears = date.getFullYear() - date2.getFullYear()
undefined
diffYears
-1
let diffYear = date1.getFullYear() - date.getFullYear()
VM1915:1 Uncaught ReferenceError: date1 is not defined
    at <anonymous>:1:16
(anonymous) @ VM1915:1
let diffYear = date2.getFullYear() - date.getFullYear()
undefined
diffYear
1
date
Sun May 04 2025 15:30:00 GMT+0530 (India Standard Time)
date2
Thu Feb 12 2026 20:30:00 GMT+0530 (India Standard Time)
let diffInMiliSec = date2.getTime() - date.getTime()
undefined
diffInMiliSec
24555600000
let diffMiliSec = date2 - date
undefined
diffMiliSec
24555600000
diffMiliSec/1000
24555600
diffMiliSec/1000/60
409260
diffMiliSec/1000/60/60
6821
diffMiliSec/1000/60/60/24
284.2083333333333
diffMiliSec/1000/60/60/24/365
0.7786529680365296
Math.floor(diffMiliSec/1000/60/60/24/365)
0
```

*G) Converting Miliseconds to Human Units*
- Convert Miliseconds into readable time:
```
const ms = 5405000
const minutes = Math.floor(ms / 1000 / 60)
const seconds  = ((ms % 60000) / 1000)
console.log(`${minutes}min ${seconds} sec`)
```

```
let MiliSec = 5422325626
undefined
MiliSec / 1000
5422325.626
MiliSec / 1000 / 60
90372.09376666667
let min = MiliSec / 1000 / 60
undefined
min
90372.09376666667
let min = Math.round(MiliSec / 1000 / 60)
undefined
min
90372
min
90372
(MiliSec % 60000) / 1000            // we can divide 1000 of module due to they give us miliseconds value to convert into the seconds of our milisecondes value.
5.626 
```
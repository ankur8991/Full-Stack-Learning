// let date = new Date()      // Date constructor.
// console.log(date)     // ye date format m h.
// console.log(date.toString())    // OUTPUT : Wed Feb 25 2026 19:33:12 GMT+0530 (India Standard Time)  ye local time hai india ka mtlb yha pr.
// console.log(date.toISOString()) // OUTPUT : 2026-02-25T15:07:37.482Z  ye string format mai hai.

// let d  = new Date('2026/02/15')
// console.log(d)    // OUTPUT : 2026-02-14T18:30:00.000Z but expacted output 2026-02-15T18:30:00.000Z but we can have one less month 14 due to the console displays the date in UTC, Subtracting 5.5 hours but if we can get totally our side written date and time so we can write full date and time with ISO standards not only date.


// let e = new Date('2026/03/12 05:42:45')   // So that's why we can write full of ISO standard format in ourSide written date and time.
// console.log(e)    // here the output in UTC format that's why the output cann't matched 2026-03-12T00:12:45.000Z with the our self date and time but if we can find output with same exact in console then we use method .toLocalString().

// let date = new Date('2026-12-13T12:12:12.354Z')    // ISO Standard.
// console.log(date)    // YYYY-MM-DDTHH:MM:SEC.MILISECZ

// Numbers: new Date(year, monthIndex, day, hours, minutes, seconds, ms)
// let date2 =  new Date(2026, 4, 20, 12, 0, 0)   // Feb 12, 2026, 12:00:00 but we get that 2026-05-20T06:30:00.000Z here we can  noticed the month index has one greater then our written in code because the index of months in javaScript is started with 0 index.
// console.log(date2)


// Miliseconds Since Epoch (unix timestamp)
// let date5 = new Date(1772114431226)
// console.log(date5.toLocaleString())    // OUTPUT : 26/2/2026, 7:30:31 pm.

// // Copy another Date
// let original = new Date("2024-05-23")
// let copy  = new Date(original)
// console.log(copy)


// Getting Parts o the Date.
/*
let date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())  // Currently months Feb 2 but we get the output 1 because of in JavaScript months are started with the 0 index that's why they can return 1 .
console.log(date.getDate()) 
console.log(date.getDay())  // Output : 5  means friday in the week of 7.
console.log(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds())   // here with we use getUTC methods they can return the same exact answer of the 2026-02-27T04:13:16.869Z , to gives same 4 13 16.
console.log(date.getHours(), date.getMinutes(), date.getSeconds())  // here the output will we received in 12 hours format that doesn't exact same the output of the date 2026-02-27T04:16:32.930Z, 9 46 32.
console.log(date.getTimezoneOffset()/60)  // here this methods gives us the time of india forwords or backwords in minutes but we can takes these in hours so we can simply divide with 60 means the time difference between the UTC time and india time so india is +5.30 above to the time of the UTC but they gives us in negative value due to the UTC - local date so here UTC is 00:00 - (+5:30) so that's why they can give us in negative value.
console.log(date.getMilliseconds())  // OUTPUT : 635 they can changes every times.

// Setting Parts of the Date.
date.setFullYear('2032')
console.log(date.getFullYear())
date.setMonth('11')         // If we can write here 12 so that they gives us the value 0 due to index starts of months 0 we can write the normal months with 1 so 1 month is jan and 11 month is dec but in the 12 case they can again listed the months with Jan that's why they can give us the value of 12 is 0 months.
console.log(date.getMonth())
date.setDate('14')         // here we can set the date.
console.log(date.getDate())
*/


// Working with timestamps
// let ts = new Date()
// console.log(ts.getTime() / 1000 / 60 / 60 / 24 / 365)       // getTime() is the method where we can get the current time with the unix epoch time since 1 jan 1970 that's called also the timestamps & timestamps is useful due to the we can all things about date, year, months etc. all of the things gets only these miliseconds timestamps.

/*
let timestamps = new Date().getTime()         // timestamps directlly gets.
console.log(timestamps)

let timstmp =  Date.now()
console.log(timstmp)
*/

/*
let date = new Date()
console.log(date)      // ISO standard UTC with Date type of output : 2026-02-27T12:44:53.240Z.

console.log(date.toString()) // Fri Feb 27 2026 18:14:53 GMT+0530 (India Standard Time) this is not follow ISO standard format to generate the output with 24hr format.
// Or agr hm chahte h ISO m hi rahe mtlb UTC m hi bss string m convert hojye.
console.log(date.toISOString())   // ISO standard UTC  with string type of output : 2026-02-27T12:46:32.463Z.
console.log(date.toDateString()) // here they return only the date of your current date with string type.
console.log(date.toTimeString()) // here they can return the time of your current time with string type of format.
console.log(date.toLocaleString())  // here the output : 27/2/2026, 6:24:54 pm this is perfect time and date without 24hours format with more perfect to your local location.
console.log(date.toLocaleDateString())  // here the only return us to only date with our local date according to our location.
console.log(date.toLocaleTimeString())  // here they can return the time with perfect readable format without 24hour format time.
*/

/*
let d = new Date()
let formatted = `${d.getDate()}day ${d.getMonth()+1}Month ${d.getFullYear()}Year`
console.log(formatted)
*/

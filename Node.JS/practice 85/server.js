var slugify = require('slugify');

let a = slugify('some string');
console.log(a);

// if you prefer something other than dash (-) as separator.
const b = slugify('some st#%#^$^#^^&ring' , '_');
console.log(b);
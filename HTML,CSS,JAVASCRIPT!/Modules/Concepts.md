# All About Modules

### 🔹 1. Problem kya thi (Why Modules aaye?)

Phle JS mein sab global scope mein hota tha:

```js
// file1.js
var a = 10;

// file2.js
var a = 20;  // conflict.
```

👉 Issue:
- Naming conflicts.
- Code maintain krna muskil.
- Large apps mein chaos(messy hojana/unorganized codebase).

**Solution → Modules**
👉 Har file apna scope = isolated + reusable.

-------------------------------------------------------------------------

### 🔹 2. Module kya hota hai?

- Modules are a way to organize code into reusable files.
- they help you split your code into smaller, manageable parts, making it easier to maintain, reuse, and avoid name collisions.


Simple:
👉 Har JS file = ek module
- Apna scope hota hai.
- Jo export karega wahi bahar dikhega.


```js
JavaScript Modules
│
├── CommonJS Modules (CJS)
│   └── Default Export
│
└── ECMAScript Modules (ESM / ES6)
    ├── Default Export
    └── Named Export
```

-------------------------------------------------------------------------

### 🔹 3. Export kya hota hai?

**✅ Named Export**

```js
// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

**✅ Import**
```js
import { add, sub } from './math.js';

add(2, 3)
```

👉 Rule:
- Name EXACT same hona chiye.


**✅ Default Export**

```js
// logger.js
export default function log(msg){
    console.log(msg);
}
```


**Import**
```js
import log from './logger.js';
```

👉 Rule:
- Sirf ek default export per file
- Name kuch bhi rakh skte hai


-------------------------------------------------------------------------

### 🔹 4. Named vs Default

| Feature            | Named   | Default |
| ------------------ | ------- | ------- |
| Multiple exports   | ✅       | ❌       |
| Rename flexibility | ❌       | ✅       |
| IDE support        | 🔥 Best | OK      |
| Refactor safety    | 🔥 High | Medium  |


👉 Production mein best practice:

👉 Prefer **named exports** (clean + scalable)

-------------------------------------------------------------------------

### 🔹 5. Re-export (barrel pattern)

```js
// index.js
export { add, sub } from './math.js'
```

```js
import { add } from './index.js'
```

👉 Use-case:
- Clean imports
- Large apps mein folder structure simplify

-------------------------------------------------------------------------

### 🔹 6. Dynamic Imports ( important for performance )

```js
const module = await import('./math.js')
module.add(2, 3)
```

👉 Use-case:
- Lazy loading.
- Code splitting.
- Performance optimization.

👉 Real example:

```js
if(user.isAdmin) {
    const adminPanel = await import('./admin.js')
}
```

-------------------------------------------------------------------------

### 🔹 7. Modules in Browser

```js
<script type="module" src="app.js"></script>
```

👉 Important:
- Strict mode automatically ON
- ```this``` = indefined (not window)
- CORS rules apply

-------------------------------------------------------------------------

### 🔹 8. Modules in Node.js

**Enable:**

```js
{
  "type": "module"
}
```

**Example:**

```js
import fs from 'fs'
```

👉 Ya ```.mjs``` extension use karo


-------------------------------------------------------------------------

### 🔹 9. CommonJS vs ES Modules

| Feature      | CommonJS | ES Modules |
| ------------ | -------- | ---------- |
| Syntax       | require  | import     |
| Load         | Sync     | Async      |
| Usage        | Old Node | Modern JS  |
| Tree shaking | ❌        | ✅          |

👉 Example:
```js
// CommonJS
const fs = require('fs')
```

```js
import fs from 'fs'
```

👉 ES Modules everywhere.

-------------------------------------------------------------------------

### 🔹 10. Tree Shaking

👉 Dead code remove karta hai

```js
// Math.js
export const add = () => {}
export const sub = () => {}
```

```js
import { add } from './math.js'
```

👉 Build tool (webpack/Vite) remove karega ```sub```.

👉 Works ONLY with ES modules.

-------------------------------------------------------------------------

### 🔹 11. Circular Dependency (Danger ⚠️)

```js
// a.js
import { b } from './b.js';

// b.js
import { a } from './a.js';
```

👉 Issue:
- undefined values.
- Hard-to-debug bugs.

👉 Avoid:
- Shared module bana lo.

-------------------------------------------------------------------------

### 🔹 12. Real Production Structure

```js
src/
 ├── utils/
 │    ├── math.js
 │    ├── string.js
 │    └── index.js   (barrel)
 ├── services/
 ├── components/
 └── app.js
 ```


-------------------------------------------------------------------------

### 🔹 13. Best Practices (GOLD)

👉 Always use:
- Named exports.
- Small focused modules.
- Barrel files (index.js).
- Absolute imports (if possible).

👉 Avoid:
- Default export everywhere.
- Circular dependencies.
- Gaint modules.

-------------------------------------------------------------------------


### 🔹 14. Real-world Example

```js
// api/userService.js
export const getUser = async (id) => {
    const res = await fetch(`/api/user/${id}`)
    return res.json()
}
```

```js
// component
import { getUser } from '../api/userService.js'
```

-------------------------------------------------------------------------

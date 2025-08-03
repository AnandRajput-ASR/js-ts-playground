/**
 * ===========================================
 * 📦 Modules: CommonJS vs ES Modules
 * ===========================================
 *
 * This file explains:
 * - How CommonJS works in Node.js
 * - How ES Modules work in modern JS
 * - Default & Named Exports
 * - Practical examples you can run & tweak
 *
 * 💡 Know this = No fear of module questions!
 */

// -------------------------------
// 1️⃣ CommonJS: require & module.exports
// -------------------------------

// In CommonJS (Node.js by default)
// File: add.js
/*
function add(a, b) {
    return a + b;
}

module.exports = add;

// Usage:
const add = require('./add');
console.log(add(2, 3)); // 5
*/

// -------------------------------
// 2️⃣ CommonJS: export an object
// -------------------------------

// File: math.js
/*
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };

// Usage:
const math = require('./math');
console.log(math.add(2, 2)); // 4
console.log(math.subtract(5, 2)); // 3
*/

// -------------------------------
// 3️⃣ ES Modules: export & import
// -------------------------------

// In ES6+ or "type": "module" in package.json
// File: multiply.js
/*
export function multiply(a, b) {
  return a * b;
}

export const PI = 3.14;

// Usage:
import { multiply, PI } from './multiply.js';
console.log(multiply(2, 3)); // 6
console.log(PI); // 3.14
*/

// -------------------------------
// 4️⃣ ES Modules: default export
// -------------------------------

// File: greet.js
/*
export default function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Usage:
import greet from './greet.js';
greet('Andy'); // Hello, Andy!
*/

// -------------------------------
// 5️⃣ Mixing them? Careful!
// -------------------------------

/**
 * ⚠️ In Node.js, if you mix CommonJS and ES Modules:
 * - CommonJS uses require(), module.exports.
 * - ESM uses import/export.
 * - If package.json has "type": "module", you must use ESM.
 * - For .mjs files, Node treats them as ESM.
 */

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ CommonJS: Older, Node.js default, require/module.exports
 * ✔️ ES Modules: Modern JS, import/export, static analysis, tree shaking
 * ✔️ Use "type": "module" or .mjs for ESM in Node.js
 * ✔️ Don't mix them unless you know the pitfalls!
 *
 * 💡 Master this & you’ll handle build tools, bundlers & runtime config with ease.
 */

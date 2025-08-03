/**
 * ===========================================
 * 🔑 `this` keyword, bind, call & apply
 * ===========================================
 *
 * This file explains:
 * - How `this` works in different contexts
 * - How `bind()`, `call()`, and `apply()` control `this`
 * - Practical examples with clear output
 *
 * 💡 Read every comment — you’ll ace interviews!
 */

// -------------------------------
// 1️⃣ Global `this`
// -------------------------------

console.log("Global this:", this); // In Node.js, `this` in global scope is `{}` (empty object)

// -------------------------------
// 2️⃣ `this` inside a function
// -------------------------------

function showThis() {
    console.log("Inside function:", this);
}

showThis(); // In Node.js, `this` inside a simple function is the global object (or `undefined` in strict mode)

// -------------------------------
// 3️⃣ `this` inside an object method
// -------------------------------

const user = {
    name: "Andy",
    sayHello: function () {
        console.log("Hello,", this.name);
    },
};

user.sayHello(); // 👉 `this` refers to `user` object ➜ "Hello, Andy"

// -------------------------------
// 4️⃣ `this` in arrow functions
// -------------------------------

const arrowObj = {
    name: "Andy",
    normalFunc: function () {
        console.log("Normal Func:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow Func:", this.name);
    },
};

arrowObj.normalFunc(); // `this` → arrowObj
arrowObj.arrowFunc(); // `this` → outer scope, here it's the module/global (undefined in strict)

// -------------------------------
// 5️⃣ Losing `this` — Common pitfall!
// -------------------------------

const greet = user.sayHello;
greet(); // `this` is lost ➜ `undefined` because it's a plain function now

// -------------------------------
// 6️⃣ Fixing `this` with `bind`
// -------------------------------

const boundGreet = user.sayHello.bind(user);
boundGreet(); // `this` stays locked to `user` ➜ "Hello, Andy"

// -------------------------------
// 7️⃣ Using `call` and `apply`
// -------------------------------

function introduce(lang1, lang2) {
    console.log(`${this.name} knows ${lang1} & ${lang2}`);
}

const dev = { name: "Andy Dev" };

introduce.call(dev, "JS", "TS");   // call() ➜ Pass args one by one
introduce.apply(dev, ["JS", "TS"]); // apply() ➜ Pass args as array

// -------------------------------
// 8️⃣ Class `this` in ES6
// -------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`My name is ${this.name}`);
    }
}

const andy = new Person("Andy");
andy.speak(); // `this` refers to the instance

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ `this` depends on *how* a function is called.
 * ✔️ Arrow functions don't have their own `this`; they inherit it.
 * ✔️ `bind` creates a new function with `this` fixed.
 * ✔️ `call` and `apply` call a function immediately with explicit `this`.
 *
 * 💡 Most interviewers test this!
 */


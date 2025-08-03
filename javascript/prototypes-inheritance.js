/**
 * ===========================================
 * 🧬 Prototypes & Inheritance
 * ===========================================
 *
 * This file explains:
 * - What prototypes are
 * - Prototype chaining
 * - Adding methods to prototypes
 * - Constructor functions vs ES6 classes
 *
 * 💡 This is *core* JavaScript — a must-know for deep dev knowledge!
 */

// -------------------------------
// 1️⃣ Every object has a prototype
// -------------------------------

const user = { name: "Andy" };
console.log(user.__proto__); // 👉 Points to Object.prototype

console.log(Object.prototype); // Top-level base prototype

// -------------------------------
// 2️⃣ Constructor functions & prototypes
// -------------------------------

// Constructor function
function Person(name) {
    this.name = name;
}

// Add method to prototype
Person.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name}`);
};

const andy = new Person("Andy");
andy.sayHello(); // 👉 Inherited from prototype

// `andy` has `__proto__` → Person.prototype → Object.prototype

// -------------------------------
// 3️⃣ Prototype chain lookup
// -------------------------------

console.log(andy.hasOwnProperty("name")); // true — directly on the object
console.log(andy.hasOwnProperty("sayHello")); // false — it’s on the prototype

// JS looks up the chain: instance → Person.prototype → Object.prototype

// -------------------------------
// 4️⃣ ES6 class syntax (syntactic sugar)
// -------------------------------

class Developer {
    constructor(name) {
        this.name = name;
    }

    code() {
        console.log(`${this.name} is coding...`);
    }
}

const devAndy = new Developer("Andy Dev");
devAndy.code(); // Uses the prototype behind the scenes

console.log(Object.getPrototypeOf(devAndy)); // Developer.prototype

// -------------------------------
// 5️⃣ Inheritance with classes
// -------------------------------

class SeniorDev extends Developer {
    reviewCode() {
        console.log(`${this.name} is reviewing code...`);
    }
}

const seniorAndy = new SeniorDev("Andy Senior");
seniorAndy.code();        // Inherited from Developer
seniorAndy.reviewCode();  // From SeniorDev

// Prototype chain: seniorAndy → SeniorDev.prototype → Developer.prototype → Object.prototype

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Every object has a prototype.
 * ✔️ Functions have a `prototype` property.
 * ✔️ Objects link to prototypes via `__proto__` (or `[[Prototype]]` internally).
 * ✔️ ES6 classes use prototypes under the hood — they’re just cleaner syntax.
 * ✔️ Inheritance chains prototypes for method reuse.
 *
 * 💡 Know this — you can answer any question about objects, OOP & inheritance in JS.
 */

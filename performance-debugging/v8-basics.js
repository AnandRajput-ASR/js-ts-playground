/**
 * ===========================================
 * ⚙️ V8 Engine Basics — Deep Dive
 * ===========================================
 *
 * ✅ V8 is Google’s JS Engine.
 *   - Powers Chrome, Node.js.
 *   - Converts JS to machine code.
 *
 * ✅ Core concepts:
 *   - JIT Compilation (Ignition & TurboFan).
 *   - Hidden Classes.
 *   - Inline Caching.
 *   - De-optimization.
 */

// ----------------------------------
// 1️⃣ JIT Compilation
// ----------------------------------

/**
 * ✔️ V8 first interprets code with Ignition (fast startup).
 * ✔️ Hot functions are optimized by TurboFan (faster execution).
 * ✔️ Code that changes shape a lot gets de-optimized!
 */

// ----------------------------------
// 2️⃣ Hidden Classes
// ----------------------------------

/**
 * ✔️ JS objects have hidden classes.
 * ✔️ Same property order → same hidden class → faster access.
 * ✔️ Adding properties dynamically → new hidden class → slower.
 */

function HiddenClassExample() {
    this.x = 1;
    this.y = 2;
}

const a = new HiddenClassExample();
const b = new HiddenClassExample();

// Same hidden class! Fast property lookup.
a.z = 3; // New prop → creates new hidden class → de-opts!

// ----------------------------------
// 3️⃣ Inline Caching
// ----------------------------------

/**
 * ✔️ V8 optimizes repeated property access.
 * ✔️ If object shapes are consistent → V8 caches where properties live.
 * ✔️ Changing shape breaks cache → slower.
 */

function addX(obj) {
    return obj.x + 1;
}

const obj1 = { x: 10 };
const obj2 = { x: 20 };

// V8 caches property lookup → fast!
console.log(addX(obj1));
console.log(addX(obj2));

// ----------------------------------
// 4️⃣ De-optimizations
// ----------------------------------

/**
 * ✔️ Inconsistent shapes, changing types → V8 de-optimizes.
 * ✔️ Example: using same variable for different types → slows down JIT.
 */

function confusing(num) {
    return num + 1;
}

console.log(confusing(1));     // Fast path: number
console.log(confusing("1"));   // Slow path: string → fallback

// ----------------------------------
// ✅ How to see this for real
// ----------------------------------

/**
 * Run Node with V8 flags:
 *
 *   node --trace-opt --trace-deopt v8-basics.js
 *
 * ➜ Shows what V8 optimizes or bails on.
 */

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Keep object shapes consistent.
 * ✔️ Avoid adding props dynamically.
 * ✔️ Watch mixed types → hurts optimizations.
 * ✔️ V8 does JIT magic → know it to write fast code!
 */

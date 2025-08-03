/**
 * ===========================================
 * 🔄 Event Loop: Microtasks & Macrotasks
 * ===========================================
 *
 * This file explains:
 * - What the Event Loop is
 * - How JS handles sync & async tasks
 * - Microtasks (Promises) vs Macrotasks (setTimeout)
 * - Practical output to understand the order
 *
 * 💡 Read & run this — then you’ll never fear async questions again!
 */

// -------------------------------
// 1️⃣ Example 1: setTimeout vs Promise
// -------------------------------

console.log("1️⃣ Script start");

setTimeout(() => {
    console.log("2️⃣ setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("3️⃣ Promise then() callback");
});

console.log("4️⃣ Script end");

/**
 * 📌 OUTPUT:
 * 1️⃣ Script start
 * 4️⃣ Script end
 * 3️⃣ Promise then() callback
 * 2️⃣ setTimeout callback
 *
 * 💡 Why?
 * - Promise callbacks go in the *Microtask Queue*
 * - setTimeout callbacks go in the *Macrotask Queue*
 * - Microtasks run first *after* the current stack
 */

// -------------------------------
// 2️⃣ Example 2: process.nextTick (Node.js only)
// -------------------------------

process.nextTick(() => {
    console.log("5️⃣ process.nextTick");
});

/**
 * 📌 `process.nextTick` runs *before* Promises:
 * - nextTick is higher priority than Promises in Node.js.
 * - Order: nextTick → Promises → Macrotasks.
 */

// -------------------------------
// 3️⃣ Example 3: Nested Promises & setTimeout
// -------------------------------

setTimeout(() => {
    console.log("6️⃣ Outer setTimeout");
    Promise.resolve().then(() => {
        console.log("7️⃣ Promise inside setTimeout");
    });
}, 0);

/**
 * 📌 Inside a macrotask, a Promise creates a new Microtask,
 * which runs *after the current macrotask completes*.
 */

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Call Stack runs synchronously.
 * ✔️ Microtasks (Promises, MutationObserver, queueMicrotask) run *after* the stack.
 * ✔️ Macrotasks (setTimeout, setInterval, I/O) run after Microtasks.
 * ✔️ Node.js: process.nextTick > Microtasks > Macrotasks.
 *
 * 💡 Event Loop is THE interview trick. Understand this order = Instant dev respect.
 */


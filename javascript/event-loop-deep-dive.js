/**
 * ===========================================
 * 🌀 Event Loop Deep Dive
 * ===========================================
 *
 * This file explains:
 * - Call Stack, Event Loop basics
 * - Macrotasks vs Microtasks
 * - setTimeout vs Promise.resolve
 * - process.nextTick (Node.js)
 */

// -------------------------------
// 1️⃣ Call Stack & Tasks
// -------------------------------

/**
 * JS is single-threaded.
 * The Event Loop manages:
 * ✔️ Call Stack
 * ✔️ Task Queues:
 *     - Macrotask Queue (setTimeout, setInterval, setImmediate)
 *     - Microtask Queue (Promise callbacks, process.nextTick)
 */

// -------------------------------
// 2️⃣ Order Example: setTimeout vs Promise
// -------------------------------

console.log("1️⃣ Start");

setTimeout(() => {
    console.log("4️⃣ Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3️⃣ Microtask: Promise.then");
});

console.log("2️⃣ End");

// Output Order:
// 1️⃣ Start
// 2️⃣ End
// 3️⃣ Microtask runs BEFORE Macrotask
// 4️⃣ Then Macrotask runs

// -------------------------------
// 3️⃣ Node.js: process.nextTick vs Promise
// -------------------------------

/**
 * In Node.js:
 * ✔️ process.nextTick() is even *higher priority* than microtasks.
 */

process.nextTick(() => {
    console.log("Microtask: process.nextTick");
});

Promise.resolve().then(() => {
    console.log("Microtask: Promise.then (Node.js)");
});

// -------------------------------
// 4️⃣ Real Example: Blocking vs Non-Blocking
// -------------------------------

console.log("Blocking loop starts");

setTimeout(() => {
    console.log("setTimeout after blocking loop");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise.then after blocking loop");
});

for (let i = 0; i < 1e8; i++) {
    // Block event loop
}

console.log("Blocking loop ends");

// -------------------------------
// ✅ Summary
// -------------------------------
/**
 * ✔️ setTimeout → Macrotask (runs after microtasks)
 * ✔️ Promise.then → Microtask
 * ✔️ process.nextTick → Node-specific, runs before Promises
 * ✔️ Blocking JS delays all tasks
 *
 * 💡 Master this → async bugs never haunt you again!
 */

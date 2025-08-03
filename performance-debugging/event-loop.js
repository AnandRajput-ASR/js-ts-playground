/**
 * ===========================================
 * 🔄 JavaScript Event Loop Explained
 * ===========================================
 *
 * ✅ WHAT IT IS:
 *   - JS is single-threaded.
 *   - It has a Call Stack + Task Queue + Microtask Queue.
 *   - Event Loop moves tasks between them.
 *
 * ✅ MACROTASKS: setTimeout, setInterval, setImmediate (Node)
 * ✅ MICROTASKS: Promise.then, process.nextTick (Node)
 *
 * Order: Call Stack → Microtasks → Macrotasks
 */

// ----------------------------------
// 1️⃣ Example: Promise vs setTimeout
// ----------------------------------

console.log("Start");

setTimeout(() => {
    console.log("setTimeout 0 ms");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise.then");
});

console.log("End");

/**
 * OUTPUT:
 *  Start
 *  End
 *  Promise.then
 *  setTimeout 0 ms
 *
 * WHY?
 * - Call Stack runs console.log("Start") and "End".
 * - Then all Microtasks run (Promise.then).
 * - Then Macrotasks run (setTimeout).
 */

// ----------------------------------
// 2️⃣ process.nextTick (Node.js)
// (Only works in Node)

process.nextTick(() => {
    console.log("process.nextTick");
});

Promise.resolve().then(() => {
    console.log("Promise.then 2");
});

setTimeout(() => {
    console.log("setTimeout 2");
}, 0);

/**
 * OUTPUT in Node:
 *   Start
 *   End
 *   process.nextTick
 *   Promise.then 2
 *   setTimeout 2
 *
 * nextTick is run *before* Promises in Node!
 */

// ----------------------------------
// 3️⃣ Blocking Example
// ----------------------------------

console.log("Blocking starts");

setTimeout(() => {
    console.log("Timeout after block");
}, 0);

const end = Date.now() + 2000;
while (Date.now() < end) {
    // Blocking main thread for 2 sec
}

console.log("Blocking ends");

/**
 * OUTPUT:
 *   Blocking starts
 *   Blocking ends
 *   Timeout after block
 *
 * WHY?
 * - JS is single-threaded.
 * - While loop blocks everything.
 * - Timer callback waits until main thread is free.
 */

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ JS runs code on Call Stack.
 * ✔️ Microtasks (Promise.then) run after stack.
 * ✔️ Macrotasks (setTimeout) run next.
 * ✔️ nextTick (Node) is before Promises.
 *
 * 💡 INTERVIEW:
 *   - Explain Microtask vs Macrotask queues.
 *   - Show why timers can’t guarantee exact timing.
 */

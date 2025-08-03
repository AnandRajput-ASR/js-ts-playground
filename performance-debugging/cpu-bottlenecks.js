/**
 * ===========================================
 * 🚦 CPU Bottlenecks in JavaScript
 * ===========================================
 *
 * ✅ WHAT ARE THEY?
 *   - Expensive computations that block the event loop.
 *   - Loops, nested loops, synchronous I/O.
 *   - Poorly written algorithms.
 *
 * ✅ HOW TO SPOT THEM:
 *   - `console.time()` & `console.timeEnd()`
 *   - Chrome DevTools Profiler.
 *   - Node `--inspect` & flamegraphs.
 */

// ----------------------------------
// 1️⃣ Basic timing example
// ----------------------------------

console.time("Heavy loop");

let total = 0;
for (let i = 0; i < 1e8; i++) {
    total += i;
}

console.timeEnd("Heavy loop");
console.log("Result:", total);

/**
 * OUTPUT:
 *   Heavy loop: X ms
 *   Result: sum
 */

// ----------------------------------
// 2️⃣ Nested loop — Big O nightmare
// ----------------------------------

console.time("Nested loop");

let pairs = [];
for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 10000; j++) {
        pairs.push([i, j]);
    }
}

console.timeEnd("Nested loop");
console.log("Pairs length:", pairs.length);

/**
 * ➜ This is O(N^2)!
 *   Brutal for CPU if N is big.
 */

// ----------------------------------
// 3️⃣ Bad synchronous I/O example
// ----------------------------------

const fs = require("fs");

console.time("Blocking Read");

const data = fs.readFileSync(__filename, "utf-8"); // Blocking!
console.timeEnd("Blocking Read");

/**
 * ➜ `fs.readFileSync` blocks the whole event loop.
 *   Prefer async I/O: fs.readFile.
 */

// ----------------------------------
// ✅ Profiling with DevTools
// ----------------------------------

/**
 * 1. Run: `node --inspect-brk cpu-bottlenecks.js`
 * 2. Open Chrome: chrome://inspect
 * 3. Attach debugger.
 * 4. Go to Performance tab ➜ Record.
 * 5. Look for hotspots & flamegraphs.
 */

// ----------------------------------
// ✅ How to fix
// ----------------------------------

/**
 * ✔️ Refactor heavy loops → break into chunks.
 * ✔️ Use streams instead of giant reads.
 * ✔️ Offload CPU tasks to Worker Threads.
 * ✔️ Watch Big O complexity — nested loops = danger.
 */

// ----------------------------------
// ✅ Interview Nugget
// ----------------------------------

/**
 * 💡 Node.js is single-threaded for JS — heavy CPU tasks can block all requests.
 * 💡 You MUST profile & split work smartly.
 */

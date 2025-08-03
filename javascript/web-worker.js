/**
 * ===========================================
 * 🧵 Web Workers
 * ===========================================
 *
 * This file explains:
 * - What a Web Worker is
 * - How to run tasks in parallel threads
 * - A practical example: heavy calculation
 */

// -------------------------------
// 1️⃣ What is a Web Worker?
// -------------------------------

/**
 * ✔️ Runs JS in a background thread.
 * ✔️ Perfect for CPU-heavy tasks that block the main thread.
 * ✔️ Uses postMessage() to communicate with the main thread.
 */

// -------------------------------
// 2️⃣ Basic Worker Script
// -------------------------------

// This part is the worker code itself.
// Save this in a separate file: "worker.js"

/**
 * // worker.js
 * self.onmessage = function (e) {
 *   console.log("Worker received:", e.data);
 *   const result = e.data * 2; // Do heavy work here
 *   self.postMessage(result);
 * };
 */

// -------------------------------
// 3️⃣ Using the Worker in your page
// -------------------------------

/**
 * In an HTML file:
 *
 * <script>
 *   const worker = new Worker('worker.js');
 *   worker.postMessage(5);
 *   worker.onmessage = function(e) {
 *     console.log('Result from worker:', e.data);
 *   };
 * </script>
 */

// -------------------------------
// 4️⃣ Practical Example: Prime Checker
// -------------------------------

// For Node.js or a simulated version,
// we usually use "worker_threads" instead of Web Workers.
// Here’s a simple Node version using worker_threads:

/*
 * If using Node.js:
 *
 * const { Worker } = require('worker_threads');
 *
 * const worker = new Worker('./prime-worker.js');
 *
 * worker.postMessage(123456789);
 * worker.on('message', (result) => {
 *   console.log('Is prime:', result);
 * });
 *
 * In prime-worker.js:
 *
 * const { parentPort } = require('worker_threads');
 *
 * parentPort.on('message', (num) => {
 *   function isPrime(n) {
 *     for (let i = 2; i < n; i++) {
 *       if (n % i === 0) return false;
 *     }
 *     return true;
 *   }
 *   parentPort.postMessage(isPrime(num));
 * });
 */

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Web Workers: true parallelism in browsers.
 * ✔️ Keep heavy CPU tasks off the main thread.
 * ✔️ Use postMessage to talk between main & worker.
 * ✔️ For Node.js, use "worker_threads" module.
 *
 * 💡 Vital for big loops, image processing, big data!
 */

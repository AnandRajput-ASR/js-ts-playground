/**
 * ===========================================
 * 🧩 Memoization
 * ===========================================
 *
 * This file explains:
 * - What memoization is
 * - How to memoize a function
 * - Real example: slow Fibonacci
 */

// -------------------------------
// 1️⃣ What is memoization?
// -------------------------------

/**
 * ✔️ It caches results of expensive function calls.
 * ✔️ If same input occurs again, return cached result.
 * ✔️ Saves time for repetitive heavy tasks.
 */

// -------------------------------
// 2️⃣ Example: Slow recursive Fibonacci
// -------------------------------

function slowFib(n) {
    if (n <= 1) return n;
    return slowFib(n - 1) + slowFib(n - 2);
}

console.time("SlowFib");
console.log("slowFib(35):", slowFib(35)); // Might take time
console.timeEnd("SlowFib");

// -------------------------------
// 3️⃣ Memoized version
// -------------------------------

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
}

const fastFib = memoize(function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});

console.time("FastFib");
console.log("fastFib(35):", fastFib(35)); // Much faster!
console.timeEnd("FastFib");

// -------------------------------
// ✅ Where is memoization useful?
// -------------------------------
/**
 * ✔️ Repeated heavy tasks with same inputs.
 * ✔️ E.g., API response caching, expensive math.
 * ✔️ Libraries like Lodash provide _.memoize.
 *
 * 💡 Memoization = smart caching = faster apps!
 */

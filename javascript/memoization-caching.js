/**
 * ===========================================
 * ⚡️ Memoization & Caching
 * ===========================================
 *
 * This file explains:
 * - What memoization is
 * - Basic example
 * - Practical example: expensive recursive function
 */

// -------------------------------
// 1️⃣ What is Memoization?
// -------------------------------

/**
 * ✔️ Store the results of expensive function calls.
 * ✔️ Return cached result when same inputs occur again.
 * ✔️ Boosts performance, especially for pure functions.
 */

// -------------------------------
// 2️⃣ Simple memoization example
// -------------------------------

function add(a, b) {
    console.log(`Calculating: ${a} + ${b}`);
    return a + b;
}

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log(`Returning cached result for ${key}`);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Calculating: 1 + 2 → 3
console.log(memoizedAdd(1, 2)); // Cached → 3
console.log(memoizedAdd(2, 3)); // Calculating: 2 + 3 → 5

// -------------------------------
// 3️⃣ Practical: Fibonacci with & without memoization
// -------------------------------

// Plain recursive Fibonacci (slow!)
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

console.time("Normal Fib");
console.log("Fib(30):", fib(30)); // Takes time!
console.timeEnd("Normal Fib");

// Memoized Fibonacci
const memoFib = (function () {
    const cache = {};
    function fib(n) {
        if (n <= 1) return n;
        if (cache[n]) return cache[n];
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    return fib;
})();

console.time("Memoized Fib");
console.log("Fib(30):", memoFib(30)); // Much faster!
console.timeEnd("Memoized Fib");

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Memoization = instant perf boost for pure & recursive fns.
 * ✔️ Used in React hooks, Redux selectors, GraphQL caching.
 * ✔️ Real coding interview flex.
 *
 * 💡 Master this, and your functions never repeat work twice.
 */

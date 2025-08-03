/**
 * ===========================================
 * 🧩 Polyfill for map & reduce
 * ===========================================
 *
 * This file explains:
 * - How to write your own map
 * - How to write your own reduce
 */

// -------------------------------
// 1️⃣ Polyfill for Array.prototype.map
// -------------------------------

/**
 * ✔️ Adds a custom map to Array.prototype.
 * ✔️ Same behavior as built-in map.
 */

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        // only map own properties
        if (this.hasOwnProperty(i)) {
            result.push(callback(this[i], i, this));
        }
    }

    return result;
};

// Usage:
const arr = [1, 2, 3];
const doubled = arr.myMap((num) => num * 2);
console.log("Custom map:", doubled); // [2, 4, 6]

// -------------------------------
// 2️⃣ Polyfill for Array.prototype.reduce
// -------------------------------

/**
 * ✔️ Adds a custom reduce to Array.prototype.
 * ✔️ Same behavior as built-in reduce.
 */

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }

    return accumulator;
};

// Usage:
const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log("Custom reduce:", sum); // 6

/**
 * -------------------------------
 * ✅ Why care?
 * -------------------------------
 * ✔️ Proves deep JS fundamentals.
 * ✔️ Shows you know Array.prototype.
 * ✔️ Classic whiteboard question.
 *
 * 💡 Bonus: try polyfill for filter, forEach too!
 */

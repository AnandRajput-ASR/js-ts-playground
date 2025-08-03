/**
 * ===========================================
 * 🗝️ Symbols & Iterators
 * ===========================================
 *
 * This file explains:
 * - What Symbol is
 * - What Symbol.iterator is
 * - How to make custom iterable objects
 */

// -------------------------------
// 1️⃣ Symbols: unique property keys
// -------------------------------

/**
 * ✔️ Symbol creates a unique value.
 * ✔️ Useful for hidden or unique object keys.
 */

const ID = Symbol("id");

const user = {
    name: "King Andy",
    [ID]: 12345, // unique hidden key
};

console.log(user.name); // King Andy
console.log(user[ID]);  // 12345

// Symbols don't clash:
const ID2 = Symbol("id");
console.log(ID === ID2); // false!

// -------------------------------
// 2️⃣ Built-in Symbols: Symbol.iterator
// -------------------------------

/**
 * ✔️ Symbol.iterator makes an object iterable.
 * ✔️ Used by for...of, spread operator, etc.
 */

// Example: custom range object

const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        let current = this.from;
        let last = this.to;

        return {
            next() {
                if (current <= last) {
                    return { done: false, value: current++ };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

for (const num of range) {
    console.log("Range value:", num);
}

// -------------------------------
// 3️⃣ What’s happening under the hood?
// -------------------------------

/**
 * ✔️ for...of asks: object[Symbol.iterator]()
 * ✔️ That returns an iterator: { next() { ... } }
 * ✔️ next() returns { done: true|false, value }
 */

// -------------------------------
// 4️⃣ Why care?
// -------------------------------
/**
 * ✔️ Symbols = unique keys for privacy, meta hooks.
 * ✔️ Symbol.iterator = lets you create custom iterable data structures.
 * ✔️ Big deal for making libraries, frameworks, or clean API design.
 *
 * 💡 Master this, and you’ll never fear “under the hood” questions again!
 */

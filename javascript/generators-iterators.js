/**
 * ===========================================
 * 🔁 Generators & Iterators
 * ===========================================
 *
 * This file explains:
 * - What iterators are
 * - How generators make custom iterators easy
 * - Practical yield, next, return
 * - For..of with generators
 *
 * 💡 If you know this, you can handle custom data streams & async iteration too!
 */

// -------------------------------
// 1️⃣ What’s an iterator?
// -------------------------------

// Plain manual iterator
const myIterable = {
    data: ["Andy", "Dev", "Pro"],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

// Use for..of — works because it has [Symbol.iterator]
for (const item of myIterable) {
    console.log("Manual Iterator:", item);
}

// -------------------------------
// 2️⃣ Generators make iterators easy!
// -------------------------------

function* myGenerator() {
    yield "Hello";
    yield "from";
    yield "Andy!";
}

const gen = myGenerator();

console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.next()); // { value: 'from', done: false }
console.log(gen.next()); // { value: 'Andy!', done: false }
console.log(gen.next()); // { value: undefined, done: true }

// -------------------------------
// 3️⃣ Using for..of with a generator
// -------------------------------

for (const word of myGenerator()) {
    console.log("Generator for..of:", word);
}

// -------------------------------
// 4️⃣ Infinite generators
// -------------------------------

function* infiniteCounter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const counter = infiniteCounter();

console.log("Infinite Counter:", counter.next().value); // 1
console.log("Infinite Counter:", counter.next().value); // 2
console.log("Infinite Counter:", counter.next().value); // 3

// 🧩 Note: You control how many times to call next()!

// -------------------------------
// 5️⃣ Generator with arguments
// -------------------------------

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (const num of range(1, 5)) {
    console.log("Range Generator:", num);
}

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Iterators: have next() that returns { value, done }
 * ✔️ Generators: `function*` & `yield` automatically create iterators.
 * ✔️ Powerful for lazy evaluation, streams, or custom collections.
 * ✔️ Can pause/resume execution — unlike normal functions!
 *
 * 💡 Master this & async generators (`async function*`) are easy next step!
 */

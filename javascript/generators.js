/**
 * ===========================================
 * 🔁 Generators
 * ===========================================
 *
 * This file explains:
 * - What a Generator is
 * - How yield works
 * - Practical examples: sequences, infinite data, custom control flow
 */

// -------------------------------
// 1️⃣ What is a Generator?
// -------------------------------

/**
 * ✔️ A generator function can pause and resume.
 * ✔️ Uses `function*` syntax.
 * ✔️ `yield` keyword pauses & produces a value.
 * ✔️ `.next()` resumes from last yield.
 */

// -------------------------------
// 2️⃣ Basic Generator Example
// -------------------------------

function* greet() {
    yield "Hello";
    yield "King";
    yield "Andy";
}

const greeter = greet();

console.log(greeter.next()); // { value: 'Hello', done: false }
console.log(greeter.next()); // { value: 'King', done: false }
console.log(greeter.next()); // { value: 'Andy', done: false }
console.log(greeter.next()); // { value: undefined, done: true }

// -------------------------------
// 3️⃣ Iterable Generator
// -------------------------------

for (const word of greet()) {
    console.log("Greet word:", word);
}

// -------------------------------
// 4️⃣ Practical: Infinite sequence
// -------------------------------

function* infiniteCounter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const counter = infiniteCounter();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
// ... goes forever until you stop calling .next()

// -------------------------------
// 5️⃣ Custom Iterator with Generator
// -------------------------------

const customRange = {
    from: 1,
    to: 5,
    [Symbol.iterator]: function* () {
        for (let i = this.from; i <= this.to; i++) {
            yield i;
        }
    },
};

for (const num of customRange) {
    console.log("Custom range num:", num);
}

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Generators power lazy evaluation & streams.
 * ✔️ Used for big data pipelines, paginated APIs, coroutines.
 * ✔️ Foundation for async generators & `for-await-of`!
 *
 * 💡 If you know `yield`, you’re already 1 level above 80% devs!
 */

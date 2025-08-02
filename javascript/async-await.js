// async-await.js
// ===============================
// `async` and `await` make working with Promises easier & cleaner.
// You write async code that *looks* synchronous — no messy `.then()` chains.

// ✅ Example 1: Basic async function

async function sayHello() {
    return "Hello, Andy! 👋";
}

sayHello().then(msg => console.log(msg)); // ➜ "Hello, Andy! 👋"

// Note: `async` functions always return a Promise.

// -------------------------------
// ✅ Example 2: Await a Promise inside async function

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded ✅");
        }, 1000);
    });
}

async function load() {
    console.log("Loading...");
    const data = await fetchData(); // Wait here until Promise resolves
    console.log(data);
}

load();
// Output:
// Loading...
// (wait 1 sec)
// Data loaded ✅

// -------------------------------
// ✅ Example 3: Using try/catch for error handling

function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong ❌");
        }, 1000);
    });
}

async function loadWithError() {
    try {
        const data = await fetchWithError();
        console.log(data);
    } catch (error) {
        console.error("Caught error:", error);
    }
}

loadWithError();
// Output:
// Caught error: Something went wrong ❌

// -------------------------------
// ✅ Example 4: Await multiple Promises with Promise.all()

async function loadMultiple() {
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(2);
    const p3 = Promise.resolve(3);

    const results = await Promise.all([p1, p2, p3]);
    console.log("All results:", results); // ➜ [1, 2, 3]
}

loadMultiple();

// -------------------------------
// ✅ Key points:
// - `async` makes a function return a Promise.
// - `await` pauses execution until the Promise settles.
// - Use `try/catch` for clean error handling.
// - Perfect for making async code readable and less nested.

// 🔑 Interview tip: Explain how `async/await` is just syntax sugar over Promises — they don’t replace Promises, they use them!

// Done! ✔️

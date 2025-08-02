// promise-basic.js
// ===============================
// A Promise is an object representing the eventual completion (or failure)
// of an asynchronous operation. It has 3 states: pending, fulfilled, rejected.

// ✅ Example 1: Basic promise syntax

const myPromise = new Promise(function (resolve, reject) {
    const success = true;

    if (success) {
        resolve("It worked! 🎉");
    } else {
        reject("It failed 💥");
    }
});

// Using the promise
myPromise
    .then(result => {
        console.log(result); // ➜ "It worked! 🎉"
    })
    .catch(error => {
        console.error(error); // If rejected
    });

// -------------------------------
// ✅ Example 2: Simulate async operation with setTimeout

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "Andy" };
            resolve(data);
        }, 1000); // Simulate 1 second delay
    });
}

getData()
    .then(data => {
        console.log("Received:", data);
        // ➜ { id: 1, name: "Andy" }
    })
    .catch(err => {
        console.error(err);
    });

// -------------------------------
// ✅ Example 3: Chaining `.then()`

getData()
    .then(data => {
        console.log("Step 1:", data);
        return "Next step";
    })
    .then(step => {
        console.log("Step 2:", step);
    })
    .catch(err => {
        console.error(err);
    });

// -------------------------------
// ✅ Example 4: Promise.resolve() and Promise.reject()

Promise.resolve("Quick success").then(val => console.log(val)); // ➜ "Quick success"

Promise.reject("Quick fail").catch(err => console.error(err)); // ➜ "Quick fail"

// -------------------------------
// ✅ Example 5: Promise.all()

// Runs multiple promises in parallel — resolves when *all* succeed

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(values => {
        console.log("All done:", values); // ➜ [1, 2, 3]
    })
    .catch(err => {
        console.error(err);
    });

// -------------------------------
// ✅ Key points:
// - Promises handle async work: fetching data, reading files, waiting for a delay.
// - Always `.then` for success, `.catch` for errors.
// - `Promise.all` for parallel execution — but fails if any one fails.
// - Interview tip: `Promise` helps avoid "callback hell".

// 🔑 Next step: Learn `async/await` — it makes promises look synchronous and clean!

// Done! ✔️

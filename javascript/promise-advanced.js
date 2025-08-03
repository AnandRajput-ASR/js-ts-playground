/**
 * ===========================================
 * 🔗 Promise Advanced
 * ===========================================
 *
 * This file explains:
 * - Promise.all
 * - Promise.race
 * - Promise.any
 * - Promise.allSettled
 */

// -------------------------------
// 1️⃣ Promise.all
// -------------------------------

/**
 * ✔️ Runs all promises in parallel.
 * ✔️ Resolves when all succeed.
 * ✔️ Rejects immediately if any fail.
 */

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then((values) => {
    console.log("Promise.all resolved:", values); // [1, 2, 3]
});

const pFail = Promise.reject("Oops!");
Promise.all([p1, pFail, p3]).catch((err) => {
    console.log("Promise.all rejected:", err); // Oops!
});

// -------------------------------
// 2️⃣ Promise.race
// -------------------------------

/**
 * ✔️ Resolves/rejects as soon as the first promise settles.
 */

const slow = new Promise((res) => setTimeout(() => res("Slow"), 2000));
const fast = new Promise((res) => setTimeout(() => res("Fast"), 500));

Promise.race([slow, fast]).then((value) => {
    console.log("Promise.race result:", value); // Fast
});

// -------------------------------
// 3️⃣ Promise.any
// -------------------------------

/**
 * ✔️ Resolves as soon as the first promise fulfills.
 * ✔️ Ignores rejections until all fail.
 */

const fail1 = Promise.reject("Fail 1");
const fail2 = Promise.reject("Fail 2");
const success = Promise.resolve("Success!");

Promise.any([fail1, success, fail2]).then((value) => {
    console.log("Promise.any result:", value); // Success!
});

Promise.any([fail1, fail2]).catch((err) => {
    console.log("Promise.any all failed:", err); // AggregateError
});

// -------------------------------
// 4️⃣ Promise.allSettled
// -------------------------------

/**
 * ✔️ Runs all promises.
 * ✔️ Always waits for all to finish.
 * ✔️ Returns result for each: { status, value | reason }
 */

Promise.allSettled([p1, pFail, p3]).then((results) => {
    console.log("Promise.allSettled results:", results);
    /**
     * [
     *   { status: "fulfilled", value: 1 },
     *   { status: "rejected", reason: "Oops!" },
     *   { status: "fulfilled", value: 3 }
     * ]
     */
});

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Real use: API calls, parallel requests, failover.
 * ✔️ Promise.all = all must succeed.
 * ✔️ Promise.race = first to settle wins.
 * ✔️ Promise.any = first to succeed.
 * ✔️ Promise.allSettled = gather ALL results no matter what.
 *
 * 💡 Master these = async orchestration pro.
 */

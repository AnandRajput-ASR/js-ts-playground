/**
 * ===========================================
 * ⚡️ AbortController
 * ===========================================
 *
 * This file explains:
 * - What AbortController does
 * - How to cancel a fetch request
 * - Why this prevents memory leaks
 */

// -------------------------------
// 1️⃣ What is AbortController?
// -------------------------------

/**
 * ✔️ Lets you cancel an in-progress async operation.
 * ✔️ Most common use: cancel fetch() requests.
 * ✔️ Prevents unnecessary work when user navigates away.
 */

// -------------------------------
// 2️⃣ Example: Cancel a fetch
// -------------------------------

const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
    .then((response) => response.json())
    .then((data) => console.log("✅ Data:", data))
    .catch((err) => {
        if (err.name === "AbortError") {
            console.log("🚫 Fetch aborted!");
        } else {
            console.error("❌ Fetch failed:", err);
        }
    });

// Simulate cancelling after 100ms
setTimeout(() => {
    controller.abort();
    console.log("🔴 Aborted fetch request.");
}, 100);

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Real use: React `useEffect` cleanup → cancel old requests.
 * ✔️ Saves bandwidth & avoids stale state updates.
 * ✔️ Clean, modern async best practice.
 *
 * 💡 Few devs know it → senior-level async control.
 */

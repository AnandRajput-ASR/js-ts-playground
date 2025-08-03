/**
 * ===========================================
 * ⚡️ Throttle & Debounce
 * ===========================================
 *
 * This file explains:
 * - Throttle: limit calls to once per interval
 * - Debounce: delay calls until no more triggers
 * - When to use which
 */

// -------------------------------
// 1️⃣ Throttle
// -------------------------------

/**
 * ✔️ Guarantees fn runs at most once per interval.
 * ✔️ Good for scroll, resize, window events.
 */

function throttle(func, limit) {
    let lastRun = 0;

    return function (...args) {
        const now = Date.now();
        if (now - lastRun >= limit) {
            lastRun = now;
            func.apply(this, args);
        }
    };
}

// Example:
const throttledScroll = throttle(() => {
    console.log("Scrolled!", new Date().toISOString());
}, 1000);

window.addEventListener("scroll", throttledScroll);

// -------------------------------
// 2️⃣ Debounce
// -------------------------------

/**
 * ✔️ Delays fn until user stops triggering for X ms.
 * ✔️ Good for search inputs, auto-saving, resize.
 */

function debounce(func, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example:
const debouncedInput = debounce(() => {
    console.log("Input stopped!", new Date().toISOString());
}, 500);

window.addEventListener("resize", debouncedInput);

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Throttle: steady flow at regular intervals.
 * ✔️ Debounce: wait until calm, then run once.
 * ✔️ Used in real-world UIs constantly.
 *
 * 💡 If you write these in an interview = strong UI engineer.
 */

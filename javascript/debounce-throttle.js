/**
 * ===========================================
 * ⏱️ Debounce & Throttle
 * ===========================================
 *
 * This file explains:
 * - What debounce is
 * - What throttle is
 * - Why they help with performance
 * - Practical examples: scroll, resize, search
 */

// -------------------------------
// 1️⃣ Debounce
// -------------------------------

/**
 * ✔️ Debounce delays execution until X ms after the last event.
 * ✔️ Useful for search input, window resize, auto-save.
 */

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Example usage:
function onResize() {
    console.log("Resized at:", new Date().toISOString());
}

const debouncedResize = debounce(onResize, 500);

// Imagine window resize event:
debouncedResize();
debouncedResize();
debouncedResize();
// ➜ Only the LAST call runs after 500ms!

// -------------------------------
// 2️⃣ Throttle
// -------------------------------

/**
 * ✔️ Throttle ensures a function runs at most once every X ms.
 * ✔️ Useful for scroll, mousemove, drag.
 */

function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Example usage:
function onScroll() {
    console.log("Scrolled at:", new Date().toISOString());
}

const throttledScroll = throttle(onScroll, 1000);

// Imagine scroll event:
throttledScroll();
throttledScroll();
throttledScroll();
// ➜ Only first call runs, next after 1s

// -------------------------------
// ✅ When to use what?
// -------------------------------
/**
 * ✔️ Debounce: Wait until user STOPS firing events (search box, resize).
 * ✔️ Throttle: Limit execution RATE during continuous events (scroll, mousemove).
 *
 * 💡 Combined, they protect performance & prevent overload!
 */

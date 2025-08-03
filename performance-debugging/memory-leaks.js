/**
 * ===========================================
 * 💧 Memory Leaks in JavaScript
 * ===========================================
 *
 * ✅ WHAT IS A MEMORY LEAK?
 *   - When your app holds references it doesn't need.
 *   - Memory stays allocated forever = slow death.
 *
 * ✅ COMMON CAUSES:
 *   - Unclosed closures.
 *   - Forgotten timers.
 *   - Event listeners never removed.
 *   - Global variables that grow forever.
 */

// ----------------------------------
// 1️⃣ Closure holding memory
// ----------------------------------

function createLeaky() {
    const hugeArray = new Array(1000000).fill("🚰");
    return function () {
        console.log("Using huge array:", hugeArray[0]);
    };
}

const leaky = createLeaky();

// Even if you never call leaky(), hugeArray is kept alive!
console.log("Leaky function created");

// ----------------------------------
// 2️⃣ Forgotten timer
// ----------------------------------

function startLeakTimer() {
    setInterval(() => {
        console.log("I run forever & hold closure!");
    }, 1000);
}

startLeakTimer();

// ----------------------------------
// 3️⃣ Event listeners never removed
// ----------------------------------

const button = {
    clickHandlers: [],
    addEventListener(fn) {
        this.clickHandlers.push(fn);
    },
    removeEventListener(fn) {
        this.clickHandlers = this.clickHandlers.filter((h) => h !== fn);
    },
    click() {
        this.clickHandlers.forEach((fn) => fn());
    },
};

function onClick() {
    console.log("Clicked!");
}

button.addEventListener(onClick);

// If you forget:
button.removeEventListener(onClick); // Do this!

// ----------------------------------
// ✅ HOW TO SPOT & FIX
// ----------------------------------

/**
 * ✔️ Use Chrome DevTools:
 *   - Memory tab → Take Heap Snapshots → Look for unreachable objects.
 *
 * ✔️ Use `process.memoryUsage()` (Node):
 */

console.log("Memory usage:", process.memoryUsage());

/**
 * ✔️ Remove listeners & clear timers:
 *   - clearInterval, clearTimeout.
 *   - Remove DOM listeners when elements go.
 */

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * 💡 Memory leaks grow over time — they rarely explode at once.
 * 💡 Always clean up closures, timers & listeners.
 * 💡 Profile regularly in long-running Node apps.
 */

/**
 * ===========================================
 * 📦 Module Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Encapsulate private data.
 *   - Expose only what you want.
 *   - Avoid global scope pollution.
 *
 * ✅ WHERE YOU SEE IT:
 *   - Old-school libraries.
 *   - Simple JS plugins.
 *   - Singleton services with config.
 */

// ----------------------------------
// 1️⃣ Classic Module with IIFE
// ----------------------------------

const CounterModule = (function () {
    // Private variable
    let count = 0;

    // Private function
    function log(message) {
        console.log(`[Counter]: ${message}`);
    }

    // Public API
    return {
        increment() {
            count++;
            log(`Count is now ${count}`);
        },
        decrement() {
            count--;
            log(`Count is now ${count}`);
        },
        getCount() {
            return count;
        },
    };
})();

CounterModule.increment(); // Count is now 1
CounterModule.increment(); // Count is now 2
CounterModule.decrement(); // Count is now 1
console.log(CounterModule.getCount()); // 1

// ----------------------------------
// 2️⃣ Singleton Config Module
// ----------------------------------

const ConfigModule = (function () {
    const settings = {
        theme: "dark",
        version: "1.0.0",
    };

    return {
        get(key) {
            return settings[key];
        },
        set(key, value) {
            settings[key] = value;
        },
    };
})();

console.log(ConfigModule.get("theme")); // dark
ConfigModule.set("theme", "light");
console.log(ConfigModule.get("theme")); // light

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Module = IIFE returns an object.
 * ✔️ Private vars live inside the closure.
 * ✔️ Only return what you want public.
 *
 * 💡 Interview note:
 *   - Modern ES Modules replaced this with `import/export`.
 *   - Still handy for simple scripts or older browsers.
 */

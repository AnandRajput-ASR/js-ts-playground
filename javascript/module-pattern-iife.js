/**
 * ===========================================
 * 📦 Module Pattern & IIFE
 * ===========================================
 *
 * This file explains:
 * - What an IIFE is
 * - The Module Pattern with closures
 * - Real examples: private data, factories
 */

// -------------------------------
// 1️⃣ What is an IIFE?
// -------------------------------

/**
 * ✔️ IIFE = Immediately Invoked Function Expression
 * ✔️ Runs as soon as it's defined.
 * ✔️ Creates a private scope.
 */

(function () {
    console.log("👋 This runs immediately!");
})();

// -------------------------------
// 2️⃣ Module Pattern with IIFE
// -------------------------------

/**
 * ✔️ Return an object with public methods.
 * ✔️ Private data stays hidden inside closure.
 */

const CounterModule = (function () {
    let count = 0; // private

    function increment() {
        count++;
        console.log("Count:", count);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        getCount,
    };
})();

CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2
console.log("Final count:", CounterModule.getCount()); // 2

// -------------------------------
// 3️⃣ Factory Pattern with IIFE
// -------------------------------

/**
 * ✔️ Same idea, but can return factory functions too.
 */

const UserFactory = (function () {
    return function (name) {
        let secret = "👑";
        return {
            getName() {
                return name;
            },
            getSecret() {
                return secret;
            },
        };
    };
})();

const user1 = UserFactory("King Andy");
console.log(user1.getName());   // King Andy
console.log(user1.getSecret()); // 👑

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Used in classic JS before `import/export`.
 * ✔️ Encapsulates private data.
 * ✔️ Still works for factories, config objects, closures.
 *
 * 💡 Shows real closure mastery in interviews.
 */

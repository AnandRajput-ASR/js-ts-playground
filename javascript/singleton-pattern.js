/**
 * ===========================================
 * 📦 Singleton Pattern
 * ===========================================
 *
 * This file explains:
 * - What a Singleton is
 * - Two ways: Closure & Class static instance
 * - Real examples: Logger, Config
 */

// -------------------------------
// 1️⃣ What is Singleton?
// -------------------------------

/**
 * ✔️ Ensures only one instance exists.
 * ✔️ Provides a global point of access.
 * ✔️ Classic example: Logger, DB connection.
 */

// -------------------------------
// 2️⃣ Singleton with Closure
// -------------------------------

const ClosureSingleton = (function () {
    let instance;

    function createInstance() {
        console.log("🔨 Creating new instance!");
        return { id: Math.random() };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const singletonA = ClosureSingleton.getInstance();
const singletonB = ClosureSingleton.getInstance();

console.log(singletonA === singletonB); // true
console.log("Instance ID:", singletonA.id, singletonB.id); // same ID

// -------------------------------
// 3️⃣ Singleton with Class
// -------------------------------

class ClassSingleton {
    constructor() {
        if (ClassSingleton.instance) {
            return ClassSingleton.instance;
        }
        console.log("🔨 New ClassSingleton created!");
        this.id = Math.random();
        ClassSingleton.instance = this;
    }
}

const s1 = new ClassSingleton();
const s2 = new ClassSingleton();

console.log(s1 === s2); // true
console.log("Instance ID:", s1.id, s2.id); // same ID

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Ensures shared state, single point of truth.
 * ✔️ Used in Redux stores, loggers, config managers.
 * ✔️ Classic OOP pattern → asked in interviews.
 *
 * 💡 If you understand closures + static class props → you OWN Singleton.
 */

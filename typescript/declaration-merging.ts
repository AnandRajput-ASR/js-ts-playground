/**
 * ===========================================
 * 🔗 Declaration Merging
 * ===========================================
 *
 * This file explains:
 * - What declaration merging is
 * - How interfaces merge
 * - How it's used in real-world libs (Node.js, Express)
 */

// ----------------------------------
// 1️⃣ Same interface name = merged
// ----------------------------------

interface User {
    id: number;
}

interface User {
    name: string;
}

const user: User = {
    id: 1,
    name: "Andy"
};
// ✔️ id and name both exist

// ----------------------------------
// 2️⃣ Example: Extend a lib's interface
// ----------------------------------

// Suppose you have a 3rd party lib that declares:
interface Window {
    customProp: string;
}

// You can merge:
interface Window {
    anotherProp: number;
}

window.customProp = "hello";
window.anotherProp = 123;

// ----------------------------------
// 3️⃣ Works with namespaces too
// ----------------------------------

namespace Animals {
    export interface Cat {
        name: string;
    }
}

namespace Animals {
    export interface Cat {
        age: number;
    }
}

const kitty: Animals.Cat = {
    name: "Fluffy",
    age: 2
};

// ----------------------------------
// ✅ Why care?
// ----------------------------------

/**
 * ✔️ Declaration merging lets you augment types.
 * ✔️ It’s why Node.js `Request` and `Response` can be extended by Express.
 * ✔️ Also used in global type extensions.
 *
 * 💡 This confuses beginners — but senior TS devs master it!
 */

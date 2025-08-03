/**
 * ===========================================
 * 🗂️ Namespaces vs Modules
 * ===========================================
 *
 * This file explains:
 * - What namespaces are
 * - What modules are
 * - When to use each
 */

// ----------------------------------
// 1️⃣ Namespace (old-school)
// ----------------------------------

namespace MathHelpers {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

const sum = MathHelpers.add(2, 3);
console.log("Namespace sum:", sum);

// ----------------------------------
// 2️⃣ ES Modules (modern)
// ----------------------------------

// File: mathHelpers.ts
// export function add(a: number, b: number): number {
//   return a + b;
// }

// export function multiply(a: number, b: number): number {
//   return a * b;
// }

// File: main.ts
// import { add, multiply } from "./mathHelpers";

// const sum = add(2, 3);

// ----------------------------------
// ✅ Why care?
// ----------------------------------

/**
 * ✔️ Namespaces = organize code inside global scope.
 * ✔️ Modules = break code into files with import/export.
 * ✔️ Modules are the modern standard. Namespaces still exist for legacy or global scripts.
 *
 * 💡 If you see both mixed? Probably old code migrating to ES modules.
 */

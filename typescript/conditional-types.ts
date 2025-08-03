/**
 * ===========================================
 * ⚙️ Conditional Types
 * ===========================================
 *
 * This file explains:
 * - What conditional types are
 * - How `T extends U ? X : Y` works
 * - Practical uses: type guards, fallback types
 */

// ----------------------------------
// 1️⃣ Basic conditional type
// ----------------------------------

type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"

// ----------------------------------
// 2️⃣ Conditional type with union
// ----------------------------------

type ToArray<T> = T extends any ? T[] : never;

type NumArray = ToArray<number>; // number[]
type StrArray = ToArray<string>; // string[]

// ----------------------------------
// 3️⃣ Example: Extract return type
// ----------------------------------

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => number;
type FnReturn = ReturnTypeOf<Fn>; // number

// ----------------------------------
// 4️⃣ Why care?
// ----------------------------------

/**
 * ✔️ Conditional types = powerful type logic.
 * ✔️ Used in libraries like React types, Redux types.
 * ✔️ Key to making generic types smart.
 *
 * 💡 Knowing `infer` inside conditionals is advanced TS mastery!
 */

/**
 * ===========================================
 * 🔍 Infer Keyword
 * ===========================================
 *
 * This file explains:
 * - How `infer` works inside conditional types
 * - How TS extracts types (ReturnType, Parameters)
 */

// ----------------------------------
// 1️⃣ Extract return type of a function
// ----------------------------------

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => string;

type Result = GetReturnType<Fn>; // string

// ----------------------------------
// 2️⃣ Extract element type of an array
// ----------------------------------

type ElementType<T> = T extends (infer U)[] ? U : never;

type MyArray = number[];

type Elem = ElementType<MyArray>; // number

// ----------------------------------
// 3️⃣ Extract promise value type
// ----------------------------------

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type P = Promise<number>;

type Value = UnwrapPromise<P>; // number

// ----------------------------------
// 4️⃣ Combine with other generics
// ----------------------------------

type Flatten<T> = T extends Array<infer U> ? U : T;

type Flat = Flatten<string[]>; // string

// ----------------------------------
// ✅ Why care?
// ----------------------------------

/**
 * ✔️ `infer` lets you pull out types.
 * ✔️ Powers TS helpers: ReturnType, Parameters.
 * ✔️ Lets you write smarter, reusable types.
 *
 * 💡 If you know `infer`, you’re in top TS territory!
 */

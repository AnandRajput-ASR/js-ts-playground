/**
 * ===========================================
 * 🗺️ Mapped Types
 * ===========================================
 *
 * This file explains:
 * - What mapped types are
 * - How to transform keys dynamically
 * - Practical uses: Partial, Readonly, Record
 */

// ----------------------------------
// 1️⃣ Basic mapped type
// ----------------------------------

type Person = {
    name: string;
    age: number;
};

// Make all props optional
type MyPartial<T> = {
    [K in keyof T]?: T[K];
};

type PartialPerson = MyPartial<Person>;
// Equivalent to:
// {
//   name?: string;
//   age?: number;
// }

// ----------------------------------
// 2️⃣ Make all props readonly
// ----------------------------------

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadonlyPerson = MyReadonly<Person>;

// ----------------------------------
// 3️⃣ Map keys to new keys: Record
// ----------------------------------

type Roles = "admin" | "user" | "guest";

type RoleAccess = Record<Roles, boolean>;
// {
//   admin: boolean;
//   user: boolean;
//   guest: boolean;
// }

// ----------------------------------
// 4️⃣ Remap keys with template literal (advanced)
// ----------------------------------

type PrefixKeys<T> = {
    [K in keyof T as `prefix_${string & K}`]: T[K];
};

type PrefixedPerson = PrefixKeys<Person>;
// {
//   prefix_name: string;
//   prefix_age: number;
// }

// ----------------------------------
// ✅ Why care?
// ----------------------------------

/**
 * ✔️ Mapped types power TS libraries.
 * ✔️ Core to creating DRY, flexible types.
 * ✔️ Combine with conditional & infer for magic.
 *
 * 💡 This is the real difference between TS beginners & pros!
 */

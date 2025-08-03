/**
 * ===========================================
 * 🧙 TypeScript Advanced Types
 * ===========================================
 *
 * This file explains:
 * - Mapped Types
 * - Conditional Types
 * - Utility Types in action
 *
 * 💡 Real-life examples — super common in big TS codebases!
 */

// -------------------------------
// 1️⃣ Mapped Types
// -------------------------------

/**
 * ✔️ Mapped Types transform properties of an existing type.
 * ✔️ Example: Make all props readonly.
 */

interface User {
    id: number;
    name: string;
    email: string;
}

// Classic mapped type
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

const user: ReadonlyUser = {
    id: 1,
    name: "Andy",
    email: "andy@example.com",
};

// user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property

/**
 * `keyof User` → "id" | "name" | "email"
 * For each K, take User[K] and apply `readonly`.
 */

// -------------------------------
// 2️⃣ Conditional Types
// -------------------------------

/**
 * ✔️ Conditional Types do type branching: A extends B ? X : Y
 */

type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"

// Practical: Remove null/undefined
type NonNullableType<T> = T extends null | undefined ? never : T;

type A = NonNullableType<string | null>; // string

// -------------------------------
// 3️⃣ Key Remapping & Modifiers
// -------------------------------

/**
 * ✔️ Remap keys or tweak them.
 */

type PrefixProps<T> = {
    [K in keyof T as `prefix_${string & K}`]: T[K];
};

type PrefixedUser = PrefixProps<User>;

/**
 * PrefixedUser:
 * {
 *   prefix_id: number;
 *   prefix_name: string;
 *   prefix_email: string;
 * }
 */

// -------------------------------
// 4️⃣ Utility Types Examples
// -------------------------------

/**
 * TS ships with built-in helpers:
 * - Partial<T>: makes all props optional
 * - Required<T>: makes all props required
 * - Pick<T, K>: pick specific keys
 * - Omit<T, K>: omit specific keys
 */

type PartialUser = Partial<User>;
type RequiredUser = Required<PartialUser>;
type UserNameOnly = Pick<User, "name">;
type UserWithoutEmail = Omit<User, "email">;

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Mapped Types: loop over keys, transform them.
 * ✔️ Conditional Types: branch logic for types.
 * ✔️ Utility Types: common patterns built-in.
 *
 * 💡 These power advanced libraries, type-safe APIs & config.
 */

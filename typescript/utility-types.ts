/**
 * ===========================================
 * 🛠️ Utility Types
 * ===========================================
 *
 * This file explains:
 * - Core TS built-in utility types
 * - How they work behind the scenes
 * - When to use which
 */

// ----------------------------------
// Example base type
// ----------------------------------

interface User {
    id: number;
    name: string;
    email?: string;
}

// ----------------------------------
// 1️⃣ Partial<T>
// ----------------------------------

type UserPartial = Partial<User>;
// Makes all props optional
// {
//   id?: number;
//   name?: string;
//   email?: string;
// }

// How Partial works:
type MyPartial<T> = {
    [P in keyof T]?: T[P];
};

// ----------------------------------
// 2️⃣ Required<T>
// ----------------------------------

type UserRequired = Required<User>;
// Makes all props required

// How Required works:
type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};

// ----------------------------------
// 3️⃣ Readonly<T>
// ----------------------------------

type UserReadonly = Readonly<User>;
// Makes all props readonly

// How Readonly works:
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

// ----------------------------------
// 4️⃣ Pick<T, K>
// ----------------------------------

type UserName = Pick<User, "name" | "email">;
// Keep only name & email

// How Pick works:
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// ----------------------------------
// 5️⃣ Omit<T, K>
// ----------------------------------

type UserWithoutEmail = Omit<User, "email">;
// Remove email

// How Omit works:
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// ----------------------------------
// 6️⃣ Record<K, V>
// ----------------------------------

type Role = "admin" | "user" | "guest";

type Permissions = Record<Role, boolean>;
// {
//   admin: boolean;
//   user: boolean;
//   guest: boolean;
// }

// How Record works:
type MyRecord<K extends keyof any, V> = {
    [P in K]: V;
};

// ----------------------------------
// ✅ Why care?
// ----------------------------------

/**
 * ✔️ Utility types = foundation of reusable TS code.
 * ✔️ Every big lib uses them: React, Redux, Node types.
 * ✔️ Know how they’re built → senior TS confidence.
 */

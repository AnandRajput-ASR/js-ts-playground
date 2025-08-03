/**
 * ===========================================
 * 🔑 keyof & typeof
 * ===========================================
 *
 * This file explains:
 * - How to get real object keys using keyof + typeof
 * - Real-world use: safe mappers, validators
 */

// ----------------------------------
// 1️⃣ typeof + keyof to reflect object keys
// ----------------------------------

const config = {
    host: "localhost",
    port: 8080,
    secure: true,
};

// Get keys as a type:
type ConfigKeys = keyof typeof config;
// "host" | "port" | "secure"

// ----------------------------------
// 2️⃣ Safe getter function
// ----------------------------------

function getConfigValue(key: ConfigKeys) {
    return config[key];
}

const host = getConfigValue("host"); // OK
// const fail = getConfigValue("wrong"); // ❌ TS error

// ----------------------------------
// 3️⃣ keyof for interfaces
// ----------------------------------

interface User {
    id: number;
    name: string;
}

type UserKeys = keyof User; // "id" | "name"

// ----------------------------------
// 4️⃣ keyof with generic constraints
// ----------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: User = { id: 1, name: "Andy" };

const userName = getProperty(user, "name"); // "Andy"

// ----------------------------------
// ✅ Why care?
// ----------------------------------

/**
 * ✔️ keyof + typeof = type reflection in TS.
 * ✔️ Powers safe configs, mappers, validators.
 * ✔️ Combine with generics for bulletproof APIs.
 *
 * 💡 One of the best tricks for senior TS interviews!
 */

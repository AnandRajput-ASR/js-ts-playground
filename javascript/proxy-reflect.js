/**
 * ===========================================
 * 🕵️ Proxy & Reflect
 * ===========================================
 *
 * This file explains:
 * - What Proxy is & how it works
 * - Traps: get, set, has, deleteProperty, etc.
 * - Reflect: clean helpers for Proxy operations
 * - Real-life use cases: validation, logging, dynamic behavior
 *
 * 💡 If you understand Proxy, you can create reactive systems like Vue.js!
 */

// -------------------------------
// 1️⃣ Basic Proxy: get trap
// -------------------------------

const target = { name: "Andy", age: 28 };

const handler = {
    get(obj, prop) {
        console.log(`Getting ${prop}`);
        return prop in obj ? obj[prop] : "Not Found";
    },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // logs: Getting name ➜ Andy
console.log(proxy.job);  // logs: Getting job ➜ Not Found

// -------------------------------
// 2️⃣ Proxy with set trap (validation)
// -------------------------------

const person = {
    name: "Andy",
    age: 28,
};

const validator = {
    set(obj, prop, value) {
        if (prop === "age") {
            if (typeof value !== "number" || value < 0) {
                throw new Error("Age must be a positive number");
            }
        }
        console.log(`Setting ${prop} = ${value}`);
        obj[prop] = value;
        return true; // must return true to signal success
    },
};

const personProxy = new Proxy(person, validator);

personProxy.age = 30; // Setting age = 30
// personProxy.age = -5; // Throws error: Age must be positive

// -------------------------------
// 3️⃣ Reflect: do same operation cleanly
// -------------------------------

const handlerWithReflect = {
    get(obj, prop) {
        console.log(`Reading ${prop}`);
        return Reflect.get(obj, prop);
    },
    set(obj, prop, value) {
        console.log(`Writing ${prop} = ${value}`);
        return Reflect.set(obj, prop, value);
    },
};

const proxyWithReflect = new Proxy(target, handlerWithReflect);

proxyWithReflect.name = "Dev Andy"; // Writing name = Dev Andy
console.log(proxyWithReflect.name); // Reading name ➜ Dev Andy

// -------------------------------
// 4️⃣ Real-life use: logging property access
// -------------------------------

function createLogger(obj) {
    return new Proxy(obj, {
        get(target, prop) {
            console.log(`[LOG] Accessing ${prop}`);
            return Reflect.get(target, prop);
        },
    });
}

const logger = createLogger({ foo: 123, bar: "baz" });
logger.foo; // [LOG] Accessing foo ➜ 123

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Proxy lets you intercept operations on objects: get, set, has, deleteProperty, etc.
 * ✔️ Reflect provides standard ways to perform these operations safely.
 * ✔️ Together, they power reactivity systems (Vue, MobX) & advanced meta-programming.
 * ✔️ Amazing for validation, logging, security.
 *
 * 💡 If you drop "Proxy & Reflect" in an interview, devs nod in respect!
 */

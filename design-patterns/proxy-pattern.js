/**
 * ===========================================
 * 🕵️ Proxy Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Control access to another object.
 *   - Add behavior like logging, caching, or validation.
 *   - Protect expensive operations.
 *
 * ✅ WHERE YOU SEE IT:
 *   - Virtual Proxy: Load expensive data on demand.
 *   - Protection Proxy: Access control.
 *   - Logging Proxy: Monitor interactions.
 */

// ----------------------------------
// 1️⃣ Example: Protection Proxy
// ----------------------------------

class Door {
    open() {
        console.log("🚪 Door opened");
    }

    close() {
        console.log("🚪 Door closed");
    }
}

// Proxy adds security check
class SecurityProxy {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (password === "secret") {
            this.door.open();
        } else {
            console.log("❌ Access denied");
        }
    }

    close() {
        this.door.close();
    }
}

const door = new Door();
const secureDoor = new SecurityProxy(door);

secureDoor.open("guess");  // ❌ Access denied
secureDoor.open("secret"); // 🚪 Door opened
secureDoor.close();        // 🚪 Door closed

// ----------------------------------
// 2️⃣ Example: Caching Proxy
// ----------------------------------

class API {
    fetchData(url) {
        console.log(`📡 Fetching from ${url}`);
        return `Response from ${url}`;
    }
}

class APIProxy {
    constructor(api) {
        this.api = api;
        this.cache = {};
    }

    fetchData(url) {
        if (!this.cache[url]) {
            this.cache[url] = this.api.fetchData(url);
        } else {
            console.log(`⚡ Serving from cache: ${url}`);
        }
        return this.cache[url];
    }
}

const api = new API();
const apiProxy = new APIProxy(api);

console.log(apiProxy.fetchData("/users")); // 📡 Fetching from /users
console.log(apiProxy.fetchData("/users")); // ⚡ Serving from cache

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Proxy controls access or adds behavior.
 * ✔️ Variants: Virtual, Protection, Caching, Logging.
 * ✔️ Real-life: JS native Proxy is a built-in version.
 *
 * 💡 Interview note:
 *   - Proxy vs Adapter: Proxy = same interface, adds control. Adapter = new interface.
 */

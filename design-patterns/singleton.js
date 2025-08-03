/**
 * ===========================================
 * 🟢 Singleton Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Ensures a class has only **one instance**
 *   - Provides a global point of access
 *
 * ✅ WHERE YOU SEE IT:
 *   - Database connections
 *   - App configurations
 *   - Logging services
 *   - Caches
 */

// ----------------------------------
// 1️⃣ Classic Singleton (ES5 style)
// ----------------------------------

function DatabaseConnection() {
    if (typeof DatabaseConnection.instance === "object") {
        return DatabaseConnection.instance;
    }

    this.connection = "DB Connected!";

    DatabaseConnection.instance = this;
    return this;
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // true
console.log(db1.connection); // "DB Connected!"

// ----------------------------------
// 2️⃣ Modern Singleton with Class (ES6)
// ----------------------------------

class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }

        this.logs = [];
        Logger.instance = this;
    }

    log(message) {
        this.logs.push(message);
        console.log(`LOG: ${message}`);
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`);
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("Hello World");
logger2.log("Singleton works!");

logger1.printLogCount(); // 2 Logs
console.log(logger1 === logger2); // true

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Singleton ensures single instance.
 * ✔️ Use `static` property to store instance.
 * ✔️ Protect constructor from creating multiple.
 * ✔️ Overuse can lead to hidden dependencies.
 *
 * 💡 Interview note:
 *   - Singleton is easy but misused often.
 *   - Keep it simple & justified!
 */

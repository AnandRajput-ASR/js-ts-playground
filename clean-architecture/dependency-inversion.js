/**
 * ===========================================
 * 🏛️ Dependency Inversion — In Practice
 * ===========================================
 *
 * ✅ What is Dependency Inversion?
 *   - High-level modules (business logic) should not depend on low-level modules (DB, APIs).
 *   - Both should depend on abstractions (interfaces).
 *   - Makes swapping details trivial!
 */

// ----------------------------------
// 🧩 Abstraction (Interface)
// ----------------------------------

class Database {
    save(data) {
        throw new Error("Not implemented");
    }
}

// ----------------------------------
// 📂 Low-level implementation
// ----------------------------------

class MongoDatabase extends Database {
    save(data) {
        console.log(`✅ Saved to MongoDB: ${JSON.stringify(data)}`);
    }
}

class MySQLDatabase extends Database {
    save(data) {
        console.log(`✅ Saved to MySQL: ${JSON.stringify(data)}`);
    }
}

// ----------------------------------
// 🧠 High-level business logic
// ----------------------------------

class OrderService {
    constructor(database) {
        this.database = database;
    }

    placeOrder(order) {
        // Business logic could go here
        this.database.save(order);
    }
}

// ----------------------------------
// 🧩 Putting it together
// ----------------------------------

const mongo = new MongoDatabase();
const mysql = new MySQLDatabase();

const orderService1 = new OrderService(mongo);
const orderService2 = new OrderService(mysql);

orderService1.placeOrder({ item: "Laptop", price: 1200 });
orderService2.placeOrder({ item: "Phone", price: 800 });

/**
 * ✅ The OrderService doesn't care HOW data is saved.
 * ✅ We can swap Mongo/MySQL/REST API without changing OrderService.
 * ✅ Clean. Flexible. Testable.
 */

// ----------------------------------
// 🏆 Key Interview Takeaway
// ----------------------------------

/**
 * ✔️ High-level modules depend on abstractions.
 * ✔️ Abstractions don’t depend on details.
 * ✔️ Details (DBs) depend on abstractions.
 * ✔️ Code is decoupled and easier to test & extend.
 */

console.log("🎉 Dependency Inversion mastered — you now invert control like a pro!");

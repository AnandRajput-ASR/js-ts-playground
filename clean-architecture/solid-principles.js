/**
 * ===========================================
 * 🏛️ SOLID Principles — The Pillars of Clean Code
 * ===========================================
 *
 * ✅ WHAT IS SOLID?
 *   - 5 design principles for maintainable, scalable code.
 *   - Coined by Robert C. Martin (Uncle Bob).
 *
 * S: Single Responsibility Principle
 * O: Open/Closed Principle
 * L: Liskov Substitution Principle
 * I: Interface Segregation Principle
 * D: Dependency Inversion Principle
 */

// ----------------------------------
// 1️⃣ Single Responsibility Principle (SRP)
// ----------------------------------

/**
 * ✔️ A class/module should have only ONE reason to change.
 * ✔️ One responsibility = better separation.
 */

// ❌ Bad:
class UserManagerBad {
    createUser(user) {
        // logic to create user
    }
    saveToDatabase(user) {
        // logic to save to DB
    }
    sendEmail(user) {
        // logic to send email
    }
}

// ✅ Good:
class UserCreator {
    createUser(user) {
        // logic to create user
    }
}

class UserRepository {
    save(user) {
        // save to DB
    }
}

class EmailSender {
    send(user) {
        // send email
    }
}

// ----------------------------------
// 2️⃣ Open/Closed Principle (OCP)
// ----------------------------------

/**
 * ✔️ Software entities should be open for extension but closed for modification.
 * ✔️ You should add new behavior WITHOUT changing existing code.
 */

class PaymentProcessor {
    pay(amount) {
        // base payment logic
    }
}

class PayPalProcessor extends PaymentProcessor {
    pay(amount) {
        console.log(`Paid ${amount} via PayPal`);
    }
}

class StripeProcessor extends PaymentProcessor {
    pay(amount) {
        console.log(`Paid ${amount} via Stripe`);
    }
}

// Now we can add new processors without changing PaymentProcessor.

// ----------------------------------
// 3️⃣ Liskov Substitution Principle (LSP)
// ----------------------------------

/**
 * ✔️ Subtypes must be substitutable for their base types.
 * ✔️ Derived class should not break parent class behavior.
 */

// ✅ Good:
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Eagle extends Bird { }

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly!");
    }
}

// ❌ Penguin breaks LSP → should not extend Bird if it can't fly!

// ✅ Better:
class Animal { }
class FlyingBird extends Animal {
    fly() {
        console.log("Flying");
    }
}

class NonFlyingBird extends Animal { }

class ProperPenguin extends NonFlyingBird { }

// ----------------------------------
// 4️⃣ Interface Segregation Principle (ISP)
// ----------------------------------

/**
 * ✔️ Clients should not be forced to depend on methods they do not use.
 * ✔️ Break large interfaces into smaller, more specific ones.
 */

// ❌ Bad: Fat interface
class PrinterScannerFax {
    print() { }
    scan() { }
    fax() { }
}

// A cheap printer only needs print!

// ✅ Good: Segregated interfaces
class Printer {
    print() { }
}

class Scanner {
    scan() { }
}

class Fax {
    fax() { }
}

// ----------------------------------
// 5️⃣ Dependency Inversion Principle (DIP)
// ----------------------------------

/**
 * ✔️ High-level modules should not depend on low-level modules.
 * ✔️ Both should depend on abstractions.
 * ✔️ Abstractions should not depend on details.
 * ✔️ Details should depend on abstractions.
 */

class MySQLDatabase {
    save(data) {
        console.log("Saving to MySQL");
    }
}

// ❌ Tight coupling:
class BadUserService {
    constructor() {
        this.db = new MySQLDatabase();
    }
}

// ✅ Good: Use abstraction
class UserService {
    constructor(database) {
        this.database = database;
    }
    saveUser(data) {
        this.database.save(data);
    }
}

const mysql = new MySQLDatabase();
const service = new UserService(mysql);
service.saveUser({ name: "Andy" });

/**
 * ✅ High-level service depends on an abstraction — can easily swap DB.
 */

// ----------------------------------
// 🏆 KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ SRP → One reason to change.
 * ✔️ OCP → Extend, don’t modify.
 * ✔️ LSP → Subtypes respect base contracts.
 * ✔️ ISP → Small, focused interfaces.
 * ✔️ DIP → Depend on abstractions, not concretions.
 */

console.log("🎉 You now speak SOLID fluently!");

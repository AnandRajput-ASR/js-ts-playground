/**
 * ===========================================
 * 🏭 Factory Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Hide complex object creation logic.
 *   - Return new instances based on conditions.
 *   - Centralize instantiation logic.
 *
 * ✅ WHERE YOU SEE IT:
 *   - UI libraries: create elements dynamically.
 *   - Database drivers.
 *   - Logger factories.
 */

// ----------------------------------
// 1️⃣ Factory Function Example
// ----------------------------------

function CarFactory(type) {
    switch (type) {
        case "sedan":
            return new Sedan();
        case "suv":
            return new SUV();
        default:
            throw new Error("Unknown car type");
    }
}

class Sedan {
    constructor() {
        this.type = "Sedan";
    }
    drive() {
        console.log("Driving a smooth Sedan 🚗");
    }
}

class SUV {
    constructor() {
        this.type = "SUV";
    }
    drive() {
        console.log("Driving a powerful SUV 🚙");
    }
}

const car1 = CarFactory("sedan");
car1.drive(); // "Driving a smooth Sedan 🚗"

const car2 = CarFactory("suv");
car2.drive(); // "Driving a powerful SUV 🚙"

// ----------------------------------
// 2️⃣ More Realistic Example
// ----------------------------------

class Developer {
    constructor(name) {
        this.name = name;
        this.role = "Developer";
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.role = "Tester";
    }
}

function EmployeeFactory(name, type) {
    if (type === "dev") {
        return new Developer(name);
    } else if (type === "test") {
        return new Tester(name);
    } else {
        throw new Error("Unknown employee type");
    }
}

const dev = EmployeeFactory("Andy", "dev");
const tester = EmployeeFactory("Bob", "test");

console.log(dev);    // Developer { name: 'Andy', role: 'Developer' }
console.log(tester); // Tester { name: 'Bob', role: 'Tester' }

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Factory hides `new` & complex logic.
 * ✔️ Makes code DRY & extensible.
 * ✔️ Swap creation logic without touching client code.
 *
 * 💡 Interview note:
 *   - Factory Pattern = flexible object families.
 *   - Related: Abstract Factory (even more abstract).
 */

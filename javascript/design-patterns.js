/**
 * ===========================================
 * 🧩 Design Patterns in JS
 * ===========================================
 *
 * This file explains:
 * - Singleton Pattern
 * - Factory Pattern
 * - Observer Pattern
 *
 * 💡 Real-life examples, deeply commented for interviews.
 */

// -------------------------------
// 1️⃣ Singleton Pattern
// -------------------------------

/**
 * ✔️ Ensures only *one instance* exists.
 * ✔️ Used for configs, loggers, DB connections.
 */

class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.timestamp = Date.now();
        Singleton.instance = this;
    }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log("Singleton same?", s1 === s2); // true
console.log("Singleton timestamps:", s1.timestamp, s2.timestamp); // Same

// -------------------------------
// 2️⃣ Factory Pattern
// -------------------------------

/**
 * ✔️ Creates objects without exposing the creation logic.
 * ✔️ Useful for same interface but different implementations.
 */

class Car {
    constructor() {
        this.type = "Car";
    }
}

class Truck {
    constructor() {
        this.type = "Truck";
    }
}

class VehicleFactory {
    createVehicle(vehicleType) {
        switch (vehicleType) {
            case "car":
                return new Car();
            case "truck":
                return new Truck();
            default:
                throw new Error("Unknown vehicle type");
        }
    }
}

const factory = new VehicleFactory();
const car = factory.createVehicle("car");
const truck = factory.createVehicle("truck");

console.log("Factory:", car.type);   // Car
console.log("Factory:", truck.type); // Truck

// -------------------------------
// 3️⃣ Observer Pattern
// -------------------------------

/**
 * ✔️ Allows objects to subscribe to events & react when state changes.
 * ✔️ Used in UI frameworks, Pub/Sub, event-driven apps.
 */

class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(data) {
        this.observers.forEach((obs) => obs.update(data));
    }
}

class ConcreteObserver {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received: ${data}`);
    }
}

const subject = new Subject();
const obs1 = new ConcreteObserver("Observer1");
const obs2 = new ConcreteObserver("Observer2");

subject.subscribe(obs1);
subject.subscribe(obs2);

subject.notify("Event A"); // Both observers receive Event A

subject.unsubscribe(obs1);
subject.notify("Event B"); // Only Observer2 receives Event B

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Singleton: One instance, reused.
 * ✔️ Factory: Hide creation logic, return new objects.
 * ✔️ Observer: Objects subscribe/react to state changes.
 *
 * 💡 Know these patterns, apply them = instant senior vibes!
 */

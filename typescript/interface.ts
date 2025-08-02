// interface.ts
// ===============================
// Interfaces define the *shape* of an object — properties, types, methods.
// They're a key TS feature for clear, type-safe structure.

// ✅ Basic interface

interface User {
    id: number;
    name: string;
    isActive: boolean;
}

const user1: User = {
    id: 1,
    name: "Andy",
    isActive: true,
};

// -------------------------------
// ✅ Optional properties

interface Product {
    name: string;
    price: number;
    description?: string; // optional
}

const product1: Product = {
    name: "Laptop",
    price: 1000,
};

const product2: Product = {
    name: "Phone",
    price: 600,
    description: "Latest model",
};

// -------------------------------
// ✅ Readonly properties

interface Config {
    readonly apiKey: string;
}

const config: Config = {
    apiKey: "123-ABC",
};

// config.apiKey = "456-DEF"; // ❌ Error: Cannot assign to 'apiKey' because it is a read-only property.

// -------------------------------
// ✅ Methods in interfaces

interface Logger {
    log: (message: string) => void;
}

const consoleLogger: Logger = {
    log: (msg) => console.log("Log:", msg),
};

consoleLogger.log("Hello, Andy!");

// -------------------------------
// ✅ Interface extends another interface

interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
}

const emp: Employee = {
    name: "Andy",
    employeeId: 101,
};

// -------------------------------
// ✅ Extending multiple interfaces

interface HasEmail {
    email: string;
}

interface Admin extends Person, HasEmail {
    adminLevel: number;
}

const admin: Admin = {
    name: "Admin Andy",
    email: "andy@example.com",
    adminLevel: 2,
};

// -------------------------------
// ✅ Using interfaces with functions

interface Add {
    (x: number, y: number): number;
}

const addNumbers: Add = (a, b) => a + b;

console.log(addNumbers(2, 3)); // ➜ 5

// -------------------------------
// 🔑 Key points:
// - Interfaces describe object shape clearly.
// - Use `?` for optional props, `readonly` for immutability.
// - Extend interfaces for reusable structure.
// - Interfaces can describe function signatures too.

// ✔️ You now speak TypeScript interfaces fluently!

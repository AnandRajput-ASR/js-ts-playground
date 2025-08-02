// class.ts
// ===============================
// Classes in TypeScript ➜ OOP with type safety.
// Supports properties, constructors, methods, inheritance, interfaces.

// ✅ Basic class

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const andy = new Person("Andy", 28);
andy.greet(); // Hello, my name is Andy and I'm 28 years old.

// -------------------------------
// ✅ Access modifiers: public, private, protected, readonly

class Account {
    public owner: string;
    private balance: number;
    readonly accountNumber: string;

    constructor(owner: string, balance: number, accountNumber: string) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    // balance cannot be accessed directly outside due to 'private'
}

const myAccount = new Account("Andy", 1000, "AC123");
console.log(myAccount.owner); // OK
// console.log(myAccount.balance); // ❌ Error: Property 'balance' is private
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500
// myAccount.accountNumber = "AC999"; // ❌ Error: readonly

// -------------------------------
// ✅ Inheritance

class Employee extends Person {
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    showEmployeeId(): void {
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

const emp = new Employee("Andy", 28, 101);
emp.greet();
emp.showEmployeeId();

// -------------------------------
// ✅ Implementing interfaces

interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log("LOG:", message);
    }
}

const logger = new ConsoleLogger();
logger.log("Hello World!");

// -------------------------------
// ✅ Static members

class MathHelper {
    static PI = 3.14;

    static square(x: number): number {
        return x * x;
    }
}

console.log(MathHelper.PI); // 3.14
console.log(MathHelper.square(5)); // 25

// -------------------------------
// 🔑 Key points:
// - Classes ➜ encapsulate data + behavior.
// - `public` ➜ accessible anywhere (default).
// - `private` ➜ only inside the class.
// - `protected` ➜ inside class + subclasses.
// - `readonly` ➜ can’t change after init.
// - `extends` ➜ inheritance, `super` calls parent.
// - `implements` ➜ make sure class matches interface.
// - `static` ➜ belongs to class itself, not instance.

// ✔️ You now rule OOP in TypeScript!

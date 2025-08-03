/**
 * ===========================================
 * 🏷️ Decorators
 * ===========================================
 *
 * This file explains:
 * - What a decorator is
 * - How to make class, method, and property decorators
 * - Real-world usage like Angular & NestJS
 */

// -------------------------------
// 1️⃣ What is a decorator?
// -------------------------------

/**
 * ✔️ A decorator is a function that adds metadata to classes, methods, properties.
 * ✔️ Syntax: `@MyDecorator`
 * ✔️ Enables meta-programming: modify, log, validate, inject dependencies.
 */

// -------------------------------
// 2️⃣ Class Decorator
// -------------------------------

function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log(`🔒 Class ${constructor.name} is sealed!`);
}

@Sealed
class Person {
    name: string = "Andy";
}

const p = new Person();
console.log(p.name);

// -------------------------------
// 3️⃣ Method Decorator
// -------------------------------

function Log(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`📝 Calling ${propertyKey} with`, args);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @Log
    add(a: number, b: number) {
        return a + b;
    }
}

const calc = new Calculator();
console.log("Sum:", calc.add(5, 7));

// -------------------------------
// 4️⃣ Property Decorator
// -------------------------------

function ReadOnly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}

class Example {
    @ReadOnly
    title: string = "King Andy";
}

const ex = new Example();
// ex.title = "New Title"; // ❌ Throws in strict mode

console.log(ex.title);

// -------------------------------
//

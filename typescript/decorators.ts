/**
 * ===========================================
 * 🎩 TypeScript Decorators
 * ===========================================
 *
 * This file explains:
 * - What decorators are
 * - Class decorators
 * - Property decorators
 * - Method decorators
 *
 * 💡 Popular in NestJS, Angular, TypeORM — must-know for backend TS!
 */

// -------------------------------
// 1️⃣ What is a decorator?
// -------------------------------
/**
 * ✔️ A decorator is a special kind of declaration
 * ✔️ It attaches extra behavior to classes, methods, properties, or parameters.
 * ✔️ Uses `@` syntax.
 * ✔️ Must enable "experimentalDecorators": true in tsconfig.json!
 */

// -------------------------------
// 2️⃣ Class Decorator
// -------------------------------

function Logger(constructor: Function) {
    console.log(`Class Decorator: Logging...`);
    console.log(constructor);
}

@Logger
class PersonWithLogger {
    name = "Andy";

    constructor() {
        console.log(`Person created!`);
    }
}

// When `new PersonWithLogger()` runs, decorator logs info too.

new PersonWithLogger();

// -------------------------------
// 3️⃣ Property Decorator
// -------------------------------

function PropertyLog(target: any, propertyKey: string) {
    console.log(`Property Decorator: ${propertyKey}`);
}

class Product {
    @PropertyLog
    price: number;

    constructor(p: number) {
        this.price = p;
    }
}

new Product(100);

// -------------------------------
// 4️⃣ Method Decorator
// -------------------------------

function MethodLog(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    console.log(`Method Decorator: ${methodName}`);
    console.log(descriptor);
}

class Car {
    @MethodLog
    drive() {
        console.log("Driving...");
    }
}

const myCar = new Car();
myCar.drive();

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Decorators add extra behavior to code at design time.
 * ✔️ Use cases: logging, validation, dependency injection, meta info.
 * ✔️ Common in NestJS: @Controller(), @Injectable(), @Get()
 * ✔️ Enable with `"experimentalDecorators": true` in tsconfig.json.
 *
 * 💡 They’re the meta-programming glue in modern TypeScript backends!
 */

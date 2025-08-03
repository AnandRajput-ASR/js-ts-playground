/**
 * ===========================================
 * 🔒 Advanced Type Guards
 * ===========================================
 *
 * This file explains:
 * - Built-in guards: typeof, instanceof
 * - Custom type guards (user-defined)
 * - Discriminated unions
 *
 * 💡 Knowing this = you write bulletproof TS code.
 */

// -------------------------------
// 1️⃣ Built-in guards: typeof
// -------------------------------

function logValue(x: string | number) {
    if (typeof x === "string") {
        console.log("It's a string:", x.toUpperCase());
    } else {
        console.log("It's a number:", x.toFixed(2));
    }
}

logValue("Andy");
logValue(123.456);

// -------------------------------
// 2️⃣ Built-in guards: instanceof
// -------------------------------

class SimpleCar {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    loadCargo() {
        console.log("Loading cargo...");
    }
}

function useVehicle(v: SimpleCar | Truck) {
    if (v instanceof SimpleCar) {
        v.drive();
    } else {
        v.loadCargo();
    }
}

useVehicle(new SimpleCar());
useVehicle(new Truck());

// -------------------------------
// 3️⃣ Custom type guards
// -------------------------------

interface Cat {
    meow(): void;
}

interface Dog {
    bark(): void;
}

function isCat(pet: Cat | Dog): pet is Cat {
    return (pet as Cat).meow !== undefined;
}

function speak(pet: Cat | Dog) {
    if (isCat(pet)) {
        pet.meow();
    } else {
        pet.bark();
    }
}

const kitty: Cat = { meow: () => console.log("Meow!") };
const doggo: Dog = { bark: () => console.log("Woof!") };

speak(kitty); // Meow!
speak(doggo); // Woof!

// -------------------------------
// 4️⃣ Discriminated Unions
// -------------------------------

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
    }
}

console.log("Circle Area:", getArea({ kind: "circle", radius: 5 }));
console.log("Square Area:", getArea({ kind: "square", side: 4 }));

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ `typeof` → for primitives (string, number, boolean, symbol).
 * ✔️ `instanceof` → for class instances.
 * ✔️ Custom guards: `foo is Bar` → for complex shapes.
 * ✔️ Discriminated unions: best way for pattern matching.
 *
 * 💡 This is how TypeScript achieves safe type inference at runtime!
 */

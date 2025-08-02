// types.ts
// ===============================
// TypeScript is all about TYPES.
// Types help catch bugs before you run the code.
// Here are the core ones: string, number, boolean, null, undefined, any, unknown, never, custom types.

// ✅ Primitive types

let userName: string = "Andy";
let userAge: number = 28;
let isActive: boolean = true;

// ✅ Null & Undefined

let nullableValue: string | null = null;
let notAssigned: undefined = undefined;

// ✅ Any (avoid if possible)

let anything: any = "Hello";
anything = 42;
anything = true;

// ✅ Unknown (better than any — safer)

let maybe: unknown = "Hi";
maybe = 123;
// Can't use 'maybe' directly without type checking:
// console.log(maybe.length); // Error

if (typeof maybe === "string") {
    console.log(maybe.length); // Safe!
}

// ✅ Never (when a function never returns)

function throwError(message: string): never {
    throw new Error(message);
}

// ✅ Custom Type Alias

type UserID = string | number;

let userId: UserID = 12345;
userId = "abc-123";

// ✅ Literal Types

let direction: "up" | "down" | "left" | "right";

direction = "up"; // ✅
direction = "left"; // ✅
// direction = "forward"; // ❌ Error

// ✅ Union Types

type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";

// ✅ Intersection Types (Basic)

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = {
    name: "Andy",
    age: 28,
};

// ✅ Type Assertion

let input: unknown = "I am a string";

let strLength: number = (input as string).length;

// -------------------------------
// 🔑 Key points:
// - TS checks types at compile time.
// - `type` is used to make custom types reusable.
// - Use union, intersection, literal types for flexibility.
// - Avoid `any` — prefer `unknown` if you’re unsure.
// - `never` means impossible to reach the end — mostly for errors or infinite loops.

// ✔️ You now speak primitive + custom types fluently!

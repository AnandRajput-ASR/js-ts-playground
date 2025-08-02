// type-inference.ts
// ===============================
// Type Inference ➜ TypeScript figures out the type for you.
// Saves you time, keeps you safe.

// ✅ Basic inference

let username = "Andy"; // inferred as string
// username = 123; // ❌ Error: number not assignable to string

let age = 28; // inferred as number

let isAdmin = true; // inferred as boolean

// ✅ Function return type inference

function add(a: number, b: number) {
    return a + b; // inferred as number
}

const sum = add(5, 10); // sum is number

// ✅ Array inference

const numbers = [1, 2, 3]; // inferred as number[]
numbers.push(4);
// numbers.push("five"); // ❌ Error

const mixed = [1, "two", true]; // inferred as (string | number | boolean)[]

// ✅ Inference with const vs let

const pi = 3.14; // inferred as 3.14 (literal type) ➜ consts have narrower inference

let version = "1.0.0"; // inferred as string

// ✅ Type widening

let something; // inferred as 'any' (be careful!)
something = "Hello";
something = 42;

// Better: initialize with a value to avoid 'any'.

// ✅ Contextual typing ➜ Type inferred from usage

window.addEventListener("click", (event) => {
    console.log(event.clientX); // event is inferred as MouseEvent
});

// ✅ Best practice: Explicit vs inferred

function greet(name: string) {
    return `Hello, ${name}!`;
}

// Good: parameters are explicitly typed
// Return is inferred ➜ fine, because it's obvious.

// ✅ When to add explicit types?

// 1️⃣ When TS can't infer correctly
// 2️⃣ For function parameters (always)
// 3️⃣ For public APIs or libraries (clear contracts)
// 4️⃣ When union or complex types are involved

// -------------------------------
// 🔑 Key points:
// - TS is smart — don't overdo manual typing if it knows the obvious.
// - Avoid 'any' — initialize your variables properly.
// - Parameters should always be typed, returns: up to you.
// - Inference makes code DRY but safe!

// ✔️ You now understand Type Inference deeply!

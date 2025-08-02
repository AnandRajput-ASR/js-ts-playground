// tuple.ts
// ===============================
// Tuples ➜ special arrays with fixed length & ordered types.
// Each position has its own type.

// ✅ Basic tuple

let user: [string, number];

user = ["Andy", 28]; // OK
// user = [28, "Andy"]; // ❌ Error: order matters
// user = ["Andy"]; // ❌ Error: must have two elements

// ✅ Destructuring a tuple

const [userName, userAge]: [string, number] = ["Andy", 28];
console.log(userName); // "Andy"
console.log(userAge);  // 28


// const [name, age]: [string, number] = ["Andy", 28];
// console.log(name); // "Andy"
// console.log(age);  // 28

// ✅ Tuple with optional elements

type FlexibleTuple = [string, number?];

const flexible: FlexibleTuple = ["OnlyName"];
const flexible2: FlexibleTuple = ["NameAndAge", 99];

// ✅ Tuple with rest elements

type StringNumberBooleans = [string, number, ...boolean[]];

const data: StringNumberBooleans = ["Andy", 30, true, false, true];

// ✅ Using tuples in functions

// Example: return multiple values

function useCounter(): [number, () => void] {
    let count = 0;
    const increment = () => {
        count++;
        console.log(count);
    };
    return [count, increment];
}

const [count, increment] = useCounter();
increment(); // 1
increment(); // 2

// ✅ Readonly tuples

const rgb: readonly [number, number, number] = [255, 0, 0];
// rgb[0] = 100; // ❌ Error: Cannot assign to readonly tuple

// ✅ Labeled tuple elements (TS 4.0+)

type Point = [x: number, y: number];

const point: Point = [10, 20];
console.log(`X: ${point[0]}, Y: ${point[1]}`);

// -------------------------------
// 🔑 Key points:
// - Tuples = fixed size, fixed order.
// - Great for predictable pairs (like React's useState).
// - Can have optional/rest elements.
// - Use `readonly` to protect them.
// - Label elements for readability (TS 4+).

// ✔️ You now understand tuples like a pro!

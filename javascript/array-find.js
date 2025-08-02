// array-find.js
// ===============================
// The `find()` method returns the *first element* in the array
// that satisfies the provided testing function.
// If no element matches, it returns `undefined`.

// ✅ Example 1: Find the first even number

const numbers = [1, 3, 5, 4, 8, 10];

const firstEven = numbers.find(function (num) {
    return num % 2 === 0;
});

// ➜ firstEven: 4
// Note: It stops at the FIRST match only.

// -------------------------------
// ✅ Using Arrow Function

const firstOdd = numbers.find((num) => num % 2 !== 0);

// ➜ firstOdd: 1

// -------------------------------
// ✅ Example 2: Find a user by name

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

const user = users.find((user) => user.name === "Bob");

// ➜ user: { id: 2, name: "Bob" }

// -------------------------------
// ✅ Example 3: Find with no match

const result = numbers.find((num) => num > 100);

// ➜ result: undefined

// -------------------------------
// ✅ Example 4: Find object with a specific property condition

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 },
];

const expensiveProduct = products.find((product) => product.price > 1000);

// ➜ expensiveProduct: { name: "Laptop", price: 1200 }

// -------------------------------
// ✅ Key points:
// - `find` returns ONLY the first match.
// - If no match, returns `undefined` (not an empty array).
// - Stops searching once it finds the first match — efficient for large arrays.

// 🔑 Interview tip: Use `find` when you need one match. Use `filter` if you need *all* matches.

// Done! ✔️

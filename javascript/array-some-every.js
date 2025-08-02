// array-some-every.js
// ===============================
// `some()` and `every()` are condition-checking methods for arrays.
// - `some()` checks if *at least one* element passes the test → returns true/false.
// - `every()` checks if *ALL* elements pass the test → returns true/false.

// ✅ Example 1: Check if any number is even

const numbers = [1, 3, 5, 7, 8];

const hasEven = numbers.some(function (num) {
    return num % 2 === 0;
});

// ➜ hasEven: true (because 8 is even)

// -------------------------------
// ✅ Using Arrow Function

const hasOdd = numbers.some(num => num % 2 !== 0);

// ➜ hasOdd: true (because 1, 3, 5, 7 are odd)

// -------------------------------
// ✅ Example 2: Check if ALL numbers are positive

const allPositive = numbers.every(num => num > 0);

// ➜ allPositive: true

// -------------------------------
// ✅ Example 3: Check if ALL users are active

const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: true },
    { name: "Charlie", active: false },
];

const allActive = users.every(user => user.active);

// ➜ allActive: false (because Charlie is inactive)

// -------------------------------
// ✅ Example 4: Combined use-case

// Any product out of stock?

const products = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: false },
    { name: "Tablet", inStock: true },
];

const anyOutOfStock = products.some(product => !product.inStock);

// ➜ anyOutOfStock: true (Phone is out of stock)

// -------------------------------
// ✅ Key points:
// - `some` returns true if at least one passes.
// - `every` returns true only if ALL pass.
// - Both stop checking once the result is certain (efficient).

// 🔑 Interview tip: Use `some` or `every` when you need simple true/false checks for conditions.

// Done! ✔️

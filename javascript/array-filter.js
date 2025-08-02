// array-filter.js
// ===============================
// The `filter()` method creates a new array containing elements
// that pass a *test function* (returns true).
// The original array is NOT modified.

// ✅ Real-world example: Filter out numbers greater than 50

const numbers = [10, 40, 60, 90, 30];

// Keep numbers > 50
const greaterThan50 = numbers.filter(function(num) {
  return num > 50;
});

// ➜ numbers: [10, 40, 60, 90, 30]
// ➜ greaterThan50: [60, 90]

// -------------------------------
// ✅ Using Arrow Function (clean & modern)

const lessThan50 = numbers.filter(num => num < 50);

// ➜ lessThan50: [10, 40, 30]

// -------------------------------
// ✅ Filtering objects: Only active users

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];

// Only keep active users
const activeUsers = users.filter(user => user.active);

// ➜ activeUsers: [
//   { name: "Alice", active: true },
//   { name: "Charlie", active: true }
// ]

// -------------------------------
// ✅ Another example: Remove falsy values
// Sometimes you just want to clean an array of unwanted values.

const mixed = [0, "hello", false, "", 42, null, "world"];

const truthyValues = mixed.filter(Boolean);

// ➜ truthyValues: ["hello", 42, "world"]
// Trick: `Boolean` as filter keeps only truthy values.

// -------------------------------
// ✅ Key points:
// - `filter` loops through each item.
// - Includes it in the result only if the function returns `true`.
// - Returns a new array (does not modify original).

// 🔑 Remember: Use `filter` when you want to remove unwanted items
// without changing the original array.

// Done! ✔️

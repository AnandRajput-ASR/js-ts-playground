// array-foreach.js
// ===============================
// The `forEach()` method executes a provided function once for each array element.
// Unlike `map()`, `forEach()` does NOT return a new array — it returns `undefined`.
// It's used mainly for performing side effects like logging or updating something outside the array.

// ✅ Example 1: Log each number

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log(num);
});

// Output:
// 1
// 2
// 3
// 4
// 5

// -------------------------------
// ✅ Using Arrow Function

numbers.forEach(num => console.log(num));

// -------------------------------
// ✅ Example 2: Sum numbers using forEach()

// Note: forEach() itself does not return the sum. We have to maintain it externally.

let sum = 0;

numbers.forEach(num => {
    sum += num;
});

// ➜ sum: 15

// -------------------------------
// ✅ Example 3: Modify an external array

const doubledNumbers = [];

numbers.forEach(num => {
    doubledNumbers.push(num * 2);
});

// ➜ doubledNumbers: [2, 4, 6, 8, 10]

// -------------------------------
// ✅ Example 4: Looping over objects

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});

// Output:
// Alice is 25 years old
// Bob is 30 years old

// -------------------------------
// ✅ Key points:
// - `forEach` runs a function for each element.
// - It does NOT return anything useful — always returns `undefined`.
// - Good for side effects: logging, pushing to other arrays, calling APIs, etc.
// - Can't chain like `map` or `filter` since there's no output.

// 🔑 Interview tip: If you want to *transform* or *filter*, don't use `forEach()` — use `map()` or `filter()` instead.

// Done! ✔️

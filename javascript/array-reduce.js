// array-reduce.js
// ===============================
// The `reduce()` method executes a reducer function on each element
// of the array, resulting in a *single output value*.
// The original array is NOT modified.

// Syntax:
// array.reduce(callback, initialValue)

// ✅ Example 1: Sum all numbers in an array

const numbers = [10, 20, 30, 40];

// Sum = 10 + 20 + 30 + 40 = 100

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of accumulator

// ➜ sum: 100

// -------------------------------
// ✅ Using Arrow Function

const sumArrow = numbers.reduce((acc, curr) => acc + curr, 0);

// -------------------------------
// ✅ Example 2: Find the maximum number

const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

// ➜ max: 40

// -------------------------------
// ✅ Example 3: Flatten an array of arrays

const nested = [[1, 2], [3, 4], [5, 6]];

const flattened = nested.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

// ➜ flattened: [1, 2, 3, 4, 5, 6]

// -------------------------------
// ✅ Example 4: Count occurrences

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
    if (acc[fruit]) {
        acc[fruit] += 1;
    } else {
        acc[fruit] = 1;
    }
    return acc;
}, {});

// ➜ count: { apple: 3, banana: 2, orange: 1 }

// -------------------------------
// ✅ Key points:
// - `reduce` is used to boil down an array into a single value (number, object, array, etc).
// - Takes 2 arguments: callback & initial value.
// - `accumulator` carries over from each iteration.
// - It's super flexible: sum, multiply, flatten, group, anything!

// 🔑 Interview tip: If they ask you to transform an array into something else — think `.reduce()`!

// Done! ✔️

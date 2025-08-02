// closure.js
// ===============================
// A closure is when a function "remembers" its outer scope
// even after that outer function has finished executing.
// In other words: inner functions can access variables defined in their outer function,
// even if the outer function is gone from the stack.

// ✅ Example 1: Basic closure

function outer() {
    const secret = "I am a secret 👀";

    function inner() {
        console.log(secret); // inner() has access to secret
    }

    return inner;
}

const closureFn = outer(); // outer() runs & returns inner()
closureFn(); // ➜ "I am a secret 👀"

// -------------------------------
// ✅ Example 2: Counter using closure

function createCounter() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // ➜ 1
console.log(counter1()); // ➜ 2
console.log(counter1()); // ➜ 3

const counter2 = createCounter();
console.log(counter2()); // ➜ 1

// Different instances keep separate closures.

// -------------------------------
// ✅ Example 3: Private variables

function secretHolder(secret) {
    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (newSecret) {
            secret = newSecret;
        },
    };
}

const mySecret = secretHolder("Andy loves JS 💙");
console.log(mySecret.getSecret()); // ➜ "Andy loves JS 💙"
mySecret.setSecret("Andy loves TypeScript too! 🤓");
console.log(mySecret.getSecret()); // ➜ "Andy loves TypeScript too! 🤓"

// -------------------------------
// ✅ Example 4: Common interview gotcha — closures in loops

// Classic wrong example:
var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs[0](); // ➜ 3 (not 0!)
funcs[1](); // ➜ 3
funcs[2](); // ➜ 3

// Why? Because 'var' has function scope, not block scope.

// Fixed with let:
var fixedFuncs = [];

for (let j = 0; j < 3; j++) {
    fixedFuncs.push(function () {
        console.log(j);
    });
}

fixedFuncs[0](); // ➜ 0
fixedFuncs[1](); // ➜ 1
fixedFuncs[2](); // ➜ 2

// -------------------------------
// ✅ Key points:
// - Closures keep data private and persistent.
// - Super useful for data hiding & factory functions.
// - Shows deep understanding of scope & execution context.

// 🔑 Interview tip: When asked about closures, explain:
// "A closure is when an inner function remembers variables from its outer scope."

// Done! ✔️

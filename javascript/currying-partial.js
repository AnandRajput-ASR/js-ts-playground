/**
 * ===========================================
 * 🧩 Currying & Partial Application
 * ===========================================
 *
 * This file explains:
 * - What currying is
 * - What partial application is
 * - How they help with reusability & functional style
 * - Practical examples
 */

// -------------------------------
// 1️⃣ What is Currying?
// -------------------------------

/**
 * ✔️ Currying transforms a function with multiple arguments
 * ✔️ into a sequence of functions each taking one argument.
 */

function normalAdd(a, b) {
    return a + b;
}

console.log("Normal Add:", normalAdd(2, 3)); // 5

// Curried version:
function curriedAdd(a) {
    return function (b) {
        return a + b;
    };
}

console.log("Curried Add:", curriedAdd(2)(3)); // 5

// Using arrow functions:
const curriedAddArrow = (a) => (b) => a + b;

console.log("Curried Add (arrow):", curriedAddArrow(2)(3)); // 5


function multiply(a, b) {
    return a * b;
}

function curryMultiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = curryMultiply(2);
console.log("Double 5:", double(5)); // 10

// Or shorter:
const curry = (fn) => (a) => (b) => fn(a, b);
const curriedMultiply = curry(multiply);
console.log("Curried multiply:", curriedMultiply(3)(4)); // 12


// -------------------------------
// 2️⃣ Why Curry? Reusability!
// -------------------------------

const add10 = curriedAddArrow(10); // fix a = 10

console.log("Add10(5):", add10(5)); // 15
console.log("Add10(20):", add10(20)); // 30

// -------------------------------
// 3️⃣ What is Partial Application?
// -------------------------------

/**
 * ✔️ Partial Application means fixing a few arguments up front,
 * ✔️ returning a new function with the rest left open.
 * ✔️ Currying is a special case of partial application!
 */

function multiply(a, b, c) {
    return a * b * c;
}

// Partial Application for multiply by fixing `a = 2`
function partiallyApplyMultiply(a) {
    return function (b, c) {
        return multiply(a, b, c);
    };
}

const doubleMultiply = partiallyApplyMultiply(2);

console.log("Partial DoubleMultiply:", doubleMultiply(3, 4)); // 2*3*4 = 24


function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

function partial(fn, ...fixedArgs) {
    return function (...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

const sayHello = partial(greet, "Hello");
console.log(sayHello("Andy")); // Hello, Andy!

// -------------------------------
// 4️⃣ General-purpose curry helper
// -------------------------------

/**
 * ✔️ Real-world: Use helper to curry any function.
 */

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log("CurriedSum(1)(2)(3):", curriedSum(1)(2)(3)); // 6
console.log("CurriedSum(1, 2)(3):", curriedSum(1, 2)(3)); // 6

// -------------------------------
// ✅ Quick summary
// -------------------------------
/**
 * ✔️ Currying: break multi-arg fn into unary fns.
 * ✔️ Partial: fix some args, keep rest dynamic.
 * ✔️ Useful for: Reusability, pipelines, FP patterns.
 * ✔️ Widely used in frameworks, RxJS, Lodash.
 */

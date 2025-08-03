/**
 * ===========================================
 * 🧙 Custom bind(), call(), and apply()
 * ===========================================
 *
 * This file explains:
 * - How call, apply, and bind really work
 * - How to implement them from scratch
 * - Interview-level examples
 */

// -------------------------------
// 1️⃣ call() - manually invoke with custom context
// -------------------------------

function sayHello() {
    console.log(`Hello, ${this.name}!`);
}

const person = { name: "King Andy" };

sayHello.call(person); // Hello, King Andy!

// -------------------------------
// 2️⃣ apply() - same as call, but args array
// -------------------------------

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.apply(person, ["Salute", "!"]); // Salute, King Andy!

// -------------------------------
// 3️⃣ bind() - returns a new function with bound context
// -------------------------------

const sayHelloBound = sayHello.bind(person);
sayHelloBound(); // Hello, King Andy!

// -------------------------------
// 4️⃣ Build custom call()
// -------------------------------

Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

function whoAreYou(age) {
    console.log(`I am ${this.name} and I am ${age} years old.`);
}

whoAreYou.myCall({ name: "Andy Supreme" }, 29); // I am Andy Supreme and I am 29 years old.

// -------------------------------
// 5️⃣ Build custom apply()
// -------------------------------

Function.prototype.myApply = function (context, args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
};

whoAreYou.myApply({ name: "Andy App" }, [30]); // I am Andy App and I am 30 years old.

// -------------------------------
// 6️⃣ Build custom bind()
// -------------------------------

Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...moreArgs) {
        return fn.apply(context, [...args, ...moreArgs]);
    };
};

const boundWho = whoAreYou.myBind({ name: "Bound Andy" }, 31);
boundWho(); // I am Bound Andy and I am 31 years old.

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Under the hood: all 3 attach a temp property, call it, then clean up.
 * ✔️ `bind` returns a new function with preserved `this`.
 * ✔️ If you can explain this, `this` is *never* confusing again.
 *
 * 💡 Classic senior interview flex!
 */

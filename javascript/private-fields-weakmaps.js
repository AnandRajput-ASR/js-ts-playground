/**
 * ===========================================
 * 🔒 Private Fields & WeakMaps
 * ===========================================
 *
 * This file explains:
 * - `#` private class fields
 * - WeakMaps for private data storage
 * - Why they're truly private
 */

// -------------------------------
// 1️⃣ Private class fields (#)
// -------------------------------

class Person {
    #secret;
    constructor(secret) {
        this.#secret = secret;
    }

    revealSecret() {
        return `Shh! My secret is: ${this.#secret}`;
    }
}

const king = new Person("King Andy's Treasure");

console.log(king.revealSecret()); // ✅ Works
// console.log(king.#secret); // ❌ Syntax Error: private field

// -------------------------------
// 2️⃣ WeakMap for privacy
// -------------------------------

/**
 * ✔️ WeakMap keys = objects only.
 * ✔️ Values can't be accessed outside closure.
 * ✔️ Used in frameworks for true encapsulation.
 */

const PrivateData = new WeakMap();

class BankAccount {
    constructor(balance) {
        PrivateData.set(this, { balance });
    }

    deposit(amount) {
        const data = PrivateData.get(this);
        data.balance += amount;
        console.log(`Deposited ${amount}, new balance: ${data.balance}`);
    }

    getBalance() {
        return PrivateData.get(this).balance;
    }
}

const acc = new BankAccount(1000);

acc.deposit(500); // +500
console.log("Balance:", acc.getBalance()); // 1500
// Can't access balance directly:
// console.log(acc.balance); // undefined

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ `#` fields: built-in private syntax (ES2022+)
 * ✔️ WeakMaps: private storage, backward-compatible.
 * ✔️ Protects sensitive data (tokens, keys, secrets).
 * ✔️ Good OOP practice & cleaner APIs.
 *
 * 💡 If you can explain WeakMap privacy, senior devs 👀!
 */

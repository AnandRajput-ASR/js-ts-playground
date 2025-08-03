/**
 * ===========================================
 * ♟️ Strategy Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Lets you swap algorithms at runtime.
 *   - Keeps core logic flexible & maintainable.
 *
 * ✅ WHERE YOU SEE IT:
 *   - Payment methods (credit card, PayPal)
 *   - Sorting strategies
 *   - Validation rules
 */

// ----------------------------------
// 1️⃣ Example: Payment Strategies
// ----------------------------------

class CreditCardPayment {
    pay(amount) {
        console.log(`Paid $${amount} with Credit Card 💳`);
    }
}

class PayPalPayment {
    pay(amount) {
        console.log(`Paid $${amount} with PayPal 🅿️`);
    }
}

class ShoppingCart {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}

const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();

const cart1 = new ShoppingCart(creditCard);
cart1.checkout(100); // Paid $100 with Credit Card 💳

const cart2 = new ShoppingCart(paypal);
cart2.checkout(50); // Paid $50 with PayPal 🅿️

// ----------------------------------
// 2️⃣ Example: Sort Strategy
// ----------------------------------

class BubbleSort {
    sort(data) {
        console.log("Sorting with Bubble Sort 🫧", data);
    }
}

class QuickSort {
    sort(data) {
        console.log("Sorting with Quick Sort ⚡", data);
    }
}

class Sorter {
    constructor(strategy) {
        this.strategy = strategy;
    }

    sort(data) {
        this.strategy.sort(data);
    }
}

const bubble = new BubbleSort();
const quick = new QuickSort();

const sorter = new Sorter(bubble);
sorter.sort([3, 1, 4]);

sorter.strategy = quick;
sorter.sort([3, 1, 4]);

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Strategy = plug & play algorithms.
 * ✔️ Flexible, interchangeable, open/closed.
 * ✔️ Makes testing & extending easy.
 *
 * 💡 Interview note:
 *   - Strategy vs State? State pattern changes behavior *based on state*.
 *   - Strategy just *swaps algorithms*.
 */

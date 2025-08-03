/**
 * ===========================================
 * 🎨 Decorator Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Attach new behaviors to objects dynamically.
 *   - No need to alter original structure.
 *   - Flexible & reusable.
 *
 * ✅ WHERE YOU SEE IT:
 *   - React Higher Order Components (HOCs)
 *   - Express middleware
 *   - Python & TS @decorators syntax
 */

// ----------------------------------
// 1️⃣ Basic Function Decorator
// ----------------------------------

function pizza() {
    return "Plain Pizza";
}

// Decorator: adds cheese
function addCheese(pizzaFn) {
    return function () {
        return pizzaFn() + " + Cheese";
    };
}

// Decorator: adds pepperoni
function addPepperoni(pizzaFn) {
    return function () {
        return pizzaFn() + " + Pepperoni";
    };
}

let myPizza = pizza;
myPizza = addCheese(myPizza);
myPizza = addPepperoni(myPizza);

console.log(myPizza()); // Plain Pizza + Cheese + Pepperoni

// ----------------------------------
// 2️⃣ Class Decorator Example (Classic)
// (JS doesn't have built-in decorators, so we simulate it)
// In TS, decorators are actual syntax!

class Coffee {
    cost() {
        return 5;
    }
}

function withMilk(coffee) {
    const cost = coffee.cost();
    coffee.cost = function () {
        return cost + 2;
    };
}

function withSugar(coffee) {
    const cost = coffee.cost();
    coffee.cost = function () {
        return cost + 1;
    };
}

const coffee = new Coffee();
withMilk(coffee);
withSugar(coffee);

console.log(`Coffee cost: $${coffee.cost()}`); // Coffee cost: $8

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Decorators = wrap an object to extend it.
 * ✔️ Original stays untouched.
 * ✔️ Powerful for middleware & layered behavior.
 *
 * 💡 Interview note:
 *   - Classic for UI frameworks.
 *   - TS decorators: `@log`, `@readonly` are real syntax.
 */

/**
 * ===========================================
 * 🏹 Event Delegation
 * ===========================================
 *
 * This file explains:
 * - What Event Delegation is
 * - Why it matters for performance
 * - Practical example
 */

// -------------------------------
// 1️⃣ What is Event Delegation?
// -------------------------------

/**
 * ✔️ Attach a single event listener on a parent.
 * ✔️ Let events bubble up.
 * ✔️ Use `event.target` to handle specific child elements.
 */

// -------------------------------
// 2️⃣ Example: Dynamic list items
// -------------------------------

// Simulate a DOM in Node for explanation only:
console.log(`
Imagine:
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
`);

// In a browser, you'd do:
document.body.innerHTML = `
    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;

// Attach one listener to <ul>
const list = document.getElementById("list");

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked:", event.target.textContent);
    }
});

// Later you can add more <li> and they work automatically:
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
list.appendChild(newItem);

/**
 * Try clicking Item 4 → no extra listener needed!
 */

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Improves performance: fewer event listeners.
 * ✔️ Essential for dynamic UIs (React does this internally!).
 * ✔️ Classic web interview question.
 *
 * 💡 If you know bubbling & delegation, you're a DOM pro.
 */

// Check index.html
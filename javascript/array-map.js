// array-map.js
// ===============================
// The `map()` method creates a new array by applying a function
// to each element of the original array. It does NOT change the original array.

// ✅ Real-world example: Double the price of products

const prices = [100, 200, 300];

// Double each price
const doubledPrices = prices.map(function(price) {
  return price * 2;
});

// ➜ prices: [100, 200, 300]
// ➜ doubledPrices: [200, 400, 600]

// -------------------------------
// ✅ Using Arrow Function (cleaner)

const doubledPricesArrow = prices.map(price => price * 2);

// -------------------------------
// ✅ Mapping objects: Add a new property

const products = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 50 }
];

// Add 'inStock' property to each product
const updatedProducts = products.map(product => {
  return {
    ...product,
    inStock: true
  };
});

// ➜ products stays same
// ➜ updatedProducts: [
//   { name: "Apple", price: 100, inStock: true },
//   { name: "Banana", price: 50, inStock: true }
// ]

// -------------------------------
// ✅ Key points:
// - `map` always returns a new array.
// - Original array is NOT changed.
// - Common use: transform data for UI, API responses, etc.

// 🔑 Remember: If you don’t return inside `.map()`, it returns `undefined`!

// Done! ✔️

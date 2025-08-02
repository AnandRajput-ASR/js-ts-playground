// string-methods.js
// ===============================
// Useful & common string methods for everyday JavaScript
// Strings are everywhere — manipulating them is crucial!

// ✅ Example 1: length
const name = "Andy";
const len = name.length; // ➜ 4

// -------------------------------
// ✅ Example 2: toUpperCase(), toLowerCase()

const greet = "hello";
const upper = greet.toUpperCase(); // ➜ "HELLO"
const lower = upper.toLowerCase(); // ➜ "hello"

// -------------------------------
// ✅ Example 3: trim()
// Removes extra spaces from start and end

const messy = "   openAI   ";
const neat = messy.trim(); // ➜ "openAI"

// -------------------------------
// ✅ Example 4: slice()
// Extracts a section of a string

const str = "JavaScript";

const sliced = str.slice(0, 4); // ➜ "Java"
const last = str.slice(-6); // ➜ "Script"

// -------------------------------
// ✅ Example 5: substring()
// Similar to slice but no negative index

const sub = str.substring(4, 10); // ➜ "Script"

// -------------------------------
// ✅ Example 6: replace()
// Replace part of string — returns new string

const sentence = "I like cats";
const newSentence = sentence.replace("cats", "dogs"); // ➜ "I like dogs"

// Note: By default, replace only replaces the first match

// -------------------------------
// ✅ Example 7: split()
// Converts string to array

const csv = "red,green,blue";
const colors = csv.split(","); // ➜ ["red", "green", "blue"]

// -------------------------------
// ✅ Example 8: includes()
// Check if substring exists

const phrase = "Hello world";
const hasWorld = phrase.includes("world"); // ➜ true

// -------------------------------
// ✅ Example 9: startsWith(), endsWith()

const fileName = "report.pdf";

const isPDF = fileName.endsWith(".pdf"); // ➜ true
const isRep = fileName.startsWith("rep"); // ➜ true

// -------------------------------
// ✅ Example 10: repeat()

const ha = "Ha!";
const laugh = ha.repeat(3); // ➜ "Ha!Ha!Ha!"

// -------------------------------
// ✅ Key points:
// - Strings are immutable — methods return a *new* string.
// - Common questions: split(), slice(), trim(), includes().
// - Know differences: slice() vs substring().

// 🔑 Interview tip: Practice chaining these — e.g., `str.trim().toUpperCase().slice(0,3)`.

// Done! ✔️

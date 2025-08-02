// union-intersection.ts
// ===============================
// Union Types ➜ a value can be one *of several* types.
// Intersection Types ➜ a type that combines multiple types into one.

// ✅ Union Type — value can be string OR number

let userId: string | number;

userId = "abc123"; // ok
userId = 98765;    // ok
// userId = true;  // ❌ Error

// ✅ Union in function parameters

function printId(id: string | number) {
    if (typeof id === "string") {
        console.log("ID (string):", id.toUpperCase());
    } else {
        console.log("ID (number):", id.toFixed(2));
    }
}

printId("hello"); // ID (string): HELLO
printId(123.456); // ID (number): 123.46

// ✅ Union for literal types

type ButtonSize = "small" | "medium" | "large";

const btnSize: ButtonSize = "medium";

// -------------------------------
// ✅ Intersection Type — combine multiple types

interface Name {
    name: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;

const user: Person = {
    name: "Andy",
    age: 28,
};

// ✅ Real-life: Multiple mixins

interface HasEmail {
    email: string;
}

interface HasPhone {
    phone: string;
}

type Contact = HasEmail & HasPhone;

const contactInfo: Contact = {
    email: "andy@example.com",
    phone: "1234567890",
};

// -------------------------------
// ✅ Intersection in Generics

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

const response: ArtworksResponse = {
    success: true,
    artworks: [{ title: "Mona Lisa" }, { title: "Starry Night" }],
};

// -------------------------------
// 🔑 Key points:
// - Union ➜ "either/or"
// - Intersection ➜ "both/and"
// - Use union for flexible input
// - Use intersection to combine multiple contracts (interfaces/types)

// ✔️ You now speak Union & Intersection Types fluently!

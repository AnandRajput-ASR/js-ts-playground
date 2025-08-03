/**
 * ===========================================
 * 🏷️ Discriminated Unions
 * ===========================================
 *
 * This file explains:
 * - Why unions can be unsafe
 * - How discriminated unions make them safe
 * - How to do exhaustive checks
 */

// ----------------------------------
// 1️⃣ Basic union — unsafe
// ----------------------------------

type Square = {
    kind: "square";
    size: number;
};

type Circle = {
    kind: "circle";
    radius: number;
};

type Shape = Square | Circle;

function area(shape: Shape): number {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    } else if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        // 🚫 TypeScript would error if we added a new shape but forgot to handle it.
        const _exhaustive: never = shape;
        return _exhaustive;
    }
}

// Try adding a new shape:
type Triangle = {
    kind: "triangle";
    base: number;
    height: number;
};

// Now extend Shape:
type ExtendedShape = Square | Circle | Triangle;

function safeArea(shape: ExtendedShape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "triangle":
            return (shape.base * shape.height) / 2;
        default:
            // ✔️ TS will catch if we forget a variant!
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}

// ----------------------------------
// ✅ Why care?
// ----------------------------------

/**
 * ✔️ Discriminated unions make unions type-safe.
 * ✔️ Core for Redux actions, state machines.
 * ✔️ Exhaustive checks mean no missing cases.
 * ✔️ Adds huge trust to your TS code.
 */

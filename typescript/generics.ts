// generics.ts
// ===============================
// Generics let you write functions, interfaces, and classes that work with ANY type.
// You get type safety + reusability.

// ✅ Basic generic function

function identity<T>(arg: T): T {
    return arg;
}

const output1 = identity<string>("Hello Generics!");
const output2 = identity<number>(123);

console.log(output1); // "Hello Generics!"
console.log(output2); // 123

// -------------------------------
// ✅ Generic with inferred type (TS figures it out)

const output3 = identity(true); // T = boolean
console.log(output3); // true

// -------------------------------
// ✅ Generic array function

function firstElement<T>(arr: T[]): T {
    return arr[0];
}

const first = firstElement<number>([1, 2, 3]); // T = number
console.log(first); // 1

// -------------------------------
// ✅ Generic interface

interface Box<T> {
    value: T;
}

const stringBox: Box<string> = { value: "Gift 🎁" };
const numberBox: Box<number> = { value: 42 };

// -------------------------------
// ✅ Multiple generic parameters

function merge<T, U>(a: T, b: U): T & U {
    return { ...a, ...b };
}

const merged = merge({ name: "Andy" }, { age: 28 });
console.log(merged); // { name: 'Andy', age: 28 }

// -------------------------------
// ✅ Generic constraint (restrict type)

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log("Length:", item.length);
}

logLength("Hello"); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // ❌ Error: number has no 'length'

// -------------------------------
// ✅ Generic class

class DataHolder<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    getData(): T {
        return this.data;
    }
}

const stringHolder = new DataHolder<string>("Secret 🤫");
console.log(stringHolder.getData()); // "Secret 🤫"

// -------------------------------
// 🔑 Key points:
// - Generics = flexible, reusable, strongly typed.
// - `T` is just a placeholder — you can name it anything (T, U, V).
// - Use `<T>` to tell TS your function/class/thing is generic.
// - Constraints (`extends`) narrow down acceptable types.
// - Used heavily in real libs: React, RxJS, Angular, etc.

// ✔️ You now speak Generics fluently!

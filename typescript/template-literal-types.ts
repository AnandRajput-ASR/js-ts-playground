/**
 * ===========================================
 * 🏷️ Template Literal Types
 * ===========================================
 *
 * This file explains:
 * - What they are
 * - How to combine strings at the type level
 * - Real-world examples: keys, safe APIs
 */

// -------------------------------
// 1️⃣ Basic template literal type
// -------------------------------

type HelloWorld = `Hello ${string}`;
const msg: HelloWorld = "Hello Andy"; // ✅ OK
// const wrongMsg: HelloWorld = "Hi Andy"; // ❌ Error

type Color = "red" | "blue";
type Shade = "light" | "dark";

type ColoredShade = `${Shade}-${Color}`;
// "light-red" | "light-blue" | "dark-red" | "dark-blue"

// -------------------------------
// 2️⃣ Combine unions for safe keys
// -------------------------------

type Lang = "en" | "fr" | "es";
type Page = "home" | "about" | "contact";

// All possible translations:
type TranslationKey = `${Lang}_${Page}`;

const t1: TranslationKey = "en_home"; // ✅ OK
const t2: TranslationKey = "fr_contact"; // ✅ OK
// const t3: TranslationKey = "de_home"; // ❌ Error: "de" not allowed

type Direction = "top" | "bottom" | "left" | "right";

type MarginProps = `margin-${Direction}`;
// "margin-top" | "margin-bottom" | "margin-left" | "margin-right"

// -------------------------------
// 3️⃣ Dynamic getter function type
// -------------------------------

type Prop = "name" | "age";
type Getter = `get${Capitalize<Prop>}`;

const g1: Getter = "getName";
const g2: Getter = "getAge";
// const g3: Getter = "getHeight"; // ❌ Not valid

// -------------------------------
// 4️⃣ Useful with mapped types
// -------------------------------

type Events = "click" | "scroll" | "mousemove";

type EventHandlers = {
    [E in Events as `on${Capitalize<E>}`]: () => void;
};

const handlers: EventHandlers = {
    onClick: () => console.log("Click!"),
    onScroll: () => console.log("Scroll!"),
    onMousemove: () => console.log("Mousemove!"),
};

// ----------------------------------
// 5️⃣ Example: Auto key paths
// ----------------------------------

type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User; // "name" | "age"

type PrefixedKeys = `user.${UserKeys}`;
// "user.name" | "user.age"

// ----------------------------------
// 6️⃣ Crazy nested example
// ----------------------------------

type Nested<T> = {
  [K in keyof T as `data-${string & K}`]: T[K];
};

type Example = Nested<User>;
// {
//   data-name: string;
//   data-age: number;
// }

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Template Literal Types = create safe string patterns at compile time.
 * ✔️ Used in frameworks: Next.js route types, Tailwind plugins, tRPC.
 * ✔️ Mastering this = you own type-level string manipulation.
 */

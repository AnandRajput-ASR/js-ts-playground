/**
 * ===========================================
 * 🔊 Custom EventEmitter (Pub/Sub)
 * ===========================================
 *
 * This file explains:
 * - How to build an EventEmitter from scratch
 * - How pub/sub works
 * - Real usage example
 */

// -------------------------------
// 1️⃣ What is an EventEmitter?
// -------------------------------

/**
 * ✔️ Lets you "emit" named events.
 * ✔️ Lets others "subscribe" with callbacks.
 * ✔️ Used for async communication.
 */

// -------------------------------
// 2️⃣ Build our own EventEmitter!
// -------------------------------

class EventEmitter {
    constructor() {
        this.events = {};
    }

    // Subscribe to event
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    // Emit event
    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((listener) => {
                listener.apply(this, args);
            });
        }
    }

    // Remove listener
    off(eventName, listenerToRemove) {
        if (!this.events[eventName]) return;

        this.events[eventName] = this.events[eventName].filter(
            (listener) => listener !== listenerToRemove
        );
    }
}

// -------------------------------
// 3️⃣ Example usage
// -------------------------------

const emitter = new EventEmitter();

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function bye(name) {
    console.log(`Goodbye, ${name}!`);
}

// Subscribe
emitter.on("welcome", greet);
emitter.on("welcome", bye);

// Emit
emitter.emit("welcome", "Andy");
// ➜ Hello, Andy!
// ➜ Goodbye, Andy!

// Unsubscribe greet
emitter.off("welcome", greet);

// Emit again
emitter.emit("welcome", "Andy");
// ➜ Goodbye, Andy!

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ This pattern is used EVERYWHERE:
 *    - Node.js core: EventEmitter class.
 *    - Frontend frameworks: custom events.
 *    - Pub/Sub systems, message brokers.
 * ✔️ Mastering it proves you understand async comms & decoupled design!
 */

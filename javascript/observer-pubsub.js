/**
 * ===========================================
 * 📣 Observer / Pub-Sub Pattern
 * ===========================================
 *
 * This file explains:
 * - What Observer / Pub-Sub is
 * - How to build it from scratch
 * - Real examples with subscribe, unsubscribe, and publish
 */

// -------------------------------
// 1️⃣ What is Observer / Pub-Sub?
// -------------------------------

/**
 * ✔️ A pattern where objects (subscribers) listen for events.
 * ✔️ When an event happens, publisher notifies all subscribers.
 * ✔️ Used in UI frameworks, data streams, custom events.
 */

// -------------------------------
// 2️⃣ Build a simple Pub-Sub class
// -------------------------------

class PubSub {
    constructor() {
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
        console.log("✅ New subscriber added.");
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter((sub) => sub !== fn);
        console.log("❌ Subscriber removed.");
    }

    publish(data) {
        this.subscribers.forEach((sub) => sub(data));
    }
}

// -------------------------------
// 3️⃣ Example usage
// -------------------------------

const newsChannel = new PubSub();

function subscriber1(data) {
    console.log("Subscriber 1 received:", data);
}

function subscriber2(data) {
    console.log("Subscriber 2 received:", data);
}

newsChannel.subscribe(subscriber1);
newsChannel.subscribe(subscriber2);

newsChannel.publish("📰 Breaking News: King Andy rules JS!");

newsChannel.unsubscribe(subscriber1);

newsChannel.publish("📰 Another headline: Only Subscriber 2 gets this!");

// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ This pattern = EventEmitter core, Vue’s watchers, Redux middleware.
 * ✔️ Decouples components: no hard-wired function calls.
 * ✔️ Lets you build plugins, reactivity, real-time sync.
 *
 * 💡 Master this, and you can build your own mini-reactive system.
 */

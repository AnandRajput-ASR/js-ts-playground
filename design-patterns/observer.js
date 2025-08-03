/**
 * ===========================================
 * 📰 Observer Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Lets multiple objects "observe" a subject.
 *   - Subject notifies all observers on state change.
 *   - Decouples producer & consumer.
 *
 * ✅ WHERE YOU SEE IT:
 *   - DOM events (addEventListener)
 *   - Pub/Sub libraries
 *   - Framework reactivity (React, Vue)
 */

// ----------------------------------
// 1️⃣ Classic Observer Pattern
// ----------------------------------

class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observerFn) {
        this.observers.push(observerFn);
    }

    unsubscribe(observerFn) {
        this.observers = this.observers.filter(fn => fn !== observerFn);
    }

    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}

// ----------------------------------
// 2️⃣ Example Usage
// ----------------------------------

const newsPublisher = new Subject();

function subscriber1(data) {
    console.log(`Subscriber 1 received: ${data}`);
}

function subscriber2(data) {
    console.log(`Subscriber 2 received: ${data}`);
}

newsPublisher.subscribe(subscriber1);
newsPublisher.subscribe(subscriber2);

newsPublisher.notify("📰 Breaking: Andy learns Observer Pattern!");

// Unsubscribe one
newsPublisher.unsubscribe(subscriber1);

newsPublisher.notify("📰 Update: Only Subscriber 2 should see this!");

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Subject = publisher.
 * ✔️ Observer = subscriber.
 * ✔️ Subject notifies all, stays decoupled.
 *
 * 💡 Interview note:
 *   - Node.js EventEmitter = real Observer.
 *   - RxJS is an advanced reactive extension.
 */

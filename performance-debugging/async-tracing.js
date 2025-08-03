/**
 * ===========================================
 * 🧵 Async Tracing — `async_hooks`
 * ===========================================
 *
 * ✅ WHY IT MATTERS:
 *   - Async code bounces across microtasks, timers, I/O.
 *   - It's hard to follow who called what!
 *   - `async_hooks` in Node lets you see connections.
 *
 * ✅ USE CASES:
 *   - Debug async context loss.
 *   - Build request IDs per user.
 *   - Debug weird Promise leaks.
 */

// ----------------------------------
// 1️⃣ Simple async_hooks example
// ----------------------------------

const async_hooks = require("async_hooks");
const fs = require("fs");

const hook = async_hooks.createHook({
    init(asyncId, type, triggerAsyncId) {
        fs.writeSync(
            1,
            `init: asyncId=${asyncId} type=${type} triggerAsyncId=${triggerAsyncId}\n`
        );
    },
    before(asyncId) {
        fs.writeSync(1, `before: asyncId=${asyncId}\n`);
    },
    after(asyncId) {
        fs.writeSync(1, `after: asyncId=${asyncId}\n`);
    },
    destroy(asyncId) {
        fs.writeSync(1, `destroy: asyncId=${asyncId}\n`);
    },
});

hook.enable();

setTimeout(() => {
    console.log("⏰ Timeout callback");
}, 10);

Promise.resolve().then(() => {
    console.log("✅ Promise callback");
});

/**
 * ----------------------------------
 * OUTPUT (sample):
 *   init: asyncId=3 type=Timeout triggerAsyncId=1
 *   before: asyncId=3
 *   after: asyncId=3
 *   destroy: asyncId=3
 *   init: asyncId=4 type=PROMISE triggerAsyncId=1
 *   ...
 *
 * ➜ Shows how each async resource relates!
 */

// ----------------------------------
// 2️⃣ Real Use: Debug context loss
// ----------------------------------

/**
 * ✔️ Attach unique ID to each request in a server.
 * ✔️ Track it through DB calls, logs.
 * ✔️ `async_hooks` powers frameworks like CLS (Continuation Local Storage).
 */

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * 💡 `async_hooks` works only in Node.
 * 💡 It’s a low-level API — use it for tracing only!
 * 💡 Great for profiling, advanced logging, debugging async madness.
 */

// Done!

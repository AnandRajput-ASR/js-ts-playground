/**
 * ===========================================
 * 🌊 Async Generators & for-await-of
 * ===========================================
 *
 * This file explains:
 * - What async generators are
 * - How `yield` and `await` mix
 * - Practical usage: API streams, file readers
 */

// -------------------------------
// 1️⃣ What is an async generator?
// -------------------------------

/**
 * ✔️ Combines async & generators.
 * ✔️ Uses `async function*` syntax.
 * ✔️ Can `await` inside and `yield` results over time.
 */

// -------------------------------
// 2️⃣ Basic async generator example
// -------------------------------

async function* asyncCounter() {
    for (let i = 1; i <= 3; i++) {
        await new Promise((res) => setTimeout(res, 500)); // Simulate delay
        yield i;
    }
}

(async () => {
    for await (const num of asyncCounter()) {
        console.log("Async num:", num);
    }
})();

async function* fetchChunks() {
    const chunks = ["🧩 Part 1", "🧩 Part 2", "🧩 Part 3"];
    for (const chunk of chunks) {
        await new Promise((res) => setTimeout(res, 500)); // fake delay
        yield chunk;
    }
}

(async () => {
    console.log("Starting async stream...");

    for await (const chunk of fetchChunks()) {
        console.log("Received:", chunk);
    }

    console.log("Stream complete!");
})();
// -------------------------------
// 3️⃣ Real-life example: Paginated API
// -------------------------------

/**
 * Imagine a paginated API that returns { items, nextPage }.
 * Async generator can keep fetching pages until done!
 */

async function* fetchPages() {
    let page = 1;
    const maxPages = 3;

    while (page <= maxPages) {
        // Fake API call
        const data = await new Promise((res) =>
            setTimeout(() => res({ items: [`Item${page}`], nextPage: page + 1 }), 500)
        );

        yield data.items[0];
        page = data.nextPage;
    }
}

(async () => {
    for await (const item of fetchPages()) {
        console.log("Fetched item:", item);
    }
})();

async function* paginatedFetcher(totalPages) {
    for (let page = 1; page <= totalPages; page++) {
        await new Promise((res) => setTimeout(res, 300)); // fake network
        yield `Fetched data for page ${page}`;
    }
}

(async () => {
    console.log("Fetching paginated data...");

    for await (const pageData of paginatedFetcher(3)) {
        console.log(pageData);
    }

    console.log("All pages fetched!");
})();
// -------------------------------
// ✅ Why care?
// -------------------------------
/**
 * ✔️ Handles streams & paginated data elegantly.
 * ✔️ Powers streaming APIs, files, big data.
 * ✔️ Used under the hood in modern frameworks.
 *
 * 💡 If you know this, your async game is ELITE.
 */

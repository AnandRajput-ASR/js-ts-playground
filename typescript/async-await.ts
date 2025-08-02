// async-await.ts
// ===============================
// Async/Await ➜ Write async code like it's synchronous.
// With TypeScript: safer, typed, cleaner.

// ✅ Basic async function

async function fetchData(): Promise<string> {
    return "Data fetched!";
}

fetchData().then(data => console.log(data)); // "Data fetched!"

// ✅ Using await inside async

async function getUser() {
    const user = await Promise.resolve({ name: "Andy", age: 28 });
    console.log(user);
}

getUser(); // { name: "Andy", age: 28 }

// ✅ Async function with explicit return type

async function addNumbers(a: number, b: number): Promise<number> {
    return a + b;
}

addNumbers(5, 10).then(sum => console.log(sum)); // 15

// ✅ Handling errors with try-catch

async function fetchWithErrorHandling() {
    try {
        const data = await Promise.reject("Oops! Something went wrong.");
        console.log(data);
    } catch (error) {
        console.error("Error caught:", error);
    }
}

fetchWithErrorHandling(); // Error caught: Oops! Something went wrong.

// ✅ Combining fetch + types

interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPost(): Promise<Post> {
    // Mock API
    return {
        id: 1,
        title: "TypeScript Async/Await",
        body: "Learning async in TS is easy!"
    };
}

async function showPost() {
    const post = await getPost();
    console.log(post.title);
}

showPost(); // "TypeScript Async/Await"

// ✅ Parallel async calls

async function parallelFetch() {
    const [result1, result2] = await Promise.all([
        Promise.resolve("One ✅"),
        Promise.resolve("Two ✅"),
    ]);

    console.log(result1, result2); // One ✅ Two ✅
}

parallelFetch();

// -------------------------------
// 🔑 Key points:
// - `async` always returns a Promise.
// - `await` pauses until Promise resolves/rejects.
// - Use `try-catch` to handle rejections cleanly.
// - Always add explicit return types for clarity.
// - `Promise.all` ➜ run multiple async tasks in parallel.

// ✔️ You now master Async/Await with TypeScript!

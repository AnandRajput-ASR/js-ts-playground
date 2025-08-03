/**
 * ===========================================
 * 🐞 Debug Like a Boss
 * ===========================================
 *
 * ✅ WHY IT MATTERS:
 *   - `console.log` is fine, but breakpoints are 🔥.
 *   - Step through async code.
 *   - Inspect variables & call stacks in real time.
 *
 * ✅ TOOLS:
 *   - `node --inspect` or `--inspect-brk`
 *   - VS Code launch config.
 *   - Chrome DevTools.
 */

// ----------------------------------
// Example: Debug a bug!
// ----------------------------------

function buggySum(arr) {
    let sum = 0;

    arr.forEach((num) => {
        if (num > 2) {
            debugger; // VS Code or Chrome will pause here
        }
        sum += num;
    });

    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = buggySum(numbers);

console.log("Result:", result);

/**
 * ----------------------------------
 * ✅ How to run:
 * ----------------------------------
 *
 * 1️⃣ Node Inspect:
 *   node --inspect-brk performance-debugging/debug-like-a-boss.js
 *
 *   ➜ Open Chrome: chrome://inspect ➜ Click 'Open dedicated DevTools' ➜ Debug!
 *
 * 2️⃣ VS Code:
 *   - Add this to .vscode/launch.json:
 *
 *   {
 *     "version": "0.2.0",
 *     "configurations": [
 *       {
 *         "type": "node",
 *         "request": "launch",
 *         "name": "Debug Like a Boss",
 *         "program": "${workspaceFolder}/performance-debugging/debug-like-a-boss.js"
 *       }
 *     ]
 *   }
 *
 *   ➜ Click 'Run & Debug' ➜ Choose "Debug Like a Boss" ➜ F5 to start.
 *
 * 3️⃣ Use breakpoints:
 *   - Click left of the line number in VS Code to set a breakpoint.
 *   - Hover to inspect variables.
 *   - Step Over (F10), Step Into (F11), Continue (F5).
 */

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ `debugger` keyword pauses if DevTools attached.
 * ✔️ Use VS Code breakpoints instead of `console.log` spam.
 * ✔️ Inspect stack, variables, closures.
 * ✔️ Essential for async bugs!
 */

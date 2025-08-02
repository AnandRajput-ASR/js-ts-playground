// runner.js
// ===============================
// 👇 Change this value only 👇

const fileToRun = "javascript/string-methods.js"; // Example JS
// const fileToRun = "typescript/types.ts"; // Example TS

// -------------------------------

const { exec } = require("child_process");

const isTS = fileToRun.endsWith(".ts");

const command = isTS
    ? `npx ts-node ${fileToRun}`
    : `node ${fileToRun}`;

console.log(`\n🚀 Running: ${fileToRun}\n`);

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(`❌ Error: ${err.message}`);
        return;
    }
    if (stderr) {
        console.error(`⚠️  Stderr: ${stderr}`);
        return;
    }
    console.log(`✅ Output:\n${stdout}`);
});

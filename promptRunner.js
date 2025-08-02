// promptRunner.js
// =======================================
// prompts you for filename!
// Supports .js and .ts automatically.

const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("👉 Enter file path to run (e.g., javascript/array-map.js): ", (fileToRun) => {
    const isTS = fileToRun.endsWith(".ts");

    const command = isTS
        ? `npx ts-node ${fileToRun}`
        : `node ${fileToRun}`;

    console.log(`\n🚀 Running: ${fileToRun}\n`);

    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`❌ Error: ${err.message}`);
        }
        if (stderr) {
            console.error(`⚠️  Stderr: ${stderr}`);
        }
        console.log(`✅ Output:\n${stdout}`);
        rl.close();
    });
});

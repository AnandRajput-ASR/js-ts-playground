/**
 * ===========================================
 * 🕹️ Command Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Encapsulate a request as an object.
 *   - Parameterize clients with actions.
 *   - Support undo/redo, queues, logs.
 *
 * ✅ WHERE YOU SEE IT:
 *   - UI undo/redo systems.
 *   - Macro recorders.
 *   - Task queues.
 */

// ----------------------------------
// 1️⃣ Command Interface & Concrete Commands
// ----------------------------------

class Light {
    on() {
        console.log("💡 Light is ON");
    }

    off() {
        console.log("💡 Light is OFF");
    }
}

// Command: Light On
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}

// Command: Light Off
class LightOffCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.off();
    }

    undo() {
        this.light.on();
    }
}

// ----------------------------------
// 2️⃣ Invoker
// ----------------------------------

class RemoteControl {
    submit(command) {
        command.execute();
    }

    cancel(command) {
        command.undo();
    }
}

// ----------------------------------
// 3️⃣ Usage
// ----------------------------------

const light = new Light();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.submit(lightOn);  // 💡 Light is ON
remote.cancel(lightOn);  // 💡 Light is OFF

remote.submit(lightOff); // 💡 Light is OFF
remote.cancel(lightOff); // 💡 Light is ON

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Command = wrap action in object.
 * ✔️ Invoker = knows how to execute.
 * ✔️ Supports queues, undo, redo.
 *
 * 💡 Interview note:
 *   - Command decouples sender & receiver.
 *   - Core idea for editors, macro recorders.
 */

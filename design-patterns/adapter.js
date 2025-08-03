/**
 * ===========================================
 * 🌉 Adapter Pattern
 * ===========================================
 *
 * ✅ WHAT IT SOLVES:
 *   - Bridge between incompatible interfaces.
 *   - Make old code work with new systems.
 *   - Keep interfaces stable while changing internals.
 *
 * ✅ WHERE YOU SEE IT:
 *   - Wrap old API to match new one.
 *   - DB driver adapters.
 *   - React adapter components.
 */

// ----------------------------------
// 1️⃣ Example: Old API vs New API
// ----------------------------------

// Old API: legacy printer
class OldPrinter {
    print(text) {
        console.log(`🖨️ Printing from OldPrinter: ${text}`);
    }
}

// New API: wants .send() instead
class NewPrinter {
    send(data) {
        console.log(`🖨️ Sending to modern printer: ${data}`);
    }
}

// Adapter: makes OldPrinter compatible with NewPrinter's interface
class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    send(data) {
        // Internally redirects to old print method
        this.oldPrinter.print(data);
    }
}

// Client code expects NewPrinter-like interface:
const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

adapter.send("Hello from Adapter!");

// ----------------------------------
// 2️⃣ Another Example: USB-C to USB-A 😆
class USBCCharger {
    chargeUSBc() {
        console.log("🔌 Charging via USB-C");
    }
}

class USBAdapter {
    constructor(usbCDevice) {
        this.device = usbCDevice;
    }

    chargeUSBa() {
        this.device.chargeUSBc();
    }
}

const usbC = new USBCCharger();
const usbAdapter = new USBAdapter(usbC);

usbAdapter.chargeUSBa(); // 🔌 Charging via USB-C

// ----------------------------------
// ✅ KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ Adapter = bridge between old & new.
 * ✔️ Keeps client code unchanged.
 * ✔️ Lets you modernize piece by piece.
 *
 * 💡 Interview note:
 *   - Classic for legacy integration.
 *   - Similar vibe: Proxy (controls access) vs Adapter (translates interface).
 */

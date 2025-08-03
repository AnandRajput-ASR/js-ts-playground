/**
 * ===========================================
 * 🧩 Tiny DI Container — Dependency Injection
 * ===========================================
 *
 * ✅ WHAT IS IT?
 *   - A simple IoC (Inversion of Control) container.
 *   - Resolves dependencies automatically.
 *   - Used by frameworks (NestJS, Angular, Spring).
 *
 * ✅ WHY?
 *   - No more manual wiring.
 *   - Swappable dependencies.
 *   - Perfect for large, testable apps.
 */

// ----------------------------------
// 🗂️ 1️⃣ Tiny DI Container
// ----------------------------------

class Container {
    constructor() {
        this.dependencies = new Map();
    }

    register(name, dependency) {
        this.dependencies.set(name, dependency);
    }

    get(name) {
        const dep = this.dependencies.get(name);
        if (!dep) throw new Error(`Dependency ${name} not found!`);
        // If it's a class, instantiate it (and inject its deps)
        if (typeof dep === "function") {
            // Get parameter names (hacky for demo!)
            const paramNames = this.getParamNames(dep);
            const params = paramNames.map((p) => this.get(p));
            return new dep(...params);
        }
        return dep;
    }

    // Quick param parser — works for simple demos.
    getParamNames(func) {
        const result = func
            .toString()
            .match(/\(([^)]*)\)/)[1]
            .split(",")
            .map((p) => p.trim())
            .filter(Boolean);
        return result;
    }
}

// ----------------------------------
// 🧩 2️⃣ Example classes
// ----------------------------------

class Logger {
    log(msg) {
        console.log(`📣 ${msg}`);
    }
}

class UserRepo {
    constructor(logger) {
        this.logger = logger;
    }

    save(user) {
        this.logger.log(`User saved: ${JSON.stringify(user)}`);
    }
}

class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }

    register(user) {
        this.userRepo.save(user);
    }
}

// ----------------------------------
// 🧩 3️⃣ Register & Resolve
// ----------------------------------

const container = new Container();

// Register classes (no manual wiring!)
container.register("logger", Logger);
container.register("userRepo", UserRepo);
container.register("userService", UserService);

// Get a fully wired service
const service = container.get("userService");

service.register({ name: "Andy", email: "andy@example.com" });

/**
 * ✅ All dependencies resolved automatically!
 * - Logger injected into UserRepo
 * - UserRepo injected into UserService
 * - You don’t wire anything manually!
 */

// ----------------------------------
// 🏆 KEY TAKEAWAYS
// ----------------------------------

/**
 * ✔️ DI Container manages wiring.
 * ✔️ Promotes loose coupling.
 * ✔️ Makes testing & swapping easy.
 * ✔️ Real frameworks do this under the hood!
 */

console.log("🎉 Tiny DI Container works — your app is magically wired!");

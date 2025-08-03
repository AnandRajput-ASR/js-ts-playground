/**
 * ===========================================
 * 🏛️ Clean Architecture — Full Mini Example
 * ===========================================
 *
 * ✅ Shows:
 *   - Layers: Controller ➜ Service ➜ Repository
 *   - Dependency Inversion (DIP)
 *   - Tiny DI Container
 *   - Separation of Concerns (SRP)
 */

// ----------------------------------
// 🗂️ 1️⃣ Repository Layer
// ----------------------------------

class UserRepository {
    constructor(logger) {
        this.logger = logger;
        this.users = [];
    }

    save(user) {
        this.users.push(user);
        this.logger.log(`✅ Saved: ${JSON.stringify(user)}`);
    }

    getAll() {
        return this.users;
    }
}

// ----------------------------------
// ⚙️ 2️⃣ Service Layer
// ----------------------------------

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    registerUser(name, email) {
        const user = { name, email };
        this.userRepository.save(user);
        return user;
    }

    listUsers() {
        return this.userRepository.getAll();
    }
}

// ----------------------------------
// 🌐 3️⃣ Controller Layer
// ----------------------------------

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    handleRegister(req) {
        const { name, email } = req;
        const user = this.userService.registerUser(name, email);
        console.log(`👤 Registered: ${JSON.stringify(user)}`);
    }

    handleList() {
        const users = this.userService.listUsers();
        console.log(`📋 All Users: ${JSON.stringify(users)}`);
    }
}

// ----------------------------------
// 🧩 Logger (Cross-cutting concern)
// ----------------------------------

class Logger {
    log(msg) {
        console.log(`📣 ${msg}`);
    }
}

// ----------------------------------
// 🪄 4️⃣ Tiny DI Container
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
        if (!dep) throw new Error(`Missing dep: ${name}`);
        if (typeof dep === "function") {
            const paramNames = this.getParamNames(dep);
            const params = paramNames.map((p) => this.get(p));
            return new dep(...params);
        }
        return dep;
    }

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
// 🧩 5️⃣ Register & Run
// ----------------------------------

const container = new Container();

container.register("logger", Logger);
container.register("userRepository", UserRepository);
container.register("userService", UserService);
container.register("userController", UserController);

const controller = container.get("userController");

controller.handleRegister({ name: "Andy", email: "andy@example.com" });
controller.handleRegister({ name: "GPT", email: "gpt@example.com" });
controller.handleList();

/**
 * ✅ Clean flow:
 * Controller ➜ Service ➜ Repository ➜ Logger
 * ✅ Dependencies auto-wired by DI Container.
 * ✅ Each layer has Single Responsibility.
 * ✅ DIP in action: Controller doesn’t care about Repo details.
 */

// ----------------------------------
// 🏆 FINAL TAKEAWAY
// ----------------------------------

/**
 * ✔️ This is how real frameworks (NestJS, Spring) do it.
 * ✔️ Layers = clarity.
 * ✔️ DIP = decoupling.
 * ✔️ DI Container = auto magic wiring.
 * ✔️ Easy to test, extend, maintain.
 */

console.log("🎉 Clean Architecture: FULL MINI APP Complete!");

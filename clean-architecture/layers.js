/**
 * ===========================================
 * 🏛️ Layers in Clean Architecture
 * ===========================================
 *
 * ✅ WHY LAYERS?
 *   - Separation of concerns.
 *   - Easy to test.
 *   - Easy to swap implementations (e.g. DB, APIs).
 *
 * Typical layers:
 *   1️⃣ Controller: Handles HTTP request/response.
 *   2️⃣ Service: Contains business logic.
 *   3️⃣ Repository: Talks to the database.
 */

// ----------------------------------
// 🗂️ 1️⃣ Repository Layer
// ----------------------------------

class UserRepository {
    constructor() {
        this.users = [];
    }

    save(user) {
        this.users.push(user);
        console.log(`✅ User saved: ${JSON.stringify(user)}`);
    }

    findAll() {
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

    createUser(name, email) {
        const user = { name, email };
        this.userRepository.save(user);
        return user;
    }

    listUsers() {
        return this.userRepository.findAll();
    }
}

// ----------------------------------
// 🌐 3️⃣ Controller Layer
// ----------------------------------

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    handleCreateUser(req) {
        const { name, email } = req;
        const user = this.userService.createUser(name, email);
        console.log(`👨‍💻 User created: ${JSON.stringify(user)}`);
    }

    handleListUsers() {
        const users = this.userService.listUsers();
        console.log(`📋 All Users: ${JSON.stringify(users)}`);
    }
}

// ----------------------------------
// 🧩 Putting it all together
// ----------------------------------

const repo = new UserRepository();
const service = new UserService(repo);
const controller = new UserController(service);

controller.handleCreateUser({ name: "Andy", email: "andy@example.com" });
controller.handleCreateUser({ name: "ChatGPT", email: "ai@example.com" });
controller.handleListUsers();

/**
 * ✅ Clean flow:
 * Controller ➜ Service ➜ Repository
 * - Easy to swap Repository (Mongo, SQL, API).
 * - Easy to test each layer in isolation.
 */

// ----------------------------------
// 🏆 Key Interview Takeaway
// ----------------------------------

/**
 * ✔️ Layers enforce separation of concerns.
 * ✔️ Each layer has a single focus.
 * ✔️ Changes in DB logic don’t break business logic.
 * ✔️ This is the core of Clean Architecture.
 */

console.log("🎉 Layers mastered — your code is clean & maintainable!");

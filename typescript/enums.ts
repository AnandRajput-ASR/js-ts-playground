// enums.ts
// ===============================
// Enums = "named constants" ➜ define a set of named values.
// Useful for roles, directions, states, etc.

// ✅ Numeric enum

enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right, // 3
}

console.log(Direction.Up);    // 0
console.log(Direction[0]);    // "Up"

// ✅ Custom numeric values

enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500,
}

console.log(Status.Success); // 200

// ✅ String enums

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
}

function checkRole(role: Role) {
    if (role === Role.Admin) {
        console.log("You are an Admin 👑");
    } else {
        console.log("Regular user 🚶‍♂️");
    }
}

checkRole(Role.Admin); // "You are an Admin 👑"
checkRole(Role.User);  // "Regular user 🚶‍♂️"

// ✅ Heterogeneous enums (not recommended, but legal)

enum Mixed {
    No = 0,
    Yes = "YES",
}

console.log(Mixed.No);  // 0
console.log(Mixed.Yes); // "YES"

// ✅ Enum in objects

interface User {
    name: string;
    role: Role;
}

const user1: User = {
    name: "Andy",
    role: Role.Admin,
};

// -------------------------------
// ✅ Enum in switch statements

function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Success:
            return "Success! 🎉";
        case Status.NotFound:
            return "Not Found 😢";
        case Status.ServerError:
            return "Server Error 💥";
        default:
            return "Unknown Status 🤷‍♂️";
    }
}

console.log(getStatusMessage(Status.Success)); // "Success! 🎉"

// -------------------------------
// 🔑 Key points:
// - `enum` groups related constant values under a name.
// - Numeric enums auto-increment by default.
// - String enums require explicit values.
// - Enums make your code self-documenting & type-safe.
// - Use them for HTTP codes, user roles, directions, app states, etc.

// ✔️ You now speak Enums fluently!

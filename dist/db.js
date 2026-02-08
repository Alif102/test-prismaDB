"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
let prisma;
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
if (process.env.NODE_ENV === "production") {
    exports.prisma = prisma = new client_1.PrismaClient({ adapter });
}
else {
    // Hot reload fix in dev
    if (!global.prisma) {
        global.prisma = new client_1.PrismaClient({ adapter });
    }
    exports.prisma = prisma = global.prisma;
}
//# sourceMappingURL=db.js.map
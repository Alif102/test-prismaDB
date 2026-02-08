"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    const { name, price } = req.body;
    const product = await db_1.prisma.product.create({
        data: { name, price },
    });
    res.json(product);
});
router.get("/", async (req, res) => {
    const products = await db_1.prisma.product.findMany();
    res.json(products);
});
exports.default = router;
//# sourceMappingURL=product.route.js.map
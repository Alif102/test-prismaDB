import { Router } from "express";
import { prisma } from "../db";

const router = Router();

router.post("/", async (req, res) => {
  const { name, price } = req.body;

  const product = await prisma.product.create({
    data: { name, price },
  });

  res.json(product);
});

router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

export default router;

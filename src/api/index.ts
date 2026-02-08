import express from "express";
import cors from "cors";
import productRoute from "../routes/product.route";
import serverless from "serverless-http";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Product API Running...");
});

// ✅ remove app.listen for Vercel
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log("Server running on", PORT));

export const handler = serverless(app);

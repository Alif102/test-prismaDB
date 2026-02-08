import express from "express";
import cors from "cors";
import productRoute from "./routes/product.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Product API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});

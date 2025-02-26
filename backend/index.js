import express from "express";
const app = express();
const port = 3000;

import productRoutes from "./src/routes/productRoutes.js";
app.use(express.json());
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

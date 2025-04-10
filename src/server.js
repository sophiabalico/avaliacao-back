import express from "express";
import produtoRoutes from "./routes/produtoRoutes.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/produtos", produtoRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

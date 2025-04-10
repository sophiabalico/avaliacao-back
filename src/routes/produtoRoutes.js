import express from "express";
import produtoController from "../controllers/produtoController.js";
const router = express.Router();
router.get("/", produtoController.getAll);
router.get("/", produtoController.getById);
router.post("/", produtoController.create);
router.put("/:id", produtoController.update);
router.delete("/:id", produtoController.delete);
export default router;

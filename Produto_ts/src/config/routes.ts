import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";

const router : Router = Router();

//Produto
router.get("/produto", new ProdutoController().list);
router.get("/produto/:id", new ProdutoController().find);
router.post("/produto", new ProdutoController().create);
router.delete("/produto/:id", new ProdutoController().delete);
router.put("/produto", new ProdutoController().update);

export { router };

import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";
import { ItemController } from "../controllers/item.controller";

const router : Router = Router();

//Produto
router.get("/produto", new ProdutoController().list);
router.get("/produto/:id", new ProdutoController().find);
router.post("/produto", new ProdutoController().create);
router.delete("/produto/:id", new ProdutoController().delete);
router.put("/produto", new ProdutoController().update);

//Carrinho
router.get("/item", new ItemController().list);
router.get("/item/:id", new ItemController().find);
router.post("/item/:idProduto/:quantidade/:id?", new ItemController().create);

export { router };

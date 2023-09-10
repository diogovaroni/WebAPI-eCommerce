import { Router } from "express";
import { ItemController } from "../controllers/item.controller";

const router: Router = Router();

//Carrinho
router.post("/item/:idProduto/:quantidade/:id?", new ItemController().create);

export { router };
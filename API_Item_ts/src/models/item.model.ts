import { Produto } from "./produto.model";

export interface Item{
      idCarrinho?: string;
      produto?: Produto;
      quantidade?: number;
}
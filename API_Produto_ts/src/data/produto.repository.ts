import { Produto } from "../models/produto.model";

let produtos : Produto[] = [];

export class ProdutoRepository{
    list(): Produto[]{
        return produtos;
    }
    create(produto: Produto): Produto{
        if (produtos.length == 0){
            produto.id = 1;
        } else{
            produto.id = produtos[produtos.length -1].id + 1;
        }
        produtos.push(produto);
        return produto;
    }
    find(idProduto: number) : Produto{
        return produtos.find((p) => p.id === idProduto)!;
    }
    delete(idProduto: number) : Produto[]{
        const index = produtos.findIndex((p) => p.id === idProduto)!;
            if(index != -1){
                produtos.splice(index, 1);
            }
        return produtos;
    }
    update(produto : Produto) : Produto{
        const index = produtos.findIndex((p) => p.id === produto.id)!;
        produtos[index] = produto;
        return produto;
    }
}
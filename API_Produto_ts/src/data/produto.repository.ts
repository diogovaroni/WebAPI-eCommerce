import { PrismaClient } from "@prisma/client";
import { Produto } from "../models/produto.model";

let produtos : Produto[] = [];
const prisma = new PrismaClient();
export class ProdutoRepository{
    list(): Produto[]{
        return produtos;
    }
    async create(produto: Produto): Promise<Produto> {
        await prisma.produto.create({
            data: {
                nome : produto.nome,
                preco : produto.preco
            },
        });
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
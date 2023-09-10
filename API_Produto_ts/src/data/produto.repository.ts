import { PrismaClient } from "@prisma/client";
import { Produto } from "../models/produto.model";

let produtos : Produto[] = [];
const prisma = new PrismaClient();
export class ProdutoRepository{
    async list(): Promise<Produto[]> {
        return await prisma.produto.findMany();
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
    async find(idProduto: number) : Promise<Produto | null> {
        return await prisma.produto.findUnique(
            {
                where : { id : idProduto }
            }
        );
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
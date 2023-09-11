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
    async delete(idProduto: number) : Promise<Produto | null>{
        try {
            return await prisma.produto.delete({
                where : { id : idProduto }
            });
        } catch {
            return null;
        }
    }
    update(produto : Produto) : Produto{
        const index = produtos.findIndex((p) => p.id === produto.id)!;
        produtos[index] = produto;
        return produto;
    }
}
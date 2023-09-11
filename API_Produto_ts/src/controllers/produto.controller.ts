import { Request, Response } from "express";
import { Produto } from "../models/produto.model";
import { ProdutoRepository } from "../data/produto.repository";

const repository = new ProdutoRepository();
export class ProdutoController{
    async list(request: Request, response: Response){
        const produtos = await repository.list();
        return response.status(200).json({
            message: "Lista de Produtos: ",
            data : produtos
        });
    }
    async find(request: Request, response: Response){
        const id = Number.parseInt(request.params.id);
        const produto = await repository.find(id);
        if(!produto){
            return response.status(404).json({ message: "Produto não encontrado"});
        }
        return response.status(200).json({
            message: "Resultado da busca: ",
            data: produto
        });
    }
    async create(request: Request, response: Response){
        let produto : Produto = request.body;
        produto = await repository.create(produto);
        return response.status(201).json({
            message : "Produto cadastrado.",
            data : produto
        });
    }
    async delete(request: Request, response: Response){
        const id = Number.parseInt(request.params.id);
        let produto = await repository.delete(id);
        if (!produto) {
            return response.status(404).json({
                message : "Produto não cadastrado!"
            });
        }
        return response.status(200).json({
            message: "Produto excluído com sucesso!",
            data: produto
        });
    }
    update(request: Request, response: Response){
        let produto: Produto = request.body;
        produto = repository.update(produto);
        return response.status(200).json({
            message: "Produto alterado: ",
            data: produto
        });
    }
}
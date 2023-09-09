import { Request, Response } from "express";
import { Produto } from "../models/produto.model";
import { ProdutoRepository } from "../data/produto.repository";

const repository = new ProdutoRepository();
export class ProdutoController{
    list(request: Request, response: Response){
        const produtos = repository.list();
        return response.status(200).json({
            message: "Lista de Produtos: ",
            data : produtos
        })
    }
    find(request: Request, response: Response){
        const id = Number.parseInt(request.params.id);
        const produto : Produto = repository.find(id);
        if(!produto){
            return response.status(404).json({ message: "Produto não encontrado"});
        }
        return response.status(200).json({
            message: "Resultado da busca: ",
            data: produto
        });
    }
    create(request: Request, response: Response){
        let produto : Produto = request.body;
        produto = repository.create(produto);
        return response.status(201).json({
            message : "Produto cadastrado.",
            data : produto
        });
    }
    delete(request: Request, response: Response){
        const id = Number.parseInt(request.params.id);
        let produtos = repository.delete(id);
        return response.status(200).json({
            message: "Produto excluído com sucesso!",
            data: produtos
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
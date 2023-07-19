import { Request, Response } from "express";
import { Produto } from "../models/produto.model";
import { ProdutoRepository } from "../data/produto.repository";

const repository = new ProdutoRepository();
export class ProdutoController{
    list(request: Request, response: Response){
        const produtos = repository.list();
        return response.status(200).json({
            message: "Deu certo!",
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
    delete(){}
    update(){}
}
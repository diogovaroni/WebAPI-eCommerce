import { Request, Response } from "express";
import { Produto } from "../models/produto.model";

const produtos : Produto[] = [];
export class ProdutoController{
    list(request: Request, response: Response){
        return response.status(200).json({
            message: "Deu certo!",
            data : produtos
        })
    }
    find(){}
    create(request: Request, response: Response){
        const produto : Produto = request.body;
        produtos.push(produto);
        return response.status(201).json({
            message : "Produto cadastrado.",
            data : produto
        });
    }
    delete(){}
    update(){}
}
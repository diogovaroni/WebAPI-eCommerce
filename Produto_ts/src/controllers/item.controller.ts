import { Request, Response } from "express";
import { ProdutoRepository } from "../data/produto.repository";
import { ItemRepository } from "../data/item.repository";
import { Item } from "../models/item.model";

const repositoryProduto = new ProdutoRepository();
const repositoryItem = new ItemRepository();

export class ItemController {

    list(request: Request, response: Response) {
        const itens = repositoryItem.list();
        return response.status(200).json({
            message: "Lista de carrinhos: ",
            data: itens            
        });
    }
    find(request: Request, response: Response) {
        const { id } = request.params;
        const itens = repositoryItem.find(id);
        return response.status(200).json({
            message: "Carrinho: ",
            data: itens
        });        
    }
    create(request: Request, response: Response) {
        let { idProduto, quantidade, id } = request.params;
        
        const produto = repositoryProduto.find(Number.parseInt(idProduto));
        if (!produto) {
            return response.status(404).json({
                message: "Produto não encontrado."
            });            
        }
        if (!id) {
            id = crypto.randomUUID();
        }
        let item : Item = {
            idCarrinho: id,
            produto: produto,
            quantidade: Number.parseInt(quantidade)
        }
        item = repositoryItem.create(item);
        return response.status(201).json({
            message: "Produto adicionado ao carrinho!",
            data: item
        });
    }
}
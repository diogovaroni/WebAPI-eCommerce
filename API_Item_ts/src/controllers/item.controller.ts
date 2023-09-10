import { Request, Response } from "express";
import { Item } from "../models/item.model";
import axios from "axios";
import { ItemRepository } from "../data/item.repository";

const repositoryItem = new ItemRepository();
export class ItemController {    
    
    async create(request: Request, response: Response) {
        let { idProduto, quantidade, id } = request.params;
        let item : Item = {};
        await axios.get("http://localhost:3000/produto/" + idProduto).then(resposta => {
            if (!id) {
                id = crypto.randomUUID();
            }
            item = {
                idCarrinho: id,
                produto: resposta.data.data,
                quantidade: Number.parseInt(quantidade)
            };
            item = repositoryItem.create(item);
            return response.status(201).json({
                message: "Produto adicionado ao carrinho!",
                data: item
            });
        }).catch (erro => {            
            return response.status(404).json({
                message: erro.response.data.message
            })
        });
    }
    
    list(request: Request, response: Response) {
        const itens = repositoryItem.list();
        return response.status(200).json({
            message: "Lista de Carrinhos: ",
            data: itens
        });
    }
    find() {}
    update() {}
    delete() {}
}
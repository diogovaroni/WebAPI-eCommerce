import { Item } from "../models/item.model";

let itens : Item[] = [];

export class ItemRepository {
    list() : Item[] {
        return itens;
    }
    find(id: string) : Item[] {
        return itens.filter((p) => p.idCarrinho === id)!;
    }
    create(item: Item) : Item {
        itens.push(item);
        return item;
    }
}

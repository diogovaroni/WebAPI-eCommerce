import { Item } from "../models/item.model";

let itens : Item[] = [];
export class ItemRepository {
    
    create(item: Item) : Item {
        itens.push(item);
        return item;
    }

    list() {}
    find() {}
    update() {}
    delete() {}
}

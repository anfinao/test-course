import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../../types";
import { IProductRepositoryService } from "./product-repo.interface";
import { ProductStoreService } from "./store.service";

@Injectable()
export class ProductRepositoryService implements IProductRepositoryService {
    private productStore = inject(ProductStoreService);

    private productList: Product[] = [
        {
            id: "7b2-f41",
            name: "Беспроводные наушники AirTune",
            description: "Наушники с активным шумоподавлением и защитой от влаги.",
            price: 12900,
            category: "Электроника"
        },
        {
            id: "a15-k98",
            name: "Кожаный ежедневник",
            description: "Формат А5, переплет из натуральной кожи, 200 страниц.",
            price: 2500,
            category: "Канцелярия"
        },
        {
            id: "m44-s23",
            name: "Кофемашина AromaPro",
            description: "Автоматическая кофемашина с капучинатором и настройкой крепости напитка.",
            price: 45000,
            category: "Бытовая техника"
        },
        {
            id: "x88-j12",
            name: "Спортивная бутылка для воды",
            description: "Объем 750 мл, выполнена из ударопрочного пластика BPA-free.",
            price: 950,
            category: "Спорт и отдых"
        },
        {
            id: "e56-y31",
            name: "Настольная лампа LED Flex",
            description: "Регулируемая яркость и цветовая температура, сенсорное управление.",
            price: 3200,
            category: "Дом и свет"
        }
    ];


    public loadProducts(): void {
        // load from service...
        this.productStore.updateProductList(this.productList);
    }

    public deleteProduct(id: string): void {
        const index = this.productList.findIndex(product => product.id === id);
        this.productList.splice(index, 1);
    }
}

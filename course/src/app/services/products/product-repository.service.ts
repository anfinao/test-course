import { inject, Injectable, signal } from "@angular/core";
import { Product } from "../../types";
import { IProductRepositoryService } from "./product-repo.interface";
import { ProductStoreService } from "./store.service";
import { OperatorExample } from "../operator-example";
import { concatMap, debounceTime, delay, exhaustMap, mergeMap, of, switchMap, tap } from "rxjs";

@Injectable()
export class ProductRepositoryService implements IProductRepositoryService {
    private productStore = inject(ProductStoreService);
    private operatorExample = inject(OperatorExample);

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
    private id = 0;
    private fakeRequest(id: number, label: string) {
        return of(`${label} ответ для ${id}`).pipe(
            tap(() => console.log(`  ${label} [${id}] старт`)),
            delay(2000),
            tap(() => console.log(`  ${label} [${id}] финиш`))
        );
    }

    public loadProducts(): void {
        // load from service...
        //this.productStore.updateProductList(this.productList);

        this.operatorExample.getProducts().subscribe((productList) => {
            this.productStore.updateProductList(productList);
        });

        // this.operatorExample.search$
        //     .pipe(debounceTime(1000))
        //     .subscribe((value) => {
        //         console.log({ search: value });
        //     });

        // this.operatorExample.search$.pipe(
        //     switchMap(() => this.fakeRequest(++this.id, 'switchMap'))
        // ).subscribe(console.log);

        // this.operatorExample.search$.pipe(
        //     concatMap(() => this.fakeRequest(++this.id, 'concatMap'))
        // ).subscribe(console.log);

        // this.operatorExample.search$.pipe(
        //     mergeMap(() => this.fakeRequest(++this.id, 'mergeMap'))
        // ).subscribe(console.log);

        this.operatorExample.search$.pipe(
            exhaustMap(() => this.fakeRequest(++this.id, 'exhaustMap'))
        ).subscribe(console.log);
    }

    public setCategory(categoryId: string): void {
        this.operatorExample.setCategory(categoryId);
    }

    public deleteProduct(id: string): void {
        const index = this.productList.findIndex(product => product.id === id);
        this.productList.splice(index, 1);
    }

    public search(value: string): void {
        this.operatorExample.search(value);
    }
}

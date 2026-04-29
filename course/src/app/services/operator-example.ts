import { DestroyRef, inject, Injectable } from '@angular/core';
import { catchError, combineLatest, concat, debounceTime, defer, delay, filter, first, forkJoin, from, last, map, merge, Observable, of, retry, skip, Subject, switchMap, take, takeUntil, tap, throwError } from 'rxjs';
import { Product } from '../types';
import { Category } from '../types/category';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root'
})
export class OperatorExample {
    private destroyRef = inject(DestroyRef);
    private destroy$ = new Subject<void>();

    protected categories: Category[] = [
        {
            "id": "cat-elec-101",
            "name": "Электроника"
        },
        {
            "id": "cat-home-202",
            "name": "Дом и сад"
        },
        {
            "id": "cat-sport-303",
            "name": "Спорт и отдых"
        },
        {
            "id": "cat-appl-404",
            "name": "Бытовая техника"
        },
        {
            "id": "cat-kids-505",
            "name": "Детские товары"
        },
        {
            "id": "cat-auto-606",
            "name": "Автотовары"
        }
    ];

    // private recommendedProducts: Product[] = [
    //     {
    //         id: '101',
    //         name: 'AirPods Pro',
    //         description: 'Беспроводные наушники',
    //         price: 249,
    //         categoryId: '1',
    //     },
    //     {
    //         id: '102',
    //         name: 'Magic Mouse',
    //         description: 'Мышь Apple',
    //         price: 99,
    //         categoryId: '2',
    //     },
    // ];

    private productList: Product[] = [
        {
            id: "7b2-f41",
            name: "Беспроводные наушники AirTune",
            description: "Наушники с активным шумоподавлением и защитой от влаги.",
            price: 12900,
            category: "Электроника",
            categoryId: "cat-elec-101"
        },
        {
            id: "a15-k98",
            name: "Кожаный ежедневник",
            description: "Формат А5, переплет из натуральной кожи, 200 страниц.",
            price: 2500,
            category: "Канцелярия",
            categoryId: "cat-elec-101"
        },
        {
            id: "m44-s23",
            name: "Кофемашина AromaPro",
            description: "Автоматическая кофемашина с капучинатором и настройкой крепости напитка.",
            price: 45000,
            category: "Бытовая техника",
            categoryId: "cat-home-202",
        },
        {
            id: "x88-j12",
            name: "Спортивная бутылка для воды",
            description: "Объем 750 мл, выполнена из ударопрочного пластика BPA-free.",
            price: 950,
            category: "Спорт и отдых",
            categoryId: "cat-home-202",
        },
        {
            id: "e56-y31",
            name: "Настольная лампа LED Flex",
            description: "Регулируемая яркость и цветовая температура, сенсорное управление.",
            price: 3200,
            category: "Дом и свет"
        }
    ];

    public categoryFilter$ = new Subject<string>();
    public search$ = new Subject<string>();

    public setCategory(categoryId: string): void {
        this.categoryFilter$.next(categoryId);
        // this.categoryFilter$.complete();
    }

    //private firstAttempt = true;

    public getProducts(): Observable<Product[]> {
        //return of(this.productList);

        return combineLatest([
            this.categoryFilter$,
            of(this.productList)
        ]).pipe(
            map(([category, products]) => {
                return products.filter(product => product.categoryId == category)
            })
        )

        // return concat(
        //     of(this.recommendedProducts).pipe(delay(1000)),
        //     of(this.productList).pipe(delay(500))
        // ).pipe(
        //     map((values) => {
        //         console.log(values);
        //         return values;
        //     })
        // );

        // return forkJoin({
        //     categories: of(this.categories),
        //     recommends: of(this.recommendedProducts),
        //     products: of(this.productList),
        //     selected: this.categoryFilter$
        //     //selected: this.categoryFilter$.pipe(take(1))
        // }).pipe(
        //     map((values) => {
        //         console.log(values);
        //         return values.products;
        //     })
        // )

        // return merge(
        //     of(this.recommendedProducts).pipe(delay(2000)),
        //     of(this.productList).pipe(delay(1000)),
        //     this.categoryFilter$
        // ).pipe(
        //     map((someValue) => {
        //         console.log(someValue);
        //         if (Array.isArray(someValue)) {
        //             return someValue;
        //         }
        //         return [];
        //     })
        // )

        // return from(this.productList).pipe(
        //     takeUntilDestroyed(this.destroyRef),
        //     tap((product) => {
        //         if (product.id === 'm44-s23') {
        //             this.destroy$.next();
        //         }
        //     }),
        //     map((product) => {
        //         console.log({ product })
        //         return [product];
        //     }),
        // )

        // return of(this.productList).pipe(
        //     delay(1000),
        //     switchMap((productList) => {
        //         if (this.firstAttempt) {
        //             this.firstAttempt = false;
        //             return throwError(() => new Error('Первичная загрузка продуктов не удалась'));
        //         }
        //         return of(productList);
        //         //return throwError(() => new Error('Первичная загрузка продуктов не удалась'));
        //     }),
        //     retry(2),
        //     catchError(error => {
        //         console.error('Ошибка после повторов:', error);

        //         if (error instanceof Error) {
        //             return of([]);
        //         }

        //         return throwError(() => error);
        //     })
        // );
    }

    public search(value: string): void {
        this.search$.next(value);
    }
}

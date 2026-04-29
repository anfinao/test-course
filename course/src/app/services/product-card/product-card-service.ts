import { DestroyRef, inject, Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Product } from "../../types";
import { LC_PRODUCT_KEY } from "../../data/constansts";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Router } from "@angular/router";
import { ProductCardStore } from "./product-card.store";

@Injectable()
export class ProductCardService {
    private readonly destroyRef = inject(DestroyRef);
    private readonly router = inject(Router);
    private readonly productCardStore = inject(ProductCardStore);

    public loadProductInfo(productId: string): void {
        this.getProductInfoFromLocalStorage(productId).pipe(
            catchError(() => {
                return of(null)
            }),
            takeUntilDestroyed(this.destroyRef)
        ).subscribe((product: Product | null) => {
            if (!product) {
                this.router.navigate(['/products']);
                return;
            }

            this.productCardStore.updateProductInfo(product);
        })
    }

    public getProductInfoFromLocalStorage(productId: string): Observable<Product | null> {
        return new Observable<Product>((observer) => {
            const productsLcData = localStorage.getItem(LC_PRODUCT_KEY);
            if (productsLcData) {
                try {
                    const productsList: Product[] = JSON.parse(productsLcData);
                    const product = productsList.find(product => product.id === productId);
                    if (product) {
                        // setTimeout(() => {
                        //     observer.next(product);
                        // }, 3000);
                        observer.next(product);
                    } else {
                        observer.error(`Не найден продукт с id ${productId}`);
                    }
                } catch (e) {
                    console.error(e);
                    observer.error(e);
                }
            } else {
                observer.error(`Не найден продукт с id ${productId}`);
            }
            // setTimeout(() => {
            //     observer.complete();
            // }, 3000);
            observer.complete();
        });
    }
}

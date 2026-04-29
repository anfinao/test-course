import { DestroyRef, inject, Injectable } from "@angular/core";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { concatMap, filter, forkJoin, Observable, switchMap, withLatestFrom } from "rxjs";
import { LC_CATEGORY_KEY, LC_PRODUCT_KEY } from "../../data/constansts";
import { Product } from "../../types";
import { Category } from "../../types/category";
import { IProductRepositoryService } from "./product-repo.interface";
import { ProductStoreService } from "./store.service";
import { INIT_CATEGORIES, INIT_PRODUCTS } from "../../data/init-products";

@Injectable()
export class ProductRepositoryService implements IProductRepositoryService {
    private destroyRef = inject(DestroyRef);
    private productStore = inject(ProductStoreService);

    private readonly selectedCategoryId$ = toObservable(this.productStore.selectedCategoryId);

    public loadProducts(): void {
        forkJoin([
            this.loadCategoriesFromLocalStorage(),
            this.loadProductFromLocalStorage(),
        ])
            .pipe(
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(([categoryList, productsList]) => {
                this.productStore.updateCategoryList(categoryList);
                this.productStore.updateProductList(productsList);
            });

        this.handleSelectCategoryChange();
    }

    private handleSelectCategoryChange(): void {
        this.selectedCategoryId$
            .pipe(
                filter(Boolean),
                switchMap((categoryId: string | null) => {
                    return this.loadProductFromLocalStorage(categoryId)
                }),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((productsList) => {
                this.productStore.updateProductList(productsList);
            })
    }

    private loadCategoriesFromLocalStorage(): Observable<Category[]> {
        return new Observable<Category[]>((observer) => {
            const categoryLcData = localStorage.getItem(LC_CATEGORY_KEY);
            if (categoryLcData) {
                try {
                    const categoryList = JSON.parse(categoryLcData);
                    observer.next(categoryList);
                } catch (e) {
                    console.error(e);
                    observer.next([]);
                }
            } else {
                observer.next(INIT_CATEGORIES);
            }
            observer.complete();
        });
    }

    private loadProductFromLocalStorage(categoryId?: string | null): Observable<Product[]> {
        return new Observable<Product[]>((observer) => {
            const productsLcData = localStorage.getItem(LC_PRODUCT_KEY);
            if (productsLcData) {
                try {
                    const productsList: Product[] = JSON.parse(productsLcData);

                    observer.next(categoryId
                        ? productsList.filter(product => product.categoryId === categoryId)
                        : productsList);
                } catch (e) {
                    console.error(e);
                    observer.next([]);
                }
            } else {
                observer.next(INIT_PRODUCTS);
            }
            observer.complete();
        });
    }

    public setCategory(categoryId: string): void {
        this.productStore.updateSelectedCategory(categoryId);
    }

    public deleteProduct(id: string): void {
        this.deleteProductFromLc(id)
            .pipe(
                concatMap(() => {
                    return this.loadProductFromLocalStorage(this.productStore.selectedCategoryId())
                }),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((productList) => {
                this.productStore.updateProductList(productList);
            });
    }

    private deleteProductFromLc(productId: string): Observable<void> {
        return new Observable<void>((observer) => {
            const productsLcData = localStorage.getItem(LC_PRODUCT_KEY);
            if (productsLcData) {
                try {
                    const productsList: Product[] = JSON.parse(productsLcData) ?? [];
                    const updatedProducts = productsList.filter(it => it.id !== productId);
                    localStorage.setItem(LC_PRODUCT_KEY, JSON.stringify(updatedProducts));
                } catch (e) {
                    console.error(e);
                    observer.error();
                }
            }

            observer.next();
            observer.complete();
        })
    }

    public addProduct(productData: Omit<Product, "id">): void {
        this.addProductLc(productData)
            .pipe(
                concatMap(() => {
                    return this.loadProductFromLocalStorage(this.productStore.selectedCategoryId())
                }),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((productList) => {
                this.productStore.updateProductList(productList);
            });
    }

    private addProductLc(productData: Omit<Product, "id">): Observable<void> {
        return new Observable<void>((observer) => {
            const productsLcData = localStorage.getItem(LC_PRODUCT_KEY);
            const newProduct = {
                id: crypto.randomUUID(),
                ...productData
            };
            if (productsLcData) {
                try {
                    const productsList: Product[] = JSON.parse(productsLcData) ?? [];
                    const updatedProducts =
                        [
                            ...productsList,
                            newProduct
                        ];
                    localStorage.setItem(LC_PRODUCT_KEY, JSON.stringify(updatedProducts));
                } catch (e) {
                    console.error(e);
                    observer.error();
                }
            } else {
                localStorage.setItem(LC_PRODUCT_KEY, JSON.stringify([newProduct]));
            }
            observer.next();
            observer.complete();
        })
    }

    public search(value: string): void {
        //this.operatorExample.search(value);
    }
}

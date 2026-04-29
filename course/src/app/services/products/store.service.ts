import { Injectable, signal } from "@angular/core";
import { Product } from "../../types";
import { Category } from "../../types/category";

@Injectable()
export class ProductStoreService {
    public productList = signal<Product[]>([]);
    public categoryList = signal<Category[]>([]);
    public selectedCategoryId = signal<string | null>(null);

    public updateProductList(products: Product[]): void {
        this.productList.set(products);
    }

    public updateCategoryList(categories: Category[]): void {
        this.categoryList.set(categories);
    }

    public updateSelectedCategory(categoryId: string): void {
        this.selectedCategoryId.set(categoryId);
    }
}

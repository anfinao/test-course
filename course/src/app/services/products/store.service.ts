import { Injectable, signal } from "@angular/core";
import { Product } from "../../types";

@Injectable()
export class ProductStoreService {
    public productList = signal<Product[]>([]);

    public updateProductList(products: Product[]): void {
        this.productList.set(products);
    }
}

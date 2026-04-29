import { Injectable, signal } from "@angular/core";
import { Product } from "../../types";

@Injectable()
export class ProductCardStore {
    public readonly productInfo = signal<Product | null>(null);

    public updateProductInfo(info: Product): void {
        this.productInfo.set(info);
    }
}

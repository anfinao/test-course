import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Product } from "../../types";
import { ProductCardService } from "../product-card/product-card-service";
import { inject } from "@angular/core";

export const productResolver: ResolveFn<Product | null> = (route: ActivatedRouteSnapshot) => {
    const productService = inject(ProductCardService);
    const id = route.paramMap.get('id')!;

    return productService.getProductInfoFromLocalStorage(id);
};

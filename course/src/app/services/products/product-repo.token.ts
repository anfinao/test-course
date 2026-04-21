import { InjectionToken } from "@angular/core";
import { IProductRepositoryService } from "./product-repo.interface";

export const PRODUCT_REPOSITORY_SERVICE = new InjectionToken<IProductRepositoryService>(
    '[PRODUCT_REPOSITORY_SERVICE]: для получения продуктов'
)

import { Product } from "../../types";

export interface IProductRepositoryService {
    loadCatalog(): void;
    deleteProduct(id: string): void;
    setCategory(categoryId: string): void;
    search(value: string): void;
    addProduct(productData: Omit<Product, 'id'>): void;
}

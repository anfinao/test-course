import { Product } from "../../types";

export interface IProductRepositoryService {
    loadProducts(): void;
    deleteProduct(id: string): void;
    setCategory(categoryId: string): void;
    search(value: string): void;
    addProduct(productData: Omit<Product, 'id'>): void;
}

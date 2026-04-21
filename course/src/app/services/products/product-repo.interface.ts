export interface IProductRepositoryService {
    loadProducts(): void;
    deleteProduct(id: string): void;
}

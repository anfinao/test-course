import { LocalStorageCatalogService } from "./local-storage-service.js";
import { Category } from "../entities/category.js";
import { Product } from "../entities/product.js";
import { RenderService } from "./render-service.js";
import { CatalogStore } from "./catalog-store.js";

export class CatalogFacade {
    constructor() {
        this.localStorage = new LocalStorageCatalogService();
        this.store = new CatalogStore(this.localStorage);

        this.#getDataFromLocalStorage();
    }

    #getDataFromLocalStorage() {
        const categories = this.localStorage.getCategories();

        if (categories && Array.isArray(categories)) {
            categories.forEach(category => {
                const savedCategory = Category.createCategory(category);
                this.store.addCategory(savedCategory);
            });
        }

        RenderService.renderCategories(this.store.categoryList);
    }

    addCategory(categoryData) {
        const category = Category.createCategory({
            name: categoryData.name
        });
        this.store.addCategory(category);

        category.addCategoryToList();
    }

    addProduct(productData) {
        const product = Product.createProduct(productData);
        this.store.addProduct(product);

        product.addProductToList();
    }

    selectCategory(categoryId) {
        this.store.selectCategory(categoryId);
    }

    showProducts(categoryId) {
        const category = this.store.getCategory(categoryId);
        RenderService.renderProducts(category);
    }
}

export const catalogFacade = new CatalogFacade();
import { Category } from "../entities/category.js";

export class CatalogStore {
    currentCategory;
    categoryList = [];

    constructor(lsService) {
        this.lsService = lsService;
    }

    addCategory(category) {
        if (category instanceof Category) {
            this.categoryList.push(category);
        }
    }

    addProduct(product) {
        if (this.currentCategory) {
            this.currentCategory.products.push(product);
            this.lsService.saveCategory(this.currentCategory);
        } else {
            this.lsService.saveProduct(product);
        }
    }

    getCategory(categoryId) {
        return this.categoryList.find(category => category.id === categoryId);
    }

    selectCategory(categoryId) {
        this.currentCategory = this.getCategory(categoryId);
    }
}
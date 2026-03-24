import { LocalStorageCatalogService } from "../local-storage-service.js";
import { Category } from "../entities/category.js";

export class CatalogStore {
    currentCategory;
    categoryList = [];
    lsService = new LocalStorageCatalogService();

    constructor(lsService) {
        this.lsService = lsService;
        if (lsService instanceof LocalStorageCatalogService) {
            const categories = lsService.getCategories();

            if (categories && Array.isArray(categories)) {
                categories.forEach(category => {
                    const savedCategory = Category.createCategory(category);
                    this.addCategory(savedCategory);
                });
            }
        }
    }

    addCategory(category) {
        if (category instanceof Category) {
            this.categoryList.push(category);
            this.lsService.saveCategory(category);
            category.addCategoryToList();
        }
    }

    getCategory(categoryId) {
        return this.categoryList.find(category => category.id === categoryId);
    }

    selectCategory(categoryId) {
        this.currentCategory = this.getCategory(categoryId);
    }
}

const localStorageService = new LocalStorageCatalogService();
export const catalogStore = new CatalogStore(localStorageService);
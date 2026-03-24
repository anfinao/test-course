import { Category } from "./entities/category.js";
import { catalogStore } from './entities/catalog-store.js';

document.getElementById(Category.categoryListContainerId).addEventListener('click', (event) => {
    const categoryId = event.target.getAttribute('data-id');
    if (event.target.getAttribute('data-id')) {
        catalogStore.selectCategory(categoryId);
        console.log(catalogStore)
    }
})
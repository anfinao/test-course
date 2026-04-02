import { Category } from "../entities/category.js";
import { Product } from "../entities/product.js";

export class RenderService {
    static renderCategories(categoryList) {
        const categoryContainer = document.getElementById(Category.categoryListContainerId);
        if (Array.isArray(categoryList)) {
            const categoryElems = categoryList.map(category => {
                return category.getCategoryElem();
            })
            categoryContainer.append(...categoryElems);
        }
    }

    static renderProducts(category) {
        const productContainer = document.getElementById(Product.productListContainerId);
        Array.from(productContainer.children).forEach(child => child.remove());

        const products = category.products;
        if (products.length > 0) {
            products.forEach(product => product.addProductToList());
        } else {
            const emptyTemplate = document.getElementById('empty-container-template').content.cloneNode(true);
            productContainer.append(emptyTemplate);
        }
    }
}
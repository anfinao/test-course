import { Product } from './product.js';

export class Category {
    static categoryListContainerId = 'categories-list';
    static categoryTemplateId = 'category-item';

    id = crypto.randomUUID();
    creationDate = new Date();

    constructor(name, products = []) {
        this.name = name;
        this.products = products;
    }

    addProduct(product) {
        if (product instanceof Product) {
            this.products.push(product);
            product.setCategory(this.id);
        }
    }

    getProductList() {
        this.catalogStore.getProductList()
    }

    static createCategory(obj) {
        const category = new Category(
            obj.name,
            []
        );
        if (obj.id) {
            category.id = obj.id;
        }
        if (obj.products && Array.isArray(obj.products)) {
            obj.products.forEach((product) => {
                category.addProduct(Product.createProduct(product));
            })
        }

        return category;
    }

    addCategoryToList() {
        const categoryContainer = document.getElementById(Category.categoryListContainerId);
        const liElement = this.getCategoryElem();
        categoryContainer.append(liElement);
    }

    getCategoryElem() {
        const liElement = document.getElementById(Category.categoryTemplateId);
        const clonedLi = liElement.content.cloneNode(true);
        clonedLi.querySelector('li').textContent = this.name;
        clonedLi.querySelector('li').setAttribute('data-id', this.id);

        return clonedLi;
    }
}
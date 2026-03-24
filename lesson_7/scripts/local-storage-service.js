export class LocalStorageCatalogService {
    #categoriesKey = 'categories';
    #productsKey = 'products';

    saveCategory(category) {
        const categories = localStorage.getItem(this.#categoriesKey);
        if (categories) {
            const categoryList = JSON.parse(categories) ?? [];
            categoryList.push(category);

            localStorage.setItem(this.#categoriesKey, JSON.stringify(categoryList));
        } else {
            localStorage.setItem(this.#categoriesKey, JSON.stringify([category]));
        }
    }

    saveProduct(product) {
        const products = localStorage.getItem(this.#productsKey);
        if (products) {
            const productList = JSON.parse(products);
            productList.push(product);

            localStorage.setItem(this.#productsKey, JSON.stringify(productList));
        } else {
            localStorage.setItem(this.#productsKey, JSON.stringify([product]));
        }
    }

    getProducts() {
        const products = localStorage.getItem(this.#productsKey);
        return JSON.parse(products);
    }

    getCategories() {
        const categories = localStorage.getItem(this.#categoriesKey);
        return JSON.parse(categories);
    }
}
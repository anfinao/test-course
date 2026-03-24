export class Product {
    static productListContainerId = 'product-list';
    static productCardTemplateId = 'product-card-tmp';

    id = crypto.randomUUID();
    name;
    description = '';
    price = 0;
    category = null;

    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price ?? 0;
        this.creationDate = new Date();
    }

    setDiscount(discount) {
        if (discount > 1) {
            this.price *= discount / 100;
        } else {
            this.price *= discount;
        }
    }

    setCategory(categoryId) {
        this.category = categoryId;
    }

    getCategory(catalogStore) {
        return catalogStore.getCategory(this.category);
    }

    static createProduct(obj) {
        const product = new Product(
            obj.name,
            obj.description,
            obj.price,
        );

        if (obj.id) {
            product.id = obj.id;
        }
        if (obj.categoryId) {
            product.categoryId = obj.categoryId;
        }

        return product;
    }

    addProductToList() {
        const productList = document.getElementById(Product.productListContainerId);
        const productCardTemplate = document.getElementById(Product.productCardTemplateId);

        const clonedTemplateNode = productCardTemplate.content.cloneNode(true);

        clonedTemplateNode.querySelector('.product-card__title').textContent = this.name;
        clonedTemplateNode.querySelector('.product-card__desc').textContent = this.description;
        clonedTemplateNode.querySelector('.product-card__price-value').textContent = this.price;

        productList.append(clonedTemplateNode);
    }
}
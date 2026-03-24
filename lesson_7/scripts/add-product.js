import { Product } from './entities/product.js';
import { Category } from './entities/category.js';
/**
 * Добавление карточки продукта по шаблону
 */
/** Кнопка для открытия формы добавления */
const addProductButtonId = 'add-product-button';
const addProductButton = document.getElementById(addProductButtonId);

/**
 * Открытие диалогового окна
 */
addProductButton.addEventListener('click', openAddProductModal);

const dialogId = 'add-product-modal';
const addProductDialog = document.getElementById(dialogId);

function openAddProductModal() {
    addProductDialog.showModal();
}

/**
 * Обработка закрытия модального окна
 */
const closeBtnSelector = '#add-product-modal [data-close]';
const cancelBtnId = 'cancel-add-product';
const closeBtn = addProductDialog.querySelector(closeBtnSelector);
const cancelBtn = document.getElementById(cancelBtnId);
closeBtn.addEventListener('click', closeAddProductModal);
cancelBtn.addEventListener('click', closeAddProductModal);

/**
 * Закрытие по клику на подложку
 */
addProductDialog.addEventListener('click', (e) => {
    if (e.target === addProductDialog) {
        closeAddProductModal();
    }
});

/**
 * Функционал добавления на страницу
 */

/** Контейнер со списком продуктов */
const productListContainerId = 'product-list';
const productList = document.getElementById(productListContainerId);

productList.addEventListener('click', (event) => {
    console.log({ event, attr: event.target.getAttribute('data-delete') });
    if (event.target.getAttribute('data-delete') === '') {
        event.target.parentElement.remove();
    }
})

/** Шаблон карточки продукта */
const productCardTemplateId = 'product-card-tmp';
const productCardTemplate = document.getElementById(productCardTemplateId);

/** Создание карточки продукта по шаблону */
function addProductCardFromTemplate({ title, description, price }) {
    const clonedTemplateNode = productCardTemplate.content.cloneNode(true);

    clonedTemplateNode.querySelector('.product-card__title').textContent = title;
    clonedTemplateNode.querySelector('.product-card__desc').textContent = description;
    clonedTemplateNode.querySelector('.product-card__price-value').textContent = price;

    productList.append(clonedTemplateNode);
}

/** Обработка отправки формы */
const acceptAddProductId = 'accept-add-product';
const acceptAddProduct = document.getElementById(acceptAddProductId);
// acceptAddProduct.addEventListener('click', handleAddProductForm);

const form = document.forms['add-product-form'];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleAddProductForm();
});

/** Валидация формы и добавление продукта */
function handleAddProductForm() {
    const productNameField = form.elements['product-name'];
    const productDescriptionField = form['product-description'];
    const productPriceField = form['product-price'];

    console.log({
        form,
        productName: Object.keys(productNameField),
        isValid: form.checkValidity()
    });

    if (!form.checkValidity()) {
        return;
    }

    addProductCardFromTemplate({
        title: productNameField.value,
        description: productDescriptionField.value,
        price: productPriceField.value
    });

    closeAddProductModal();
}

/** Закрытие модального окна */
function closeAddProductModal() {
    form.setAttribute('novalidate', '');
    form.reset();
    form.removeAttribute('novalidate');
    addProductDialog.close();
}


/** Создаем класс продукта и категории */
class CatalogStore {
    categoryList = [];

    addCategory(category) {
        if (category instanceof Category) {
            this.categoryList.push(category);
        }
    }

    getCategory(categoryId) {
        return this.categoryList.find(category => category.id === categoryId);
    }
}

// const catalogStore = new CatalogStore();

// // Категория "Смартфоны" (5 продуктов)
// const smartphones = new Category("Смартфоны");
// catalogStore.addCategory(smartphones);
// smartphones.addProduct(new Product("iPhone 15 Pro", "Флагман с титановым корпусом", 120000));
// smartphones.addProduct(new Product("iPhone 15 Pro Max", "Максимальный экран 6.7 дюйма", 140000));
// smartphones.addProduct(new Product("iPhone 14", "Надежный флагман прошлого года", 85000));
// smartphones.addProduct(new Product("iPhone SE 2022", "Компактный мощный смартфон", 55000));
// smartphones.addProduct(new Product("iPhone 13", "Отличное соотношение цена/качество", 70000));

// // Категория "Ноутбуки" (4 продукта)
// const laptops = new Category("Ноутбуки");
// catalogStore.addCategory(laptops);
// laptops.addProduct(new Product("MacBook Air M3", "Самый легкий MacBook", 110000));
// laptops.addProduct(new Product("MacBook Pro 14 M3", "Профессиональная мощность", 170000));
// laptops.addProduct(new Product("MacBook Pro 16 M3 Max", "Максимальная производительность", 250000));
// laptops.addProduct(new Product("MacBook Air M1 2020", "Бюджетный вариант с отличной автономностью", 75000));

// // Категория "Аксессуары" (5 продуктов)
// const accessories = new Category("Аксессуары");
// catalogStore.addCategory(accessories);
// accessories.addProduct(new Product("AirPods Pro 2", "Шумоподавление нового поколения", 25000));
// accessories.addProduct(new Product("AirPods 3", "Комфортные беспроводные наушники", 18000));
// accessories.addProduct(new Product("MagSafe Charger", "Беспроводная зарядка 15W", 4500));
// accessories.addProduct(new Product("Apple Pencil 2", "Идеальный стилус для iPad", 13000));
// accessories.addProduct(new Product("Smart Keyboard Folio", "Клавиатура для iPad Pro", 25000));

// // Категория "Планшеты" (4 продукта)
// const tablets = new Category("Планшеты");
// catalogStore.addCategory(tablets);
// tablets.addProduct(new Product("iPad Pro 12.9 M2", "Мощнейший планшет", 110000));
// tablets.addProduct(new Product("iPad Pro 11 M2", "Компактный профессиональный планшет", 95000));
// tablets.addProduct(new Product("iPad Air 5 M1", "Универсальный планшет", 65000));
// tablets.addProduct(new Product("iPad 10 поколения", "Базовый планшет для всех", 45000));

// // Категория "Часы" (5 продуктов)
// const watches = new Category("Часы");
// catalogStore.addCategory(watches);
// watches.addProduct(new Product("Apple Watch Ultra 2", "Для экстремальных условий", 85000));
// watches.addProduct(new Product("Apple Watch Series 9", "Последняя модель", 45000));
// watches.addProduct(new Product("Apple Watch SE 2", "Доступная модель", 28000));
// watches.addProduct(new Product("Apple Watch Series 8", "С датчиком температуры", 38000));
// watches.addProduct(new Product("Nike Apple Watch Series 9", "Спортивная версия", 47000));

// // Демонстрация количества продуктов в каждой категории
// console.log("=== Количество продуктов в категориях ===");
// console.log("Смартфоны:", smartphones.products.length, "продуктов");
// console.log("Ноутбуки:", laptops.products.length, "продуктов");
// console.log("Аксессуары:", accessories.products.length, "продуктов");
// console.log("Планшеты:", tablets.products.length, "продуктов");
// console.log("Часы:", watches.products.length, "продуктов");

// console.log(catalogStore);
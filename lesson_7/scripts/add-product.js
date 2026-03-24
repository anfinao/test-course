import { catalogFacade } from "./services/catalog-facade.js";
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
    if (event.target.getAttribute('data-delete') === '') {
        event.target.parentElement.remove();
    }
})

/** Обработка формы */
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

    if (!form.checkValidity()) {
        return;
    }

    catalogFacade.addProduct({
        name: productNameField.value,
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
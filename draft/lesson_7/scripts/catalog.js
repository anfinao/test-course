import { catalogFacade } from './services/catalog-facade.js';
import { Category } from './entities/category.js';

const categoryListButtonId = 'clone-category';
const dialogId = 'add-category-modal';
const categoryButton = document.getElementById(categoryListButtonId);
const addCategoryDialog = document.getElementById(dialogId);
/**
 * Открытие диалогового окна
 */
categoryButton.addEventListener('click', openAddCategoryModal);

function openAddCategoryModal() {
    addCategoryDialog.showModal();
}

/**
 * Обработка закрытия модального окна
 */
const closeBtnSelector = '#add-category-modal [data-close]';
const cancelBtnId = 'cancel-add-category';
const closeBtn = addCategoryDialog.querySelector(closeBtnSelector);
const cancelBtn = document.getElementById(cancelBtnId);
closeBtn.addEventListener('click', closeAddCategoryModal);
cancelBtn.addEventListener('click', closeAddCategoryModal);

/**
 * Закрытие по клику на подложку
 */
addCategoryDialog.addEventListener('click', (e) => {
    if (e.target === addCategoryDialog) {
        closeAddCategoryModal();
    }
});

const form = document.forms['add-category-form'];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleAddCategoryForm();
});

/** Валидация формы и добавление продукта */
function handleAddCategoryForm() {
    const nameField = form.elements[0];

    if (!form.checkValidity()) {
        return;
    }

    catalogFacade.addCategory(Category.createCategory({ name: nameField.value }));
    closeAddCategoryModal();
}

/** Закрытие модального окна */
function closeAddCategoryModal() {
    form.setAttribute('novalidate', '');
    form.reset();
    form.removeAttribute('novalidate');
    addCategoryDialog.close();
}
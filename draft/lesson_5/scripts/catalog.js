/**
 * Изменение иконки для отображения режима редактирования
 */
const editModeButtonName = 'edit-mode-button';
const editIconClassName = 'edit-button__icon';
const editExampleButtonClassName = 'example-btn-container';

const editBtn = document.getElementById(editModeButtonName);

const exampleButtons = document.getElementsByClassName(editExampleButtonClassName);

function addEditModeChangeListener() {
    editBtn.addEventListener('click', toggleEditMode);

    let isEdit = false;

    function toggleEditMode() {
        isEdit = !isEdit;
        const icons = editBtn.getElementsByClassName(editIconClassName);
        console.log(icons);

        for (let i = 0; i < icons.length; i++) {
            const item = icons.item(i);
            const isHidden = item.getAttribute('hidden') === '';

            if (isHidden) {
                item.removeAttribute('hidden');
            } else {
                item.setAttribute('hidden', '');
            }
        }

        for (const btn of exampleButtons) {
            if (!isEdit) {
                btn.setAttribute('data-hidden', '');
            } else {
                btn.removeAttribute('data-hidden');
                btn.removeAttribute('hidden');
            }
        }
    }
}
addEditModeChangeListener();

/**
 * Клонирование элемента категории
 */
const categoryListContainerId = 'categories-list';
const categoryListButtonId = 'clone-category';
export function cloneCategory() {
    const categoryContainer = document.getElementById(categoryListContainerId);
    const liElements = categoryContainer.getElementsByTagName('li');
    const liElement = liElements && liElements.item(0);

    if (liElement) {
        const clonedLi = liElement.cloneNode(true);
        clonedLi.textContent = `Hello ${liElements.length}`;
        categoryContainer.append(clonedLi);
    }
}
const categoryButton = document.getElementById(categoryListButtonId);
categoryButton.addEventListener('click', cloneCategory);

/**
 * Добавление карточки продукта по шаблону
 */
const productListContainerId = 'product-list';
const productCardTemplateId = 'product-card-tmp';
const productList = document.getElementById(productListContainerId);
const productCardTemplate = document.getElementById(productCardTemplateId);

const addProductButtonId = 'add-product-button';
const addProductButton = document.getElementById(addProductButtonId);
addProductButton.addEventListener('click', addProductCardFromTemplate);

function addProductCardFromTemplate() {
    const exampleProductData = {
        title: 'Новый продукт',
        description: 'Описание нового продукта',
        price: '100'
    };

    const clonedTemplateNode = productCardTemplate.content.cloneNode(true);

    clonedTemplateNode.querySelector('.product-card__title').textContent = exampleProductData.title;
    clonedTemplateNode.querySelector('.product-card__desc').textContent = `${exampleProductData.description}`;
    clonedTemplateNode.querySelector('.product-card__price-value').textContent = `${exampleProductData.price}`;

    productList.append(clonedTemplateNode);
}

/**
 * Открытие диалогового окна
 */
const openModalBtnId = 'openModal';
const dialogId = 'confirmDialog';

const openBtn = document.getElementById(openModalBtnId);
const dialog = document.getElementById(dialogId);

/**
 * Открытие (модально, с блокировкой взаимодействия со страницей)
 */
openBtn.addEventListener('click', () => {
    dialog.showModal();
});

/**
 * Закрытие по кнопке x
 */
const closeBtn = dialog.querySelector('[data-close]');
closeBtn.addEventListener('click', () => {
    dialog.close('x');
});

/**
 * Закрытие по клику на подложку:
 * dialog получает click, но проверяем что кликнули именно по самому <dialog>, не по контенту.
 */
dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close('backdrop');
});

/**
 * Событие close — можно узнать, чем закрыли (returnValue)
 */
dialog.addEventListener('close', () => {
    console.log('dialog closed, returnValue =', dialog.returnValue);
});
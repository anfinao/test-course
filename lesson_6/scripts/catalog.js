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


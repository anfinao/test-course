import { catalogFacade } from "./services/catalog-facade.js";
import { Category } from "./entities/category.js";

document.getElementById(Category.categoryListContainerId).addEventListener('click', (event) => {
    const categoryId = event.target.getAttribute('data-id');
    if (event.target.getAttribute('data-id')) {
        catalogFacade.selectCategory(categoryId);

        Array.from(event.target.parentElement.querySelectorAll('li'))
            .forEach(liItem => {
                liItem.removeAttribute('active');
            });

        event.target.setAttribute('active', true);

        catalogFacade.showProducts(categoryId);
    }
})
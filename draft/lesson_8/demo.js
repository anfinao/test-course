const addForm = document.forms['add'];
const listContainer = document.getElementById('list-section');

addForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = addForm[0];
    const textValue = input.value;

    showLoader();
    const addLiPromise = new Promise((resolve) => {
        setTimeout(() => resolve({
            text: textValue
        }), 1000);
    });

    addLiPromise
        .then((data) => {
            listContainer.append(createLi(data.text));
            addForm.reset();
            input.focus();
        })
        .finally(() => {
            hideLoader();
        });
})

function createLi(text) {
    const elem = document.createElement('li');
    elem.textContent = text;
    return elem;
}

const loader = document.getElementsByClassName('loader')[0];
function showLoader() {
    loader.classList.add('show');
}
function hideLoader() {
    loader.classList.remove('show');
}
const getDocumentElements = () => {
// Находим элементы на странице ==============================

const addProductBtn = document.querySelector('.form__btn_add-product');
const overlay = document.querySelector('.overlay');
const hideOverlay = document.querySelector('.js_hide-overlay');
const list = document.querySelector('.table-body');

// Элементы модального окна
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const productId = document.querySelector('.product-id__number');
const modalForm = document.getElementById('product-add-form');
const discountCheckbox = document.querySelector('.discont-checkbox');
const discontInput = document.querySelector('.form__input_checkbox');
const totalCost = document.querySelector('.total');
return {
    addProductBtn,
    overlay,
    hideOverlay,
    modalTitle,
    productId,
    modalForm,
    discountCheckbox,
    discontInput,
    totalCost,
    list,
    modal,
}
}
export default getDocumentElements;
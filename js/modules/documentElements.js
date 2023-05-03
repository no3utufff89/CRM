const getDocumentElements = () => {
// Находим элементы на странице ==============================

const addNewProductBtn = document.querySelector('.form__btn_add-product');
// const overlay = document.querySelector('.overlay');
// const hideOverlay = document.querySelector('.js_hide-overlay');
const list = document.querySelector('.table-body');
const allProductsCost = document.querySelector('.total');
const name = document.querySelector('.name');
const filterBtn = document.querySelector('.filter-btn');

// Элементы модального окна
// const modal = document.querySelector('.modal');
// const modalTitle = modal.querySelector('.modal__title');
// const productId = modal.querySelector('.product-id__number');
// const modalForm  = document.getElementById('product-form');
// const errorBox = document.querySelector('.error-box');
// const errorText = document.querySelector('.error-box__text');


// Элементы формы
//     const discountCheckbox = modalForm.querySelector('.discont-checkbox');
//     const discountInput = modalForm.querySelector('.form__input_checkbox');
//     const currentProductCost = modal.querySelector('.total__current-product');
//     const submitProduct = modalForm.querySelector('.submit-btn');
//     const fileAddBtn = modalForm.querySelector('.file-add-btn');
//     const productName = modalForm.querySelector('.js-form-name');
//     const productCategory = modalForm.querySelector('.js-form-category');
//     const productUnit = modalForm.querySelector('.js-form-units');
//     const productDescription = modalForm.querySelector('.js-form-desc');
//     const productCount = modalForm.querySelector('.js-form-count');
//     const productPrice = modalForm.querySelector('.js-form-price');

return {
    addNewProductBtn,
    allProductsCost,
    // overlay,
    // hideOverlay,
    list,
    filterBtn,
    // modalForm ,
    //
    // modal,
    // productId,
    // modalTitle,
    // discountCheckbox,
    // discountInput,
    // currentProductCost,
    // submitProduct,
    // fileAddBtn,
    // productName,
    // productCategory,
    // productUnit,
    // productDescription,
    // productCount,
    // productPrice,
    // errorBox,
    // errorText,


}
}
export default getDocumentElements;
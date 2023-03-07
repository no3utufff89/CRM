'use strict';

// Находим элементы на странице ==============================

const addProductBtn = document.querySelector('.form__btn_add-product');
const overlay = document.querySelector('.overlay');
const hideOverlay = document.querySelector('.js_hide-overlay');

// Элементы модального окна

const modalTitle = document.querySelector('.modal__title');
const productId = document.querySelector('.product-id__number');
const modalForm = document.getElementById('product-add-form');
const discountCheckbox = document.querySelector('.discont-checkbox');
const discontInput = document.querySelector('.form__input_checkbox');
const totalCost = document.querySelector('.total');
// ===========================================================
//
//
// Показать оверлэй

addProductBtn.addEventListener('click', () => {
    overlay.classList.add('overlay_active');
});

// Скрыть оверлэй
hideOverlay.addEventListener('click', () => {
    overlay.classList.remove('overlay_active');
})
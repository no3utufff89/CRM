import {createNewProduct} from "./builder.js";
import productCost from "./productCost.js";
import addToBase from "./addToBase.js";
import { renderTotalSum } from "./renderTotalSum.js";

export const overlayControls = (elements,data) => {
    const {
        discountCheckbox,
        discountInput,
        productCount,
        productPrice,
        submitProduct,
        addNewProductBtn,
        overlay,
        hideOverlay,
        modalForm,
    } = elements;

    // Закрытие модалки
   
const initialState = () => {
    discountInput.setAttribute("disabled", "disabled");
    discountInput.value = '';
   
}
    const closeModal = () => {
        overlay.classList.remove('overlay_active');
        discountInput.removeAttribute('disabled')
        discountCheckbox.checked = false;
        modalForm.reset();
    }

    discountCheckbox.addEventListener('change', () => {
        if (discountCheckbox.checked === true) {
            discountInput.removeAttribute('disabled')
           discountInput.value = 0;
        } else {
            productCost(elements);
            initialState();
        } 
    })
    // Открытие модалки

    const openModal = () => {
        elements.overlay.classList.add('overlay_active');
        initialState()
        createNewProduct(elements);
    }
    addNewProductBtn.addEventListener('click', () => {
        openModal();
    });
    overlay.addEventListener('click', (e) => {
        let target = e.target;
        if (target === elements.overlay) {
            closeModal();
        }
    })


    hideOverlay.addEventListener('click', closeModal);
    // Регистрация изменений
    // discountCheckbox.addEventListener('change', () => {
    //     productCost(elements);
    // });
    discountInput.addEventListener('change', () => {
        productCost(elements);
    });
    productCount.addEventListener('change', () => {
        productCost(elements);
    });
    productPrice.addEventListener('change', () => {
        productCost(elements);
    });

    // Отправка формы
    modalForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('form submit');
    addToBase(elements,data);
    closeModal();
    renderTotalSum(data,elements);
    console.log(data)
    })

}
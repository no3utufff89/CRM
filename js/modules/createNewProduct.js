import {generateId} from "./generateId.js";
import productCost from "./productCost.js";

const createNewProduct = (elements) => {
    const {
        modalForm,
        productId,
        discountCheckbox,
        discountInput,
        currentProductCost,
        submitProduct,
        fileAddBtn,
        productName,
        productCategory,
        productUnit,
        productDescription,
        productCount,
        productPrice
    } = elements;

    productId.textContent = generateId();
    currentProductCost.innerHTML = 0;
    discountInput.placeholder = 'Галочку поставить надо';
    modalForm.addEventListener('change', (e) => {
        const target = e.target;
        
        


        
        // Обработка чекбокса
        // if (target === discountCheckbox) {
        //     discountInput.toggleAttribute('disabled');
        //     discountCheckbox.toggleAttribute('checked');
        //     if (discountInput.hasAttribute('disabled')) {
        //         discountInput.value = '';
            
        //     } else {
        //         discountInput.value = 0;
        //     }
        // }

    });








}
export default createNewProduct;
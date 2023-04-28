import {generateId} from "./generateId.js";

export const createElem = (tag, attr = {}, text) => {
    const elem = document.createElement(tag);
    Object.assign(elem, attr);
    if (text) {
        elem.textContent = text;
    }
    return elem;
};
export const createNewProduct = (elements) => {
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
export const createRow = (item) => {
    let {id, title, price, category, count, units, discount, image} = item;
    if (discount === false) {
        discount = 0;
    }
    let sum = price * count;
    sum -= (sum * discount) / 100;
    const row = createElem('tr',{className:'table__row product'});
    row.id = id;
    row.dataset.image = image;
    const cellId = createElem('td',{className: 'table__cell-value id'},id);
    const cellTitle = createElem('td',{className:'table__cell-value name'},title);
    const discontMarker = createElem('span',{className:'name_discount', title:'Есть скидка'});
    if (discount > 0) {
        cellTitle.append(discontMarker)
    }
    const cellCategory = createElem('td',{className:'table__cell-value categoty'},category);
    const cellUnits = createElem('td',{className:'table__cell-value unit'},units);
    const cellQuantity = createElem('td',{className:'table__cell-value quantity'},count);
    const cellPrice = createElem('td',{className:'table__cell-value price'});
    cellPrice.innerHTML = `$${price}`;
    const cellCost = createElem('td',{className:'table__cell-value cost'});
    cellCost.innerHTML = `$${sum}`;

    const cellControls = createElem('td',{className:'table__cell-value controls'});
    const imgBtn = createElem('button',{className:'btn controls__btn controls__btn_img_ok', type:'button',
        title:'Изображение'});
    const editBtn = createElem('button',{className:'btn controls__btn controls__btn_change',type: 'button',
        title:'Редактировать товар'});
    editBtn.innerHTML = `<svg class="icon change-icon" width="20" height="20">
                                        <use href="#change-icon"></use>
                                    </svg>`
    const delBtn = createElem('button',{className:'btn controls__btn controls__btn_delete',
        type:'button',title:'Удалить товар'});
    delBtn.innerHTML = `<svg class="icon delete-icon" width="20" height="20">
                                        <use href="#delete-icon"></use>
                                    </svg>`;
    cellControls.append(imgBtn, editBtn, delBtn);
    row.append(

        cellId,
        cellTitle,
        cellCategory,
        cellUnits,
        cellQuantity,
        cellPrice,
        cellCost,
        cellControls
    );

    return row;
}
export const createImagePopup = (imgPath) => {
    let top = window.screen.height / 2 - 300;
    let left = window.screen.width / 2 - 300;
    const imgPopup = open(`https://pastoral-suave-minnow.glitch.me/${imgPath}`, 'blank','width=600,height=600');
    imgPopup.moveTo(left,top);
}
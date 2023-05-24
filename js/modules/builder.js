import {generateId} from "./generateId.js";
import {deleteItem, getCurrentItem, getSearch} from "./dataActions.js";
import getDocumentElements from "./documentElements.js";
import {loader} from "./createVideo.js";
const elements = getDocumentElements();
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
    row.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('.controls__btn_change')) {
            const itemId = target.closest('tr').id;
            getCurrentItem(itemId);

        }
        if (target.closest('.controls__btn_delete')) {
            let productId = target.closest('.product').id;
            // productId = Number(productId)
            target.closest('.product').remove();
            // deleteDataElement(productId,data);

            deleteItem(productId, elements);

        }
        if (target.closest('.controls__btn_img_ok')) {
            let imgPath = target.closest('.product').attributes[2].textContent;
            createImagePopup(imgPath);
        }
    })
    return row;
}
export const createImagePopup = (imgPath) => {
    let top = window.screen.height / 2 - 300;
    let left = window.screen.width / 2 - 300;
    const imgPopup = open(`https://pastoral-suave-minnow.glitch.me/${imgPath}`, 'blank','width=600,height=600');
    imgPopup.moveTo(left,top);
}

export const preload = {
    circle: `<svg version="1.1" id="loader-1" width="166" height="120" viewBox="0 0 166 120" fill="none" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
  <path d="M135.5 30L105.5 60H128C128 84.825 107.825 105 83 105C75.425 105 68.225 103.125 62 99.75L51.05 110.7C60.275 116.55 71.225 120 83 120C116.15 120 143 93.15 143 60H165.5L135.5 30ZM38 60C38 35.175 58.175 15 83 15C90.575 15 97.775 16.875 104 20.25L114.95 9.3C105.725 3.45 94.775 0 83 0C49.85 0 23 26.85 23 60H0.5L30.5 90L60.5 60H38Z" fill="black"/>

    </svg>`,
    overlay: document.createElement('div'),

    show() {
        this.overlay.classList.add('preload-overlay');
        this.overlay.innerHTML = this.circle;
        document.body.append(this.overlay);
    },
    remove() {
        this.overlay.remove();
    },
};

export const searchRenderGoods = async (e) => {
    loader.show();
    const arr = await getSearch(e);
    if (arr.length === 0) { // if arr length in responce = 0
        loader.remove();
        elements.list.textContent = 'Ничего  нет'
        // elements.searchInput.reset();
    } else {
        const outputTable = elements.list;
        outputTable.textContent = '';
        for (const item of arr) {
            outputTable.append(
                createRow(item),
            );

        }
    loader.remove()
    }
};

export const createDataListOption = (item) => {
    const dataListOption = createElem('option', {
        value: item,
        textContent: item,
    })
    return dataListOption

}


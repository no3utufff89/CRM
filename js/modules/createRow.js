import createElem from "./createElem.js";
export const createRow = (
    rowIndex, {
    id,
    title,
    price,
    category,
    count,
    units,
}) => {
const row = createElem('tr',{className:'table__row'});
const cellId = createElem('td',{className: 'table__cell-value id'},id);
const cellTitle = createElem('td',{className:'table__cell-value name'},title);
const cellCategory = createElem('td',{className:'table__cell-value categoty'},category);
const cellUnits = createElem('td',{className:'table__cell-value unit'},units);
const cellQuantity = createElem('td',{className:'table__cell-value quantity'},count);
const cellPrice = createElem('td',{className:'table__cell-value price'});
cellPrice.innerHTML = `$${price}`;
const cellCost = createElem('td',{className:'table__cell-value cost'});
cellCost.innerHTML = `$${count * price}`;
const cellControls = createElem('td',{className:'table__cell-value controls'});
const imgBtn = createElem('button',{className:'btn controls__btn controls__btn_img_bad', type:'button',
    title:'Изменить изображение'});
const editBtn = createElem('button',{className:'btn controls__btn controls__btn_chqnge',type: 'button',
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
import deleteDataElement from "./deleteDataElement.js";
import {renderTotalSum} from "./renderTotalSum.js";
import {createImagePopup} from "./builder.js";

const tableControls = ({list, allProductsCost}, data) => {
list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.controls__btn_delete')) {
        let productId = target.closest('.product').id;
        productId = Number(productId)
        target.closest('.product').remove();
        deleteDataElement(productId,data);
        renderTotalSum(data,{allProductsCost});
    }
    if (target.closest('.controls__btn_img_ok')) {
        let imgPath = target.closest('.product').attributes[2].textContent;
        createImagePopup(imgPath);
    }
})
}
export default tableControls;
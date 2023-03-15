import deleteDataElement from "./deleteDataElement.js";

const tableControls = ({list}, data) => {

list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.controls__btn_delete')) {
        let productId = target.closest('.product').id;
        productId = Number(productId)
        target.closest('.product').remove();
        deleteDataElement(productId,data)
    }
})
}
export default tableControls;
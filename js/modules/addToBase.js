import {createRow} from "./builder.js";
import {renderTotalSum} from "./renderTotalSum.js";

const addToBase = (elements,data) => {
    const formData = new FormData(elements.modalForm);
    const product = Object.fromEntries(formData);
    const newProduct = {
        id: Number(elements.productId.textContent),
        title: product.name,
        category: product.category,
        description: product.description,
        units: product.units,
        count: Number(product.count),
        price: Number(product.price),
        discont: product.discontValue ? Number(product.discontValue) : false,
    };

    data.push(newProduct);
    const newProductLine = data.length;
    elements.list.append(createRow(newProductLine, newProduct))
    renderTotalSum(data,elements);
    console.log('data: ', data);
};
export default addToBase;
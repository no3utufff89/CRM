import { createRow } from "./builder.js"
import tableControls from "./tableControls.js";
import {renderTotalSum} from "./renderTotalSum.js";

export const renderGoods =(elements, data = []) => {
    const outputTable = elements.list;
data.forEach((item, index) =>{
    outputTable.append(
        createRow(index +1,  {
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category,
            count: item.count,
            units: item.units,
            discont: item.discont,
        }),
    );
});
    renderTotalSum(data,elements);
    tableControls(elements,data);

}

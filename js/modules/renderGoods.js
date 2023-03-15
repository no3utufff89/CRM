import { createRow } from "./createRow.js"

export const renderGoods =(outputTable, data = []) => {

data.forEach((item, index) =>{
    outputTable.append(
        createRow(index +1, {
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category,
            count: item.count,
            units: item.units,
        }),
    );
});
}

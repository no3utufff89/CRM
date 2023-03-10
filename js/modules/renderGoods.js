import { createRow } from "./createRow.js"

export const renderGoods =(list, data = []) => {
data.map((item, index) =>{
    list.append(
        createRow(index , {
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
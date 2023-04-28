import { createRow } from "./builder.js"
import tableControls from "./tableControls.js";
import {renderTotalSum} from "./renderTotalSum.js";
import getDocumentElements from "./documentElements.js";
import {getItems} from "./dataActions.js";
import { overlayControls } from "./overlayControls.js";
const elements = getDocumentElements();

export const renderGoods = async () => {

    const data = await getItems();
    const outputTable = elements.list;
    for (const item of data) {
        outputTable.append(
            createRow(item),
        );
    }


    overlayControls(data);
    renderTotalSum(data,elements);
    tableControls(elements,data);
}

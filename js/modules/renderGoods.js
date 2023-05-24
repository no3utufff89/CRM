import {createRow, preload} from "./builder.js"
// import tableControls from "./tableControls.js";
import {renderTotalSum} from "./renderTotalSum.js";
import getDocumentElements from "./documentElements.js";
import {getItems} from "./dataActions.js";
import { overlayControls } from "./overlayControls.js";
import {pageControls} from "./pageControls.js";
import {loader} from "./createVideo.js";
const elements = getDocumentElements();

export const renderGoods = async () => {
    loader.show();
    const data = await getItems();
    const outputTable = elements.list;
    outputTable.textContent = '';
    for (const item of data) {
        outputTable.append(
            createRow(item),
        );
        loader.remove()
    }

    // pageControls(elements)
    // overlayControls(data);
    renderTotalSum(data,elements);

    // tableControls(elements,data);
}

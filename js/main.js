
import getDocumentElements from './modules/documentElements.js';
import {initialValue} from './modules/goods.js';
import {renderGoods} from './modules/renderGoods.js';
import {overlayControls} from  './modules/overlayControls.js';
import tableControls from "./modules/tableControls.js";

const init = () => {
    const elements = getDocumentElements();
    const data = initialValue;
    const outputTable = elements.list;

    overlayControls(elements);
    renderGoods(outputTable, data);
    const newId =  tableControls(elements,data)

}
init();







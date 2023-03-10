
import getDocumentElements from './modules/documentElements.js';
import {initialValue} from './modules/goods.js';
import {renderGoods} from './modules/renderGoods.js';
import {overlayControls} from  './modules/overlayControls.js';

const init = () => {
    const elements = getDocumentElements();
    const data = initialValue;
    const output = elements.list;

    overlayControls(elements);
    renderGoods(output, data);
}
init();







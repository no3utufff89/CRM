
import getDocumentElements from './modules/documentElements.js';
import {initialValue} from './modules/goods.js';
import {renderGoods} from './modules/renderGoods.js';
import {overlayControls} from  './modules/overlayControls.js';
import {getItems} from "./modules/dataActions.js";
import {pageControls} from "./modules/pageControls.js";
const URL = `https://pastoral-suave-minnow.glitch.me/api/goods`;
const elements = getDocumentElements();

const init = () => {
    // const data = initialValue;

    renderGoods()
    pageControls(elements)
    // overlayControls(data);

    //Через универсальную

    // getItems(URL, {
    //     method: 'get',
    //     callback: renderGoods
    // })






}
init();







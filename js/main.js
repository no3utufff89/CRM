
import getDocumentElements from './modules/documentElements.js';
import {initialValue} from './modules/goods.js';
import {renderGoods} from './modules/renderGoods.js';
import {overlayControls} from  './modules/overlayControls.js';
import {getItems} from "./modules/dataActions.js";
const URL = `https://pastoral-suave-minnow.glitch.me/api/goods`;

const init = () => {
    // const data = initialValue;

    renderGoods()
    // overlayControls(data);

    //Через универсальную

    // getItems(URL, {
    //     method: 'get',
    //     callback: renderGoods
    // })






}
init();







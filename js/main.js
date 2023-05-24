
import getDocumentElements from './modules/documentElements.js';
import {initialValue} from './modules/goods.js';
import {renderGoods} from './modules/renderGoods.js';
import {overlayControls} from  './modules/overlayControls.js';
import {getItems} from "./modules/dataActions.js";
import {pageControls} from "./modules/pageControls.js";
import {loader} from "./modules/createVideo.js";
const URL = `https://pastoral-suave-minnow.glitch.me/api/goods`;

loader.show()
const init = () => {
    renderGoods()
    pageControls()
}
init();







import getDocumentElements from "./documentElements.js";
import showModal from "./showModal.js";
export const pageControls = (elements) => {
    elements.addNewProductBtn.addEventListener('click', async () => {
        await showModal(elements);
    })
}
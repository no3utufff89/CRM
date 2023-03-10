const createElem = (tag, attr = {}, text) => {
    const elem = document.createElement(tag);
    Object.assign(elem, attr);
    if (text) {
        elem.textContent = text;
    }
    return elem;
};
export default createElem;
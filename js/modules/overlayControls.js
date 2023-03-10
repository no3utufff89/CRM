export const overlayControls = ({overlay, hideOverlay,addProductBtn}) => {
    addProductBtn.addEventListener('click', () => {
        overlay.classList.add('overlay_active');
    });

    hideOverlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_active');
    })
}
export const overlayControls = ({overlay, hideOverlay,addProductBtn}) => {
    addProductBtn.addEventListener('click', () => {
        overlay.classList.add('overlay_active');
    });
    overlay.addEventListener('click', (e) => {
        let target = e.target;
        if (target === overlay) {
            overlay.classList.remove('overlay_active');
        }
    })
    hideOverlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_active');
    })
}
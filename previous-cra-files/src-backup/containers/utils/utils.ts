export function modalBodyStylesFunc(isOpen: boolean) {
    if (isOpen) {
        document.body.classList.add("modal-open");
    } else {
        document.body.classList.remove("modal-open");
    }
}

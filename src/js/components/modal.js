export class Modal {
    $bodyElement = document.querySelector('body');
    bodyOverlayClassName = 'overlay';
    hideClassName = 'hide';
    modalHeight = '';

    constructor(modalName, idShowModalButton, options) {
        this.modal = document.querySelector(`#${modalName}`);
        this.buttonShowModal = document.querySelector(`#${idShowModalButton}`);
        this.options = options ?? {};
        this.closeButton = this.modal.querySelector('button');
        // this.#sayHello();
    }

    handleCloseButton() {
        this.closeButton.addEventListener('click', () => {
            this.$bodyElement.classList.remove(this.bodyOverlayClassName);
            localStorage.setItem("hasBeenClickedButtonClose", "true");
            this.modal.classList.add(this.hideClassName)
            this.buttonShowModal.classList.remove(this.hideClassName);
            this.handleShowModalButton();
        })
    }

    handleShowModalButton(){
        this.buttonShowModal.addEventListener('click',()=>{
            this.init();
        })
    }

    #sayHello() {
       console.log('hello');
    }

    init() {
        this.modal.classList.remove(this.hideClassName)
        if(localStorage["hasBeenClickedButtonClose"]!=="true"){
            this.$bodyElement.classList.add(this.bodyOverlayClassName);
        }
        this.handleCloseButton();
        this.buttonShowModal.classList.add(this.hideClassName);

    }
}
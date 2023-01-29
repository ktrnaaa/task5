let ModalWindow = document.querySelector('.cat');
let openModal = document.querySelector('.btn');
let closeModal = document.querySelector('.btn2');


openModal.addEventListener('click', () =>{

    function openWindow(){

        ModalWindow.style.display = "block"
        
    }
    openWindow();
})

closeModal.addEventListener('click', () =>{

    function closeWindow(){

        ModalWindow.style.display = "none"
        closeModal.style.display = "block"
        return openWindow();
    }
    closeWindow();
})
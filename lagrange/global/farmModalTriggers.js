const farmModalModalButtons = document.querySelectorAll('.farm-form-modal-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log('opening modal')
        console.log(document.getElementById("farm-form-modal"))
        MicroModal.show('farm-form-modal');
    })
})
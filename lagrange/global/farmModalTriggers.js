const farmModalModalButtons = document.querySelectorAll('.farm-form-modal-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        MicroModal.show('farm-form-modal');
    })
})
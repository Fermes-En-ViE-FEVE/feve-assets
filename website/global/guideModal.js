document.querySelectorAll('.guide-invest-modal-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        MicroModal.show('guide-form-modal');
    })
})
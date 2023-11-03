document.querySelectorAll('.espace-modal-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        MicroModal.show('espace-modal');
    })
})
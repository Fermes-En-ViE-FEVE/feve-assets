const farmModalModalButtons = document.querySelectorAll('.newsletter-modal-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        MicroModal.show('newsletter-modal');
    })
})

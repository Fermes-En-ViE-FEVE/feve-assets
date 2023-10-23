const loginModalButtons = document.querySelectorAll('.login-modal-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        MicroModal.show('login-modal');
    })
})
document.querySelectorAll('.discord-modal-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        MicroModal.show('discord-modal');
    })
})

document.querySelectorAll('.mon-espace-trigger').forEach((button) => {
    button.addEventListener('click', (e) => {
        MicroModal.show('mon-espace');
    })
})
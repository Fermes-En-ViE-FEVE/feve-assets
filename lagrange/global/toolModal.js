MemberStack.onReady.then(member => {
    const toolModal = document.querySelector('#tool-presentation-modal')
    if (toolModal && !localStorage.getItem(toolModal.getAttribute('tool-name'))) {
        MicroModal.show('tool-presentation-modal', {
            onClose: (modal) => {
                localStorage.setItem(toolModal.getAttribute('tool-name'), 'true')
            }
        })
        const closeBtn = document.querySelector('.button-primary.w-button[data-micromodal-close]');
        closeBtn.addEventListener('click', (e) => {
            localStorage.setItem(toolModal.getAttribute('tool-name'), 'true')
            MicroModal.close('tool-presentation-modal')
        })
    }
})
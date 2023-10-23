MemberStack.onReady.then(member => {
    const toolModal = document.querySelector('#tool-presentation-modal')
    if (toolModal && !localStorage.getItem(toolModal.getAttribute('tool-name'))) {
        MicroModal.show('tool-presentation-modal', {
            onClose: (modal) => {
                localStorage.setItem(toolModal.getAttribute('tool-name'), 'true')
            }
        })
    }
})
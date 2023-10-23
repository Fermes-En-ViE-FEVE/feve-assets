MemberStack.onReady.then(member => {
    const toolModal = document.querySelector('#tool-presentation-modal')
    if (toolModal && !localStorage.getItem(toolModal.getAttribute('tool-name'))) {
        console.log(localStorage.getItem(toolModal.getAttribute('tool-name')))
        MicroModal.show('tool-presentation-modal', {
            onClose: (modal) => {
                console.log('closing modal')
                localStorage.setItem(toolModal.getAttribute('tool-name'), 'true')
            }
        })
    }
})
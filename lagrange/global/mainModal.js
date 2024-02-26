const isMainModalActive = true
let mainModalName = 'main-modal-SIA-2024'

    if (isMainModalActive && document.querySelector('#main-modal')  && (window.location.pathname === '/' ||
        window.location.pathname === '') && !localStorage.getItem(mainModalName)) {
        MicroModal.show('main-modal', {
            onClose: (modal) => {
                localStorage.setItem(mainModalName, 'true')
            }
        })
        document.querySelector('#main-modal-cta').addEventListener('click', (e) => MicroModal.close('main-modal'))
        document.querySelector('#main-modal-close').addEventListener('click', (e) => {
            console.log('hiding modal')
            MicroModal.close('main-modal')
        })
    }

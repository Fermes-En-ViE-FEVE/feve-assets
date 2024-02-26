const isMainModalActive = true
let mainModalName = 'main-modal-SIA-2024'

MemberStack.onReady.then(member => {
    if (isMainModalActive && document.querySelector('#main-modal')  && (window.location.pathname === '/' ||
        window.location.pathname === '') && !localStorage.getItem(mainModalName) && member.email !== 'alexandre.mace+2@feve.co') {
        MicroModal.show('main-modal', {
            onClose: (modal) => {
                localStorage.setItem(mainModalName, 'true')
            }
        })
        document.querySelector('#modal-home-lg-cta').addEventListener('click', (e) => MicroModal.close('main-modal'))
    }
})

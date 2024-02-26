const isMainModalActive = true
let mainModalName = 'main-modal-SIA-2024'

if (
    isMainModalActive &&
    document.querySelector('#main-modal') &&
    !localStorage.getItem(mainModalName) &&
    !document.location.pathname.includes('photos-fermes') &&
    !document.location.pathname.includes('derniere-ferme')
) {
    if (
        !window.location.href.includes('investir') &&
        !window.location.href.includes('offrir-des-actions') &&
        !window.location.href.includes('cadeau') &&
        !window.location.href.includes('ressources-invest')
    ) {
        MicroModal.show('main-modal', {
            onClose: (modal) => {
                localStorage.setItem(mainModalName, 'true')
            }
        })
        document.querySelector('#main-modal-cta').addEventListener('click', (e) => MicroModal.close('main-modal'))
        document.querySelector('#main-modal-close').addEventListener('click', (e) => MicroModal.close('main-modal'))
    }
}
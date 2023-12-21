const isMainModalActive = false
const mainModal = document.querySelector('#main-modal')
if (
    isMainModalActive &&
    mainModal &&
    !localStorage.getItem('millions') &&
    !document.location.pathname.includes('photos-fermes') &&
    !document.location.pathname.includes('derniere-ferme')
) {
    if (
        window.location.href.includes('investir') ||
        window.location.href.includes('offrir-des-actions') ||
        window.location.href.includes('cadeau') ||
        window.location.href.includes('ressources-invest')

    ) {
        MicroModal.show('main-modal', {
            onClose: (modal) => {
                localStorage.setItem('millions', 'true')
            }
        })
        document.querySelector('#main-modal-cta').addEventListener('click', (e) => MicroModal.close('main-modal'))
    }
}
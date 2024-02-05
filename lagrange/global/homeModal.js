MemberStack.onReady.then(member => {
    const homeModal = document.querySelector('#modal-home-lg')
    if (homeModal && !localStorage.getItem('appel-candidature-myrtille') && member.email !== 'alexandre.mace+2@feve.co') {
        MicroModal.show('modal-home-lg', {
            onClose: (modal) => {
                localStorage.setItem('appel-candidature-myrtille', 'true')
            }
        })
        document.querySelector('#modal-home-lg-cta').addEventListener('click', (e) => MicroModal.close('modal-home-lg'))
    }
})

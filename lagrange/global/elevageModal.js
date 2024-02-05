MemberStack.onReady.then(member => {
    const elevageModal = document.querySelector('#modal-home-lg')
    if (elevageModal && !localStorage.getItem('appel-candidature-myrtille') && member.loggedIn && member.email !== 'alexandre.mace+2@feve.co') {
        MicroModal.show('modal-home-lg', {
            onClose: (modal) => {
                localStorage.setItem('appel-candidature-myrtille', 'true')
            }
        })
        document.querySelector('#modal-home-lg-cta').addEventListener('click', (e) => MicroModal.close('modal-home-lg'))
    }
})

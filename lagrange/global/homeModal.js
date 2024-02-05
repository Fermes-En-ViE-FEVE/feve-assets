MemberStack.onReady.then(member => {
    const homeModal = document.querySelector('#modal-home-lg')
    console.log(homeModal && !localStorage.getItem('appel-candidature-myrtille') && member.email !== 'alexandre.mace+2@feve.co')
    if (homeModal && !localStorage.getItem('appel-candidature-myrtille') && member.email !== 'alexandre.mace+2@feve.co') {
        console.log('show modal home lg')
        MicroModal.show('modal-home-lg', {
            onClose: (modal) => {
                localStorage.setItem('appel-candidature-myrtille', 'true')
            }
        })
        document.querySelector('#modal-home-lg-cta').addEventListener('click', (e) => MicroModal.close('modal-home-lg'))
    }
})

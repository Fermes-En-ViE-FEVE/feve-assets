MemberStack.onReady.then(member => {
    const homeModal = document.querySelector('#modal-home-lg')
    console.log(homeModal && !localStorage.getItem('SIA-2024') && member.email !== 'alexandre.mace+2@feve.co')
    if (homeModal  && (window.location.pathname === '/' ||
        window.location.pathname === '') && !localStorage.getItem('SIA-2024') && member.email !== 'alexandre.mace+2@feve.co') {
        console.log('show modal home lg')
        MicroModal.show('modal-home-lg', {
            onClose: (modal) => {
                localStorage.setItem('SIA-2024', 'true')
            }
        })
        document.querySelector('#modal-home-lg-cta').addEventListener('click', (e) => MicroModal.close('modal-home-lg'))
    }
})

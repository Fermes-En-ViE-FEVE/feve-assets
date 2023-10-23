MemberStack.onReady.then(member => {
    if (elevageModal && !localStorage.getItem('elevage-2023') && member.loggedIn && member.email !== 'alexandre.mace+2@feve.co') {
        MicroModal.show('elevage-2023', {
            onClose: (modal) => {
                console.log('closing modal')
                localStorage.setItem('elevage-2023', 'true')
            }
        })
        document.querySelector('#elevage-cta').addEventListener('click', (e) => MicroModal.close('elevage-2023'))

    }
})
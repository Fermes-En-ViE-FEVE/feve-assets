MemberStack.onReady.then(member => {
    const elevageModal = document.querySelector('#elevage-2023')
    if (elevageModal && !localStorage.getItem('enquete-femme-agriculture') && member.loggedIn && member.email !== 'alexandre.mace+2@feve.co') {
        MicroModal.show('elevage-2023', {
            onClose: (modal) => {
                localStorage.setItem('enquete-femme-agriculture', 'true')
            }
        })
        document.querySelector('#elevage-cta').addEventListener('click', (e) => MicroModal.close('elevage-2023'))
    }
})

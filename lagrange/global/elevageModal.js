MemberStack.onReady.then(member => {
    const elevageModal = document.querySelector('#elevage-2023')
    if (elevageModal && !localStorage.getItem('enquete-femme-agriculture') && member.loggedIn && member.email !== 'alexandre.mace+2@feve.co') {
        MicroModal.show('enquete-femme-agriculture', {
            onClose: (modal) => {
                localStorage.setItem('enquete-femme-agriculture', 'true')
            }
        })
        document.querySelector('#elevage-cta').addEventListener('click', (e) => MicroModal.close('enquete-femme-agriculture'))
    }
})

MemberStack.onReady.then(member => {
    const bandeauAppelOffre = document.querySelector('#bandeau-appel-offre')
    console.log(bandeauAppelOffre && !localStorage.getItem('appel-offre-fev-24') && member.email !== 'alexandre.mace+2@feve.co')
    if (bandeauAppelOffre && !localStorage.getItem('appel-offre-fev-24') && member.email !== 'alexandre.mace+2@feve.co') {
        MicroModal.show('bandeau-appel-offre', {
            onClose: (modal) => {
                localStorage.setItem('appel-offre-fev-24', 'true')
            }
        })
        document.querySelector('#appel-offre-fev-24-cta').addEventListener('click', (e) => MicroModal.close('bandeau-appel-offre'))
    }
})

MemberStack.onReady.then(member => {
    setTimeout(() => {
        const resetPasswordLabel = document.querySelector("label[ms-lang='reset_reset_code']");
        console.log(resetPasswordLabel)
        if (resetPasswordLabel) {
            resetPasswordLabel.innerHTML = 'Entrez le code de réinitialisation'
        }
    }, "2000");
})
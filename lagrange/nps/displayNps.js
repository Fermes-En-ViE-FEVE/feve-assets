MemberStack.onReady.then(member => {
    if (member.loggedIn) {
        setTimeout(() => {
            if (document.querySelector('#nps-wrapper') && !localStorage.getItem('nps') && (localStorage.getItem('visitedPages') && parseInt(localStorage.getItem('visitedPages')) > 10)) {
                document.querySelector('#nps-wrapper').classList.add('show-nps')
                document.querySelector('#nps-wrapper button').setAttribute("data-tf-hidden", ("email=" + member["email"]))
            }
        }, 10000)
        document.querySelector('#nps-wrapper button').addEventListener('click', () => {
            setTimeout(() => {
                localStorage.setItem('nps', 'true')
                document.querySelector('#nps-wrapper button').style.display = "none";
            }, 2000)
        })
    }
})
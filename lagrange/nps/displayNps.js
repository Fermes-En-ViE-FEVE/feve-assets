MemberStack.onReady.then(member => {
    if (member.loggedIn) {
        localStorage.setItem('visitedPages', (localStorage.getItem('visitedPages') ? parseInt(localStorage.getItem('visitedPages')) : 0) + 1)
        // if (document.querySelector('#banner')) {
        //     document.querySelector('.banner-button').setAttribute("href", (document.querySelector('.banner-button').getAttribute("href") + '?email=' + member["email"]))
        // }
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
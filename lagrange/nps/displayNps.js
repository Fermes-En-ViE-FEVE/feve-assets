MemberStack.onReady.then(member => {
    if (member.loggedIn) {
        localStorage.setItem('visitedPages', (localStorage.getItem('visitedPages') ? parseInt(localStorage.getItem('visitedPages')) : 0) + 1)
        // if (document.querySelector('#banner')) {
        //     document.querySelector('.banner-button').setAttribute("href", (document.querySelector('.banner-button').getAttribute("href") + '?email=' + member["email"]))
        // }
        const { refresh } = window.tf.createSlider('tE1MgIrN', {
            hidden: {
                email:  member["email"],
            },
        })
        setTimeout(() => {
            if (document.querySelector('#nps-wrapper') && !localStorage.getItem('nps') && (localStorage.getItem('visitedPages') && parseInt(localStorage.getItem('visitedPages')) > 10)) {
                document.querySelector('#nps-wrapper').classList.add('show-nps')
            }
        }, 10000)
        document.querySelector('#nps-wrapper #nps').addEventListener('click', () => {
            refresh()
            setTimeout(() => {
                localStorage.setItem('nps', 'true')
                document.querySelector('#nps-wrapper #nps').style.display = "none";
            }, 2000)
        })
    }
})
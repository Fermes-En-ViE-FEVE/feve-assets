MemberStack.onReady.then(member => {
    if (member.loggedIn && !['', '/', '/fermes'].includes(window.location.pathname)) {
        const nav = document.querySelector('.navigation.w-nav')
        if (nav) {
            nav.style.display = 'none'
        }
        const footer = document.querySelector('#footer')
        if (footer) {
            footer.style.display = 'none'
        }
    }
})
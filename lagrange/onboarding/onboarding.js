MemberStack.onReady.then(member => {
    if (member.loggedIn && !['', '/', '/redirect'].includes(window.location.pathname) && (!member.onboardingModal || window.location.href.includes('presentation=true'))) {
        if (window.location.href.includes('presentation=true')) {
            window.history.replaceState({}, document.title, "/" + "accueil");
        }
        MicroModal.show('modal-onboarding', {
            onClose: (modal) => {
                member.updateProfile({onboardingModal: "true"}, false)
            }
        });
        const splide = new Splide('.splide', {
            arrows: false,
        });
        splide.mount();
        document.querySelector('#slider-first-next').addEventListener('click', () => {
            splide.go('>');
        })
        document.querySelector('#slider-last-next').addEventListener('click', () => {
            document.getElementById('modal-onboarding').style.display = 'none';
            splide.destroy();
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti({
                emojis: ['🎉', '🌱', '🦔', '🎊', '🚜'],
            })
        })
        document.querySelector('#slider-back').addEventListener('click', () => {
            splide.go('<');
        })
        document.querySelector('#slider-next').addEventListener('click', () => {
            splide.go('>');
        })
        splide.on('move', function (newIndex) {
            if (newIndex === 4) {
                document.querySelector('#slider-last-next').style.display = 'inline-block'
                document.querySelector('#slider-first-next').style.display = 'none'
                document.querySelector('#slider-next').style.display = 'none'
                document.querySelector('#slider-back').style.display = 'none'
                return;
            }
            if (newIndex > 0) {
                document.querySelector('#slider-last-next').style.display = 'none'
                document.querySelector('#slider-first-next').style.display = 'none'
                document.querySelector('#slider-next').style.display = 'inline-block'
                document.querySelector('#slider-back').style.display = 'inline-block'
                return;
            }
            document.querySelector('#slider-last-next').style.display = 'none'
            document.querySelector('#slider-first-next').style.display = 'inline-block'
            document.querySelector('#slider-next').style.display = 'none'
            document.querySelector('#slider-back').style.display = 'none'
        });
    }
})
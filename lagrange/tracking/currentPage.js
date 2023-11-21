if (
    !window.location.pathname.includes('/connexion') &&
    !window.location.pathname.includes('/inscription') &&
    !window.location.pathname.includes('onboarding') &&
    !window.location.pathname.includes('redirect') &&
    window.location.pathname !== '/' &&
    window.location.pathname !== ''
) {
    sessionStorage.setItem("grange_current_url", window.location.href)
    console.log('grange_current_url', window.location.href)
}
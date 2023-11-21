if (
    !localStorage.getItem('grange_entry_page') &&
    !window.location.pathname.includes('/connexion') &&
    !window.location.pathname.includes('/inscription') &&
    !window.location.pathname.includes('onboarding') &&
    !window.location.pathname.includes('redirect') &&
    window.location.pathname !== '/' &&
    window.location.pathname !== ''
) {
    sessionStorage.setItem('grange_entry_page', window.location.href)
    console.log('grange_entry_page', window.location.href)
}
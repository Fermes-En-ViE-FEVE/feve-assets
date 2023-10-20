if (!window.location.pathname.includes('/connexion') && !window.location.pathname.includes('/inscription') && !window.location.pathname.includes('onboarding') && !window.location.pathname.includes('redirect') && window.location.pathname !== '/' && window.location.pathname !== '') {
    sessionStorage.setItem("location", window.location.href)
    console.log('location', window.location.href)
}

/* si param url contient utm_source, enregistrer en local storage */
const querySearch = window.location.search;
const urlParams = new URLSearchParams(querySearch);
if (urlParams.has('utm_source')) {
    const source = urlParams.get('utm_source');
    localStorage.setItem("src_ref", source);
}

if (urlParams.has('gft')) {
    const source = urlParams.get('gft');
    localStorage.setItem('gft', source);
}
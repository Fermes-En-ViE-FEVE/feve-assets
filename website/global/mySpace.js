const mySpace = document.querySelector('#mon-espace')
if (mySpace) {
    if (
        window.location.href.includes('investir') ||
        window.location.href.includes('offrir-des-actions') ||
        window.location.href.includes('cadeau') ||
        window.location.href.includes('ressources-invest')

    ) {
        mySpace.setAttribute('href', "https://legrenier.feve.co");
    }
}
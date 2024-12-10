// addEventListener("DOMContentLoaded", (event) => {
//     new FlipDown(1704067199, {
//         headings: ["Jours", "Heures", "Minutes", "Secondes"],
//     }).start();
// });
// if (
//     !localStorage.getItem('noel-banner-2023') &&
//     !window.location.pathname.includes('formulaire') &&
//     !window.location.pathname.includes('souscription') &&
//     !document.location.pathname.includes('photos-fermes') &&
//     !document.location.pathname.includes('derniere-ferme')
// ) {
//     document.querySelector('.bandeau-invest-noel').style.display = 'flex'
//     document.querySelector('.bandeau-invest-noel-close').addEventListener('click', () => {
//        closeBanner()
//     })
//     document.querySelector('.bandeau-invest-noel a').addEventListener('click', () => {
//         closeBanner()
//     })
// }
// const closeBanner = () => {
//     document.querySelector('.bandeau-invest-noel-wrapper').style.display = 'none'
//     localStorage.setItem('noel-banner-2023', 'true')
// }

const ppUrlsNoelBanner = ppUrlsNoelBanner || [
    'https://www.feve.co/',
    'https://www.feve.co',
    'https://www.feve.co/installation-agricole',
    'https://www.feve.co/je-cherche-une-ferme-a-reprendre',
    'https://www.feve.co/je-finance-ma-ferme',
    'https://www.feve.co/installation-agricole/sessions-d-information',
    'https://www.feve.co/les-feves-financees',
    'https://www.feve.co/ressources-installation',
    'https://www.feve.co/guides-pratiques/guide-de-linstallation-agricole',
    'https://www.feve.co/guides-pratiques/guide-des-aides-installation',
    'https://www.feve.co/guides-pratiques/guide-de-la-formation-agricole'
];

if (ppUrlsNoelBanner.includes(window.location.href)) {
    const campaignBanner = document.querySelector('.invest-campaign-banner');
    if (campaignBanner) {
        campaignBanner.style.display = "none";
    }
    const logoFeve = document.querySelector('.logo-feve');
    if (logoFeve) {
        logoFeve.style.marginTop = "0";
    }
}
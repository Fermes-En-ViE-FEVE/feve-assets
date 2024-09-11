let isBandeauActive = false
let currentBandeauName = 'bandeau-offre-ver-de-terre-2024'
let preprodOnly = false
let ppOnly = true
const isIframe = window.self !== window.top;

const ppUrls = [
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

if (
    (preprodOnly && window.location.href.includes("new-feve") || !preprodOnly) &&
    isBandeauActive &&
    document.querySelector('#bandeau') &&
    !localStorage.getItem(currentBandeauName) &&
    !window.location.href.includes('feve.co/evenements/') &&
    !window.location.href.includes('embed') &&
    (ppUrls.includes(window.location.href) || !ppOnly) &&
    !isIframe
) {
  document.querySelector('#bandeau').style.display = 'block'

  if (document.querySelector('#bandeau-close')){
    document.querySelector('#bandeau-close').addEventListener('click', () => {
      localStorage.setItem(currentBandeauName, 'true')
      document.querySelector('#bandeau').style.display = 'none'
    })
  }

  if (document.querySelector('#bandeau-cta')){
    document.querySelector('#bandeau-cta').addEventListener('click', () => {
      localStorage.setItem(currentBandeauName, 'true')
      document.querySelector('#bandeau').style.display = 'none'
    })
  }
}

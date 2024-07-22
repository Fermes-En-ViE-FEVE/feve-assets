let isBandeauActive = true
let currentBandeauName = 'bandeau-bretagne-normandie-2024'
let preprodOnly = false
const isIframe = window.self !== window.top;

if (
    (preprodOnly && window.location.href.includes("new-feve") || !preprodOnly) &&
    isBandeauActive &&
    document.querySelector('#bandeau') &&
    !localStorage.getItem(currentBandeauName) &&
    !window.location.href.includes('feve.co/evenements/') &&
    !window.location.href.includes('embed') &&
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

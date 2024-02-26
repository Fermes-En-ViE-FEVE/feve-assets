let isBandeauActive = false
let currentBandeauName = 'bandeau-nomdubandeau'


if (isBandeauActive && window.screen.width > 768 && !localStorage.getItem(currentBandeauName)) {
  document.querySelector('#bandeau').style.display = 'block'

  if (document.querySelector('#bandeau-close')){
    document.querySelector('#bandeau-close').addEventListener('click', () => {
      localStorage.setItem(currentBandeauName, 'true')
    })
  }

  if (document.querySelector('#bandeau-cta')){
    document.querySelector('#bandeau-cta').addEventListener('click', () => {
      localStorage.setItem(currentBandeauName, 'true')
    })
  }
}
let isBandeauActive = false
let currentBandeauName = 'bandeau-agricultrice-2024'


if (isBandeauActive && document.querySelector('#bandeau') && window.screen.width > 768 && !localStorage.getItem(currentBandeauName)) {
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

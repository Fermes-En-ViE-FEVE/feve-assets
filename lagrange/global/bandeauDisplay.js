let isBandeauActive = true
let currentBandeauName = 'bandeau-cultive-2'

if (
    isBandeauActive &&
    document.querySelector('#bandeau') &&
    !localStorage.getItem(currentBandeauName) &&
    (window.location.pathname === '/' || window.location.pathname === '')
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

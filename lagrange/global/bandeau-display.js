if (window.screen.width > 768 && !localStorage.getItem('bandeau-SIA-2024') && (window.location.pathname === '/' ||
    window.location.pathname === '')) {
  document.querySelector('#bandeau-appel-offre').style.display = 'block'

  if (document.querySelector('#appel-offre-close')){
    document.querySelector('#appel-offre-close').addEventListener('click', () => {
      localStorage.setItem('bandeau-SIA-2024', 'true')
    })
  }

  if (document.querySelector('#appel-offre-cta')){
    document.querySelector('#appel-offre-cta').addEventListener('click', () => {
      localStorage.setItem('bandeau-SIA-2024', 'true')
    })
  }
}

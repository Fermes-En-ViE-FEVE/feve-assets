if (window.screen.width > 768 && !localStorage.getItem('bandeau-appel-offre-02-24')) {
  document.querySelector('#bandeau-appel-offre').style.display = 'block'
  document.querySelector('appel-offre-close').addEventListener('click', () => {
    localStorage.setItem('bandeau-appel-offre-02-24', 'true')
  })
  document.querySelector('appel-offre-cta').addEventListener('click', () => {
    localStorage.setItem('bandeau-appel-offre-02-24', 'true')
  })
}

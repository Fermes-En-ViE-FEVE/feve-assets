addEventListener("DOMContentLoaded", (event) => {
    new FlipDown(1704067199, {
        headings: ["Jours", "Heures", "Minutes", "Secondes"],
    }).start();
});
if (!localStorage.getItem('noel-banner-2023')) {
    // document.querySelector('.bandeau-invest-noel').style.display = 'flex'
    document.querySelector('.bandeau-invest-noel-close').addEventListener('click', () => {
       closeBanner()
    })
    document.querySelector('.bandeau-invest-noel a').addEventListener('click', () => {
        closeBanner()
    })
}
const closeBanner = () => {
    document.querySelector('.bandeau-invest-noel').style.display = 'flex'
    localStorage.setItem('noel-banner-2023', 'true')
}
window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem("gft")){
        const gft = localStorage.getItem("gft");
        const fieldGft = document.getElementById("code-invitation");
        if (fieldGft) { fieldGft.value = gft; }
    }
});
/*const urlSearch = new URLSearchParams(window.location.search);
if (urlSearch.has('gft')) {
  const gft = urlSearch.get('gft');
  localStorage.setItem('gft', gft);
} */
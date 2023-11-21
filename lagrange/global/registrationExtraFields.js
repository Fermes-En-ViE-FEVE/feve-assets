window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem("gft")){
        const gft = localStorage.getItem("gft");
        const fieldGft = document.getElementById("code-invitation");
        if (fieldGft) { fieldGft.value = gft; }
    }
    if (localStorage.getItem("src_ref")){
        const source = localStorage.getItem("src_ref");
        const fieldSrcRef = document.getElementById("src_ref");
        if (fieldSrcRef) { fieldSrcRef.value = source; }
    }
});
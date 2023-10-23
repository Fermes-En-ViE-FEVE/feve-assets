window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll(".feature").forEach(feature => {
        feature.addEventListener('click', () => sessionStorage.setItem("location", feature.dataset.target));
    });
    if (localStorage.getItem("src_ref")){
        const source = localStorage.getItem("src_ref");
        const fieldSrcRef = document.getElementById("src_ref");
        if (fieldSrcRef) { fieldSrcRef.value = source; }
    }
});
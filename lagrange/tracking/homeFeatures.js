window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll(".feature").forEach(feature => {
        feature.addEventListener('click', () => sessionStorage.setItem("location", feature.dataset.target));
    });
});
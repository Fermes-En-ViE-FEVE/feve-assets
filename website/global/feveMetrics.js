fetch('https://legrenier.feve.co/metrics').then(promise => promise.json()).then(data => {
    Object.keys(data).forEach(key => {
        console.log(document.querySelector('.metric-' + key.toLowerCase()))
        if (document.querySelector('.metric-' + key.toLowerCase())) {
            document.querySelectorAll('.metric-' + key.toLowerCase()).forEach((node) => node.innerHTML = data[key])
        }
    })
})
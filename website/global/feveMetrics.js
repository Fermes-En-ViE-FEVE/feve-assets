fetch('https://legrenier.feve.co/metrics').then(promise => promise.json()).then(data => {
    Object.keys(data).forEach(key => {
        console.log(document.querySelector('.metric-' + key.toLowerCase()))
        if (document.querySelector('.metric-' + key.toLowerCase())) {
            document.querySelectorAll('.metric-' + key.toLowerCase()).forEach((node) => node.innerHTML = data[key])
        }
        if (document.querySelector('.gauge-main-container')) {
            const firstGauge = document.querySelector('.gauge-main-container:first-of-type .progress');
            const firstTarget = parseInt(data['totalCollectedDetailed'] / data['totalObjectif'] * 100);
            const firstGaugeReadout = document.querySelector('.gauge-main-container:first-of-type .percentage > .value');
            const gaugeR = parseInt(document.querySelectorAll('circle')[0].getAttribute('r'));
            const gaugeC = gaugeR * Math.PI * 2;
            const animationDuration = 1.5;
            const circles = document.querySelectorAll('circle');
            const gauges = document.querySelectorAll('.progress');
            TweenMax.set(circles, {
                strokeDashoffset: gaugeC
            });
            TweenMax.set(gauges, {
                attr: {
                    'stroke-dasharray': gaugeC + ' ' + gaugeC
                }
            });
            function calculateOffset(t, c) {
                var target = c - (c * t) / 100;
                return target;
            }
            let tl = new TimelineMax();
            tl.to(firstGauge, animationDuration, {
                strokeDashoffset: calculateOffset(firstTarget, gaugeC),
                ease: Bounce.easeOut,
                onUpdate: function() {
                    var currentStrokeOffset = parseInt(firstGauge.style.strokeDashoffset);
                    firstGaugeReadout.textContent = Math.round(100 - (currentStrokeOffset * 100) / gaugeC);
                }
            });
        }
    })
    if (document.querySelector('#totalcollected')) {
        document.querySelector('#totalcollected').innerHTML = (parseFloat(document.querySelector('#totalcollected').innerHTML)).toLocaleString('fr');
        document.querySelector('#totalobjectif').innerHTML = (parseFloat(document.querySelector('#totalobjectif').innerHTML)).toLocaleString('fr')
    }
})
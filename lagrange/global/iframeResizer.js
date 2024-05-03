document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        const iframeBody = iframe.contentDocument.body;

        const ro = new ResizeObserver(function() {
            iframe.style.height = `${iframeBody.scrollHeight}px`;
        });

        ro.observe(iframeBody);
    })
    const iframeEle = document.getElementById('frame');
});
const querySearch = window.location.search;
const urlParams = new URLSearchParams(querySearch);
if (urlParams.has('utm_source')) {
    const source = urlParams.get('utm_source');
    sessionStorage.setItem("src_ref", source);
}

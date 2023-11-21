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
    if (sessionStorage.getItem("grange_entry_page")){
        const source = sessionStorage.getItem("grange_entry_page");
        const fieldEntryPage = document.getElementById("entrypage");
        if (fieldEntryPage) { fieldEntryPage.value = source; }
    }
    if (sessionStorage.getItem("grange_current_url")){
        const source = sessionStorage.getItem("grange_current_url");
        const fieldSignupPage = document.getElementById("signuppage");
        if (fieldSignupPage) { fieldSignupPage.value = source; }
    }
});
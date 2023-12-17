
let information = document.getElementById('info')
window.databaseAPI.print("Message");

let providersBtn = document.getElementById("providers-btn")
providersBtn?.addEventListener('click', (event) => {
    window.location.replace("./providers_page/providers.html");
})
const floatingSessions = document.createElement('div');
floatingSessions.innerHTML = "<a id='floating-sessions-action-button' data-modal='modal-one'>Sessions d’information 🦔</a></div><div class='modal' id='modal-one'><div class='modal-bg modal-exit'></div><div class='modal-container'><button class='modal-close modal-exit'>✕</button><h6>Je m’inscris à une session d’information</h6><div><div id='date_sessions'></div><script src='https://unpkg.com/axios@0.9.1/dist/axios.min.js'></script><script type='text/javascript'>function show_Form() {document.getElementById('form').style.display='block';window.scrollBy({top: 100, left: 0, behavior:'smooth'});}getEventsInTable('Porteur de Projet');document.getElementById('date_sessions').onclick=show_Form;</script></div></div>"
document.body.appendChild(floatingSessions)

const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

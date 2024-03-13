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

const sessionsCollectivesButtons = document.querySelectorAll('.sessions-collectives-modal-trigger').forEach((button) => {
  button.addEventListener('click', (e) => {
    MicroModal.show('sessions-collectives-modal');
  })
})
function showFloatingSessionsCollectivesForm() {
  document.getElementById('floating-form').style.display='block';

}
if (document.querySelector('#sessions-collectives-modal')) {
  if (document.querySelector('#sessions-collectives-modal').dataset.airtable) {
      getEventsInTable(document.querySelector('#sessions-collectives-modal').dataset.airtable)
  } else {
    getEventsInTable('Investisseur');
  }
  document.getElementById('date_sessions').onclick=showFloatingSessionsCollectivesForm;
}

let element = document.getElementById('floating-sessions-action-button');
if (element && window.innerWidth <= 768) {
  element.style.display = 'none';
}
window.addEventListener('scroll', function() {
  let element = document.getElementById('floating-sessions-action-button');
  if (element && window.innerWidth <= 768) {
    if (window.pageYOffset >= 300) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
});
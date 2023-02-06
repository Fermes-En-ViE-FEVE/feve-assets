document.querySelectorAll('.hidden-form-trigger').forEach((formTrigger) => {
  formTrigger.addEventListener('click', (e) => {
    document.getElementById('hidden-form').style.display = 'block'
  })
})

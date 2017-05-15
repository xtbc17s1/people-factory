const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value

  details.innerHTML = `<em>${personName}</em>`
}
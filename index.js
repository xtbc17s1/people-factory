const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value

  const em = document.createElement('em')
  em.textContent = personName

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'

  details.appendChild(em)
  details.appendChild(colorDiv)
}

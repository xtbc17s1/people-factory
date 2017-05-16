const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `
  return colorDiv
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${renderColor(hairColor)}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
    </ul>
  `
}

personForm.addEventListener('submit', handleSubmit)
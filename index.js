const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `

  // details.innerHTML = `<em>${personName}</em>`

  // const em = document.createElement('em')
  // em.textContent = personName
  // details.appendChild(em)

  details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${colorDiv}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
    </ul>
  `
}
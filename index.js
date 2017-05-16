const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const renderItem = (name, value) => {
  const item = document.createElement('li')
  item.innerHTML = `${name}: ${value}`
  return item
}

const renderList = (person) => {
  const list = document.createElement('ul')
  Object.keys(person).map((key, _i, _keys) => {
    const li = renderItem(key, person[key])
    list.appendChild(li)
  })
  return list
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const person = {
    personName: form.personName.value,
    hairColor: renderColor(form.hairColor.value).outerHTML,
    age: form.age.value,
    birthplace: form.birthplace.value,
  }

  const list = renderList(person)
  details.appendChild(list)
}

personForm.addEventListener('submit', handleSubmit)

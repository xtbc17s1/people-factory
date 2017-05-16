{
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
    Array.from(person).map((input, _i, _formElements) => {
      if (input.value) {
        let value = input.value
        if (input.type === 'color') {
          value = renderColor(value).outerHTML
        }
        const li = renderItem(input.name, value)
        list.appendChild(li)
      }
    })
    return list
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = renderList(form.elements)
    details.appendChild(list)
  }

  personForm.addEventListener('submit', handleSubmit)
}

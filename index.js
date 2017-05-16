const App = {
  init() {
    const personForm = document.querySelector('form')
    console.log(this)
    console.log(this.handleSubmit)
    personForm.addEventListener('submit', (ev) => this.handleSubmit(ev))
  },

  renderColor(hairColor) {
    const colorDiv = document.createElement('div')
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    colorDiv.style.backgroundColor = hairColor
    return colorDiv
  },

  renderListItem(name, value) {
    const li = document.createElement('li')
    li.innerHTML = `${name}: ${value}`
    return li
  },

  renderList(person) {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _elementsArray) => {
      if (input.value) {
        let value = input.value
        if (input.type === 'color') {
          value = this.renderColor(value).outerHTML
        }
        let li = this.renderListItem(input.name, value)
        list.appendChild(li)
      }
    })

    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = this.renderList(form.elements)

    details.appendChild(list)
  },
}

App.init()
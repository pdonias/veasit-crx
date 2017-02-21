const phoneButton = document.getElementsByClassName('button-orange large phoneNumber trackable')[0]
const emailButton = document.getElementsByClassName('button-blue large trackable')[0]
const button = phoneButton || emailButton

if (button) {
  const icon = document.createElement('I')
  icon.setAttribute('class', 'icon-cv-plus icon-2x')

  const text = document.createElement('SPAN')
  text.innerHTML = 'Ajouter à visit.me'

  const addButton = document.createElement('BUTTON')
  addButton.setAttribute('class', 'button-orange button-secondary large trackable')
  addButton.style['margin-top'] = '1rem'
  addButton.appendChild(icon)
  addButton.appendChild(text)

  addButton.onclick = e => {
    e.preventDefault()
    console.log(`Add ${window.location.href}`)

    var url = { link: window.location.href, email: 'example@email.com' }

    var xmlhttp = new XMLHttpRequest()   // new HttpRequest instance
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('RESPONSE = ', xmlhttp.response)
      }
    }
    xmlhttp.open('POST', 'https://httpbin.org/post')
    xmlhttp.setRequestHeader('Content-Type', 'application/json')
    xmlhttp.send(encodeURI(JSON.stringify(url)))
  }

  button.parentNode.appendChild(addButton)
}

console.log('LOADED ANNONCE')

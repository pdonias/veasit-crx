const itemTitles = document.getElementsByClassName('item_title')
const saveButtons = document.getElementsByClassName('saveAd')

for (itemTitle of itemTitles) {
  // Prevent title from overflowing under the new buttons (OG margin is 3rem)
  itemTitle.style['margin-right'] = '8rem'
}

// Prevent adding saveAd class recursively and crash Chrome
const _saveButtons = [ ...saveButtons ]

for (const saveButton of _saveButtons) {
  const addButtonHome = document.createElement('I')
  addButtonHome.setAttribute('class', 'showTip mediumgrey icon-cv-plus icon-2x nomargin')

  // ---------------------------------------------------------------------------

  const innerWrapper = document.createElement('DIV')
  innerWrapper.setAttribute('class', 'saveMsg')
  innerWrapper.onclick = e => {
    e.preventDefault()
    console.log(`Add ${saveButton.parentNode.href}`)
    alert(`Add ${saveButton.parentNode.href}`)
  }
  innerWrapper.appendChild(addButtonHome)

  // ---------------------------------------------------------------------------

  const wrapper = document.createElement('DIV')
  wrapper.setAttribute('class', 'saveAd')
  wrapper.style.right = '50px'

  wrapper.appendChild(innerWrapper)
  wrapper.setAttribute('title', 'Ajouter à visit.me')

  saveButton.parentNode.appendChild(wrapper)
}

console.log('LOADED LIST')

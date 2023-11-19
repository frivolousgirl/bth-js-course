const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'palevioletred'
]

/**
 * Center the provided element in the middle of the browser window.
 * @param {HTMLElement} element - The HTML element to be centered.
 */
export function centerBox (element) {
  const browserWidth = window.innerWidth
  const browserHeight = window.innerHeight

  const boxWidth = element.clientWidth
  const boxHeight = element.clientHeight

  const left = (browserWidth - boxWidth) / 2
  const top = (browserHeight - boxHeight) / 2

  element.style.left = left + 'px'
  element.style.top = top + 'px'

  printBoxInfo(element)
}

/**
 * Print information about the provided box element to the console.
 * @param {HTMLElement} box1 - The box element to print information about.
 */
function printBoxInfo (box1) {
  const browserWidth = window.innerWidth
  const browserHeight = window.innerHeight

  const boxWidth = box1.clientWidth
  const boxHeight = box1.clientHeight

  console.log(
    'Webbläsarens fönster: Bredd -',
    browserWidth,
    'Höjd -',
    browserHeight
  )
  console.log('#box-elementet: Bredd -', boxWidth, 'Höjd -', boxHeight)

  const boxStyles = window.getComputedStyle(box1)
  const boxLeft = parseInt(boxStyles.left)
  const boxTop = parseInt(boxStyles.top)

  console.log('#box1-elementet position: Left -', boxLeft, 'Top -', boxTop)
}

/**
 * Attach a click event listener to the provided element, toggling the 'selected' class.
 * @param {HTMLElement} element - The HTML element to attach the click event listener to.
 */
export function attachClickEventListener (element) {
  // Event listeners for element hover effects, adds and removes border.
  element.addEventListener('click', function (event) {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected')
    } else {
      event.target.classList.add('selected')
    }
  })
}

/**
 * Attach a double-click event listener to the provided element, calling the 'shrink' function.
 * @param {HTMLElement} element - The HTML element to attach the double-click event listener to.
 */
export function attachDblclickEventListener (element) {
  element.addEventListener('dblclick', function (event) {
    shrink(event.target)
  })
}

/**
 * Toggle the shape of elements with the 'selected' class between 'circle' and default.
 */
export function toggleShape () {
  const elements = document.getElementsByClassName('selected')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    if (element.classList.contains('circle')) {
      element.classList.remove('circle')
    } else {
      element.classList.add('circle')
    }
  }
}

/**
 * Increase the size of elements with the 'selected' class.
 */
export function increaseSize () {
  const elements = document.getElementsByClassName('selected')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    element.style.width = `${element.offsetWidth + 10}px`
    element.style.height = `${element.offsetHeight + 10}px`

    element.style.left = `${element.offsetLeft - 5}px`
    element.style.top = `${element.offsetTop - 5}px`
  }
}

/**
 * Decrease the size of elements with the 'selected' class.
 */
export function decreaseSize () {
  const elements = document.getElementsByClassName('selected')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    element.style.width = `${element.offsetWidth - 10}px`
    element.style.height = `${element.offsetHeight - 10}px`

    element.style.left = `${element.offsetLeft + 5}px`
    element.style.top = `${element.offsetTop + 5}px`
  }
}

/**
 * Toggle the color of elements with the 'selected' class from the predefined color list.
 */
export function toggleColor () {
  const elements = document.getElementsByClassName('selected')

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]

    for (let j = 0; j < colors.length; j++) {
      const color = colors[j]
      if (element.classList.contains(color)) {
        element.classList.remove(color)
        if (j !== colors.length - 1) {
          element.classList.add(colors[j + 1])
        } else {
          element.classList.add(colors[0])
        }
        break
      }
    }
  }
}

/**
 * Clone elements with the 'selected' class, adjusting their position and attaching event listeners.
 */
export function cloneElements () {
  const elements = document.querySelectorAll('.selected')
  const browserWidth = window.innerWidth
  const browserHeight = window.innerHeight

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const clonedElement = element.cloneNode(true)
    clonedElement.id = ''

    const coords = generateXYCoordinates(
      browserWidth - element.offsetWidth,
      browserHeight - element.offsetHeight
    )

    clonedElement.style.left = `${coords[0]}px`
    clonedElement.style.top = `${coords[1]}px`

    attachClickEventListener(clonedElement)
    attachDblclickEventListener(clonedElement)

    element.parentNode.appendChild(clonedElement)
  }
}
/**
 * Delete elements with the 'selected' class from the DOM.
 */
export function deleteElements () {
  const elements = document.querySelectorAll('.selected')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    element.parentNode.removeChild(element)
  }
}

/**
 * Deselect all elements with the 'box-item' class.
 */
export function deselectAll () {
  const elements = document.getElementsByClassName('box-item')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    element.classList.remove('selected')
  }
}

/**
 * Select all elements with the 'box-item' class.
 */
export function selectAll () {
  const elements = document.getElementsByClassName('box-item')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    element.classList.add('selected')
  }
}

/**
 * Generate a random element and append it to the '.content' element with attached event listeners.
 */
export function generateRandomElement () {
  const element = document.createElement('div')
  const browserWidth = window.innerWidth
  const browserHeight = window.innerHeight

  element.classList.add('box-item', 'center', 'size200')
  element.classList.add(colors[Math.floor(Math.random() * colors.length)])
  const coords = generateXYCoordinates(browserWidth - 200, browserHeight - 200)

  element.style.left = `${coords[0]}px`
  element.style.top = `${coords[1]}px`

  if (Math.random() < 0.5) {
    element.classList.add('circle')
  }

  attachClickEventListener(element)
  attachDblclickEventListener(element)

  document.getElementsByClassName('content')[0].appendChild(element)
}

/**
 * Move elements with the 'selected' class based on arrow key input.
 * @param {string} key - The arrow key ('ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft').
 */
export function moveElement (key) {
  const elements = document.getElementsByClassName('selected')
  const distance = 5
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    switch (key) {
      case 'ArrowUp':
        if (element.offsetTop - distance >= 0) {
          element.style.top = `${element.offsetTop - distance}px`
        } else {
          element.style.top = 0
        }
        break
      case 'ArrowRight':
        if (
          element.offsetLeft + element.offsetWidth + distance <=
          window.innerWidth
        ) {
          element.style.left = `${element.offsetLeft + distance}px`
        } else {
          element.style.left = `${window.innerWidth - element.offsetWidth}px`
        }
        break
      case 'ArrowDown':
        if (
          element.offsetTop + element.offsetHeight + distance <=
          window.innerHeight
        ) {
          element.style.top = `${element.offsetTop + distance}px`
        } else {
          element.style.top = `${window.innerHeight - element.offsetHeight}px`
        }
        break
      case 'ArrowLeft':
        if (element.offsetLeft - distance >= 0) {
          element.style.left = `${element.offsetLeft - distance}px`
        } else {
          element.style.left = 0
        }
        break
    }
  }
}

/**
 * Shrink elements with the 'selected' class, removing them after a short delay.
 */
export function shrinkSelected () {
  const elements = document.getElementsByClassName('selected')
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]

    shrink(element)
  }
}

/**
 * Shrink the provided element, removing it after a short delay.
 * @param {HTMLElement} element - The HTML element to be shrunk and removed.
 */
function shrink (element) {
  element.classList.add('animateSize')
  element.style.width = '2px'
  element.style.height = '2px'

  window.setTimeout(function () {
    element.remove()
  }, 2000)
}

/**
 * Generate random X and Y coordinates within the specified maximum values.
 * @param {number} maxX - The maximum X coordinate value.
 * @param {number} maxY - The maximum Y coordinate value.
 * @returns {number[]} An array containing the generated X and Y coordinates.
 */
function generateXYCoordinates (maxX, maxY) {
  const x = Math.floor(Math.random() * maxX)
  const y = Math.floor(Math.random() * maxY)

  return [x, y]
}

import * as fun from './modules/kmom04/functions.js'

/**
 * Function to be executed when the window has finished loading.
 * Fetches and prints details, centers the box, and attaches event listeners.
 */
function onLoad () {
  const box1 = document.getElementById('box1')

  // Center the box and attach event listeners
  fun.centerBox(box1)
  fun.attachClickEventListener(box1)
  fun.attachDblclickEventListener(box1)

  // Log a message to the console
  console.log('Tryck på Z för att minimera alla valda.')
}

/**
 * Function to be executed when the window is resized.
 * Recenters the box to adjust its position.
 */
function onResize () {
  const box1 = document.getElementById('box1')
  fun.centerBox(box1)
}

/**
 * Event listener for keydown events to perform actions based on the pressed key.
 * @param {KeyboardEvent} event - The keyboard event.
 */
document.addEventListener('keydown', function (event) {
  const key = event.key

  switch (key) {
    case 'e':
      fun.toggleShape()
      break
    case 'q':
      fun.increaseSize()
      break
    case 'w':
      fun.decreaseSize()
      break
    case 'r':
      fun.toggleColor()
      break
    case 't':
      fun.cloneElements()
      break
    case 'y':
      fun.deleteElements()
      break
    case 'u':
      fun.deselectAll()
      break
    case 'i':
      fun.selectAll()
      break
    case 'p':
      fun.generateRandomElement()
      break
    case 'ArrowUp':
    case 'ArrowRight':
    case 'ArrowDown':
    case 'ArrowLeft':
      fun.moveElement(key)
      break
    case 'z':
      fun.shrinkSelected()
      break
  }
})

// Call the onLoad function when the window has finished loading
window.onload = onLoad
// Call the onResize function when the window is resized
window.onresize = onResize

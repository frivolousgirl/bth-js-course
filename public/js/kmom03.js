import { colors, persons, years } from './modules/kmom03/info.js'

const button = document.getElementById('clickButton')
let counter = 0

// Centering the button on the screen
const newTop = window.innerHeight / 2 - button.clientHeight / 2
const newLeft = window.innerWidth / 2 - button.clientWidth / 2
button.style.top = `${newTop}px`
button.style.left = `${newLeft}px`

// Sets initial button style
button.style.backgroundColor = colors[counter]
button.textContent = colors[counter]

// Event listener for button click
button.addEventListener('click', function (event) {
  // Creates a new div element
  const element = document.createElement('div')

  // Sets class, background color, and id for the new element
  element.className = 'box'
  element.style.backgroundColor = colors[counter]
  element.id = counter

  element.addEventListener('click', function (event) {
    // Check if the content is already present
    const contentDiv = element.querySelector('.cont')

    console.log(event.target)

    if (contentDiv) {
      // If content exists, remove it
      element.removeChild(contentDiv)
    } else {
      // If no content, create and append content

      // Creates a div for displaying the person's name
      const nameDiv = document.createElement('div')
      nameDiv.innerHTML = persons[event.target.id]

      // Creates an image element and sets its source and class
      const imgDiv = document.createElement('img')
      imgDiv.src = './img/logo.png'
      imgDiv.classList.add('imgFist')

      // Creates a div for displaying year
      const yearDiv = document.createElement('div')
      yearDiv.innerHTML = years[event.target.id]

      // Create a div to wrap the content
      const contentDiv = document.createElement('div')
      contentDiv.className = 'cont'

      // Append content to the content div
      contentDiv.appendChild(nameDiv)
      contentDiv.appendChild(imgDiv)
      contentDiv.appendChild(yearDiv)

      // Append content div to the element
      event.target.appendChild(contentDiv)
    }
  })

  // Event listeners for element hover effects, adds and removes border.
  element.addEventListener('mouseenter', function (event) {
    event.target.classList.add('borderBox')
  })

  element.addEventListener('mouseleave', function (event) {
    event.target.classList.remove('borderBox')
  })

  // Increment the counter and update button styles
  counter++
  button.style.backgroundColor = colors[counter]
  button.textContent = colors[counter]

  // Appends the generated element to the document
  document.body.appendChild(element)

  // Hides button when all colors have been toggled through
  if (counter === colors.length) {
    button.style.display = 'none'
  }
})

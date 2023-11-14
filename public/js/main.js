/**
 * Main.js.
 */

/**
 * Translates English month names to Swedish month name.
 * @param {Date} date - A date object.
 * @returns {string} Current month name in Swedish.
 */
function getSwedishMonth (date) {
  const monthNames = [
    'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
    'Juli', 'Augusti', 'September', 'Oktober', 'November', 'Decemeber'
  ]

  const month = monthNames[date.getMonth()]

  return month
}

const date = new Date()
const swedishMonth = getSwedishMonth(date)

console.log('Välkommen till min sida!')
console.log(`Idag är det den ${date.getDate()} ${swedishMonth} ${date.getFullYear()}`)

const parts = window.location.pathname.split('/')
const filename = parts[parts.length - 1]

const navbar = `<ul>
        <li><a href="index.html" class="${filename === 'index.html' ? 'active' : ''}">Me</a></li>
        <li><a href="redovisning.html" class="${filename === 'redovisning.html' ? 'active' : ''}">Redovisning</a></li>
        <li><a href="om.html" class="${filename === 'om.html' ? 'active' : ''}">Om</a></li>
        <li><a href="kmom02.html" class="${filename === 'kmom02.html' ? 'active' : ''}">Kmom02</a></li>
        <li><a href="kmom03.html" class="${filename === 'kmom03.html' ? 'active' : ''}">Kmom03</a></li>
      </ul>`

document.getElementById('navbar').innerHTML = navbar

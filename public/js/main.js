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
    'Juli', 'Augusti', 'September', 'Oktober', 'Novemeber', 'Decemeber'
  ]

  const month = monthNames[date.getMonth()]

  return month
}

const date = new Date()
const swedishMonth = getSwedishMonth(date)

console.log('Välkommen till min sida!')
console.log(`Idag är det den ${date.getDate()} ${swedishMonth} ${date.getFullYear()}`)

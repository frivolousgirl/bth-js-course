// kmom02.js
import { africanAnimals, americanAnimals, europeanAnimals } from './animals.js'

/**
 * Combines and returns an array containing all the animal species from African, American, and European regions.
 * @returns {Array} An array containing all the animal species from the specified regions.
 */
function getAll () {
  return africanAnimals.concat(americanAnimals, europeanAnimals)
}

/**
 * Retrieves and returns an array of animal species specific to the given continent.
 * @param {string} continent - The name of the continent ('africa', 'america', or 'europe').
 * @returns {Array} An array of animal species from the specified continent, or an empty array if the continent is not recognized.
 */
function getFrom (continent) {
  if (continent === 'africa') {
    return africanAnimals
  }
  if (continent === 'america') {
    return americanAnimals
  }
  if (continent === 'europe') {
    return europeanAnimals
  }
  return []
}

/**
 * Filters and returns an array of animal species containing the specified search word.
 * @param {string} searchWord - The word to search for within the animal species.
 * @returns {Array} An array of animal species that include the search word.
 */
function filterAnimals (searchWord) {
  return getAll().filter((animal) => animal.includes(searchWord))
}

/**
 * Determines the continent where a specific animal species lives.
 * @param {string} animal - The name of the animal species.
 * @returns {string} The continent where the animal species is found, or 'Unavailable' if the animal is not recognized.
 */
function whereLives (animal) {
  if (africanAnimals.includes(animal)) {
    return 'Africa'
  }
  if (americanAnimals.includes(animal)) {
    return 'America'
  }
  if (europeanAnimals.includes(animal)) {
    return 'Europe'
  }
  return 'Unavailable'
}

/**
 * Generates a report listing animal species by continent with their respective positions.
 * @returns {string} A report listing animal species by continent and position.
 */
function report () {
  let animals = ''
  for (let i = 0; i < africanAnimals.length; i++) {
    animals += `Africa: ${africanAnimals[i]} (${i})\n`
  }
  for (let i = 0; i < americanAnimals.length; i++) {
    animals += `America: ${americanAnimals[i]} (${i})\n`
  }
  for (let i = 0; i < europeanAnimals.length; i++) {
    animals += `Europe: ${europeanAnimals[i]} (${i})\n`
  }
  return animals
}

export { getAll, getFrom, filterAnimals, whereLives, report }

import {
  africanAnimals,
  americanAnimals,
  europeanAnimals
} from './modules/kmom02/animals.js'
import { getGreeting } from './modules/kmom02/greeting.js'

/**
 * Get a random element from the provided array.
 * @param {Array} animals - The array from which to select a random element.
 * @returns {string} A random animal from the provided array.
 */
function getRandomAnimal (animals) {
  const index = Math.floor(Math.random() * animals.length)

  return animals[index]
}

// HTML elements to hold animal names.
const africanAnimalElement = document.getElementById('african-animal')
const americanAnimalElement = document.getElementById('american-animal')
const europeanAnimalElement = document.getElementById('european-animal')
// Assignment of animal names to HTML elements.
africanAnimalElement.textContent = getRandomAnimal(africanAnimals)
americanAnimalElement.textContent = getRandomAnimal(americanAnimals)
europeanAnimalElement.textContent = getRandomAnimal(europeanAnimals)

const greetingElement = document.getElementById('greeting')
greetingElement.textContent = getGreeting()

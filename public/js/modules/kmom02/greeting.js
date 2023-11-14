/**
 * Generates a greeting message based on the time of day.
 *
 * This function calculates the time of day and provides a greeting message accordingly:
 * - "God förmiddag" (Good morning) if it's before 12:00.
 * - "God eftermiddag" (Good afternoon) if it's after 12:00.
 * - "God Lunch!" (Good lunch) if it's exactly 12:00.
 * @returns {string} A greeting message based on the current time of day.
 */
function getGreeting () {
  const today = new Date()

  if (today.getHours() > 12) {
    return 'God eftermiddag!'
  }
  if (today.getHours() < 12) {
    return 'God förmiddag!'
  }
  return 'God Lunch!'
}

export { getGreeting }

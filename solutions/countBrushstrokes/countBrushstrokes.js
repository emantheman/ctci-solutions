/**
 * Counts the brushstrokes it would take to paint the skyline whose building-heights are represented by numbers in an array.
 * 
 * An interview problem I couldn't solve because I got super depressed and stressed and thought the problem was much harder than it is.
 * 
 * @param {Array} skyline - array of positive integers representing building-heights
 */
const countBrushstrokes = skyline => {
  // number of brushstrokes required to paint skyline
  let brushstrokes = 0
  // find maxBuildingHeight in skyline
  const maxHeight = Math.max(...skyline)
  // loop from 1 inclusive-upto maxHeight
  for (let height = 1; height <= maxHeight; height++) {
    // flag for whether the next stroke is new
    let isNew = true
    // iterate through skyline
    for (let i = 0; i < skyline.length; i++) {
      // if the next stroke is new AND the value at skyline[i] is gte current height
      if (isNew && skyline[i] >= height) {
        // increment brushtrokes
        brushstrokes++
        // negate flag
        isNew = false
      } else if (!isNew && skyline[i] < height) { // if the stroke ends
        // the next stroke is new
        isNew = true
      }
    }
  }
  return brushstrokes
}

module.exports = countBrushstrokes
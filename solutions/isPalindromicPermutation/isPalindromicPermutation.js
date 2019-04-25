
/**
 * 1.4 - Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards as backwards. A permutation is a rearrangement of letters. The palindrome need not be limited to just dictionary words.
 * 
 * @param {String} str - string of arbitrary length
 */
const isPalindromicPermutation = str => {
/* if a string has even counts of every character OR even counts of every character and one odd count of a unique character then it is a palindrome (the single character would go in the middle of the palindrome) */
  
  // store char counts in a map
  const freqs = new Map()
  for (let ch of str.replace(' ', '').toLowerCase())
    freqs.set(ch, freqs.has(ch) ? freqs.get(ch) + 1 : 1)

  let numOdds = 0
  // enumerate map, must be one or less odd count
  for (let pair of freqs) {
    if (pair[1] % 2 === 1) numOdds++
    if (numOdds > 1) return false
  }
  
  // if numOdds doesn't exceed ONE, return true
  return true
}

module.exports = isPalindromicPermutation
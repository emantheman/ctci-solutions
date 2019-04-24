/**
 * Lowercase and sort the provided string.
 * 
 * @param {String} str - string of arbitrary length
 */
const normalize = str => str.toLowerCase().split('').sort().join('')

/**
 * Problem 1.2 - Given two strings, write a method to determine if one is a permutation of the other
 * 
 * @param {String} strA - string of arbitrary length
 * @param {String} strB - string of arbitrary length
 */
const isPermutation = (strA, strB) => {
  // if normalized strings are equal,
  // the strings ARE permutations of each other.
  return normalize(strA) === normalize(strB)
}

module.exports = isPermutation
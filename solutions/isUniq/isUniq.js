/**
 * Problem 1.1a - Implement an algorithm to determine if a string has all unique characters.
 * 
 * @param {String} str - string of arbitrary length
 */
const isUniqOtherDataStructures = str => {
  const uniqs = new Map()
  for (let ch of str.toLowerCase()) {
    if (uniqs.has(ch)) return false
    uniqs.set(ch, 1)
  }
  return true
}

/**
 * Problem 1.1b - What if you cannot use additional data structures?
 * 
 * @param {String} str - string of arbitrary length
 */
const isUniq = str => {
  let uniqs = ''
  for (let i = 0; i < str.length; i++) {
    if (uniqs.includes(str[i])) return false
    uniqs += str[i]
  }
  return true
}

module.exports = isUniq
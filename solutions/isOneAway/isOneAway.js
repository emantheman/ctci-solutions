
/**
 * 1.5 - There are three types of edits that can be performed on strings: insert a character, remove a character, replace a character. Given two strings, write a function to check if they are one or less edits away.
 * 
 * NOTE: this solution is applies the Wagner-Fischer Algorithm for computing Levenshtein's Distance
 * 
 * @param {String} strN - string of arbitrary length
 * @param {String} strM - string of arbitrary length
 */
const isOneAway = (strN, strM) => {
  // if strings are equal, return true
  if (strN === strM) return true

  // strings lengths
  const lenN = strN.length, lenM = strM.length

  // if more than 1 character has been added/removed return false
  if (Math.abs(lenN - lenM) > 1) return false

  // note: for all i and j, d[i,j] will hold the Levenshtein distance between
  // the first i characters of strN and the first j characters of strM
  // initialize distance-holding matrix
  const d = new Array(lenN).fill(null).map(() => new Array(lenM).fill(0))

  // populate matrix
  for (let i = 1; i < lenN; i++)
    d[i][0] = i
  for (let j = 1; j < lenM; j++)
    d[0][j] = j
  
  // apply Wagner-Fischer algorithm
  for (let j = 1; j < lenM; j++) {
    for (let i = 1; i < lenN; i++) {
      const substitutionCost = strN[i - 1] === strM[j - 1] ? 0 : 1
      d[i][j] = Math.min(
        d[i-1][j] + 1,                 // deletion 
        d[i][j-1] + 1,                 // insertion
        d[i-1][j-1] + substitutionCost // substitution
      )
    }
  }

  // if minDistance is greater than one false
  return d[lenN-1][lenM-1] <= 1
}

module.exports = isOneAway
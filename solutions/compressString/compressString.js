/**
 * 1.6 - Implement a method to perform basic string compression using the count of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smalled than the original string, your method should return the original string.
 * 
 * @param {String} str - string of letters in [A-Za-z]
 */
const compressString = str => {
  // to store pairs as [char, freq]
  const freqs = []
  // loop through characters of str
  for (const ch of str) {
    // array length
    const len = freqs.length
    // if the last item has the same char, increment its freq
    if (len > 0 && freqs[len-1][0] === ch) {
      freqs[len-1][1] += 1
    } else { // otherwise add an item
      freqs.push([ch, 1])
    }
  }
  const compressed = freqs.map(pair => pair.join('')).join('')
  return compressed.length >= str.length ? str : compressed
}

module.exports = compressString
/**
 * 1.7 - Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 * 
 * @param {Array} m - two dimensional array
 */
const rotateMatrix = m => m[0].map((_, i) => m.map(row => row[i])).reverse()

module.exports = rotateMatrix
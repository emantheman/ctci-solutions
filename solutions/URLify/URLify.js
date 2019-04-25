/**
 * Problem 1.3 - Write a method to remove leading and trailing white space and replace all other spaces in a string with '%20'.
 * 
 * @param {String} str - str of arbitrary length
 */
const URLify = str => str.trim().split(' ').join('%20')

module.exports = URLify
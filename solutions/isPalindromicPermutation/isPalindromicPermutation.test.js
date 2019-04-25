const isPalindromicPermutation = require('./isPalindromicPermutation')

test('"Tact Coa" is a palindromic permutation, e.g., of "tacocat" or "atcocta"', () => {
  expect(isPalindromicPermutation('Tact Coa')).toBe(true)
})

test('"booobi" is not a palindrome (the closest you can get is "booiobi"', () => {
  expect(isPalindromicPermutation('booobi')).toBe(false)
})
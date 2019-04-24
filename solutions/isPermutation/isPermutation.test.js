const isPermutation = require('./isPermutation')

test('"bonaroo" is a permutation of "roonboa"', () => {
  expect(isPermutation('bonaroo', 'roonboa')).toBe(true)
})

test('"boogman" is not a permutation of "goodman"', () => {
  expect(isPermutation('boogman', 'goodman')).toBe(false)
})
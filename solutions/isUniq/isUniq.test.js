const isUniq = require('./isUniq')

test('"abcdef@z" has all unique characters', () => {
  expect(isUniq('abcdef@z')).toBe(true)
})
test('"Al worsen migz cba" does not have all unique characters', () => {
  expect(isUniq('Al worsen migz cba')).toBe(false)
})
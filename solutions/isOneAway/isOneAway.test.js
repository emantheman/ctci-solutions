const isOneAway = require('./isOneAway')

test('pale, ple -> true', () => {
  expect(isOneAway('pale', 'ple')).toBe(true)
})
test('pales, pale -> true', () => {
  expect(isOneAway('pales', 'pale')).toBe(true)
})
test('pale, bale -> true', () => {
  expect(isOneAway('pale', 'bale')).toBe(true)
})
test('pale, bake -> false', () => {
  expect(isOneAway('pale', 'bake')).toBe(false)
})
test('papa, papas -> true', () => {
  expect(isOneAway('papa', 'papas')).toBe(true)
})
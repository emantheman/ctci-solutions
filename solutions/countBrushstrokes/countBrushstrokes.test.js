const countBrushstrokes = require('./countBrushstrokes')

test('The brushstroke count for array [1,3,2,1,2,1,5,3,3,4,2] is 9', () => {
  expect(countBrushstrokes([1,3,2,1,2,1,5,3,3,4,2])).toBe(9)
})

test('The brushstroke count for array [1,1,1,1] is 1', () => {
  expect(countBrushstrokes([1,1,1,1])).toBe(1)
})
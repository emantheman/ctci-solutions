const compressString = require('./compressString.js')

test('"aabcccccaaa" should become "a2b1c5a3"', () => {
  expect(compressString("aabcccccaaa")).toBe("a2b1c5a3")
})
test('"abcsssad" should become "abcsssad"', () => {
  expect(compressString("abcsssad")).toBe("abcsssad")
})
test('"aabb" should become "aabb"', () => {
  expect(compressString("aabb")).toBe("aabb")
})
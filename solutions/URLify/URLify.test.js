const URLify = require('./URLify')

test('"Mr John Smith    " as a URL is "Mr%20John%20Smith"', () => {
  expect(URLify('Mr John Smith    ')).toBe('Mr%20John%20Smith')
})
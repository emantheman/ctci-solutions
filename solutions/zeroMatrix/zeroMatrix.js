/**
 * 1.8 - Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
 * 
 * @param {Array} m - MxN array of arbitrary elements
 */
const zeroMatrix = m => {
  // row and column length, respectively
  const rLen = m.length, cLen = m[0].length
  // stores rows and columns that contain 0s
  const z = {
    rows: [],
    cols: []
  }

  // locate the row and column of each 0
  for (let row = 0; row < rLen; row++) {
    for (let col = 0; col < cLen; col++) {
      if (m[row][col] === 0) {
        z.rows.push(row)
        z.cols.push(col)
      }
    }
  }

  // set all items in 0-rows or 0-columns to 0
  for (let row = 0; row < rLen; row++) {
    for (let col = 0; col < cLen; col++) {
      if (z.rows.includes(row) || z.cols.includes(col)) {
        m[row][col] = 0
      }
    }
  }

  return m
}

module.exports = zeroMatrix
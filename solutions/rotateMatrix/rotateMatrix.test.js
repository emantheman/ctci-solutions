const rotateMatrix = require('./rotateMatrix')

test(`
[[1,2,3], should become [[3,4,5],
 [8,9,4],                [2,9,6],
 [7,6,5]]                [1,8,7]]`, () => {
    expect(rotateMatrix([[1,2,3],[8,9,4],[7,6,5]])).toEqual([[3,4,5],[2,9,6],[1,8,7]])
 })
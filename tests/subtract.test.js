const subtract = require('../js/subtract');

test('properly subtracts 2 numbers', () => {
  expect(subtract(1,2)).toBe(-1)
})
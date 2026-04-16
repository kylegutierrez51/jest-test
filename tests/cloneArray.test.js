const cloneArray = require('../js/cloneArray');

test('properly clones array', () => {
  const array = [1, 2, 3]
  // expect(cloneArray(array)).toBe(array); -- this doesn't work since the cloned array points to different memory
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
})
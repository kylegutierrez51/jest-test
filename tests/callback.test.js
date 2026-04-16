const { fetchData, fetchPromise } = require('../js/callback');

test('the data is peanut butter (fetchData)', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
})

/* 
Flow:
1. fetchData(callback) is called
2. Waits 1 second
3. Calls 'callback("peanut butter")
4. Now it calls the callback function defined in the test with the data arg set to 'peanut butter'
5. Test passes since the data = 'peanut butter'
*/



test("the data is peanut butter (fetchPromise)", () => {
  return expect(fetchPromise(true)).resolves.toBe('peanut butter');
})


test('the fetch fails with an error', () => {
  return expect(fetchPromise(false)).rejects.toThrow('error');
})


// async
test('the data is peanut better (async)', async () => {
  const data = await fetchPromise(true);
  expect(data).toBe('peanut butter');
});
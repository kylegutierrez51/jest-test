


test('mock implementation of a basic function', () => {
  const mock = jest.fn(x => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1) // expects the mock to have been called with an arg of 1 (line above)
});




test('spying on a method of an object', () => {
  const video = {
    play() {
      return true;
    },
  };
  // track if play() has been called 
  const spy = jest.spyOn(video, 'play'); // 
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore(); // removes spy entirely and restores video.play back to its original implementation. This means video.play is no longer being spied on.

  // mockRestore() only works when the spy was created with jest.spyOn(). mockRestore() has no effect on jest.fn() mocks.
})
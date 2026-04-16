function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter');
  }, 1000);
}

function fetchPromise(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      setTimeout(() => resolve('peanut butter'), 1000);
    } else {
      reject(new Error('error'));
    }
  });
}

module.exports = {
  fetchData,
  fetchPromise
};


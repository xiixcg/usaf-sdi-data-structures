var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[Object.keys(storage).length.toString()] = value;
  };

  someInstance.dequeue = function () {
    let ask = storage['0'];
    for (i = 0; i < Object.keys(storage).length - 1; i++) {
      storage[`${i}`] = storage[(i + 1).toString()];
    }
    delete storage[(Object.keys(storage).length - 1).toString()];
    return ask;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};

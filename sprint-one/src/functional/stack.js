var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    storage[(Object.keys(storage).length).toString()] = value;
  };

  someInstance.pop = function () {
    let ask = storage[(Object.keys(storage).length -1).toString()];
    delete storage[(Object.keys(storage).length -1).toString()];
    return ask;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};

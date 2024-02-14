const myReduceFunction = (array, initialValue, modifiedFunction) => {
  for (const iterator of array) {
    initialValue = modifiedFunction(initialValue, iterator);
  }
  return initialValue;
};

const numberArray = [1, 2, 4, 5];

const sumOfArray = myReduceFunction(
  numberArray,
  0,
  (accumaltor, initialValue) => (accumaltor += initialValue)
);

console.log(`The Sum of Given array is :${sumOfArray}`); //12

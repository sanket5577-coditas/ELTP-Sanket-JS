// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
  return (area = length * width);
};
console.log(areaOfRectangle(2, 2));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (monthToCheckForSeason) => {
  if (
    monthToCheckForSeason == "September" ||
    monthToCheckForSeason == "October" ||
    monthToCheckForSeason == "November"
  ) {
    return "Rainy Season...!";
  } else if (
    monthToCheckForSeason == "December" ||
    monthToCheckForSeason == "January" ||
    monthToCheckForSeason == "February"
  ) {
    return "Winter Season...!";
  } else if (
    monthToCheckForSeason == "April" ||
    monthToCheckForSeason == "May" ||
    monthToCheckForSeason == "July" ||
    monthToCheckForSeason == "August"
  ) {
    return "Summer Season...!";
  } else if (monthToCheckForSeason == "March") {
    return "Spring Season...!";
  } else {
    return "Wrong Input......!!!!";
  }
};

console.log(checkSeason("April"));

// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
const findMax = (a, b, c) => {
  let maxNumber = Math.max(a, b, c);
  return maxNumber;
};
console.log(findMax(0, 10, 5));

// 4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
  let temp = x;
  x = y;
  y = temp;
  return `value of is ${x} and y is ${y}`;
};
console.log(swapValues(10, 20));

// 5. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

const modifyArray = (inputArray) => {
  if (inputArray.length > 5) {
    for (let index = 0; index < inputArray.length; index++) {
      inputArray[4] = inputArray[4].toUpperCase();
      return inputArray;
    }
  } else {
    return "item not found";
  }
};
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
// 7. Write a functions which checks if all items are unique in the array.
function areAllUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }

  return true;
}

const array2 = [1, 2, 3, 4, 1];
console.log(areAllUnique(array2));

// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

function sevenRandomNumbers() {
  let randomNumbers = [];
  while (randomNumbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
}

const result = sevenRandomNumbers();
console.log(result);

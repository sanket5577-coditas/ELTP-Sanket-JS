//1) Iterate 0 to 10 using for loop, do the same using while and do while loop

// For Loop
for (let incrementalValue = 0; incrementalValue < 11; incrementalValue++) {
  console.log(incrementalValue);
}

// while Loop
let forwardIndex = 0;
while (forwardIndex <= 10) {
  console.log(forwardIndex);
  forwardIndex++;
}

// DoWhile Loop
let currentNumber = 0;
do {
  console.log(currentNumber);
  currentNumber++;
} while (currentNumber <= 10);

//2) Iterate 10 to 0 using for loop, do the same using while and do while loop

//Revered number by using for loop
for (let revCounter = 10; revCounter >= 0; revCounter--) {
  console.log(revCounter);
}

//Revered number by using while loop
let backward = 10;
while (backward >= 0) {
  console.log(backward);
  backward--;
}

// Revered number by using DoWhile loop
let reverseIndex = 10;
do {
  console.log(reverseIndex);
  reverseIndex--;
} while (reverseIndex >= 0);

//3) Iterate 0 to n using for loop

let n = 5;

for (let index = 0; index <= n; index++) {
  console.log(index);
}

// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

const patternRowaNumber = 7;
console.log("\n");
let string = "";
for (let index = 1; index <= patternRowaNumber; index++) {
  for (let lineNumber = 0; lineNumber < index; lineNumber++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);

// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for (let index = 0; index <= 10; index++) {
  console.log(index + "\t" + index ** 2 + "\t" + index ** 3);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for (let evenCount = 0; evenCount <= 100; evenCount++) {
  if (!(evenCount % 2)) {
    console.log(evenCount);
  }
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
console.log("ODD NUMBER");
for (let oddCount = 0; oddCount <= 100; oddCount++) {
  if (oddCount % 2) {
    console.log(oddCount);
  }
}

// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
console.log("Prime number ");
for (let primeNmberCount = 2; primeNmberCount <= 100; primeNmberCount++) {
  let isPrime = true;
  for (let count = 2; count < primeNmberCount; count++) {
    if (primeNmberCount % count === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(primeNmberCount);
  }
}

// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfAllNumber = 0;
for (let iterate = 0; iterate <= 100; iterate++) {
  sumOfAllNumber += iterate;
}
console.log(`The Sum of all number from 0 to 100 is ${sumOfAllNumber}`);

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvenNumber = 0;
let sumOfOddNumber = 0;
for (let Count = 0; Count <= 100; Count++) {
  if (!(Count % 2)) {
    sumOfEvenNumber += Count;
  } else {
    sumOfOddNumber += Count;
  }
}
console.log(`The Sum of all Even number from 0 to 100 is ${sumOfEvenNumber}`);

console.log(`The Sum of all Odd number from 0 to 100 is ${sumOfOddNumber}`);

// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//                          O/P:   [2550, 2500]

let sumOfOddAndEvenArray = [];
sumOfOddAndEvenArray.push(sumOfEvenNumber);
sumOfOddAndEvenArray.push(sumOfOddNumber);

console.log(sumOfOddAndEvenArray); //[2550,2500]

// 11. Develop a small script which generate array of 5 random numbers
function generateRandomNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
  }
  return randomNumbers;
}

const randomNumbersArray = generateRandomNumbers();
console.log("Generated Array of Random Numbers:", randomNumbersArray);

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique

const uniqueRandomNumber = () => {
  const uniqueRandomNumberArray = [];
  for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100) + 1;

    if (!uniqueRandomNumberArray.includes(number)) {
      uniqueRandomNumberArray.push(Math.floor(Math.random() * 100) + 1);
    }
  }

  return uniqueRandomNumberArray;
};
console.log("The Unique number generated Array ", uniqueRandomNumber());

// 13. Develop a small script which generate a six characters random id: //iuyt56
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomID = "";
for (let counter = 0; counter < 6; counter++) {
  let index = Math.floor(Math.random() * characters.length);
  randomID += characters[index];
}
console.log(randomID);
// 14. Develop a small script which generate any number of characters random id.
const generateCharacterId = () => {
  const randomNumber = 97 + Math.floor(Math.random() * 26);
  return String.fromCharCode(randomNumber);
};
console.log("The Random id is :", generateCharacterId());


// 16. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let newCountryArray = [];
for (let index = 0; index < countries.length; index++) {
  newCountryArray.push(countries[index].toUpperCase());
}
console.log(newCountryArray);

// 17. Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let countriesLength = [];
for (const key in countries) {
  countriesLength.push(countries[key].length);
}

console.log(countriesLength);

// 18. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

for (let index = 0; index < countries.length; index++) {

    console.log([countries[index], countries[index].substring(0,3),countries[index].length])
    
}

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
let countriesWithLand = [];

console.log(".............next Question")
for (let index = 0; index < countries.length; index++) {
  if (countries[index].toLowerCase().includes("land")) {
    countriesWithLand.push(countries[index]);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log("All these countries are without 'land'");
}

// 20. Using the above countries array, find the country containing the biggest number of characters.
let maxNumber = 0;
for (let index = 0; index < countries.length; index++) {
  if (maxNumber < countries[index].length) {
    maxNumber = countries[index].length;
  }
}
for (let index = 0; index < countries.length; index++) {
  if (countries[index].length === maxNumber) {
    console.log(
      "The Biggest Country Name is :",
      countries[index].toUpperCase()
    );
  }
}

// 21. Using the above countries array, find the country containing only 5 characters.
for (let index = 0; index < countries.length; index++) {
  if (countries[index].length === 5) {
    console.log(
      "The Biggest Country Name is :",
      countries[index].toUpperCase()
    );
  }
}
// 22. Find the longest word in the webTechs array.

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let maxElmentLength = 0;
for (let index = 0; index < webTechs.length; index++) {
  if (maxElmentLength < webTechs[index].length) {
    maxElmentLength = webTechs[index].length;
  }
}
for (let index = 0; index < webTechs.length; index++) {
  if (webTechs[index].length === maxElmentLength) {
    console.log("The Biggest Word is :", webTechs[index].toUpperCase());
    break;
  }
}

//   23. Use the webTechs array to create the following array of arrays:
//   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let arrayOfLengthAndWebTech = [];

for (let index = 0; index < webTechs.length; index++) {
  arrayOfLengthAndWebTech.push([webTechs[index], webTechs[index].length]);
}
console.log(arrayOfLengthAndWebTech);

// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 25. Iterate through the array, ["HTML", "CSS", "JS", "Rect", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the itemsa

for (let index = 0; index < mernStack.length; index++) {
  console.log(mernStack[index]);
}

// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruit = ["banana", "orange", "mango", "lemon"];

for (let index = fruit.length; index >= 0; index--) {
  console.log(fruit[index]);
}

// 27. Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

console.log(".................... NEW QUESTION");
for (let indexOfFirst = 0; indexOfFirst < fullStack.length; indexOfFirst++) {
  console.log(fullStack[indexOfFirst].join("\n"));
}

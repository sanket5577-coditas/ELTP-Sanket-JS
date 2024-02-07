// 1) Declare an empty array;
const emptyArray = [];

// 2) Declare an array with more than 5 number of elements

const arrayOfNumbers = [1, 2, 3, 4, 5];

// 3) Find the length of your array
console.log(arrayOfNumbers.length); //5

// 4) Get the first item, the middle item and the last item of the array
console.log(
  `First item of array is ${arrayOfNumbers[0]} and middle is ${
    arrayOfNumbers[Math.floor(arrayOfNumbers.length / 2)]
  } and last itme is ${arrayOfNumbers[arrayOfNumbers.length - 1]}`
); // First item of array is 1 and middle is 3 and last itme is 5

//5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, true, "Sanket", null, undefined, NaN];
console.log(mixedDataTypes.length); //6

// 6) Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Coditas",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7) Print the array using console.log()
console.log(itCompanies);

//8) Print the number of companies in the array
console.log(`There are total ${itCompanies.length} company`);

//9) Print the first company, middle and last company
console.log(
  `First company is ${itCompanies[0]} and middle is ${
    itCompanies[Math.floor(itCompanies.length / 2)]
  } and last itme is ${itCompanies[itCompanies.length - 1]}`
);
//10) Print out each company
for (let index = 0; index < itCompanies.length; index++) {
  console.log(itCompanies[index]);
}
console.log("\n");

//11) Change each company name to uppercase one by one and print them out
for (let index = 0; index < itCompanies.length; index++) {
  console.log(itCompanies[index].toUpperCase());
}
console.log("\n");

//12) Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let bigCompanyNames = itCompanies.toString();
console.log(bigCompanyNames + " are big IT companies");

//13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes("Coditas")
  ? console.log("Company Found")
  : console.log("Company is not found");

//14) Filter out companies which have more than one 'o' without the filter method
itCompanies.includes("o") || itCompanies.includes("oo")
  ? console.log(itCompanies)
  : console.log("Not Found");

//15) Sort the array using sort() method
console.log(itCompanies.sort());

//16) Sort the array by country name length without sort;
console.log(
  itCompanies.sort(function (a, b) {
    return a.length - b.length;
  })
);

//17) Reverse the array using reverse() method
// console.log(itCompanies.reverse());   //['Oracle','Microsoft','IBM','Google','Coditas','Apple','Amazon']

//18) Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3)); //[ 'Amazon', 'Apple', 'Coditas' ]

//19) Slice out the last 3 companies from the array
console.log("\n");
console.log(itCompanies.slice(-3)); //[ 'IBM', 'Microsoft', 'Oracle' ]

//20) Slice out the middle IT company or companies from the array
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); //Google

//21) Remove the first IT company from the array
console.log(itCompanies.shift()); //Amazon

//22) Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1)); //['IBM']

//23) Remove the last IT company from the array
console.log(itCompanies.pop()); //Oracle

//24) Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length)); //[ 'Apple', 'Coditas', 'Google', 'IBM', 'Microsoft' ]
console.log(itCompanies); // []

// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango";

console.log(text.split(" ").length); //14

// 25. In the following shopping cart add, remove, edit items

// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
let shoppingItemName = "Rasmalai";
for (let index = 0; index < shoppingCart.length; index++) {
  if (shoppingCart[index].toLowerCase() === shoppingItemName.toLowerCase()) {
    console.log("The item is in cart");
  } else {
    shoppingCart.unshift(shoppingItemName);
    break;
  }
  console.log(shoppingCart); //[ 'Rasmalai','Milk', 'Coffee', 'Tea', 'Honey' ]
}

// add Gulabjamun at the end of you shopping cart if it has not been already added

let shoppingItem = "Gulabjamun";
for (let index = 0; index < shoppingCart.length; index++) {
  if (shoppingCart[index].toLowerCase() === shoppingItem) {
    console.log("The item is in cart");
  } else {
    shoppingCart.push(shoppingItem);
    break;
  }
}
console.log(shoppingCart); //[ 'Rasmalai', 'Milk', 'Coffee', 'Tea', 'Honey', 'Gulabjamun' ]

// remove 'Honey' if you are allergic to honey
let indexOfAllergicItem = 0;
for (let indexOfItem = 0; indexOfItem < shoppingCart.length; indexOfItem++) {
  if (shoppingCart[indexOfItem].toLowerCase().includes("Honey".toLowerCase())) {
    indexOfAllergicItem = indexOfItem;
    shoppingCart.splice(indexOfAllergicItem, 1);
  }
}
console.log(shoppingCart); //[ 'Rasmalai', 'Milk', 'Coffee', 'Tea', 'Gulabjamun' ]

// modify Tea to 'Green Tea'
console.log((shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"));
console.log(shoppingCart);

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'.
// If it does not exist add to the countries list.

const countriesName = ["india", "pak", "Nepal"];
if (countriesName.includes("india")) console.log("India".toUpperCase());
else console.log(countriesName.unshift("India"));

// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechsArray = ["Sass", "Pass", "Iass"];
if (webTechsArray.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  console.log(webTechsArray);
}

// 28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd + backEnd;

console.log(fullStack);

// 30. Find the middle countries in the countries array.

let middleNameOfCountry;
const middleIndexOfArray = Math.floor(countriesName.length / 2);
if (!(countriesName.length % 2)) {
  middleNameOfCountry = [countriesName[middleIndexOfArray - 1], countriesName[middleIndexOfArray]];
} else {
  middleNameOfCountry = [countriesName[middleIndexOfArray]];
}
console.log(middleNameOfCountry);
//31. Divide the countries array into two equal arrays if it is even. If countries array is not even ,
//  one more country for the first half

let firstHalfArray;
let secondHalfArray;
if (!(countriesName.length % 2)) {
  firstHalfArray = countriesName.slice(0, middleIndexOfArray);
  secondHalfArray = countriesName.slice(middleIndexOfArray);
} else {
  firstHalfArray = countriesName.slice(0, middleIndexOfArray + 1);
  secondHalfArray = countriesName.slice(middleIndexOfArray + 1);
}
console.log(firstHalfArray);
console.log(secondHalfArray);

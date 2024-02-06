// 1) If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18
// console feedback stating to wait for the number of years he needs to turn 18.

const userAge = 21;

// you can change the userAge it will work according to that, for now it is grater than 18

if (userAge >= 18) {
  console.log("You are allowed to Marry");
} else {
  console.log(`You have to wait for the next ${18 - userAge} years to turn 18.
    `);
}

// 2) Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
// Enter your age: 30
// You are 5 years older than me.

const yourAge = 30;
const myAge = 21;

if (myAge < yourAge) {
  console.log(`You are ${yourAge - myAge} years older than me`);
} else if (myAge > yourAge) {
  console.log(`i'm ${myAge - yourAge} years older than you`);
} else {
  console.log("yourAge and myAge are same brother...!");
}

// 3) If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.

// by IF_ELSE
// Q2 variable are use over here for this question

if (myAge > yourAge) {
  console.log("YourAge is greater than myAge");
} else {
  console.log("MyAge is less than youAge...!");
}

// By Ternary
myAge > yourAge
  ? console.log("YourAge is greater than myAge")
  : console.log("MyAge is less than youAge...!");

// 4. Check, if a number is even or not.

const numberToCheck = 16;

if (numberToCheck % 2 == 0) {
  console.log(`${numberToCheck} is even number`);
} else {
  console.log(`${numberToCheck} is odd number`);
}

// 5) Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const scoresOfSubjects = Math.round(49.5);

// You can do without using math.round. only when u don't have float value as scores, but i have so i used it

if (scoresOfSubjects >= 0 && scoresOfSubjects <= 49) {
  console.log(" F Grade...");
} else if (scoresOfSubjects >= 50 && scoresOfSubjects <= 59) {
  console.log(" D Grade...");
} else if (scoresOfSubjects >= 60 && scoresOfSubjects <= 69) {
  console.log(" C Grade...");
} else if (scoresOfSubjects >= 70 && scoresOfSubjects <= 89) {
  console.log(" B Grade...");
} else if ((scoresOfSubjects >= 90) & (scoresOfSubjects <= 100)) {
  console.log(" A Grade...");
} else {
  console.log(" Wrong Input Sorry...");
}

// 6) Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer

const monthToCheckForSeason = "November";

if (
  monthToCheckForSeason == "September" ||
  monthToCheckForSeason == "October" ||
  monthToCheckForSeason == "November"
) {
  console.log("Rainy Season...!");
} else if (
  monthToCheckForSeason == "December" ||
  monthToCheckForSeason == "January" ||
  monthToCheckForSeason == "February"
) {
  console.log("Winter Season...!");
} else if (
  monthToCheckForSeason == "April" ||
  monthToCheckForSeason == "May" ||
  monthToCheckForSeason == "July" ||
  monthToCheckForSeason == "August"
) {
  console.log("Summer Season...!");
} else if (monthToCheckForSeason == "March") {
  console.log("Spring Season...!");
} else {
  console.log("Wrong Input......!!!!");
}

// 7. Check if a day is weekend day or a working day. Your script will take day as an input

const day = "Saturday";

if (day == "Sunday" || day == "Saturday") {
  console.log("WeekEnd Days");
} else {
  console.log("Working Days");
}

// 8. Write a program which tells the number of days in a month.

const chosenMonth = "February";
const selectedMonth = chosenMonth.toLocaleLowerCase();

if (selectedMonth == "february") {
  console.log(`${chosenMonth} have 29 days in year of 2024`);
} else if (
  selectedMonth == "january" ||
  selectedMonth == "march" ||
  selectedMonth == "may" ||
  selectedMonth == "july" ||
  selectedMonth == "august" ||
  selectedMonth == "october" ||
  selectedMonth == "december"
) {
  console.log(`${chosenMonth} have 31 days in year of 2024`);
} else {
  console.log(`${chosenMonth} have 30 days in year of 2024`);
}

// 9) Write a program to check whether the year is leap year or not.

const inputYear = 2023;

if ((inputYear % 4 == 0 && inputYear % 100 != 0) || inputYear % 400 == 0) {
  console.log(`${inputYear} is Leap Year..!`);
} else {
  console.log(`${inputYear} not Leap Year`);
}

// 10. Write a JavaScript ternary expression that checks the following
//  conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.

// my rating of js of first week
const myRatingInJs = 6;

myRatingInJs >= 7
  ? myRatingInJs <= 10 && myRatingInJs >= 9
    ? console.log("A")
    : console.log("B")
  : myRatingInJs >= 4 && myRatingInJs <= 6
  ? console.log("C")
  : console.log("D");

//   11. What will be the result of the following nested ternary expression:

  let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
  console.log(result);

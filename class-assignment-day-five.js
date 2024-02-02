//Declare a variable and assign a value 'Easy JavaScript Assignments'.

const stringVariable = 'Easy JavaScript Assignments';

//Print the length of the string.
console.log(stringVariable.length);  //27

//Change all the string characters to capital letters using toUpperCase() method
console.log(stringVariable.toUpperCase()); //EASY JAVASCRIPT ASSIGNMENTS

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(stringVariable.toLowerCase()) //easy javascript assignments

//Slice out the first word of the string using substr() and substring() method
console.log(stringVariable.substring(0,4)) //Easy
console.log(stringVariable.substr(0,4)) //Easy

//Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(stringVariable.slice(0,27)) //Easy JavaScript Assignments

//Check if the string contains a word Script using includes() method
console.log(stringVariable.includes("Script"))  //true

//Split the string into an array using split() method
console.log(stringVariable.split(''))  

/*
[
  'E', 'a', 's', 'y', ' ', 'J',
  'a', 'v', 'a', 'S', 'c', 'r',
  'i', 'p', 't', ' ', 'A', 's',
  's', 'i', 'g', 'n', 'm', 'e',
  'n', 't', 's'
]
 */

//Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(stringVariable.split(" ")) //[ 'Easy', 'JavaScript', 'Assignments' ]


//'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const stringVariableBatchThree = 'ELTP, BATCH, THREE';
console.log(stringVariableBatchThree.split(",")) //[ 'ELTP', ' BATCH', ' THREE' ]

//Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(stringVariable.replace('JavaScript','Python')) //Easy Python Assignments

//What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(stringVariable.charAt(20)) //g

//What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(stringVariable.charCodeAt('J')) //69

//Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignmen
console.log(stringVariable.indexOf('a')) //1

//Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(stringVariable.lastIndexOf('a')) //8




const checkString = 'Easy JavaScript Assignments, Easy Easy';

//Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(checkString.indexOf('Easy')) //0

//Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(checkString.lastIndexOf('Easy')) //34

//Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(checkString.search('Easy'))  //0



const stringSubjectName ='       Easy JavaScript Assignments, Easy Easy             '

//Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy        
const trimedString = stringSubjectName.trim();
console.log(trimedString) // Easy JavaScript Assignments, Easy Easy

//Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(trimedString.startsWith('Easy'))  //true

//Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(trimedString.endsWith('Easy'))  //true

//Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(stringVariable.match(/a/g).length);

//Use concat() and merge 'Easy' and 'JavaScript' to a single string.
const easyValueString = 'Easy';
//Use concat() and merge 'Easy' and 'JavaScript' to a single string
const concatedString = easyValueString.concat("JavaScript");
console.log(concatedString)  //EasyJavaScript

//Use repeat() method to print 'Easy JavaScript' 3 times.
console.log(concatedString.repeat(3))  //Easy JavaScriptEasy JavaScriptEasy JavaScript

//'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
const stringSubjectThought = 'Javascript is Easy, too Easy, too Easy, Easy to learn';

let objectOfStringSubject = stringSubjectThought.split(" ")
count= 0;
for (let index = 0; index < objectOfStringSubject.length; index++) {
    if (objectOfStringSubject[index]=='Easy' || objectOfStringSubject[index]=='Easy,') {
        count++;
    }
    
} 
console.log(`The Count of Easy is :${count}`); // The Count of Easy is :4


//Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log('Javascript is Easy, too Easy, too Easy, Easy to learn'.match(/Easy/g).length) //4




//28. Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'



const problemString = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'


let numbers = problemString.match(/\d+/g);
let totalIncome = [];
let totalsum= 0;
for (let index = 0; index < numbers.length; index++) {
    totalIncome[index] =+numbers[index]
    totalsum+=totalIncome[index]
    
}
console.log(`The total income is ${totalsum}`)  //The total income is 80000

// Q1, Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// const stringNumber = '10';
// console.log(`Now here we compare '10'===10 which is : ${typeof(firstNumber)==10}`);  // FALSE

// const stringNumbertoInteger = Number(stringNumber).toFixed();
// console.log(`Now here we compare 10===10 which is : ${typeof(result)==typeof(firstNumber)}`);  // TRUE


// Q2 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// const parseFloatNumber =parseFloat('9.8');
// console.log(`is parseFloat('9.8') is equal to 10 : ${parseFloatNumber==10}`);

// const convertedPareFloatNumber = Math.ceil(parseFloatNumber);
// console.log(`is parseFloat('9.8') is equal to 10 : ${convertedPareFloatNumber == 10}`)


// Q3, Generate a random number between 0 and 100 inclusively.

// console.log(Math.floor(Math.random()*101))

/*

OUTPUT : 

PS C:\Users\Coditas\Desktop\JAVASCRIPT> node .\class-assignment-day-four.js
37
PS C:\Users\Coditas\Desktop\JAVASCRIPT> node .\class-assignment-day-four.js
57
PS C:\Users\Coditas\Desktop\JAVASCRIPT> node .\class-assignment-day-four.js
74
PS C:\Users\Coditas\Desktop\JAVASCRIPT> node .\class-assignment-day-four.js
37
PS C:\Users\Coditas\Desktop\JAVASCRIPT> node .\class-assignment-day-four.js
100a random number between 0 and 100 inclusively.
 */


// Q4, Generate a random number between 50 and 100 inclusively.

// console.log(Math.floor(Math.random()* (100-50) + 50))

// Q5, Use console.log() and escape characters to print the following pattern.

// for (let index = 1; index <=5; index++) {  
//     let indexCopy = index;
//     let indexMultipliction=index*indexCopy;
//     let multiplationOfIndexMultipliction =index*indexMultipliction;
//     console.log(index,1,index,indexMultipliction,multiplationOfIndexMultipliction);    
//     indexCopy++;    
// }

/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/



//Q6, Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const base = 8;
// const height = 10;

// console.log(`area of trainagle is : ${0.5*base*height}`) // 40

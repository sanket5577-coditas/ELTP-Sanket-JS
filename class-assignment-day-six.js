// Check if type of '70' is equal to 70
console.log(typeof('70')===typeof(70)) //false

// Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8')===parseInt(9)) //false

// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.
console.log(NaN===NaN) // false
console.log([]===[]) // false
console.log(0===true) // false
console.log(undefined===false) //false
console.log(false) //false
console.log(null===false) //false


// Write five JavaScript statement which provide truthy  value.
console.log(true) //true
console.log(5===5) //true
console.log(1>0) //true
console.log(true && true) //true
console.log(true || true) //true


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 5 > 4 // true
console.log(5 > 4)  // true

// 4 >= 3  // true
console.log(4 >= 3)    //true

// 4 < 3  false
console.log(4 < 3)  //false

// 4 <= 3  false
console.log(4<=3)  //false

// 5 == 5   true
console.log(5 == 5 )  //true
// 9 === 9  true
console.log(9 === 9)

// 9 == '9'  true
console.log(9 == '9') //true

// 8 === '8' true
console.log(8 === '8') //false

// 4 != 4 //true
console.log(4 != 4) //false

// 4 !== 4 //false
console.log(4 !== 4) //false

// 4 != '4' false
console.log(4 != '4') //false

// 4 != '4'  false
console.log(4 != '4')  //false

// 4 !== '4' true
console.log(4 !== '4') //true


// Find the length of python and jargon and make a falsy comparison statement.

const lengthOfPython = 'python'.length;  // length of python
const lengthOfJargon = 'jargon'.length;  // length of jargon

console.log(lengthOfJargon != lengthOfPython)   //false

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()


// 4 > 3 && 10 < 12  true
console.log(4 > 3 && 10 < 12)   //true

// 4 > 3 && 10 > 12 //false
console.log(4 > 3 && 10 > 12)   ///false

// 4 > 3 || 10 < 12   true
console.log(4 > 3 || 10 < 12)  //true

// 4 > 3 || 10 > 12  true
console.log(4 > 3 || 10 > 12 )

// !(4 > 3)  false
console.log(!(4 > 3))  //false

// !(4 < 3)  true
console.log(!(4 < 3))  //true

// !(false)   true
console.log(!(false))  //true

// !(4 > 3 && 10 < 12)  false
console.log(!(4 > 3 && 10 < 12))  //false

// !(4 > 3 && 10 > 12) true
console.log(!(4 > 3 && 10 > 12)) //true

// !(4 === '4')  false
console.log(!(4 === '4'))   //true

// There is no 'on' in both dragon and python
console.log('dargon'.includes('on')=='python'.includes('on'))  //true


// Create an empty object called cow
const cow = {};

// Print the the cow object on the console
console.log(cow); // {}

// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow.name = "Sher";
cow.legs = 4;
cow.color = "Black";
cow.age = 50;
cow.sound = function () {
  return "maaah maaah";
};

// Get name, legs, color, age and sound value from the cow object
for (const [key, values] of Object.entries(cow)) {
  typeof values === "function" ? console.log(cow.sound()) : console.log(values);
}

// Set new properties the cow object: breed, getCowInfo()
cow.breed = "Desi";
cow.getCowInfo = function () {
  return 0;
};
console.log(cow.getCowInfo());

// Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxSkillCount = -Infinity;
let skilledPerson = "";
for (let user in users) {
  let lengthOfMaxSkillCountPerson = users[user].skills.length;
  if (lengthOfMaxSkillCountPerson > maxSkillCount) {
    maxSkillCount = lengthOfMaxSkillCountPerson;
    skilledPerson = user;
  }
}
console.log(`The Most Skilled Person is : ${skilledPerson} `);

// Count logged in users, count users having greater than equal to 30 points from the following object.
let countOfLoggedInUser = 0;
let usersWith30PointsOrMore = 0;
for (let user in users) {
  if (users[user].isLoggedIn === true) {
    countOfLoggedInUser++;
  }
  if (users[user].points > 30) {
    usersWith30PointsOrMore++;
  }
}
console.log(`Ther are ${countOfLoggedInUser} user loggedIn`);
console.log(
  `Ther are ${usersWith30PointsOrMore} User who have greater than 30 points`
);

// Find people who are MERN stack developer from the users object
// const mernStack = ["MongoDB", "Express.js", "React", "Node.js"];
// console.log("Hello")
// for (let index = 0; index < mernStack.length; index++) {
//   if(mernStack[index]===users.skills[index]){
//     console.log(users.skills)
//   }
  
// }

// Set your name in the users object without modifying the original users object
const myInformation = {
  name: "Sanket",
  email: "sanket.email@example.com",
  skills: ["Java", "Python"],
  age: 21,
  isLoggedIn: true,
  points: 34,
};

const updatedUsers = { ...users, Sanket: myInformation };

console.log(updatedUsers);

// Get all keys or properties of users object
console.log(Object.keys(users));
// Get all the values of users object
console.log(Object.values(users));

// Use the countries object to print a country name, capital, populations and languages.

const countries = {
  USA: {
    capital: "Washington, D.C.",
    population: 331002651,
    languages: ["English"],
  },
  India: {
    capital: "New Delhi",
    population: 1380004385,
    languages: ["Hindi", "English"],
  },
  China: {
    capital: "Beijing",
    population: 1444216107,
    languages: ["Mandarin"],
  },
};

console.log(countries);

// Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "",
  lastName: "",
  income: "",
  totalIncome: function () {},
  totalExpense: function () {},
  accountInfo: function () {},
  addIncome: function () {},
  addExpense: function () {},
  accountBalance: function () {},
};

// Imagine you are getting the below users array of objects.
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties.
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// Create a function called rateProduct which rates the product
let newRating = 3;
products.rateProduct = function (newRating) {
  if(newRating>=0){
    products.ratings.rate.push(newRating)
  }
};
console.log(products.rateProduct());
// Create a function called averageRating which calculate the average rating of a product
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// const countriesAPI = 'https://restcountries.com/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
// Print out all the cat names in to catNames variable.
// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

const countriesAPI = fetch("https://restcountries.com/v2/all");

const countriesAPIData = new Promise((resolve, reject) => {
  if (countriesAPI) {
    resolve(countriesAPI);
  } else {
    reject("Something Went Wrong");
  }
});

// 1) Read the countries API using fetch and print the name of country, capital, languages, population and area.

countriesAPIData
  .then((resolved) => {
    return resolved.json();
  })
  // .then((countriesData) => {
  //   console.log("Data is Fetched");
  //   for (const { name, capital, languages, population, area } of countriesData) {
  //     console.log(`Name ${name} and capital is ${capital} ,languages are :${languages} and population is :${population},are is :${area}`);

  //   }
  // })
  .then((countriesAPI)=>{
    let maxPopulation=0
    for (const {name,population} of countriesAPI) {
        // console.log(name);  
        sanke = Math.max(population,maxPopulation)
        // console.log(maxPopulation);
         
        
        
    }
  })
  .catch((rejected) => {
    console.log("Reject", rejected);
  });


// const catsAPI = fetch("https://api.thecatapi.com/v1/breeds");
// const catsAPIData = new Promise((resolve, reject) => {
//   if (catsAPI) {
//     resolve(catsAPI);
//   } else {
//     reject("Something Went Wrong");
//   }
// });

// //2) Print out all the cat names in to catNames variable.

// catsAPIData
//   .then((resolved) => {
//     return resolved.json();
//   })
//   //   .then((catsAPI) => {
//   //     const catNames = [];
//   //     for (const { name } of catsAPI) {
//   //       catNames.push(name);
//   //     }
//   //     console.log(catNames);
//   //   })
//   .then((catsAPI) => {
//     for (const { weight,name } of catsAPI) {
//       const { metric } = weight;

//       const firstNumber = parseInt(metric.split(" ")[0]);
//       const secondNumber = parseInt(metric.split("-")[1]);
//       console.log(`Average weight of "${name}" is :`, (firstNumber + secondNumber) / 2);
//     }
//   })
//   .catch((rejected) => {
//     console.log("Reject", rejected);
//   });

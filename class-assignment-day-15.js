const marriagePromise = new Promise((resolve, reject) => {
  const isPromisedToMarry = true;
  if (isPromisedToMarry) {
    resolve("He has promised to get married with her");
  } else {
    reject("He has not promised to get married");
  }
});

marriagePromise;
// .then((resolvedMessage) => console.log("Resolved :", resolvedMessage))
// .catch((rejectedMessage) => {
//   console.log("Rejected:", rejectedMessage);
// })
// .then(() => {console.log("Kya Bolu Mai Aab...!")});

const ppoPromise = new Promise((resolve, reject) => {
  const isPpoFixed = false;
  if (isPpoFixed) {
    resolve("I will get PPO");
  } else {
    reject("PPO canceled! Uffff");
  }
});

ppoPromise;
//   .then((resolvedMessage) => console.log("Accepted:", resolvedMessage))
//   .catch((rejectedMessage) => console.log("Rejected:", rejectedMessage))
//   .finally(() => console.log("Perform well, your performance will decide"));

const ratingPromiseOfJs = new Promise((resolve, reject) => {
  const sirPromisedRating = true;
  if (sirPromisedRating) {
    resolve("Thank u sir");
  } else {
    reject("I'll do better next time");
  }
});

ratingPromiseOfJs;
// .then((ResponseMessage) => {
//   console.log("Response:", ResponseMessage);
// })
// .catch((rejectedMessage) => {
//   console.log("reject:", rejectedMessage);
// });

const myPromise = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});

myPromise;
// .then((data) => {
//   console.log("Step 1:", data);
// })
// .catch((error) => {
//   console.error("Error:", error);
// });
const promisesArray = [
  marriagePromise,
  ppoPromise,
  ratingPromiseOfJs,
  myPromise,
];

Promise.all(promisesArray)
  .then(() => {
    console.log("All promises resolved successfully.");
  })
  .catch(() => {
    console.log("Some promise are rejected!");
  });


Promise.allSettled(promisesArray).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(result);
    }else{
      console.log(result);
    }
  });
});

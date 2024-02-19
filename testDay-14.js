let plus = "";
let line = 5;
for (let counterOfRow = 1; counterOfRow <= line; counterOfRow++) {
  for (let index = 0; index < line-counterOfRow; index++) {
   plus+=" "
   console.log(plus);
  }
  plus+="+"
  console.log("\n");
}
// console.log(plus);

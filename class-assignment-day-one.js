//  var,let value  can change but const can't..
let Name = "sanket";  
console.log(`original name is :${Name}`);
Name = "soham";
console.log(`New name is :${Name}`);

var FullName = "Sanket Chaudhary";
console.log(`original FullName is : ${FullName}`);
FullName ="Sanket Kumar";
console.log(`New FullName is : ${FullName}`);

const Age =21;
console.log(Age);
Age =22;
console.log(Age);

// let is block scope while const is not block scope
function check(){
    let check =true;
    console.log(check);
    console.log(FullName);
}
console.log(check);


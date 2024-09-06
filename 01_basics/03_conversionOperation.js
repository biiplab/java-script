// let score = 33
// let score = "33"
// let score = "33a"
// let score = null
// let score = undefined
// let score = true
let score = "Biplab"

console.log(typeof score);
console.log(typeof (score));  // (method)


let valueInNumber = Number(score)  // guarantee that it will be a Number not String
console.log(typeof valueInNumber);
console.log(valueInNumber);


/* 
  Notes

  "33" => 33
  "33abc" =>Nan
  "true" =>1
  "false" =>0
*/
const name = "Biplab"
const repoCount = 20

// console.log(name + repoCount + "value");
console.log( `Hello my name is ${name} and my repo count is ${repoCount}` ); // string interpolation (use backtick)



const myName = new String ("biplab-hc")
console.table(myName)
// console.log(myName)

// console.log(myName[3])
// console.log(myName.__proto__);


// console.log(myName.length);
// console.log(myName.toUpperCase());  // toUppercase is function
console.log(myName.charAt(2));
console.log(myName.indexOf('l'));


let newString = myName.substring(0,6)
console.log(newString);


const backwardString = myName.slice(-8,4)
console.log(backwardString);


const newStringOne = "    biplab    "
console.log(newStringOne);
console.log(newStringOne.trim());   // trim will remove the space from the string


const url = "https://biplab.com/biplab%20roy"
console.log(url.replace('%20', '-'));   // %20 will replace with '-'

console.log(url.includes('biplab'));  // if biplab is present in url than True will come otherwise False
console.log(url.includes('mukesh'));



console.log(myName.split('-'));   // String will convert into an Array

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "biplab",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap ( Non- Primitive)
// Stack --- copy of a variable (not original val)
// heap --- reference ( Original value will change)




// Stack example that original does not change
let myName = "biplab"

let anotherName = myName
anotherName = "biplab roy"


// console.log(myName);
// console.log(anotherName);




// Heap example the Original value changes

let userOne = {
    email : "userOne@gmail.com",
    upi : "user@oksbi"
}
let userTwo = userOne

userTwo.email = "userTwo@gmail.com"
// userTwo = {
//     email : "newemail@gmail.com",
//     upi : "new@okasis"
// }

console.log(userOne.email);      // Original value changed
console.log(userTwo.email);   



// Stack -- we get the Copy , so original value will not change 
// Heap -- we get the Original value, so original value will change
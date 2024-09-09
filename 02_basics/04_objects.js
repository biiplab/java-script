// const tinderUser = new Object()    // Singleton Object

const tinderUser = {}    // non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Biplab"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
  email: "demo@gmail.com",
  fullname: {
    usersfullname: {
      firstname: "Biplab",
      lastname: "Roy",
    }
  }
}
// console.log(regularUser.fullname.usersfullname.firstname);



// Merge/Combine :- Object

const obj1 = {1:"Biplab", 2:"Roy"}          // 1 key : "biplab" value
const obj2 = {3:"Toney", 4:"Stark"}

// const obj3 = { obj1, obj2}   // problem :- object under object
// const obj3 = Object.assign({}, obj1, obj2)    // combile multiple objects

// Spread operator
const obj3 = {...obj1, ...obj2}   // easy process to Combine multiple objects
// console.log(obj3);



// Use case:-  When values comes from database then
const users = [
  {
    id: 1,
    email: "firstemail@gmail.com"
  },
  {
    id: 2,
    email: "secondemail@gmail.com"
  },
  {
    id: 3,
    email: "thirdemail@gmail.com"
  }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // in output Keys will come in array []
console.log(Object.values(tinderUser));  // in output values will come in array []
console.log(Object.entries(tinderUser));  // array within array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // 

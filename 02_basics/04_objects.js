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



const obj1 = {1:"Biplab", 2:"Roy"}
const obj2 = {1:"Toney", 2:"Stark"}

// const obj3 = { obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

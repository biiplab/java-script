const user = {
    username: "Biplab",
    price: 999,

    welcomeMessage: function(){
      console.log(`${ this.username} welcome to the website`);
      console.log(this);
      
      
    }

}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function one(){
//   let username = "Biplab"
//   console.log(this.username);
  
// }
// one()



// const one = function (){
//   let username = "Biplab"
//   console.log(this.username);
// }

const one =  () => {
  let username = "Biplab"
  console.log(this);
}

// one()


// ++++++++++++ Arrow Function ++++++++++++++

// () => {}

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }
// console.log(addTwo(5,6))



//
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Biplab"}) // for return objects

console.log(addTwo(6,6))


const myArray = [ 2, 5, 4 ,5, 7]




// myArray.forEach(() => ())
// myArray.forEach(() => {})
// myArray.forEach(function())
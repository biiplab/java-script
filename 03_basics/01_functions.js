
function sayMyName(){
  console.log("B");
  console.log("I");
  console.log("P");
  console.log("L");
  console.log("A");
  console.log("B");
  
}

// sayMyName()


// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
  
// }

// // addTwoNumbers(50,40)
// const result = addTwoNumbers(50,40)
// console.log(result);   // output  Undefined.......coz fuction is not returning



function addTwoNumbers(number1, number2){

  // let result = number1 + number2
  // return result

  return number1 + number2
  
}

// addTwoNumbers(50,40)
const result = addTwoNumbers(50,40)
// console.log( "result: ", result);



function loginUserMessage(username){
  // if (username === undefined){
  if (!username){
      console.log("Please enter a username")
      return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("Biplab"))
console.log(loginUserMessage())


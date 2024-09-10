
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
// console.log(loginUserMessage())




// use case  Shopping cart
function calculateCartPrice(...num1){
      return num1
}
// console.log(calculateCartPrice(200, 300, 400));   // all the value wil come in a array so we can create loop


const user = {
  username: "Biplab",
  price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
  username: "Toney",
  price: 599
})




const myNewArray = [ 300, 400, 500, 600]

function returnSecondValue(getArray){
  return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 100, 400]));

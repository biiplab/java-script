// if

if (condition = true){
    // code will execute
}

if (condition = false){
    // code will Not execute
}

//---------------------------------------

/* compare operator 
    <, >, <=, >=, ==, !=, ===, !==
*/

const isUserLoggedIn = true
const temperature = 51

if (temperature < 50){
    // console.log(`Less than 50`);
    
}else{

  // console.log(`Tempereture is greater than 50`)
}



const score = 200
if (score > 100){
  const power = "fly"
  // console.log(`User power ${power}`);
  
}



const balance = 1000
// if (balance > 500) console.log("test");


// if (balance < 500){
//   console.log("Less than 500");
// } else if ( balance < 750){
//   console.log("less than 750");
  
// }else if (balance < 900){
//   console.log("Less than 900");

// }else {
//   console.log("Less then 1200");
  
// }



const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard){
  console.log("Allow to buy course"); 
}

if (loggedInFromGoogle || loggedInFromEmail){
  console.log("User logged in");
}


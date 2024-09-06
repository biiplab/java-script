const accountId = 54125
let accountEmail = "demo@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;


// accountId = 2  // not allowed

accountEmail = "new@gmail.com"
accountPassword = "8524"
accountCity = "kolkata"

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// using console.table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



/* Note
Prefer not to use var
because of issue in block scope and functional scope
*/
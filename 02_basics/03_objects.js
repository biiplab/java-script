// 2 ways to declare objects
      // Literal notation  :- not singleton
      // Constructor notation :- songleton    object.create

//  Object Literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Biplab",
  "full name": "Biplab Roy",
[mySym]: "myKey1",  
  age: 20,
  location: "India",
  email: "demo@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"]
}

// console.log(jsUser.name);   // to access value from object
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.full name);    // Cant acess like that
// console.log(jsUser["full name"]);  // now can access

// console.log(jsUser[mySym]);



jsUser.email = "changed.email@gmail.com"  // change the value 
// console.log(jsUser.email);

// Object.freeze(jsUser)  // Lock object... now change will not done

// jsUser.email = "another@gmail.com"  

// console.log(jsUser);




jsUser.greeting = function(){
  console.log("Hello js user!!");
}

jsUser.greetingTwo = function(){
  console.log(`Hello js user!! ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




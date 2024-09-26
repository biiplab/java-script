
// Creating a new Promise object
const promiseOne = new Promise(function(resolve, reject) {
  // Simulating an asynchronous task with setTimeout
  setTimeout(function() {
    console.log('Async task is complete'); // Log when the async task is complete
    resolve(); // Resolve the promise indicating the task is done
  }, 1000); // Task will complete after 1 second (1000 ms)
});

// Consuming the promise using the 'then' method
promiseOne.then(function() {
  console.log('Promise consumed'); // Log when the promise is successfully resolved
});


new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Async tast 2');
    resolve()
  },1000)

}).then(function(){
  console.log('Async 2 resolved');
  
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Biplab", email: "demo@gmail.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user);
  
})





const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true; // Simulates whether there's an error or not
    if (!error){
      resolve({username: "Biplab", password: "1234"}); // If no error, the promise is successful and gives back data
    } else {
      reject('ERROR: Something went wrong'); // If there's an error, it rejects the promise with an error message
    }
  }, 1000); // Waits 1 second before checking for error
});

promiseFour
.then((user) => {
  console.log(user); // If the promise is resolved, it prints the user object
  return user.username; // Passes the username to the next .then()
})
.then((username) => {
  console.log(username); // Prints the username ("Biplab")
})
.catch(function(error){
  console.log(error); // If the promise is rejected, it prints the error message
})
.finally(() => console.log("The promise is either resolved or rejected"));



const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if (!error){
      resolve({username: "Roney", password: "123456"})
    }else{
      reject('ERROR: Something went wrong')
    }
  },1000)
})

async function consumePromiseFive(){
  try {
    const response = await promiseFive
  console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()
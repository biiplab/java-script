var c = 300               // Global Scope
let a = 200


// {} => scope, when comes with functions/ if-else......scope of that function

if (true){
  let a = 10
  const b = 20                // block Scope
  var c = 30
  
  // console.log("Inner: ", a);
  
}


// console.log(a);  // output:- a is not defined.....a is under the scope
// console.log(b);   // output:- b is not defined.....b is under the scope
// console.log(c);    // output:- 30...........comes out from the scope ## this is the problem



// Nasted Scope
function one(){
  const username = "Biplab"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);
  
  two()
}

// one()



// if
if (true){
  const username = "Biplab"
  if (username === "Biplab"){
    const website = " youtube"
    // console.log(username + website);
  }
  // console.log(website);

}

// console.log(username);



//+++++++++++++++++ interesting +++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
  return num + 2
}

// Cannot access 'addTwo' before initialization
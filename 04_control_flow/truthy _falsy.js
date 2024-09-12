const userEmail = []

if (userEmail){
  console.log("Got user email");
} else{
  console.log("Dont have user email"); 
}


// falsy value
  // false, 0, -0, BigInt 0n, "", nul, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){},

if (userEmail.length === 0){
    console.log("Array is empty");
}

const enptyObj = {}
if (Object.keys(enptyObj).length === 0){
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null, undefined
 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 80
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

//Immediately Invoked Function Expression (IIFE)

// function one (){
//   console.log(`DB Connected`); 
// }
// one()


(function one (){
  // named IIFE
  console.log(`DB Connected`); 
}) ();          // to end the function  ;  is important


( (name) => {
  // unnamed IIFE
  console.log(`Hii this is ${name}`);
  
} )('Biplab')
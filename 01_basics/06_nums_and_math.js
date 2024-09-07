const score = 400
// console.log(score);

const balance = new Number(100)  // type will be Number 100%%
// console.log(balance);



// console.log(balance.toString()); // now this become String, now we can use string prop
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // must use in e-commarce website..   out put come like this  100.00


const otheNumber = 36.5445
// console.log(otheNumber.toPrecision(3)); // priority before Decimel

const otheNumber1 = 136.5445
// console.log(otheNumber1.toPrecision(3));  // carefull before use



const hundreds = 1000000                               // now it will run as it is
// console.log(hundreds.toLocaleString());             // now it will add ( , ) for bater understanding
// console.log(hundreds.toLocaleString('en-IN'));         // indian standard




// +++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.2));
// console.log(Math.ceil(5.7));
// console.log(Math.min(4, 5, 3));
// console.log(Math.max(4, 5, 3));



// console.log(Math.random());  // 0 and 1 value 
// console.log(Math.random()*10);  // zero will come
// console.log(Math.floor(Math.random()*10)+1);  // now zero will not come
              // Math.floor -- gives the round figure


              
  // Dice type            
const min = 1 
const max =  5

console.log(Math.floor(Math.random() * (max - min + 1)) + min);     
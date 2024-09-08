// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ironman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)    // push new element into an array
// myArr.push(7)
// myArr.pop()   // delete the last value of an array

// myArr.unshift(9)  // add element at begining
// myArr.shift()  //  removes the first element from an array  &  changes the length of the array.
 
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // Original array will not change

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   // range will include  But the portion will get out from original array
console.log("C ", myArr);
console.log(myn2);
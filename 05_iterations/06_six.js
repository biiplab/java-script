// foreach ()
//forEach do not return

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//   console.log(item);
//   return item
// })

// console.log(values);


// filter return

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//   return num > 4
// })

// console.log(newNums);



// const newNum = []
// myNums.forEach( (num) => {
//   if (num > 4) {
//     newNum.push(num)
//   }
// })

// console.log(newNum);



// filter ()
// Real Life Example
const books = [
  {title: "Book One", genre: "Fiction", publish: 2000},
  {title: "Book Two", genre: "Non-Fiction", publish: 2004},
  {title: "Book Three", genre: "Science", publish: 2005},
  {title: "Book Four", genre: "History", publish: 2010},
  {title: "Book Five", genre: "Fiction", publish: 2011},
  {title: "Book Six", genre: "Science", publish: 2015},
  {title: "Book Seven", genre: "Biography", publish: 2017},
  {title: "Book Eight", genre: "Fiction", publish: 2017},
  {title: "Book Nine", genre: "History", publish: 2020},
  {title: "Book Ten", genre: "Fiction", publish: 2024},
];

let userBooks = books.filter ( (bk) => bk.genre === "History" )
console.log(userBooks);

userBooks = books.filter ( (bk) => bk.publish >= 2010 )
console.log(userBooks);

userBooks = books.filter ( (bk) => {
  return bk.publish >= 2015 && bk.genre === "Fiction"
})
console.log(userBooks);



// reduce()
// Real-Life ex ---  Shopping Cart --- list of bills --- add total price



const myNum = [1, 2, 3]

// const myTotal = myNum.reduce ( function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0)


const myTotal = myNum.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal);


const shoppingCart = [
  {
    itemName: "js coourse",
    price: 2000
  },
  {
    itemName: "C++",
    price: 5000
  },
  {
    itemName: "Web Dev",
    price: 3000
  },
  {
    itemName: "DSA",
    price: 10000
  },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);


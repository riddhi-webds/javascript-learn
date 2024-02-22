const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// function method


// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// arrow function using method

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mob dev course",
        price: 5999
    },
    {
        itemName: "dat sci course",
        price: 11999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
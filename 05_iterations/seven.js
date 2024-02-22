// using map method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => { return num + 10})

// const newNums = []
// myNumbers.forEach((num) => {
//     if (num + 10) {
//        newNums.push(num)
//     }
// }) ye mothod b use kr skte he

const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
    // isko chaining method bolte jaha ek sath bahot bar map nd filter ka use kr skte he

console.log(newNums);
// const codding = ["js", "ruby", "cpp", "java"]

// const values = codding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);
// forEach loop value ko return nahi krta he

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//     return num > 4 
// scoope{} open krte he to return keyword likhna jaruri he varna single line me likh skte he
// })

// console.log(newNums);

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);
// ye method b sahi he
// dono method sahi he jo easy rheta he vo use kr skte he

const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book two', genre: 'non- Fiction', publish: 1992, edition: 2008 },
    { title: 'Book three', genre: 'History', publish: 1950, edition: 2010 },
    { title: 'Book four', genre: 'English', publish: 1980, edition: 2014 },
    { title: 'Book five', genre: 'Maths', publish: 1940, edition: 2009 },
    { title: 'Book six', genre: 'Fiction', publish: 1995, edition: 2002 }
];
// let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})
console.log(userBooks);



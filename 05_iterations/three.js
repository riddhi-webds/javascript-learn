// forof loop use for array 

// ["", "", ""]
// [{}, {} , {}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = ["Hello World"]
// // const greetings = ["hello","hey","good","how","great"]
// for (const greet of greetings) {
//     console.log(`Each char is "${greet}"`);
// }

// map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State America")
map.set('FR', "France")
map.set('FR', "France")
// console.log(map);

for (const[key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    game1: "NFS",
    game2: "spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// } forof is not working with object 




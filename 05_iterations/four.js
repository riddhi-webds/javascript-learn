// forin loop use with object 
// forin loop with object 

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "RUby",
    swift: "swift by apple",
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// forin loop with array
 
const programming = ["js", "java", "cpp"]
for (const key in programming) {
    // console.log(`${key} name is ${programming[key]}`);
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State America")
// map.set('FR', "France")
// map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// } map is not working with this type


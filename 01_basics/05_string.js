const name = "riddhi-c"
const repoCount = 50

// console.log(name + repoCount + " value"); not good code

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Riddhi')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anoutherString = gameName.slice(-5,4)
console.log(anoutherString);

const newStringOne = "       riddhi       "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://riddhi.com/riddhi%20hud-"
console.log(url.replace('%20', 'mahi'))
console.log(url.includes('hud'))
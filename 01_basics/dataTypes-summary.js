// primitive

// 7 types : string, Number, boolean, null, undefined, symbol,  BigInt

const scroe = 100
const scoreValue = 100.2

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anoutherId = Symbol('123')
console.log(id === anoutherId);

// const bigNumber = 2347647432n 

// reference (non-primitive)

// Arrays, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "riddhi",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
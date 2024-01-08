// primitive

// 7 types : string, Number, boolean, null, undefined, symbol,  BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anoutherId = Symbol('123')
// console.log(id === anoutherId);

const bigNumber = 2347647432n 

// reference (non-primitive)

// Arrays, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "riddhi",
    age: 24,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof bigNumber);

// score => number
// scoreValue => number
// isLoggedIn => boolean
// outSideTemp => object
// userEmail => undefined
// id => symbol
// anoutherId => symbol
// heros => object
// myObj => object
// myFunction =>function
// bigNumber => bigint





// +++++++++++++++++++

// stack (primitive), heap (non-primitive) memory
// const isUserLogginedIn = true
// const temrature = 41

// if (temrature === 50) {
//     console.log("less than 50");
// } else {

//     console.log("greater than 50")
// };

// <, >, <=, >=, ==, !=, ===, !== 

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user login");
}
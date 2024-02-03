const user = {
    username: "Riddhi",
    price: 999,
    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Jay"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username= "hapani"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "hapani"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hapani"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num1
// }

// const addTwo = (num1, num2) => num1 + num1
const addTwo = (num1, num2) => ({username: "Riddhi"})

console.log(addTwo(3, 4))

// const myArray = [1,2,3,4]
// myArray.forEach()




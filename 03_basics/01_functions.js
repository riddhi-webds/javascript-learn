function sayMyName() {
    console.log("R");
    console.log("i");
    console.log("d");
    console.log("d");
    console.log("h");
    console.log("i");
}

// sayMyName() 

// function addTwoNumbers(number1, number2) {

// console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // // console.log("Riddhi"); 
    // return result
    return number1 + number2

}

const result = addTwoNumbers(4, 5)

// console.log("Result: ", result); 

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Riddhijey"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username: "riddhi",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}

handleObject(user)

const myNewArray = [200, 300, 400]

function returnSecondvalue (getArray){
    return getArray[2]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 600]));
// object literal
const user = {
    username: "Riddhi",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details for database");
        console.log('Username: ${this.username}');
        // console.log(this);

    }
}
console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// --------------------------------------------------

// constructor function
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    console.log(`welcome  ${this.username}`);
    this.greeting = function () {

    }
    return this;
}

const userOne = new User("Riddhi", 12, true);
const userTwo = new User("Hapani", 5, false);
console.log(userOne.constructor);
// console.log(userTwo);


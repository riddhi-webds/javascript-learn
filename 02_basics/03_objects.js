// singleton 

// object literals
// Object.create 

const mySym = Symbol("key1")

const jsUser = {
    name: "Riddhi",
    "full name" : "RItz",
    [mySym]: "mykey1",
    age: 25,
    location: "jaipur",
    email: "riddhi@.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "ritzchat.com"
// Object.freeze(jsUser)
jsUser.email = "ritzmicro.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


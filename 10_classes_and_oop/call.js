function SetUserName (username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUsreName(username, email, password){
    SetUserName.call(this, username)
    this.email= email
    this.password = password
}

const chai = new createUsreName("chai", "riddhi@.com", "123")
console.log(chai);
// promises is un Object
// promises are consume nd create
// promises ke 2 part he (resolve, reject)
// do an async task (database (DB) Calls, crypography, network)
// .then ka relation he resolve ke sath

// promise one
const promiseOne = new Promise(function (resolve, reject) {
    // do an async task (database (DB) Calls, crypography, network)
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    }, 1000)

})

promiseOne.then(function () {
    console.log('promise consumed');
})


// promise two
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})

// promise three
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "Chai", email: 'cha@gmail.com' })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

// promise four
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        // let error = false;
        if (!error) {
            resolve({ userName: 'Riddhi', password: "123" })
        } else {
            reject('Error: Somethingwent wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.userName
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log('the promise is either resolved or rejected'))

// promise five
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        // let error = false;
        if (!error) {
            resolve({ userName: 'Javascript', password: "123" })
        } else {
            reject('Error: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// best trick nd easy tric
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

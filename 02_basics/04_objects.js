// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUSer = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "riddhi",
            lastname: "hapani",
        }
    }
}

// console.log(regularUSer.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    }
]
 users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInst: "Riddhi"
 }

//  course.courseInst 
const {courseInst: instr} = course
console.log(instr);

 

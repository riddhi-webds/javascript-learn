// forEach loop use 

const codding = ["js", "ruby", "cpp", "java"]
// codding.forEach(function (val) {
//     console.log(val);
// }) 
// using  simple callback function with for each loop
 

// codding.forEach ( (item) => {
//     console.log(item);
// } )
// using arrow function with for each loop


// function printMe (item){
//     console.log(item);
// }
// codding.forEach(printMe)
// using also this type method for for eacch loop


// codding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })
// also using this type method


const myCoding = [
    {
        languageName:  "javascript",
        langugaeFile: "js"
    },
    {
        languageName:  "python",
        langugaeFile: "py"
    },
    {
        languageName:  "rubyt",
        langugaeFile: "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
// using object in array method with forEach loop
// array ke andar object ki property ki value keise pta kare vo method he
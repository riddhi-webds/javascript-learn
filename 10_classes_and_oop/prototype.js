// let myName = "Riddhi       "
// let myChannel = "chai       "

// console.log(myName.trueLength);

let myHeros = ['thos', 'spidermen']

let heroPower = {
    thor: 'hammer',
    spidermen: 'sling',

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spidermen}`);
    }
}

Object.prototype.riddhi = function () {
    console.log(`RIddhi is present in all object`);
}

Array.prototype.heyRiddhi = function () {
    console.log(`RIddhi says hello`)
}

// heroPower.riddhi()
myHeros.riddhi()
myHeros.heyRiddhi()
// heroPower.heyRiddhi() not working

// inheritance 

const user = {
    name: 'chai',
    email: 'chaie@.com'
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS aasignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUSerName = 'ChaiAurCode'

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`true length is: ${trim().length}`);
}

anotherUserName.trueLength()
'riddhi'.trueLength()
'IceTea'.trueLength()


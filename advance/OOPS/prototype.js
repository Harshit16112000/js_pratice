// let myName = "Harshit     "
// //console.log(myName.trim().length);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log(`hotesh is present in all object`);
}
//heroPower.hitesh()
myHero.hitesh()

Array.prototype.heyhitesh = function(){
    console.log(`Hitesh says hello`);
}

myHero.heyhitesh()
// heroPower.heyhitesh()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
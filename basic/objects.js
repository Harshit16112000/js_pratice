// Singleton -> Object constructed with constructor, it itself a objecy
//Object.create

// Literals -> SIngleton is not formed

//objects literals

/*
const mySYm = Symbol("Key1")

const JsUser = {
    name: "Harshit",
    "full name": "Harshit Mimani",  //JsUser.full Name not possible
    age: 22,
    [mySYm]: "mykey1",
    location : "Blr",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}
//Bydefault name is String

console.log((JsUser.name))
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySYm]);


JsUser.name = "Harmim"
//Object.freeze(JsUser)  //Cannot change object
// It won't give error

JsUser.greeting = function(){
    console.log("Hello JsUser");
}


// this -> refer to same object
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    console.log(`Hello Js User, ${this[mySYm]}`)
}


console.log(JsUser.greeting()) // [Function (anonymous)]
// FUnction is not executed, only refered

console.log(JsUser.greetingTwo());

*/








// Singleton
const tinder = new Object()
tinder.id = "123abc"
tinder.name = "mmm"
tinder.isLoggedIn = false;
console.log(tinder);



const regularUser = {
    email: "some@gmail.com",
    fullname:{
          userfullname:{
            firstname: "Harshit",
            lastname: "Mimani"
          }    
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = {obj1, obj2}


//const obj3 = Object.assign(obj1, obj2);
//const obj3 = Object.assign({}, obj1, obj2);// It gives same output as above one
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "H@gmail.com"
    },
    {
        id: 1,
        email: "H@gmail.com"
    },
    {
        id: 1,
        email: "H@gmail.com"
    },
    {
        id: 1,
        email: "H@gmail.com"
    }
]

users[1].email
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));




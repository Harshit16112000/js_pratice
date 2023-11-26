const user = {
    username: "har",
    price: 999,

    //this -> to access current context
    welcomeMessage: function() {
        console.log(`${this.username} welcome ot website`);
        console.log(this);
    }

}

//user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);  // {} 
console.log(this);  // in browser, global object is Window


// this keyword mostly work for object, not for function
function chai1() {
    let username = "hitesh"
    console.log(this.username);
}

//chai1()

// In Arrow function, this keyword return empty
const chai = () => {
    let username = "hitesh"
    console.log(this);
}

//chai()



const addTwo = (num1, num2) => {
    return num1 + num2;
}

// Implicity return 
const addTwo1 = (num1, num2) =>  num1 + num2;
const addTwo2 = (num1,num2)  => (num1 + num2)
console.log(addTwo1(1,2));


// For Object (), it is compulsory
const addTwo3 = (num1,num2) => ({username: "hitesh"})
console.log(addTwo3())


//Immediately Invoked Function Expresssions (IIFE)
(function abc(){
    console.log("DB connected");
})();





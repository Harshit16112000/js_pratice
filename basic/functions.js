function saymyName(){
    console.log("H")
    console.log("I")
    console.log("T")
}

saymyName  // Reference
//saymyName()  //Execute

function addTwoNumber(number1,number2){  // called as parameter
    console.log(number1 + number2);
}
function addTwoNumbers(number1,number2){  // called as parameter
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3,null)  //3,null -> called argument
//console.log("Result",result);

function loginUserMessage(username = "sam"){
    if(!username)
    {
        console.log("Please enter a usename");
        return;
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Harshit"));
//console.log(loginUserMessage());
// "", undefined is considered as false value


function calculateCartPrice( ...num1) {  //... called as REST operator
    return num1
}

console.log(calculateCartPrice(200,400,500, "a"));


const user = {
    username: "harshit",
    price: 199
}

function handleObject(anyobject)
{
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(...getArray){
    return getArray
}

console.log(returnSecondValue(myNewArray));



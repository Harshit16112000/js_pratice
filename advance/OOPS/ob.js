const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    gerUserDetails: function(){
        //console.log("GOt user details from database");
        //console.log(`Username is ${this.username}`);
        console.log(this);
    }
    // 
}

console.log(user.username);
console.log(user.gerUserDetails());


// New keyword is used to create the contest 
function User(username, loginCount, isLoggedin)
{
    this.username = username
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin
    // By default it will return
    //return this

    this.greeting = function(){
        console.log(` Welcome ${this.username}`);
    }
}

const userone = User("Harshit", 12, true)


const usertwo = User("ChaiaurCode",11,false)
console.log(userone); // Userone has now contest of Usertwo
// New keyword create instance (It create new Object)
// Constructor is called because of new keyword
// Added on to this instance

const userTwo = new User("Check",11,true)
console.log(userone);
console.log(userTwo.constructor);


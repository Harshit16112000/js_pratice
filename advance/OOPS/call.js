function SetUsername(username) {
    this.username = username
    console.log("called")

}

function createUser(username, email, password){
    SetUsername.call(this, username)
// TO hold the reference
// As function is called, but afterword,it's global execution is lost, so, the variable defined inside is lost


    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com", "123")
console.log(chai);